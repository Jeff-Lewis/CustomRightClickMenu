export var Info;
(function (Info) {
    function init() {
        if (typeof location === 'undefined' || typeof location.host === 'undefined') {
            window.log = function () { };
            window.info = function () { };
            window.testLog = console.log.bind(console);
            window.Promise = Promise;
        }
        else {
            window.log = console.log.bind(console);
            if (window.location && window.location.hash && window.location.hash.indexOf('noBackgroundInfo')) {
                window.info = function () { };
            }
            else {
                window.info = console.log.bind(console);
            }
        }
    }
    Info.init = init;
})(Info || (Info = {}));
