export var Resources;
(function (Resources) {
    var Resource;
    (function (Resource) {
        function handle(message) {
            Resources.handle(message, message.name);
        }
        Resource.handle = handle;
    })(Resource = Resources.Resource || (Resources.Resource = {}));
})(Resources || (Resources = {}));
(function (Resources) {
    var Anonymous;
    (function (Anonymous) {
        function handle(message) {
            Resources.handle(message, message.url);
        }
        Anonymous.handle = handle;
    })(Anonymous = Resources.Anonymous || (Resources.Anonymous = {}));
})(Resources || (Resources = {}));
(function (Resources) {
    function initModule(_modules) {
        Resources.modules = _modules;
    }
    Resources.initModule = initModule;
    function handle(message, name) {
        switch (message.type) {
            case 'register':
                registerResource(name, message.url, message.scriptId);
                break;
            case 'remove':
                removeResource(name, message.scriptId);
                break;
        }
    }
    Resources.handle = handle;
    function updateResourceValues() {
        var resourceKeys = Resources.modules.storages.resourceKeys;
        for (var i = 0; i < resourceKeys.length; i++) {
            setTimeout(generateUpdateCallback(resourceKeys[i]), (i * 1000));
        }
    }
    Resources.updateResourceValues = updateResourceValues;
    function getUrlData(scriptId, url, callback) {
        if (Resources.modules.storages.urlDataPairs.get(url)) {
            var dataPairs = Resources.modules.storages.urlDataPairs.get(url);
            if (dataPairs.refs.indexOf(scriptId) === -1) {
                dataPairs.refs.push(scriptId);
            }
            callback(dataPairs.dataURI, dataPairs.dataString);
        }
        else {
            Resources.modules.Util.convertFileToDataURI(url, function (dataURI, dataString) {
                Resources.modules.storages.urlDataPairs.set(url, {
                    dataURI: dataURI,
                    dataString: dataString,
                    refs: [scriptId]
                });
                callback(dataURI, dataString);
            });
        }
    }
    function getHashes(url) {
        var hashes = [];
        var hashString = url.split('#')[1];
        if (!hashString) {
            return [];
        }
        var hashStrings = hashString.split(/[,|;]/g);
        hashStrings.forEach(function (hash) {
            var split = hash.split('=');
            hashes.push({
                algorithm: split[0],
                hash: split[1]
            });
        });
        return hashes;
    }
    function doAlgorithm(name, data, lastMatchingHash) {
        window.crypto.subtle.digest(name, data).then(function (hash) {
            return String.fromCharCode.apply(null, hash) === lastMatchingHash.hash;
        });
    }
    function algorithmNameToFnName(name) {
        var numIndex = 0;
        for (var i = 0; i < name.length; i++) {
            if (name.charCodeAt(i) >= 48 && name.charCodeAt(i) <= 57) {
                numIndex = i;
                break;
            }
        }
        return name.slice(0, numIndex).toUpperCase() + '-' + name.slice(numIndex);
    }
    function matchesHashes(hashes, data) {
        if (hashes.length === 0) {
            return true;
        }
        var lastMatchingHash = null;
        hashes = hashes.reverse();
        for (var _i = 0, hashes_1 = hashes; _i < hashes_1.length; _i++) {
            var _a = hashes_1[_i], algorithm = _a.algorithm, hash = _a.hash;
            var lowerCase = algorithm.toLowerCase();
            if (Resources.modules.constants.supportedHashes.indexOf(lowerCase) !== -1) {
                lastMatchingHash = {
                    algorithm: lowerCase,
                    hash: hash
                };
                break;
            }
        }
        if (lastMatchingHash === null) {
            return false;
        }
        var arrayBuffer = new window.TextEncoder('utf-8').encode(data);
        switch (lastMatchingHash.algorithm) {
            case 'md5':
                return window.md5(data) === lastMatchingHash.hash;
            case 'sha1':
            case 'sha384':
            case 'sha512':
                doAlgorithm(algorithmNameToFnName(lastMatchingHash.algorithm), arrayBuffer, lastMatchingHash);
                break;
        }
        return false;
    }
    function registerResource(name, url, scriptId) {
        var registerHashes = getHashes(url);
        if (window.navigator.onLine) {
            getUrlData(scriptId, url, function (dataURI, dataString) {
                var resources = Resources.modules.storages.resources;
                Resources.modules.Util.setMapDefault(resources, scriptId, {});
                resources.get(scriptId)[name] = {
                    name: name,
                    sourceUrl: url,
                    dataURI: dataURI,
                    dataString: dataString,
                    hashes: registerHashes,
                    matchesHashes: matchesHashes(registerHashes, dataString),
                    crmUrl: "https://www.localhost.io/resource/" + scriptId + "/" + name
                };
                browserAPI.storage.local.set({
                    resources: Resources.modules.Util.fromMap(resources),
                    urlDataPairs: Resources.modules.Util.fromMap(Resources.modules.storages.urlDataPairs)
                });
            });
        }
        var resourceKeys = Resources.modules.storages.resourceKeys;
        for (var _i = 0, resourceKeys_1 = resourceKeys; _i < resourceKeys_1.length; _i++) {
            var resourceKey = resourceKeys_1[_i];
            if (resourceKey.name === name &&
                resourceKey.scriptId === scriptId) {
                return;
            }
        }
        resourceKeys.push({
            name: name,
            sourceUrl: url,
            hashes: registerHashes,
            scriptId: scriptId
        });
        browserAPI.storage.local.set({
            resourceKeys: resourceKeys
        });
    }
    function removeResource(name, scriptId) {
        for (var i = 0; i < Resources.modules.storages.resourceKeys.length; i++) {
            if (Resources.modules.storages.resourceKeys[i].name === name &&
                Resources.modules.storages.resourceKeys[i].scriptId === scriptId) {
                Resources.modules.storages.resourceKeys.splice(i, 1);
                break;
            }
        }
        if (!Resources.modules.storages.resources.has(scriptId) ||
            !Resources.modules.storages.resources.get(scriptId)[name] ||
            !Resources.modules.storages.resources.get(scriptId)[name].sourceUrl) {
            return;
        }
        var sourceUrl = Resources.modules.storages.resources.get(scriptId)[name].sourceUrl;
        var urlDataLink = Resources.modules.storages.urlDataPairs.get(sourceUrl);
        if (urlDataLink) {
            urlDataLink.refs.splice(urlDataLink.refs.indexOf(scriptId), 1);
            if (urlDataLink.refs.length === 0) {
                Resources.modules.storages.urlDataPairs["delete"](sourceUrl);
            }
        }
        if (Resources.modules.storages.resources &&
            Resources.modules.storages.resources.has(scriptId) &&
            Resources.modules.storages.resources.get(scriptId)[name]) {
            delete Resources.modules.storages.resources.get(scriptId)[name];
        }
        browserAPI.storage.local.set({
            resourceKeys: Resources.modules.storages.resourceKeys,
            resources: Resources.modules.Util.fromMap(Resources.modules.storages.resources),
            urlDataPairs: Resources.modules.Util.fromMap(Resources.modules.storages.urlDataPairs)
        });
    }
    function compareResource(key) {
        var resources = Resources.modules.storages.resources;
        Resources.modules.Util.convertFileToDataURI(key.sourceUrl, function (dataURI, dataString) {
            if (!(resources.has(key.scriptId) && resources.get(key.scriptId)[key.name]) ||
                resources.get(key.scriptId)[key.name].dataURI !== dataURI) {
                var resourceData = resources.get(key.scriptId)[key.name];
                if (matchesHashes(resourceData.hashes, dataString)) {
                    var data = Resources.modules.storages.urlDataPairs.get(key.sourceUrl);
                    data.dataURI = dataURI;
                    data.dataString = dataString;
                    browserAPI.storage.local.set({
                        resources: Resources.modules.Util.fromMap(resources),
                        urlDataPairs: Resources.modules.Util.fromMap(Resources.modules.storages.urlDataPairs)
                    });
                }
            }
        });
    }
    function generateUpdateCallback(resourceKey) {
        return function () {
            window.info('Attempting resource update');
            compareResource(resourceKey);
        };
    }
})(Resources || (Resources = {}));
