var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
import { GlobalDeclarations } from "./global-declarations.js";
import { MessageHandling } from "./messagehandling.js";
import { CRMAPIFunctions } from "./crmapifunctions.js";
import { BrowserHandler } from "./browserhandler.js";
import { APIMessaging } from "./api-messaging.js";
import { CRMAPICall } from "./crmapicall.js";
import { URLParsing } from "./urlparsing.js";
import { Resources } from "./resources.js";
import { Storages } from "./storages.js";
import { Logging } from "./logging.js";
import { Sandbox } from "./sandbox.js";
import { Global } from "./global.js";
import { CRMNodes } from "./crm.js";
import { Caches } from "./cache.js";
import { Info } from "./info.js";
import { Util } from "./util.js";
export var Init;
(function (Init) {
    var modules;
    function initModule(_modules) {
        modules = _modules;
    }
    function init() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, initModules()];
                    case 1:
                        _a.sent();
                        return [4, initEverything()];
                    case 2:
                        _a.sent();
                        after();
                        return [2];
                }
            });
        });
    }
    Init.init = init;
    function isNode() {
        return typeof location === 'undefined' || typeof location.host === 'undefined';
    }
    function genStorageModules() {
        return __awaiter(this, void 0, void 0, function () {
            var isDev, globalObject, globals, crm, storages, crmValues, constants, listeners, background, toExecuteNodes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, browserAPI.runtime.getManifest()];
                    case 1:
                        isDev = (_a.sent()).short_name.indexOf('dev') > -1;
                        globalObject = isNode() || isDev ?
                            window : {};
                        globals = Global.globals;
                        globalObject.globals = globals;
                        crm = globals.crm, storages = globals.storages, crmValues = globals.crmValues, constants = globals.constants, listeners = globals.listeners, background = globals.background, toExecuteNodes = globals.toExecuteNodes;
                        return [2, {
                                crm: crm,
                                storages: storages,
                                crmValues: crmValues,
                                constants: constants,
                                listeners: listeners,
                                background: background,
                                toExecuteNodes: toExecuteNodes,
                                globalObject: globalObject
                            }];
                }
            });
        });
    }
    function genModulesObject() {
        return {
            APIMessaging: APIMessaging,
            BrowserHandler: BrowserHandler,
            Caches: Caches,
            CRMNodes: CRMNodes,
            CRMAPICall: CRMAPICall,
            CRMAPIFunctions: CRMAPIFunctions,
            GlobalDeclarations: GlobalDeclarations,
            Logging: Logging,
            MessageHandling: MessageHandling,
            Resources: Resources,
            Sandbox: Sandbox,
            Storages: Storages,
            URLParsing: URLParsing,
            Util: Util
        };
    }
    function genModulesData() {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = [{}];
                        return [4, genStorageModules()];
                    case 1: return [2, __assign.apply(void 0, _a.concat([_b.sent(), genModulesObject()]))];
                }
            });
        });
    }
    function initModules() {
        return __awaiter(this, void 0, void 0, function () {
            var moduleData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, genModulesData()];
                    case 1:
                        moduleData = _a.sent();
                        APIMessaging.initModule(moduleData);
                        BrowserHandler.initModule(moduleData);
                        Caches.initModule(moduleData);
                        CRMNodes.initModule(moduleData);
                        CRMAPICall.initModule(moduleData);
                        CRMAPIFunctions.initModule(null, moduleData);
                        Global.initModule(moduleData);
                        GlobalDeclarations.initModule(moduleData);
                        Logging.initModule(moduleData);
                        MessageHandling.initModule(moduleData);
                        Resources.initModule(moduleData);
                        Storages.initModule(moduleData);
                        URLParsing.initModule(moduleData);
                        Util.initModule(moduleData);
                        initModule(moduleData);
                        return [2];
                }
            });
        });
    }
    function initEverything() {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Info.init();
                        window.console.group('Initialization');
                        window.console.group('Loading storage data');
                        modules.globalObject.backgroundPageLoaded = Util.iipe(function () { return __awaiter(_this, void 0, void 0, function () {
                            var i, e_1, i;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, Storages.loadStorages()];
                                    case 1:
                                        _a.sent();
                                        window.console.groupEnd();
                                        _a.label = 2;
                                    case 2:
                                        _a.trys.push([2, 8, , 9]);
                                        modules.globalObject.globals.latestId =
                                            modules.storages.settingsStorage.latestId;
                                        window.info('Registering permission listeners');
                                        return [4, GlobalDeclarations.refreshPermissions()];
                                    case 3:
                                        _a.sent();
                                        window.info('Setting CRMAPI message handler');
                                        GlobalDeclarations.setHandlerFunction();
                                        browserAPI.runtime.onConnect.addListener(function (port) {
                                            port.onMessage.addListener(window.createHandlerFunction(port));
                                        });
                                        browserAPI.runtime.onMessage.addListener(MessageHandling.handleRuntimeMessageInitial);
                                        window.info('Building Custom Right-Click Menu');
                                        return [4, CRMNodes.buildPageCRM()];
                                    case 4:
                                        _a.sent();
                                        window.info('Compiling typescript');
                                        return [4, CRMNodes.TS.compileAllInTree()];
                                    case 5:
                                        _a.sent();
                                        window.console.groupCollapsed('Restoring previous open tabs');
                                        return [4, GlobalDeclarations.restoreOpenTabs()];
                                    case 6:
                                        _a.sent();
                                        window.console.groupEnd();
                                        window.console.groupCollapsed('Creating backgroundpages');
                                        return [4, CRMNodes.Script.Background.createBackgroundPages()];
                                    case 7:
                                        _a.sent();
                                        window.console.groupEnd();
                                        window.info('Registering global handlers');
                                        GlobalDeclarations.init();
                                        window.console.group('Checking Resources');
                                        window.info('Updating resources');
                                        Resources.updateResourceValues();
                                        window.info('Updating scripts and stylesheets');
                                        (function () { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4, CRMNodes.Script.Updating.updateScripts()];
                                                    case 1:
                                                        _a.sent();
                                                        return [4, CRMNodes.Stylesheet.Updating.updateStylesheets()];
                                                    case 2:
                                                        _a.sent();
                                                        return [2];
                                                }
                                            });
                                        }); })();
                                        window.setInterval(function () {
                                            (function () { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            window.info('Updating scripts and stylesheets');
                                                            return [4, CRMNodes.Script.Updating.updateScripts()];
                                                        case 1:
                                                            _a.sent();
                                                            return [4, CRMNodes.Stylesheet.Updating.updateStylesheets()];
                                                        case 2:
                                                            _a.sent();
                                                            return [2];
                                                    }
                                                });
                                            }); })();
                                        }, 6 * 60 * 60 * 1000);
                                        window.console.groupEnd();
                                        window.console.groupCollapsed('Debugging');
                                        window.info('For all of these arrays goes, close and re-expand them to "refresh" their contents');
                                        window.info('Invalidated tabs:', modules.storages.failedLookups);
                                        window.info('Insufficient permissions:', modules.storages.insufficientPermissions);
                                        window.console.groupEnd();
                                        window.info('Registering console user interface');
                                        GlobalDeclarations.initGlobalFunctions();
                                        if (location.href.indexOf('test') > -1) {
                                            modules.globalObject.Storages = Storages;
                                        }
                                        if (isNode()) {
                                            modules.globalObject.TransferFromOld =
                                                Storages.SetupHandling.TransferFromOld;
                                        }
                                        for (i = 0; i < 5; i++) {
                                            window.console.groupEnd();
                                        }
                                        window.info('Done!');
                                        if (!isNode()) {
                                            window.log('');
                                            window.log('If you\'re here to check out your background script,' +
                                                ' get its ID (you can type getID("name") to find the ID),' +
                                                ' and type filter(id, [optional tabId]) to show only those messages.' +
                                                ' You can also visit the logging page for even better logging over at ', browserAPI.runtime.getURL('html/logging.html'));
                                            window.log('You can also use the debugger for scripts by calling' +
                                                ' window.debugNextScriptCall(id) and window.debugBackgroundScript(id)' +
                                                ' for scripts and backgroundscripts respectively. You can get the id by using' +
                                                ' the getID("name") function.');
                                        }
                                        return [3, 9];
                                    case 8:
                                        e_1 = _a.sent();
                                        for (i = 0; i < 10; i++) {
                                            window.console.groupEnd();
                                        }
                                        window.log(e_1);
                                        window.console.trace();
                                        throw e_1;
                                    case 9: return [2];
                                }
                            });
                        }); });
                        return [4, modules.globalObject.backgroundPageLoaded];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    }
    function after() {
        window.logging = modules.globalObject.globals.logging;
        window.backgroundPageLog = modules.Logging.backgroundPageLog;
    }
})(Init || (Init = {}));
