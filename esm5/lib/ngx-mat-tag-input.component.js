import { __decorate } from "tslib";
import { Component, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { map, startWith } from 'rxjs/operators';
var NgxMatTagInputComponent = /** @class */ (function () {
    function NgxMatTagInputComponent() {
        this.items = [];
        this.selectedTags = [];
        this.reset = new EventEmitter();
        this.ngModelChange = new EventEmitter();
        this.change = new EventEmitter();
        this.focus = new EventEmitter();
        this.select = new EventEmitter();
        this.touched = new EventEmitter();
        this.separatorKeysCodes = [ENTER, COMMA];
        this.searchControl = new FormControl();
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
        this.filteredItems = this.searchControl.valueChanges.pipe(startWith(null), map(function (tag) { return tag ? _this._filter(tag) : _this.items.slice(); }));
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
        Input()
    ], NgxMatTagInputComponent.prototype, "appearance", void 0);
    __decorate([
        Input()
    ], NgxMatTagInputComponent.prototype, "readonly", void 0);
    __decorate([
        Input()
    ], NgxMatTagInputComponent.prototype, "items", void 0);
    __decorate([
        Input()
    ], NgxMatTagInputComponent.prototype, "placeholder", void 0);
    __decorate([
        Input()
    ], NgxMatTagInputComponent.prototype, "displayBy", void 0);
    __decorate([
        Input()
    ], NgxMatTagInputComponent.prototype, "isLoading", void 0);
    __decorate([
        Input()
    ], NgxMatTagInputComponent.prototype, "selectedTags", void 0);
    __decorate([
        Output()
    ], NgxMatTagInputComponent.prototype, "reset", void 0);
    __decorate([
        Output()
    ], NgxMatTagInputComponent.prototype, "ngModelChange", void 0);
    __decorate([
        Output()
    ], NgxMatTagInputComponent.prototype, "change", void 0);
    __decorate([
        Output()
    ], NgxMatTagInputComponent.prototype, "focus", void 0);
    __decorate([
        Output()
    ], NgxMatTagInputComponent.prototype, "select", void 0);
    __decorate([
        Output()
    ], NgxMatTagInputComponent.prototype, "touched", void 0);
    __decorate([
        ViewChild('tagsInput')
    ], NgxMatTagInputComponent.prototype, "tagsInput", void 0);
    NgxMatTagInputComponent = NgxMatTagInputComponent_1 = __decorate([
        Component({
            selector: 'ngx-mat-tag-input',
            template: "<mat-form-field [appearance]=\"appearance\" class=\"mat-tag-input-container\">\r\n  <mat-chip-list #chipList>\r\n    <mat-chip (removed)=\"remove(item)\" *ngFor=\"let item of selectedTags\" [removable]=\"true\" [selectable]=\"true\">\r\n      {{displayBy ? item[displayBy] : item}}\r\n      <mat-icon matChipRemove>cancel</mat-icon>\r\n    </mat-chip>\r\n    <input #tagsInput\r\n           (focus)=\"_focus($event)\" (matChipInputTokenEnd)=\"add($event)\" (ngModelChange)=\"_modelChange($event)\"\r\n           [formControl]=\"searchControl\" [matAutocomplete]=\"auto\" [matChipInputFor]=\"chipList\"\r\n           [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n           [placeholder]=\"placeholder\">\r\n  </mat-chip-list>\r\n  <button (click)=\"clear()\" *ngIf=\"selectedTags.length !== 0\" mat-button mat-icon-button\r\n          matSuffix>\r\n    <mat-icon>close</mat-icon>\r\n  </button>\r\n  <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\r\n    <mat-option *ngIf=\"isLoading\" class=\"centered\">\r\n      <mat-spinner diameter=\"40\"></mat-spinner>\r\n    </mat-option>\r\n    <mat-option *ngFor=\"let item of filteredItems | async\" [value]=\"item\">\r\n      {{displayBy ? item[displayBy] : item}}\r\n    </mat-option>\r\n  </mat-autocomplete>\r\n</mat-form-field>\r\n",
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return NgxMatTagInputComponent_1; }),
                    multi: true
                }
            ],
            styles: [".mat-tag-input-container{width:100%}.centered{width:100%;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:center}.centered mat-spinner{left:45%}"]
        })
    ], NgxMatTagInputComponent);
    return NgxMatTagInputComponent;
}());
export { NgxMatTagInputComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdC10YWctaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdC10YWctaW5wdXQvIiwic291cmNlcyI6WyJsaWIvbmd4LW1hdC10YWctaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFjLFlBQVksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEgsT0FBTyxFQUF1QixXQUFXLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRixPQUFPLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBTW5ELE9BQU8sRUFBQyxHQUFHLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFjOUM7SUF1QkU7UUFuQlMsVUFBSyxHQUFVLEVBQUUsQ0FBQztRQUlsQixpQkFBWSxHQUFVLEVBQUUsQ0FBQztRQUV4QixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMzQixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFJaEMsdUJBQWtCLEdBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDOUMsa0JBQWEsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBd0J6QyxhQUFRLEdBQVE7UUFDaEIsQ0FBQyxDQUFBO1FBRUQsY0FBUyxHQUFRO1FBQ2pCLENBQUMsQ0FBQTtJQXZCRCxDQUFDO2dDQXpCVSx1QkFBdUI7SUEyQmxDLHNCQUFJLDBDQUFLO2FBQVQ7WUFD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RUFBRSxJQUFJO2lCQUNaO2FBQ0Y7O1NBQ0YsQ0FBQztPQUNXLHVCQUF1QixDQXNJbkM7SUFBRCw4QkFBQztDQUFBLEFBdElELElBc0lDO1NBdElZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUNvbnRyb2wsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7Q09NTUEsIEVOVEVSfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQge01hdEZvcm1GaWVsZEFwcGVhcmFuY2V9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQge01hdEF1dG9jb21wbGV0ZVNlbGVjdGVkRXZlbnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XHJcbmltcG9ydCB7TWF0Q2hpcElucHV0RXZlbnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzJztcclxuXHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7bWFwLCBzdGFydFdpdGh9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LW1hdC10YWctaW5wdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3gtbWF0LXRhZy1pbnB1dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbmd4LW1hdC10YWctaW5wdXQuY29tcG9uZW50LnNjc3MnXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5neE1hdFRhZ0lucHV0Q29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hNYXRUYWdJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG5cclxuICBASW5wdXQoKSBhcHBlYXJhbmNlOiBNYXRGb3JtRmllbGRBcHBlYXJhbmNlO1xyXG4gIEBJbnB1dCgpIHJlYWRvbmx5OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGl0ZW1zOiBhbnlbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGlzcGxheUJ5OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaXNMb2FkaW5nOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkVGFnczogYW55W10gPSBbXTtcclxuXHJcbiAgQE91dHB1dCgpIHJlc2V0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBuZ01vZGVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHRvdWNoZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3RhZ3NJbnB1dCcpIHRhZ3NJbnB1dDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcclxuXHJcbiAgcHVibGljIHNlcGFyYXRvcktleXNDb2RlczogbnVtYmVyW10gPSBbRU5URVIsIENPTU1BXTtcclxuICBwdWJsaWMgc2VhcmNoQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xyXG4gIHB1YmxpYyBmaWx0ZXJlZEl0ZW1zOiBPYnNlcnZhYmxlPGFueVtdPjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbHVlKCk6IGFueVtdIHtcclxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkVGFncztcclxuICB9XHJcblxyXG4gIHNldCB2YWx1ZSh2YWx1ZTogYW55W10pIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRUYWdzID0gdmFsdWU7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcclxuICAgIHRoaXMuX2NoYW5nZSh2YWx1ZSk7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSB0aGlzLnNlYXJjaENvbnRyb2wudmFsdWVDaGFuZ2VzLnBpcGUoXHJcbiAgICAgIHN0YXJ0V2l0aChudWxsKSxcclxuICAgICAgbWFwKCh0YWc6IGFueSB8IG51bGwpID0+IHRhZyA/IHRoaXMuX2ZpbHRlcih0YWcpIDogdGhpcy5pdGVtcy5zbGljZSgpKSk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZTogYW55ID0gKCkgPT4ge1xyXG4gIH1cclxuXHJcbiAgb25Ub3VjaGVkOiBhbnkgPSAoKSA9PiB7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7XHJcbiAgICBpZiAob2JqKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBvYmo7XHJcbiAgICB9XHJcbiAgICBpZiAob2JqID09PSBudWxsKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBbXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2UuZW1pdChmbik7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gICAgdGhpcy50b3VjaGVkLmVtaXQoZm4pO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5zZWFyY2hDb250cm9sLmRpc2FibGUoKTtcclxuICB9XHJcblxyXG4gIF9tb2RlbENoYW5nZShldmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5uZ01vZGVsQ2hhbmdlLmVtaXQoZXZlbnQpXHJcbiAgfVxyXG5cclxuICBfY2hhbmdlKGV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZS5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIF9mb2N1cyhldmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1cy5lbWl0KGV2ZW50KVxyXG4gIH1cclxuXHJcbiAgYWRkKGV2ZW50OiBNYXRDaGlwSW5wdXRFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5wdXQgPSBldmVudC5pbnB1dDtcclxuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudmFsdWU7XHJcbiAgICBpZiAoKHZhbHVlIHx8ICcnKS50cmltKCkpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFRhZ3MucHVzaCh2YWx1ZS50cmltKCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlucHV0KSB7XHJcbiAgICAgIGlucHV0LnZhbHVlID0gJyc7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlYXJjaENvbnRyb2wuc2V0VmFsdWUobnVsbCk7XHJcbiAgICB0aGlzLl9jaGFuZ2UodGhpcy5zZWxlY3RlZFRhZ3MpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKGZydWl0OiBhbnkpOiB2b2lkIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zZWxlY3RlZFRhZ3MuaW5kZXhPZihmcnVpdCk7XHJcbiAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkVGFncy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fY2hhbmdlKHRoaXMuc2VsZWN0ZWRUYWdzKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdGVkKGV2ZW50OiBNYXRBdXRvY29tcGxldGVTZWxlY3RlZEV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLnB1c2hUYWcoZXZlbnQub3B0aW9uLnZhbHVlKTtcclxuICAgIHRoaXMudGFnc0lucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcclxuICAgIHRoaXMuc2VhcmNoQ29udHJvbC5zZXRWYWx1ZShudWxsKTtcclxuICAgIHRoaXMuc2VsZWN0LmVtaXQoZXZlbnQub3B0aW9uLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3RlZFRhZ3MgPSBbXTtcclxuICB9XHJcblxyXG4gIHB1c2hUYWcodGFnOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5zZWxlY3RlZFRhZ3MuaW5jbHVkZXModGFnKSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkVGFncy5wdXNoKHRhZyk7XHJcbiAgICAgIHRoaXMuX2NoYW5nZSh0aGlzLnNlbGVjdGVkVGFncyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9maWx0ZXIodmFsdWU6IGFueSk6IHN0cmluZ1tdIHtcclxuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gKHRoaXMuZGlzcGxheUJ5ICYmIHZhbHVlW3RoaXMuZGlzcGxheUJ5XSA/IHZhbHVlW3RoaXMuZGlzcGxheUJ5XSA6IHZhbHVlKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgaWYgKHRoaXMuZGlzcGxheUJ5KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uW3RoaXMuZGlzcGxheUJ5XS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlclZhbHVlKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlclZhbHVlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19