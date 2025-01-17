(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/cdk/keycodes'), require('rxjs/operators'), require('@angular/common'), require('@angular/material/form-field'), require('@angular/material/input'), require('@angular/material/menu'), require('@angular/material/icon'), require('@angular/material/chips'), require('@angular/material/autocomplete'), require('@angular/material/progress-spinner'), require('@angular/material/button')) :
    typeof define === 'function' && define.amd ? define('ngx-mat-tag-input', ['exports', '@angular/core', '@angular/forms', '@angular/cdk/keycodes', 'rxjs/operators', '@angular/common', '@angular/material/form-field', '@angular/material/input', '@angular/material/menu', '@angular/material/icon', '@angular/material/chips', '@angular/material/autocomplete', '@angular/material/progress-spinner', '@angular/material/button'], factory) :
    (global = global || self, factory(global['ngx-mat-tag-input'] = {}, global.ng.core, global.ng.forms, global.ng.cdk.keycodes, global.rxjs.operators, global.ng.common, global.ng.material.formField, global.ng.material.input, global.ng.material.menu, global.ng.material.icon, global.ng.material.chips, global.ng.material.autocomplete, global.ng.material.progressSpinner, global.ng.material.button));
}(this, (function (exports, core, forms, keycodes, operators, common, formField, input, menu, icon, chips, autocomplete, progressSpinner, button) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
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
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var NgxMatTagInputComponent = /** @class */ (function () {
        function NgxMatTagInputComponent() {
            this.items = [];
            this.selectedTags = [];
            this.reset = new core.EventEmitter();
            this.ngModelChange = new core.EventEmitter();
            this.change = new core.EventEmitter();
            this.focus = new core.EventEmitter();
            this.select = new core.EventEmitter();
            this.touched = new core.EventEmitter();
            this.separatorKeysCodes = [keycodes.ENTER, keycodes.COMMA];
            this.searchControl = new forms.FormControl();
            this.onChange = function () {
            };
            this.onTouched = function () {
            };
        }
        NgxMatTagInputComponent_1 = NgxMatTagInputComponent;
        Object.defineProperty(NgxMatTagInputComponent.prototype, "value", {
            get: function () {
                return this.selectedTags;
            },
            set: function (value) {
                this.selectedTags = value;
                this.onChange(value);
                this._change(value);
                this.onTouched();
            },
            enumerable: true,
            configurable: true
        });
        NgxMatTagInputComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.filteredItems = this.searchControl.valueChanges.pipe(operators.startWith(null), operators.map(function (tag) { return tag ? _this._filter(tag) : _this.items.slice(); }));
        };
        NgxMatTagInputComponent.prototype.writeValue = function (obj) {
            if (obj) {
                this.value = obj;
            }
            if (obj === null) {
                this.value = [];
            }
        };
        NgxMatTagInputComponent.prototype.registerOnChange = function (fn) {
            this.change.emit(fn);
            this.onChange = fn;
        };
        NgxMatTagInputComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
            this.touched.emit(fn);
        };
        NgxMatTagInputComponent.prototype.setDisabledState = function (isDisabled) {
            this.searchControl.disable();
        };
        NgxMatTagInputComponent.prototype._modelChange = function (event) {
            this.ngModelChange.emit(event);
        };
        NgxMatTagInputComponent.prototype._change = function (event) {
            this.change.emit(event);
        };
        NgxMatTagInputComponent.prototype._focus = function (event) {
            this.focus.emit(event);
        };
        NgxMatTagInputComponent.prototype.add = function (event) {
            var input = event.input;
            var value = event.value;
            if ((value || '').trim()) {
                this.selectedTags.push(value.trim());
            }
            if (input) {
                input.value = '';
            }
            this.searchControl.setValue(null);
            this._change(this.selectedTags);
        };
        NgxMatTagInputComponent.prototype.remove = function (fruit) {
            var index = this.selectedTags.indexOf(fruit);
            if (index >= 0) {
                this.selectedTags.splice(index, 1);
            }
            this._change(this.selectedTags);
        };
        NgxMatTagInputComponent.prototype.selected = function (event) {
            this.pushTag(event.option.value);
            this.tagsInput.nativeElement.value = '';
            this.searchControl.setValue(null);
            this.select.emit(event.option.value);
        };
        NgxMatTagInputComponent.prototype.clear = function () {
            this.selectedTags = [];
        };
        NgxMatTagInputComponent.prototype.pushTag = function (tag) {
            if (!this.selectedTags.includes(tag)) {
                this.selectedTags.push(tag);
                this._change(this.selectedTags);
            }
        };
        NgxMatTagInputComponent.prototype._filter = function (value) {
            var _this = this;
            var filterValue = (this.displayBy && value[this.displayBy] ? value[this.displayBy] : value).toLowerCase();
            if (this.displayBy) {
                return this.items.filter(function (option) { return option[_this.displayBy].toLowerCase().includes(filterValue); });
            }
            else {
                return this.items.filter(function (option) { return option.toLowerCase().includes(filterValue); });
            }
        };
        var NgxMatTagInputComponent_1;
        __decorate([
            core.Input()
        ], NgxMatTagInputComponent.prototype, "appearance", void 0);
        __decorate([
            core.Input()
        ], NgxMatTagInputComponent.prototype, "readonly", void 0);
        __decorate([
            core.Input()
        ], NgxMatTagInputComponent.prototype, "items", void 0);
        __decorate([
            core.Input()
        ], NgxMatTagInputComponent.prototype, "placeholder", void 0);
        __decorate([
            core.Input()
        ], NgxMatTagInputComponent.prototype, "displayBy", void 0);
        __decorate([
            core.Input()
        ], NgxMatTagInputComponent.prototype, "isLoading", void 0);
        __decorate([
            core.Input()
        ], NgxMatTagInputComponent.prototype, "selectedTags", void 0);
        __decorate([
            core.Output()
        ], NgxMatTagInputComponent.prototype, "reset", void 0);
        __decorate([
            core.Output()
        ], NgxMatTagInputComponent.prototype, "ngModelChange", void 0);
        __decorate([
            core.Output()
        ], NgxMatTagInputComponent.prototype, "change", void 0);
        __decorate([
            core.Output()
        ], NgxMatTagInputComponent.prototype, "focus", void 0);
        __decorate([
            core.Output()
        ], NgxMatTagInputComponent.prototype, "select", void 0);
        __decorate([
            core.Output()
        ], NgxMatTagInputComponent.prototype, "touched", void 0);
        __decorate([
            core.ViewChild('tagsInput')
        ], NgxMatTagInputComponent.prototype, "tagsInput", void 0);
        NgxMatTagInputComponent = NgxMatTagInputComponent_1 = __decorate([
            core.Component({
                selector: 'ngx-mat-tag-input',
                template: "<mat-form-field [appearance]=\"appearance\" class=\"mat-tag-input-container\">\r\n  <mat-label>Tags</mat-label>\r\n  <mat-chip-list #chipList>\r\n    <mat-chip (removed)=\"remove(item)\" *ngFor=\"let item of selectedTags\" [removable]=\"true\" [selectable]=\"true\">\r\n      {{displayBy ? item[displayBy] : item}}\r\n      <mat-icon matChipRemove>cancel</mat-icon>\r\n    </mat-chip>\r\n    <input #tagsInput\r\n           (focus)=\"_focus($event)\" (matChipInputTokenEnd)=\"add($event)\" (ngModelChange)=\"_modelChange($event)\"\r\n           [formControl]=\"searchControl\" [matAutocomplete]=\"auto\" [matChipInputFor]=\"chipList\"\r\n           [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n           [placeholder]=\"placeholder\">\r\n  </mat-chip-list>\r\n  <button (click)=\"clear()\" *ngIf=\"selectedTags.length !== 0\" mat-button mat-icon-button\r\n          matSuffix>\r\n    <mat-icon>close</mat-icon>\r\n  </button>\r\n  <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\r\n    <mat-option *ngIf=\"isLoading\" class=\"centered\">\r\n      <mat-spinner diameter=\"40\"></mat-spinner>\r\n    </mat-option>\r\n    <mat-option *ngFor=\"let item of filteredItems | async\" [value]=\"item\">\r\n      {{displayBy ? item[displayBy] : item}}\r\n    </mat-option>\r\n  </mat-autocomplete>\r\n</mat-form-field>\r\n",
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return NgxMatTagInputComponent_1; }),
                        multi: true
                    }
                ],
                styles: [".mat-tag-input-container{width:75%}.centered{width:100%;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:center}.centered mat-spinner{left:45%}"]
            })
        ], NgxMatTagInputComponent);
        return NgxMatTagInputComponent;
    }());

    var NgxMatTagInputModule = /** @class */ (function () {
        function NgxMatTagInputModule() {
        }
        NgxMatTagInputModule = __decorate([
            core.NgModule({
                declarations: [NgxMatTagInputComponent],
                imports: [
                    common.CommonModule,
                    formField.MatFormFieldModule,
                    icon.MatIconModule,
                    forms.FormsModule,
                    input.MatInputModule,
                    forms.ReactiveFormsModule,
                    menu.MatMenuModule,
                    chips.MatChipsModule,
                    autocomplete.MatAutocompleteModule,
                    progressSpinner.MatProgressSpinnerModule,
                    button.MatButtonModule
                ],
                exports: [NgxMatTagInputComponent]
            })
        ], NgxMatTagInputModule);
        return NgxMatTagInputModule;
    }());

    exports.NgxMatTagInputComponent = NgxMatTagInputComponent;
    exports.NgxMatTagInputModule = NgxMatTagInputModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-mat-tag-input.umd.js.map
