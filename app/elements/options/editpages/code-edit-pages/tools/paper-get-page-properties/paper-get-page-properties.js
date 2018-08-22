var PaperGetPagePropertiesElement;
(function (PaperGetPagePropertiesElement) {
    PaperGetPagePropertiesElement.paperGetPagePropertiesProperties = {
        selected: {
            type: Array,
            refleftToAttribute: true,
            notify: true
        }
    };
    var PGPP = (function () {
        function PGPP() {
        }
        PGPP.sendData = function (data) {
            this.listener(data);
        };
        ;
        PGPP._click = function (e) {
            var option = e.target.getAttribute('id').split('paperGetProperty')[1];
            switch (option) {
                case 'Selection':
                    this.sendData('crmAPI.getSelection();');
                    break;
                case 'Url':
                    this.sendData('window.location.href;');
                    break;
                case 'Host':
                    this.sendData('window.location.host;');
                    break;
                case 'Path':
                    this.sendData('window.location.path;');
                    break;
                case 'Protocol':
                    this.sendData('window.location.protocol;');
                    break;
                case 'Width':
                    this.sendData('window.innerWidth;');
                    break;
                case 'Height':
                    this.sendData('window.innerHeight;');
                    break;
                case 'Pixels':
                    this.sendData('window.scrollY;');
                    break;
                case 'Title':
                    this.sendData('document.title;');
                    break;
                case 'Clicked':
                    this.sendData('crmAPI.contextData.target;');
                    break;
            }
        };
        ;
        PGPP._menuClick = function (e) {
            if (window.app.util.getPath(e).indexOf(this.$.dropdown) > -1) {
                return;
            }
            this.$.dropdown._toggleDropdown();
        };
        PGPP.init = function (listener) {
            this.listener = listener;
        };
        ;
        PGPP.ready = function () {
            var _this = this;
            this.selected = [];
            this.addEventListener('click', function (e) {
                _this._menuClick(e);
            });
            this.options = [
                {
                    name: 'Selection',
                    id: 'paperGetPropertySelection'
                }, {
                    name: 'Url',
                    id: 'paperGetPropertyUrl'
                }, {
                    name: 'Host',
                    id: 'paperGetPropertyHost'
                }, {
                    name: 'Path',
                    id: 'paperGetPropertyPath'
                }, {
                    name: 'Protocol',
                    id: 'paperGetPropertyProtocol'
                }, {
                    name: 'Width',
                    id: 'paperGetPropertyWidth'
                }, {
                    name: 'Height',
                    id: 'paperGetPropertyHeight'
                }, {
                    name: 'Pixels Scrolled',
                    id: 'paperGetPropertyPixels'
                }, {
                    name: 'Title',
                    id: 'paperGetPropertyTitle'
                }, {
                    name: 'Clicked Element',
                    id: 'paperGetPropertyClicked'
                }
            ];
        };
        ;
        PGPP._getMenu = function () {
            return this.$.menu;
        };
        PGPP.is = 'paper-get-page-properties';
        PGPP.options = [];
        PGPP.listener = function () { };
        return PGPP;
    }());
    PaperGetPagePropertiesElement.PGPP = PGPP;
    if (window.objectify) {
        window.register(PGPP);
    }
    else {
        window.addEventListener('RegisterReady', function () {
            window.register(PGPP);
        });
    }
})(PaperGetPagePropertiesElement || (PaperGetPagePropertiesElement = {}));
