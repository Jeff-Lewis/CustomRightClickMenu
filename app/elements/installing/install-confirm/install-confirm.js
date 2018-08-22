var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var InstallConfirmElement;
(function (InstallConfirmElement) {
    InstallConfirmElement.installConfirmProperties = {
        script: {
            type: String,
            notify: true,
            value: ''
        },
        permissions: {
            type: Array,
            notify: true,
            value: []
        }
    };
    var IC = (function () {
        function IC() {
        }
        IC.lengthIs = function (arr, length) {
            if (arr.length === 1 && arr[0] === 'none') {
                return length === 0;
            }
            return arr.length === length;
        };
        IC._getCheckboxes = function () {
            return Array.prototype.slice.apply(this.shadowRoot.querySelectorAll('paper-checkbox'));
        };
        IC._setChecked = function (checked) {
            this._getCheckboxes().forEach(function (checkbox) {
                checkbox.checked = checked;
            });
        };
        IC.toggleAll = function () {
            var _this = this;
            this.async(function () {
                _this._setChecked(_this.$.permissionsToggleAll.checked);
            }, 0);
        };
        IC._createArray = function (length) {
            var arr = [];
            for (var i = 0; i < length; i++) {
                arr[i] = undefined;
            }
            return arr;
        };
        IC._loadSettings = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                            var local, storageSync_1, indexes, settingsJsonArray_1, indexesLength, jsonString, storageSync_2, indexes, settingsJsonArray_2, indexesLength, jsonString;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, browserAPI.storage.local.get()];
                                    case 1:
                                        local = _a.sent();
                                        if (!(local.useStorageSync && 'sync' in BrowserAPI.getSrc().storage &&
                                            'get' in BrowserAPI.getSrc().storage.sync)) return [3, 3];
                                        return [4, browserAPI.storage.sync.get()];
                                    case 2:
                                        storageSync_1 = _a.sent();
                                        indexes = storageSync_1.indexes;
                                        if (indexes === null || indexes === -1 || indexes === undefined) {
                                            browserAPI.storage.local.set({
                                                useStorageSync: false
                                            });
                                            this._settings = local.settings;
                                        }
                                        else {
                                            settingsJsonArray_1 = [];
                                            indexesLength = typeof indexes === 'number' ?
                                                indexes : (Array.isArray(indexes) ?
                                                indexes.length : 0);
                                            this._createArray(indexesLength).forEach(function (_, index) {
                                                settingsJsonArray_1.push(storageSync_1["section" + index]);
                                            });
                                            jsonString = settingsJsonArray_1.join('');
                                            this._settings = JSON.parse(jsonString);
                                        }
                                        return [3, 6];
                                    case 3:
                                        if (!!local.settings) return [3, 5];
                                        browserAPI.storage.local.set({
                                            useStorageSync: true
                                        });
                                        return [4, browserAPI.storage.sync.get()];
                                    case 4:
                                        storageSync_2 = _a.sent();
                                        indexes = storageSync_2.indexes;
                                        settingsJsonArray_2 = [];
                                        indexesLength = typeof indexes === 'number' ?
                                            indexes : (Array.isArray(indexes) ?
                                            indexes.length : 0);
                                        this._createArray(indexesLength).forEach(function (_, index) {
                                            settingsJsonArray_2.push(storageSync_2["section" + index]);
                                        });
                                        jsonString = settingsJsonArray_2.join('');
                                        this._settings = JSON.parse(jsonString);
                                        return [3, 6];
                                    case 5:
                                        this._settings = local.settings;
                                        _a.label = 6;
                                    case 6:
                                        resolve(null);
                                        return [2];
                                }
                            });
                        }); })];
                });
            });
        };
        ;
        IC.getDescription = function (permission) {
            var descriptions = {
                alarms: 'Makes it possible to create, view and remove alarms.',
                activeTab: 'Gives temporary access to the tab on which browserActions or contextmenu items are clicked',
                background: 'Runs the extension in the background even while chrome is closed. (https://developer.chrome.com/extensions/alarms)',
                bookmarks: 'Makes it possible to create, edit, remove and view all your bookmarks.',
                browsingData: 'Makes it possible to remove any saved data on your browser at specified time allowing the user to delete any history, saved passwords, cookies, cache and basically anything that is not saved in incognito mode but is in regular mode. This is editable so it is possible to delete ONLY your history and not the rest for example. (https://developer.chrome.com/extensions/bookmarks)',
                clipboardRead: 'Allows reading of the users\' clipboard',
                clipboardWrite: 'Allows writing data to the users\' clipboard',
                cookies: 'Allows for the setting, getting and listenting for changes of cookies on any website. (https://developer.chrome.com/extensions/cookies)',
                contentSettings: 'Allows changing or reading your browser settings to allow or deny things like javascript, plugins, popups, notifications or other things you can choose to accept or deny on a per-site basis. (https://developer.chrome.com/extensions/contentSettings)',
                contextMenus: 'Allows for the changing of the chrome contextmenu',
                declarativeContent: 'Allows for the running of scripts on pages based on their url and CSS contents. (https://developer.chrome.com/extensions/declarativeContent)',
                desktopCapture: 'Makes it possible to capture your screen, current tab or chrome window (https://developer.chrome.com/extensions/desktopCapture)',
                downloads: 'Allows for the creating, pausing, searching and removing of downloads and listening for any downloads happenng. (https://developer.chrome.com/extensions/downloads)',
                history: 'Makes it possible to read your history and remove/add specific urls. This can also be used to search your history and to see howmany times you visited given website. (https://developer.chrome.com/extensions/history)',
                identity: 'Allows for the API to ask you to provide your (google) identity to the script using oauth2, allowing you to pull data from lots of google APIs: calendar, contacts, custom search, drive, gmail, google maps, google+, url shortener (https://developer.chrome.com/extensions/identity)',
                idle: 'Allows a script to detect whether your pc is in a locked, idle or active state. (https://developer.chrome.com/extensions/idle)',
                management: 'Allows for a script to uninstall or get information about an extension you installed, this does not however give permission to install other extensions. (https://developer.chrome.com/extensions/management)',
                notifications: 'Allows for the creating of notifications. (https://developer.chrome.com/extensions/notifications)',
                pageCapture: 'Allows for the saving of any page in MHTML. (https://developer.chrome.com/extensions/pageCapture)',
                power: 'Allows for a script to keep either your screen or your system altogether from sleeping. (https://developer.chrome.com/extensions/power)',
                privacy: 'Allows for a script to query what privacy features are on/off, for exaple autoFill, password saving, the translation feature. (https://developer.chrome.com/extensions/privacy)',
                printerProvider: 'Allows for a script to capture your print jobs\' content and the printer used. (https://developer.chrome.com/extensions/printerProvider)',
                sessions: 'Makes it possible for a script to get all recently closed pages and devices connected to sync, also allows it to re-open those closed pages. (https://developer.chrome.com/extensions/sessions)',
                "system.cpu": 'Allows a script to get info about the CPU. (https://developer.chrome.com/extensions/system_cpu)',
                "system.memory": 'Allows a script to get info about the amount of RAM memory on your computer. (https://developer.chrome.com/extensions/system_memory)',
                "system.storage": 'Allows a script to get info about the amount of storage on your computer and be notified when external storage is attached or detached. (https://developer.chrome.com/extensions/system_storage)',
                topSites: 'Allows a script to your top sites, which are the sites on your new tab screen. (https://developer.chrome.com/extensions/topSites)',
                tabCapture: 'Allows the capturing of the CURRENT tab and only the tab. (https://developer.chrome.com/extensions/tabCapture)',
                tabs: 'Allows for the opening, closing and getting of tabs',
                tts: 'Allows a script to use chrome\'s text so speach engine. (https://developer.chrome.com/extensions/tts)',
                webNavigation: 'Allows a script info about newly created pages and allows it to get info about what website visit at that time.' +
                    ' (https://developer.chrome.com/extensions/webNavigation)',
                webRequest: 'Allows a script info about newly created pages and allows it to get info about what website you are visiting, what resources are downloaded on the side, and can basically track the entire process of opening a new website. (https://developer.chrome.com/extensions/webRequest)',
                webRequestBlocking: 'Allows a script info about newly created pages and allows it to get info about what website you are visiting, what resources are downloaded on the side, and can basically track the entire process of opening a new website. This also allows the script to block certain requests for example for blocking ads or bad sites. (https://developer.chrome.com/extensions/webRequest)',
                crmGet: 'Allows the reading of your Custom Right-Click Menu, including names, contents of all nodes, what they do and some metadata for the nodes',
                crmWrite: 'Allows the writing of data and nodes to your Custom Right-Click Menu. This includes <b>creating</b>, <b>copying</b> and <b>deleting</b> nodes. Be very careful with this permission as it can be used to just copy nodes until your CRM is full and delete any nodes you had. It also allows changing current values in the CRM such as names, actual scripts in script-nodes etc.',
                crmRun: 'Allows the running of arbitrary scripts from the background-page',
                crmContextmenu: 'Allows the editing of this item\'s name in the contextmenu at runtime',
                chrome: 'Allows the use of chrome API\'s.',
                browser: 'Allows the use of browser API\'s',
                GM_addStyle: 'Allows the adding of certain styles to the document through this API',
                GM_deleteValue: 'Allows the deletion of storage items',
                GM_listValues: 'Allows the listing of all storage data',
                GM_addValueChangeListener: 'Allows for the listening of changes to the storage area',
                GM_removeValueChangeListener: 'Allows for the removing of listeners',
                GM_setValue: 'Allows for the setting of storage data values',
                GM_getValue: 'Allows the reading of values from the storage',
                GM_log: 'Allows for the logging of values to the console (same as normal console.log)',
                GM_getResourceText: 'Allows the reading of the content of resources defined in the header',
                GM_getResourceURL: 'Allows the reading of the URL of the predeclared resource',
                GM_registerMenuCommand: 'Allows the adding of a button to the extension menu - not implemented',
                GM_unregisterMenuCommand: 'Allows the removing of an added button - not implemented',
                GM_openInTab: 'Allows the opening of a tab with given URL',
                GM_xmlhttpRequest: 'Allows you to make an XHR to any site you want',
                GM_download: 'Allows the downloading of data to the hard disk',
                GM_getTab: 'Allows the reading of an object that\'s persistent while the tab is open - not implemented',
                GM_saveTab: 'Allows the saving of the tab object to reopen after a page unload - not implemented',
                GM_getTabs: 'Allows the readin gof all tab object - not implemented',
                GM_notification: 'Allows sending desktop notifications',
                GM_setClipboard: 'Allows copying data to the clipboard - not implemented',
                GM_info: 'Allows the reading of some script info',
                unsafeWindow: 'Allows the running on an unsafe window object - available by default'
            };
            return descriptions[permission];
        };
        ;
        IC.showPermissionDescription = function (e) {
            var el = e.target;
            if (el.tagName.toLowerCase() === 'div') {
                el = el.children[0];
            }
            else if (el.tagName.toLowerCase() === 'path') {
                el = el.parentElement;
            }
            var children = el.parentElement.parentElement.parentElement.children;
            var description = children[children.length - 1];
            if (el.classList.contains('shown')) {
                $(description).stop().animate({
                    height: 0
                }, {
                    duration: 250,
                    complete: function () {
                        window.installConfirm._editorManager.editor.layout();
                    }
                });
            }
            else {
                $(description).stop().animate({
                    height: (description.scrollHeight + 7) + 'px'
                }, {
                    duration: 250,
                    complete: function () {
                        window.installConfirm._editorManager.editor.layout();
                    }
                });
            }
            el.classList.toggle('shown');
        };
        ;
        IC._isManifestPermissions = function (permission) {
            var permissions = [
                'alarms',
                'activeTab',
                'background',
                'bookmarks',
                'browsingData',
                'clipboardRead',
                'clipboardWrite',
                'contentSettings',
                'cookies',
                'contentSettings',
                'contextMenus',
                'declarativeContent',
                'desktopCapture',
                'downloads',
                'history',
                'identity',
                'idle',
                'management',
                'pageCapture',
                'power',
                'privacy',
                'printerProvider',
                'sessions',
                'system.cpu',
                'system.memory',
                'system.storage',
                'topSites',
                'tabs',
                'tabCapture',
                'tts',
                'webNavigation',
                'webRequest',
                'webRequestBlocking'
            ];
            return permissions.indexOf(permission) > -1;
        };
        ;
        IC.checkPermission = function (e) {
            return __awaiter(this, void 0, void 0, function () {
                var el, checkbox, permission, permissions, _a, granted, e_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            el = e.target;
                            while (el.tagName.toLowerCase() !== 'paper-checkbox') {
                                el = el.parentElement;
                            }
                            checkbox = el;
                            if (!checkbox.checked) return [3, 7];
                            permission = checkbox.getAttribute('permission');
                            if (!this._isManifestPermissions(permission)) return [3, 7];
                            if (!browserAPI.permissions) return [3, 2];
                            return [4, browserAPI.permissions.getAll()];
                        case 1:
                            _a = _b.sent();
                            return [3, 3];
                        case 2:
                            _a = {
                                permissions: []
                            };
                            _b.label = 3;
                        case 3:
                            permissions = (_a).permissions;
                            if (!(permissions.indexOf(permission) === -1)) return [3, 7];
                            _b.label = 4;
                        case 4:
                            _b.trys.push([4, 6, , 7]);
                            if (!(browserAPI.permissions)) {
                                window.app.util.showToast("Not asking for permission " + permission + " as your browser does not support asking for permissions");
                                return [2];
                            }
                            return [4, browserAPI.permissions.request({
                                    permissions: [permission]
                                })];
                        case 5:
                            granted = _b.sent();
                            if (!granted) {
                                checkbox.checked = false;
                            }
                            return [3, 7];
                        case 6:
                            e_1 = _b.sent();
                            return [3, 7];
                        case 7: return [2];
                    }
                });
            });
        };
        ;
        IC.cancelInstall = function () {
            window.close();
        };
        ;
        IC.completeInstall = function () {
            var allowedPermissions = [];
            this._getCheckboxes().forEach(function (checkbox) {
                checkbox.checked && allowedPermissions.push(checkbox.getAttribute('permission'));
            });
            browserAPI.runtime.sendMessage({
                type: 'installUserScript',
                data: {
                    metaTags: this._metaTags,
                    script: this.script,
                    downloadURL: window.installPage.getInstallSource(),
                    allowedPermissions: allowedPermissions
                }
            });
            this.$.installButtons.classList.add('installed');
            this.$.scriptInstalled.classList.add('visible');
        };
        ;
        IC.acceptAndCompleteInstall = function () {
            var _this = this;
            this._setChecked(true);
            this.$.permissionsToggleAll.checked = true;
            this.async(function () {
                _this.completeInstall();
            }, 250);
        };
        IC._setMetaTag = function (name, values) {
            var value;
            if (values) {
                value = values[values.length - 1];
            }
            else {
                value = '-';
            }
            this.$[name].innerText = value + '';
        };
        ;
        IC._setMetaInformation = function (tags) {
            this._setMetaTag('descriptionValue', tags['description']);
            this._setMetaTag('authorValue', tags['author']);
            window.installPage.$.title.innerHTML = "Installing <b>" + (tags['name'] && tags['name'][0]) + "</b>";
            this.$.sourceValue.innerText = window.installPage.userscriptUrl;
            var permissions = tags['grant'];
            this.permissions = permissions;
            this._metaTags = tags;
            this._editorManager.editor.layout();
        };
        ;
        IC._editorLoaded = function (editor) {
            var _this = this;
            var el = document.createElement('style');
            el.id = 'editorZoomStyle';
            el.innerText = ".CodeMirror, .CodeMirror-focused {\n\t\t\t\tfont-size: " + 1.25 * ~~window.installConfirm._settings.editor.zoom + "'%!important;\n\t\t\t}";
            var interval = window.setInterval(function () {
                var typeHandler = editor.getTypeHandler()[0];
                if (typeHandler.getMetaBlock) {
                    window.clearInterval(interval);
                    var metaBlock = typeHandler.getMetaBlock();
                    if (metaBlock && metaBlock.content) {
                        _this._setMetaInformation(metaBlock.content);
                    }
                }
            }, 25);
        };
        ;
        IC._loadEditor = function () {
            return __awaiter(this, void 0, void 0, function () {
                var editorManager, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            !this._settings.editor && (this._settings.editor = {
                                theme: 'dark',
                                zoom: '100',
                                keyBindings: {
                                    goToDef: 'Ctrl-F12',
                                    rename: 'Ctrl-F2'
                                },
                                cssUnderlineDisabled: false,
                                disabledMetaDataHighlight: false
                            });
                            _a = this;
                            return [4, this.$.editorCont.create(this.$.editorCont.EditorMode.JS_META, {
                                    value: this.script,
                                    language: 'javascript',
                                    theme: this._settings.editor.theme === 'dark' ? 'vs-dark' : 'vs',
                                    wordWrap: 'off',
                                    readOnly: true,
                                    fontSize: (~~this._settings.editor.zoom / 100) * 14,
                                    folding: true
                                })];
                        case 1:
                            editorManager = _a._editorManager = _b.sent();
                            window.addEventListener('resize', function () {
                                editorManager.editor.layout();
                            });
                            this._editorLoaded(editorManager);
                            return [2];
                    }
                });
            });
        };
        ;
        IC.ready = function () {
            var _this = this;
            this._loadSettings().then(function () {
                _this._loadEditor();
            });
            window.installConfirm = this;
        };
        IC.is = 'install-confirm';
        IC._metaTags = {};
        IC.properties = InstallConfirmElement.installConfirmProperties;
        return IC;
    }());
    InstallConfirmElement.IC = IC;
    if (window.objectify) {
        window.register(IC);
    }
    else {
        window.addEventListener('RegisterReady', function () {
            window.register(IC);
        });
    }
})(InstallConfirmElement || (InstallConfirmElement = {}));
