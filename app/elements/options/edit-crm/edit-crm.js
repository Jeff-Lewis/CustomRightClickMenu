var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var EditCrmElement;
(function (EditCrmElement) {
    EditCrmElement.editCrmProperties = {
        crm: {
            type: Array,
            value: [],
            notify: true
        },
        crmLoading: {
            type: Boolean,
            value: true,
            notify: true
        },
        crmEmpty: {
            type: Boolean,
            value: false,
            notify: true,
            computed: '_isCrmEmpty(crm, crmLoading)'
        },
        isSelecting: {
            type: Boolean,
            value: false,
            notify: true
        },
        isAdding: {
            type: Boolean,
            value: false,
            notify: true
        }
    };
    var EC = (function () {
        function EC() {
        }
        EC._isColumnEmpty = function (column) {
            return column.list.length === 0 && !this.isAdding;
        };
        ;
        EC._isCrmEmpty = function (crm, crmLoading) {
            return !crmLoading && crm.length === 0;
        };
        ;
        EC._getAriaLabel = function (item) {
            return 'Edit item "' + item.name + '"';
        };
        ;
        EC._getColumns = function () {
            if (this._columns && document.contains(this._columns[0])) {
                return this._columns;
            }
            var columnContainer = this.$.CRMEditColumnsContainer;
            return (this._columns = Array.prototype.slice.apply(columnContainer.children).filter(function (element) {
                return element.classList.contains('CRMEditColumnCont');
            }).map(function (columnCont) {
                return columnCont.querySelector('.CRMEditColumn');
            }));
        };
        ;
        EC._getLastMenu = function (list, exclude) {
            var lastMenu = -1;
            var lastFilledMenu = -1;
            if (list) {
                list.forEach(function (item, index) {
                    if ((item.type === 'menu' || (window.app.shadowStart && item.menuVal))) {
                        item.children = item.children || [];
                        if (exclude === undefined || index !== exclude) {
                            lastMenu = index;
                            if (item.children.length > 0) {
                                lastFilledMenu = index;
                            }
                        }
                    }
                });
                if (lastFilledMenu !== -1) {
                    return lastFilledMenu;
                }
            }
            return lastMenu;
        };
        ;
        EC._setInvisibleNodes = function (result, node, showContentTypes) {
            var length;
            if (node.children && node.children.length > 0) {
                length = node.children.length;
                for (var i = 0; i < length; i++) {
                    this._setInvisibleNodes(result, node.children[i], showContentTypes);
                }
            }
            if (!window.app.util.arraysOverlap(node.onContentTypes, showContentTypes)) {
                result[node.id] = true;
            }
        };
        ;
        EC._buildCRMEditObj = function (setMenus, unsetMenus) {
            var column;
            var indent;
            var path = [];
            var columnNum = 0;
            var lastMenu = -2;
            var indentTop = 0;
            var crmEditObj = [];
            var newSetMenus = [];
            var list = window.app.settings.crm;
            var setMenusLength = setMenus.length;
            var showContentTypes = window.app.crmTypes;
            var hiddenNodes = {};
            for (var i = 0; i < list.length; i++) {
                this._setInvisibleNodes(hiddenNodes, list[i], showContentTypes);
            }
            if (list.length) {
                while (lastMenu !== -1) {
                    if (setMenusLength > columnNum && setMenus[columnNum] !== -1) {
                        lastMenu = setMenus[columnNum];
                    }
                    else {
                        lastMenu = this._getLastMenu(list, unsetMenus[columnNum]);
                    }
                    newSetMenus[columnNum] = lastMenu;
                    indent = lastMenu;
                    var columnIndent = [];
                    columnIndent[indentTop - 1] = undefined;
                    column = {
                        indent: columnIndent,
                        menuPath: path.concat(lastMenu),
                        list: list,
                        index: columnNum,
                        shadow: window.app.shadowStart && window.app.shadowStart <= columnNum
                    };
                    list.forEach(function (item) {
                        item.expanded = false;
                    });
                    if (lastMenu !== -1) {
                        indentTop += indent;
                        var lastNode = list[lastMenu];
                        lastNode.expanded = true;
                        if (window.app.shadowStart && lastNode.menuVal) {
                            list = lastNode.menuVal;
                        }
                        else {
                            list = list[lastMenu].children;
                        }
                    }
                    column.list = column.list.map(function (currentVal, index) { return (__assign({}, currentVal, {
                        path: path.concat([index]),
                        index: index,
                        isPossibleAddLocation: false,
                        hiddenOnCrmType: !!hiddenNodes[currentVal.id]
                    })); });
                    path.push(lastMenu);
                    crmEditObj.push(column);
                    columnNum++;
                }
            }
            this._columns = null;
            return {
                crm: crmEditObj,
                setMenus: newSetMenus
            };
        };
        ;
        EC._setColumnContOffset = function (column, offset, force) {
            if (force === void 0) { force = false; }
            if (column.offset === undefined) {
                column.offset = 0;
            }
            if (force) {
                column.offset = offset;
            }
            else {
                column.offset += offset;
            }
            window.setTransform(column, "translateY(" + column.offset + "px)");
        };
        EC._moveFollowingColumns = function (startColumn, offset) {
            var topLevelColumns = window.app.editCRM.shadowRoot.querySelectorAll('.CRMEditColumnCont');
            for (var i = startColumn.index + 1; i < topLevelColumns.length; i++) {
                this._setColumnContOffset(topLevelColumns[i], offset);
            }
        };
        EC._createSorter = function () {
            var _this = this;
            this._sortables = this._sortables.filter(function (sortable) {
                sortable.destroy();
                return false;
            });
            this._getColumns().forEach(function (column, columnIndex, allColumns) {
                var draggedNode = null;
                var moves = 0;
                var movedUp = false;
                _this._sortables.push(new Sortable(column, {
                    group: 'crm',
                    animation: 50,
                    handle: '.dragger',
                    ghostClass: 'draggingCRMItem',
                    chosenClass: 'draggingFiller',
                    scroll: true,
                    forceFallback: true,
                    fallbackOnBody: false,
                    onStart: function () {
                        _this.dragging = true;
                    },
                    onChoose: function (event) {
                        var node = event.item;
                        draggedNode = node;
                        if (node.item.type === 'menu' && node.expanded) {
                            node.expanded = false;
                            node.shadowRoot.querySelector('.menuArrow').removeAttribute('expanded');
                            for (var i = columnIndex + 1; i < allColumns.length; i++) {
                                allColumns[i].style.display = 'none';
                            }
                        }
                        node.currentColumn = column;
                    },
                    onEnd: function (event) {
                        _this.dragging = false;
                        var newColumn = event.item.parentNode.index;
                        var index = event.newIndex;
                        window.app.crm.move(event.item.item.path, window.app.editCRM.setMenus.slice(0, newColumn).concat(index), allColumns[newColumn] === column);
                    },
                    onMove: function (event) {
                        _this.async(function () {
                            if (event.to !== event.dragged.currentColumn) {
                                var topLevelColumns = window.app.editCRM.querySelectorAll('.CRMEditColumnCont');
                                var leftmostColumn = Math.min(event.dragged.currentColumn.index, event.to.index);
                                _this._setColumnContOffset(topLevelColumns[leftmostColumn], 0, true);
                                for (var i = leftmostColumn; i < topLevelColumns.length - 1; i++) {
                                    var col = topLevelColumns[i];
                                    var colMenu = Array.prototype.slice.apply(col.querySelectorAll('edit-crm-item'))
                                        .filter(function (node) {
                                        return node !== event.dragged && node.item && node.item.type === 'menu' && node.expanded;
                                    })[0];
                                    if (!colMenu) {
                                        break;
                                    }
                                    var colMenuIndex = Array.prototype.slice.apply(colMenu.parentElement.children)
                                        .indexOf(colMenu) + window.app.editCRM.crm[i].indent.length + col.offset;
                                    var baseOffset = window.app.editCRM.crm[i + 1].indent.length;
                                    _this._setColumnContOffset(topLevelColumns[i + 1], ((colMenuIndex - baseOffset) * 50), true);
                                }
                            }
                            else {
                                if (event.related.item.type === 'menu' && event.related.expanded) {
                                    if (event.relatedRect.top < event.draggedRect.top) {
                                        if (moves !== 1 || !movedUp) {
                                            _this._moveFollowingColumns(event.to, 50);
                                            movedUp = true;
                                        }
                                    }
                                    else {
                                        _this._moveFollowingColumns(event.to, -50);
                                    }
                                }
                            }
                            draggedNode.currentColumn = event.to;
                            moves++;
                        }, 10);
                    }
                }));
            });
        };
        EC.build = function (_a) {
            var _this = this;
            var _b = _a === void 0 ? {
                setItems: [],
                unsetItems: [],
                quick: false,
                instant: false
            } : _a, _c = _b.setItems, setItems = _c === void 0 ? [] : _c, _d = _b.unsetItems, unsetItems = _d === void 0 ? [] : _d, _e = _b.quick, quick = _e === void 0 ? false : _e, instant = _b.instant;
            var obj = this._buildCRMEditObj(setItems, unsetItems);
            this.setMenus = obj.setMenus;
            var crmBuilder = obj.crm;
            var hight;
            var highest = 0;
            crmBuilder.forEach(function (column) {
                hight = column.indent.length + column.list.length;
                hight > highest && (highest = hight);
            });
            this.$.mainCont.style.minHeight = (highest * 50) + 'px';
            this.crm = [];
            if (this._currentTimeout !== null) {
                window.clearTimeout(this._currentTimeout);
            }
            this.crmLoading = true;
            this._columns = null;
            var func = function () {
                _this.crm = crmBuilder;
                _this.notifyPath('crm', _this.crm);
                _this._currentTimeout = null;
                setTimeout(function () {
                    _this.crmLoading = false;
                    var els = _this.getItems();
                    for (var i = 0; i < els.length; i++) {
                        els[i].update && els[i].update();
                    }
                    setTimeout(function () {
                        _this._createSorter();
                    }, 0);
                }, 50);
            };
            if (instant) {
                func();
            }
            else {
                this._currentTimeout = window.setTimeout(func, quick ? 150 : 1000);
            }
            return crmBuilder;
        };
        ;
        EC.ready = function () {
            var _this = this;
            window.onExists('app').then(function () {
                window.app.editCRM = _this;
                window.app.addEventListener('crmTypeChanged', function () {
                    _this._typeChanged();
                });
                _this._typeChanged(true);
            });
        };
        ;
        EC.addToPosition = function (e) {
            var node = window.app.util.findElementWithClassName(e, 'addingItemPlaceholder');
            this._addItem(JSON.parse(node.getAttribute('data-path')));
            this.isAdding = false;
        };
        ;
        EC.cancelAdding = function () {
            if (this.isAdding) {
                this.isAdding = false;
                this.build({
                    setItems: this._setItems
                });
            }
        };
        ;
        EC.toggleAddState = function () {
            if (!this.isAdding) {
                this.isSelecting && this.cancelSelecting();
                this.isAdding = true;
                this.build({
                    setItems: this._setItems,
                    instant: true
                });
            }
            else {
                this.cancelAdding();
            }
        };
        ;
        EC._addItem = function (path) {
            var newItem = window.app.templates.getDefaultLinkNode({
                id: window.app.generateItemId()
            });
            var container = window.app.crm.lookup(path, true);
            container.push(newItem);
            window.app.editCRM.build({
                setItems: window.app.editCRM.setMenus
            });
            window.app.upload();
        };
        ;
        EC._getSelected = function () {
            var selected = [];
            var editCrmItems = this.getItems();
            var i;
            for (i = 0; i < editCrmItems.length; i++) {
                if (editCrmItems[i].$.itemCont.classList.contains('highlighted')) {
                    selected.push(editCrmItems[i].item.id);
                }
            }
            return selected;
        };
        ;
        EC._ifDefSet = function (node, target) {
            var props = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                props[_i - 2] = arguments[_i];
            }
            for (var i = 0; i < props.length; i++) {
                var property = props[i];
                if (node[property] !== void 0) {
                    target[property] = node[property];
                }
            }
        };
        EC.makeNodeSafe = function (node) {
            var newNode = {};
            this._ifDefSet(node, newNode, 'type', 'name', 'value', 'linkVal', 'menuVal', 'nodeInfo', 'triggers', 'scriptVal', 'stylesheetVal', 'onContentTypes', 'showOnSpecified');
            if (node.children) {
                newNode.children = [];
                for (var i = 0; i < node.children.length; i++) {
                    newNode.children[i] = this.makeNodeSafe(node.children[i]);
                }
            }
            return newNode;
        };
        ;
        EC._extractUniqueChildren = function (node, toExportIds, results) {
            if (toExportIds.indexOf(node.id) > -1) {
                results.push(node);
            }
            else {
                for (var i = 0; node.children && i < node.children.length; i++) {
                    this._extractUniqueChildren(node.children[i], toExportIds, results);
                }
            }
        };
        ;
        EC._changeAuthor = function (node, authorName) {
            if (node.nodeInfo.source !== 'local') {
                node.nodeInfo.source.author = authorName;
                for (var i = 0; node.children && i < node.children.length; i++) {
                    this._changeAuthor(node.children[i], authorName);
                }
            }
        };
        ;
        EC._crmExportNameChange = function (node, author) {
            if (author) {
                node.nodeInfo && node.nodeInfo.source && node.nodeInfo.source !== 'local' &&
                    (node.nodeInfo.source.author = author);
            }
            return JSON.stringify(node);
        };
        ;
        EC.getMetaIndexes = function (code) {
            var indexes = [];
            var metaStart = -1;
            var metaEnd = -1;
            var lines = code.split('\n');
            for (var i = 0; i < lines.length; i++) {
                if (metaStart !== -1) {
                    if (lines[i].indexOf('==/UserScript==') > -1 ||
                        lines[i].indexOf('==/UserStyle==') > -1) {
                        metaEnd = i;
                        indexes.push({
                            start: metaStart,
                            end: metaEnd
                        });
                        metaStart = -1;
                        metaEnd = -1;
                    }
                }
                else if (lines[i].indexOf('==UserScript==') > -1 ||
                    lines[i].indexOf('==UserStyle==') > -1) {
                    metaStart = i;
                }
            }
            return indexes;
        };
        EC.getMetaLinesForIndex = function (code, _a) {
            var start = _a.start, end = _a.end;
            var metaLines = [];
            var lines = code.split('\n');
            for (var i = start + 1; i < end; i++) {
                metaLines.push(lines[i]);
            }
            return metaLines;
        };
        EC.getMetaLines = function (code) {
            var metaLines = [];
            var metaIndexes = this.getMetaIndexes(code);
            for (var _i = 0, metaIndexes_1 = metaIndexes; _i < metaIndexes_1.length; _i++) {
                var index = metaIndexes_1[_i];
                metaLines = metaLines.concat(this.getMetaLinesForIndex(code, index));
            }
            return metaLines;
        };
        EC.getMetaTagsForLines = function (lines) {
            var metaTags = {};
            var currentMatch = null;
            var regex = /@(\w+)(\s+)(.+)/;
            for (var i = 0; i < lines.length; i++) {
                var regexMatches = lines[i].match(regex);
                if (regexMatches) {
                    if (currentMatch) {
                        var key = currentMatch.key, value = currentMatch.value;
                        metaTags[key] = metaTags[key] || [];
                        metaTags[key].push(value);
                    }
                    currentMatch = {
                        key: regexMatches[1],
                        value: regexMatches[3]
                    };
                }
                else {
                    currentMatch.value += ('\n' + lines[i]);
                }
            }
            if (currentMatch) {
                var key = currentMatch.key, value = currentMatch.value;
                metaTags[key] = metaTags[key] || [];
                metaTags[key].push(value);
            }
            return metaTags;
        };
        EC.getMetaTags = function (code) {
            var metaLines = this.getMetaLines(code);
            return this.getMetaTagsForLines(metaLines);
        };
        ;
        EC._setMetaTagIfSet = function (metaTags, metaTagKey, nodeKey, node) {
            if (node && node[nodeKey]) {
                if (Array.isArray(node[nodeKey])) {
                    metaTags[metaTagKey] = node[nodeKey];
                }
                else {
                    metaTags[metaTagKey] = [node[nodeKey]];
                }
            }
        };
        ;
        EC._getUserscriptString = function (node, author) {
            var i;
            var code = (node.type === 'script' ? node.value.script : node.value.stylesheet);
            var codeSplit = code.split('\n');
            var metaIndexes = this.getMetaIndexes(code);
            var metaTags = {};
            var slicedIndexes = [];
            for (var _i = 0, metaIndexes_2 = metaIndexes; _i < metaIndexes_2.length; _i++) {
                var _a = metaIndexes_2[_i], start = _a.start, end = _a.end;
                for (var i_1 = start; i_1 < end; i_1++) {
                    slicedIndexes.push(i_1);
                }
            }
            if (metaIndexes.length > 0) {
                for (var _b = 0, _c = slicedIndexes.reverse(); _b < _c.length; _b++) {
                    var line = _c[_b];
                    codeSplit.splice(line, 1);
                }
                metaTags = this.getMetaTags(code);
            }
            this._setMetaTagIfSet(metaTags, 'name', 'name', node);
            author = (metaTags['nodeInfo'] && JSON.parse(metaTags['nodeInfo'][0]).author) || author || 'anonymous';
            var authorArr = [];
            if (!Array.isArray(author)) {
                authorArr = [author];
            }
            metaTags['author'] = authorArr;
            if (node.nodeInfo.source !== 'local') {
                this._setMetaTagIfSet(metaTags, 'downloadURL', 'url', node.nodeInfo.source);
            }
            this._setMetaTagIfSet(metaTags, 'version', 'version', node.nodeInfo);
            metaTags['CRM_contentTypes'] = [JSON.stringify(node.onContentTypes)];
            this._setMetaTagIfSet(metaTags, 'grant', 'permissions', node);
            var matches = [];
            var excludes = [];
            for (i = 0; i < node.triggers.length; i++) {
                if (node.triggers[i].not) {
                    excludes.push(node.triggers[i].url);
                }
                else {
                    matches.push(node.triggers[i].url);
                }
            }
            metaTags['match'] = matches;
            metaTags['exclude'] = excludes;
            this._setMetaTagIfSet(metaTags, 'CRM_launchMode', 'launchMode', node.value);
            if (node.type === 'script' && node.value.libraries) {
                metaTags['require'] = [];
                for (i = 0; i < node.value.libraries.length; i++) {
                    if (node.value.libraries[i].url) {
                        metaTags['require'].push(node.value.libraries[i].url);
                    }
                }
            }
            if (node.type === 'stylesheet') {
                metaTags['CRM_stylesheet'] = ['true'];
                this._setMetaTagIfSet(metaTags, 'CRM_toggle', 'toggle', node.value);
                this._setMetaTagIfSet(metaTags, 'CRM_defaultOn', 'defaultOn', node.value);
                var stylesheetCode = codeSplit.join('\n');
                codeSplit = ["GM_addStyle('" + stylesheetCode.replace(/\n/g, '\\n\' + \n\'') + "');"];
            }
            var metaLines = [];
            for (var metaKey in metaTags) {
                if (metaTags.hasOwnProperty(metaKey)) {
                    for (i = 0; i < metaTags[metaKey].length; i++) {
                        metaLines.push('// @' + metaKey + '	' + metaTags[metaKey][i]);
                    }
                }
            }
            var newScript = "// ==UserScript==\n\t" + metaLines.join('\n') + "\n\t// ==/UserScript\n\t" + codeSplit.join('\n');
            return newScript;
        };
        ;
        EC._generateDocumentRule = function (node) {
            var rules = node.triggers.map(function (trigger) {
                if (trigger.url.indexOf('*') === -1) {
                    return 'url(' + trigger + ')';
                }
                else {
                    var schemeAndDomainPath = trigger.url.split('://');
                    var scheme = schemeAndDomainPath[0];
                    var domainPath = schemeAndDomainPath.slice(1).join('://');
                    var domainAndPath = domainPath.split('/');
                    var domain = domainAndPath[0];
                    var path = domainAndPath.slice(1).join('/');
                    var schemeWildCard = scheme.indexOf('*') > -1;
                    var domainWildcard = domain.indexOf('*') > -1;
                    var pathWildcard = path.indexOf('*') > -1;
                    if (~~schemeWildCard + ~~domainWildcard + ~~pathWildcard > 1 ||
                        domainWildcard || schemeWildCard) {
                        return 'regexp("' +
                            trigger.url
                                .replace(/\*/, '.*')
                                .replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") +
                            '")';
                    }
                    else {
                        return 'url-prefix(' + scheme + '://' + domain + ')';
                    }
                }
            });
            var match;
            var indentation;
            var lines = node.value.stylesheet.split('\n');
            for (var i = 0; i < lines.length; i++) {
                if ((match = /(\s+)(\w+)/.exec(lines[i]))) {
                    indentation = match[1];
                    break;
                }
            }
            indentation = indentation || '	';
            return '@-moz-document ' + rules.join(', ') + ' {' +
                lines.map(function (line) {
                    return indentation + line;
                }).join('\n') +
                '}';
        };
        ;
        EC._getExportString = function (node, type, author) {
            switch (type) {
                case 'Userscript':
                    return this._getUserscriptString(node, author);
                case 'Userstyle':
                    if (node.value.launchMode === 0 || node.value.launchMode === 1) {
                        return node.value.stylesheet.replace(/UserScript/g, 'UserStyle');
                    }
                    else {
                        return this._generateDocumentRule(node).replace(/UserScript/g, 'UserStyle');
                    }
                default:
                case 'CRM':
                    return this._crmExportNameChange(node, author);
            }
        };
        ;
        EC.exportSingleNode = function (exportNode, exportType) {
            var _this = this;
            var textArea = window.doc.exportJSONData;
            textArea.value = this._getExportString(exportNode, exportType, null);
            window.doc.exportAuthorName.value =
                (exportNode.nodeInfo && exportNode.nodeInfo.source &&
                    exportNode.nodeInfo.source &&
                    exportNode.nodeInfo.source !== 'local' &&
                    exportNode.nodeInfo.source.author) || 'anonymous';
            window.doc.exportAuthorName.addEventListener('keydown', function () {
                window.setTimeout(function () {
                    var author = window.doc.exportAuthorName.value;
                    browserAPI.storage.local.set({
                        authorName: author
                    });
                    var data;
                    data = _this._getExportString(exportNode, exportType, author);
                    textArea.value = data;
                }, 0);
            });
            window.doc.exportDialog.open();
            setTimeout(function () {
                textArea.focus();
                textArea.select();
            }, 150);
        };
        ;
        EC._exportGivenNodes = function (exports) {
            var __this = this;
            var safeExports = [];
            for (var i = 0; i < exports.length; i++) {
                safeExports[i] = this.makeNodeSafe(exports[i]);
            }
            var data = {
                crm: safeExports
            };
            var textarea = window.doc.exportJSONData;
            function authorNameChange(event) {
                var author = event.target.value;
                browserAPI.storage.local.set({
                    authorName: author
                });
                for (var j = 0; j < safeExports.length; j++) {
                    __this._changeAuthor(safeExports[j], author);
                }
                var dataJson = JSON.stringify({
                    crm: safeExports
                });
                textarea.value = dataJson;
            }
            window.app.$.exportAuthorName.addEventListener('change', function (event) {
                authorNameChange(event);
            });
            textarea.value = JSON.stringify(data);
            window.app.$.exportDialog.open();
            setTimeout(function () {
                textarea.focus();
                textarea.select();
            }, 150);
            if (window.app.storageLocal.authorName) {
                authorNameChange({
                    target: {
                        value: window.app.storageLocal.authorName
                    }
                });
            }
        };
        ;
        EC._exportGivenNodeIDs = function (toExport) {
            var exports = [];
            for (var i = 0; i < window.app.settings.crm.length; i++) {
                this._extractUniqueChildren(window.app.settings.crm[i], toExport, exports);
            }
            this._exportGivenNodes(exports);
        };
        ;
        EC.exportSelected = function () {
            var toExport = this._getSelected();
            this._exportGivenNodeIDs(toExport);
        };
        ;
        EC.cancelSelecting = function () {
            var _this = this;
            var editCrmItems = this.getItems();
            for (var i = 0; i < editCrmItems.length; i++) {
                if (editCrmItems[i].rootNode) {
                    continue;
                }
                editCrmItems[i].$.itemCont.classList.remove('selecting');
                editCrmItems[i].$.itemCont.classList.remove('highlighted');
            }
            setTimeout(function () {
                _this.isSelecting = false;
            }, 150);
        };
        ;
        EC.removeSelected = function () {
            var j;
            var arr;
            var toRemove = this._getSelected();
            for (var i = 0; i < toRemove.length; i++) {
                arr = window.app.crm.lookupId(toRemove[i], true);
                if (!arr) {
                    continue;
                }
                for (j = 0; j < arr.length; j++) {
                    if (arr[j].id === toRemove[i]) {
                        arr.splice(j, 1);
                    }
                }
            }
            window.app.upload();
            this.build({
                quick: true
            });
            this.isSelecting = false;
        };
        ;
        EC.selectItems = function () {
            var _this = this;
            var editCrmItems = this.getItems();
            for (var i = 0; i < editCrmItems.length; i++) {
                editCrmItems[i].$.itemCont.classList.add('selecting');
            }
            setTimeout(function () {
                _this.isSelecting = true;
            }, 150);
        };
        ;
        EC.getCRMElementFromPath = function (path, showPath) {
            if (showPath === void 0) { showPath = false; }
            var i;
            for (i = 0; i < path.length - 1; i++) {
                if (this.setMenus[i] !== path[i]) {
                    if (showPath) {
                        this.build({
                            setItems: path
                        });
                        break;
                    }
                    else {
                        return null;
                    }
                }
            }
            var cols = this.$.CRMEditColumnsContainer.children;
            var row = cols[path.length - 1].querySelector('.CRMEditColumn').children;
            for (i = 0; i < row.length; i++) {
                if (window.app.util.compareArray(row[i].item.path, path)) {
                    return row[i];
                }
            }
            return null;
        };
        ;
        EC._getCrmTypeFromNumber = function (crmType) {
            var types = ['page', 'link', 'selection', 'image', 'video', 'audio'];
            return types[crmType];
        };
        ;
        EC._typeChanged = function (quick) {
            if (quick === void 0) { quick = false; }
            var crmTypes = window.app.crmTypes || [true, true, true, true, true, true];
            for (var i = 0; i < 6; i++) {
                window.app.editCRM.classList[crmTypes[i] ? 'add' : 'remove'](this._getCrmTypeFromNumber(i));
            }
            window.runOrAddAsCallback(window.app.editCRM.build, window.app.editCRM, [{
                    quick: quick
                }]);
        };
        EC.getItems = function () {
            return Array.prototype.slice.apply(this.shadowRoot.querySelectorAll('edit-crm-item'));
        };
        EC.getItemsWithClass = function (className) {
            return this.getItems().filter(function (item) {
                return item.$.itemCont.classList.contains(className);
            });
        };
        EC.is = 'edit-crm';
        EC._currentTimeout = null;
        EC.setMenus = [];
        EC.selectedElements = [];
        EC._columns = [];
        EC._sortables = [];
        EC.dragging = false;
        EC.properties = EditCrmElement.editCrmProperties;
        EC.listeners = {
            'crmTypeChanged': '_typeChanged'
        };
        return EC;
    }());
    EditCrmElement.EC = EC;
    if (window.objectify) {
        window.register(EC);
    }
    else {
        window.addEventListener('RegisterReady', function () {
            window.register(EC);
        });
    }
})(EditCrmElement || (EditCrmElement = {}));
