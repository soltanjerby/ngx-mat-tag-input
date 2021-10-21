var NgxMatTagInputComponent_1;
import { __decorate } from "tslib";
import { Component, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { map, startWith } from 'rxjs/operators';
let NgxMatTagInputComponent = NgxMatTagInputComponent_1 = class NgxMatTagInputComponent {
    constructor() {
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
        this.onChange = () => {
        };
        this.onTouched = () => {
        };
    }
    get value() {
        return this.selectedTags;
    }
    set value(value) {
        this.selectedTags = value;
        this.onChange(value);
        this._change(value);
        this.onTouched();
    }
    ngOnInit() {
        this.filteredItems = this.searchControl.valueChanges.pipe(startWith(null), map((tag) => tag ? this._filter(tag) : this.items.slice()));
    }
    writeValue(obj) {
        if (obj) {
            this.value = obj;
        }
        if (obj === null) {
            this.value = [];
        }
    }
    registerOnChange(fn) {
        this.change.emit(fn);
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
        this.touched.emit(fn);
    }
    setDisabledState(isDisabled) {
        this.searchControl.disable();
    }
    _modelChange(event) {
        this.ngModelChange.emit(event);
    }
    _change(event) {
        this.change.emit(event);
    }
    _focus(event) {
        this.focus.emit(event);
    }
    add(event) {
        const input = event.input;
        const value = event.value;
        if ((value || '').trim()) {
            this.selectedTags.push(value.trim());
        }
        if (input) {
            input.value = '';
        }
        this.searchControl.setValue(null);
        this._change(this.selectedTags);
    }
    remove(fruit) {
        const index = this.selectedTags.indexOf(fruit);
        if (index >= 0) {
            this.selectedTags.splice(index, 1);
        }
        this._change(this.selectedTags);
    }
    selected(event) {
        this.pushTag(event.option.value);
        this.tagsInput.nativeElement.value = '';
        this.searchControl.setValue(null);
        this.select.emit(event.option.value);
    }
    clear() {
        this.selectedTags = [];
    }
    pushTag(tag) {
        if (!this.selectedTags.includes(tag)) {
            this.selectedTags.push(tag);
            this._change(this.selectedTags);
        }
    }
    _filter(value) {
        const filterValue = (this.displayBy && value[this.displayBy] ? value[this.displayBy] : value).toLowerCase();
        if (this.displayBy) {
            return this.items.filter(option => option[this.displayBy].toLowerCase().includes(filterValue));
        }
        else {
            return this.items.filter(option => option.toLowerCase().includes(filterValue));
        }
    }
};
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
                useExisting: forwardRef(() => NgxMatTagInputComponent_1),
                multi: true
            }
        ],
        styles: [".mat-tag-input-container{width:100%}.centered{width:100%;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:center}.centered mat-spinner{left:45%}"]
    })
], NgxMatTagInputComponent);
export { NgxMatTagInputComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdC10YWctaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdC10YWctaW5wdXQvIiwic291cmNlcyI6WyJsaWIvbmd4LW1hdC10YWctaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBYyxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hILE9BQU8sRUFBdUIsV0FBVyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEYsT0FBTyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQU1uRCxPQUFPLEVBQUMsR0FBRyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBYzlDLElBQWEsdUJBQXVCLCtCQUFwQyxNQUFhLHVCQUF1QjtJQXVCbEM7UUFuQlMsVUFBSyxHQUFVLEVBQUUsQ0FBQztRQUlsQixpQkFBWSxHQUFVLEVBQUUsQ0FBQztRQUV4QixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMzQixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFJaEMsdUJBQWtCLEdBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDOUMsa0JBQWEsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBd0J6QyxhQUFRLEdBQVEsR0FBRyxFQUFFO1FBQ3JCLENBQUMsQ0FBQTtRQUVELGNBQVMsR0FBUSxHQUFHLEVBQUU7UUFDdEIsQ0FBQyxDQUFB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bnRSZWYsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3JtQ29udHJvbCwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtDT01NQSwgRU5URVJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7TWF0Rm9ybUZpZWxkQXBwZWFyYW5jZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbmltcG9ydCB7TWF0QXV0b2NvbXBsZXRlU2VsZWN0ZWRFdmVudH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcclxuaW1wb3J0IHtNYXRDaGlwSW5wdXRFdmVudH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xyXG5cclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHttYXAsIHN0YXJ0V2l0aH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtbWF0LXRhZy1pbnB1dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25neC1tYXQtdGFnLWlucHV0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9uZ3gtbWF0LXRhZy1pbnB1dC5jb21wb25lbnQuc2NzcyddLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmd4TWF0VGFnSW5wdXRDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neE1hdFRhZ0lucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG4gIEBJbnB1dCgpIGFwcGVhcmFuY2U6IE1hdEZvcm1GaWVsZEFwcGVhcmFuY2U7XHJcbiAgQElucHV0KCkgcmVhZG9ubHk6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgaXRlbXM6IGFueVtdID0gW107XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICBASW5wdXQoKSBkaXNwbGF5Qnk6IHN0cmluZztcclxuICBASW5wdXQoKSBpc0xvYWRpbmc6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgc2VsZWN0ZWRUYWdzOiBhbnlbXSA9IFtdO1xyXG5cclxuICBAT3V0cHV0KCkgcmVzZXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG5nTW9kZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgdG91Y2hlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgndGFnc0lucHV0JykgdGFnc0lucHV0OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG5cclxuICBwdWJsaWMgc2VwYXJhdG9yS2V5c0NvZGVzOiBudW1iZXJbXSA9IFtFTlRFUiwgQ09NTUFdO1xyXG4gIHB1YmxpYyBzZWFyY2hDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XHJcbiAgcHVibGljIGZpbHRlcmVkSXRlbXM6IE9ic2VydmFibGU8YW55W10+O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUoKTogYW55W10ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRUYWdzO1xyXG4gIH1cclxuXHJcbiAgc2V0IHZhbHVlKHZhbHVlOiBhbnlbXSkge1xyXG4gICAgdGhpcy5zZWxlY3RlZFRhZ3MgPSB2YWx1ZTtcclxuICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xyXG4gICAgdGhpcy5fY2hhbmdlKHZhbHVlKTtcclxuICAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IHRoaXMuc2VhcmNoQ29udHJvbC52YWx1ZUNoYW5nZXMucGlwZShcclxuICAgICAgc3RhcnRXaXRoKG51bGwpLFxyXG4gICAgICBtYXAoKHRhZzogYW55IHwgbnVsbCkgPT4gdGFnID8gdGhpcy5fZmlsdGVyKHRhZykgOiB0aGlzLml0ZW1zLnNsaWNlKCkpKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlOiBhbnkgPSAoKSA9PiB7XHJcbiAgfVxyXG5cclxuICBvblRvdWNoZWQ6IGFueSA9ICgpID0+IHtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmIChvYmopIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IG9iajtcclxuICAgIH1cclxuICAgIGlmIChvYmogPT09IG51bGwpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZS5lbWl0KGZuKTtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgICB0aGlzLnRvdWNoZWQuZW1pdChmbik7XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlYXJjaENvbnRyb2wuZGlzYWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgX21vZGVsQ2hhbmdlKGV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLm5nTW9kZWxDaGFuZ2UuZW1pdChldmVudClcclxuICB9XHJcblxyXG4gIF9jaGFuZ2UoZXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgX2ZvY3VzKGV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzLmVtaXQoZXZlbnQpXHJcbiAgfVxyXG5cclxuICBhZGQoZXZlbnQ6IE1hdENoaXBJbnB1dEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LmlucHV0O1xyXG4gICAgY29uc3QgdmFsdWUgPSBldmVudC52YWx1ZTtcclxuICAgIGlmICgodmFsdWUgfHwgJycpLnRyaW0oKSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkVGFncy5wdXNoKHZhbHVlLnRyaW0oKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgaW5wdXQudmFsdWUgPSAnJztcclxuICAgIH1cclxuICAgIHRoaXMuc2VhcmNoQ29udHJvbC5zZXRWYWx1ZShudWxsKTtcclxuICAgIHRoaXMuX2NoYW5nZSh0aGlzLnNlbGVjdGVkVGFncyk7XHJcbiAgfVxyXG5cclxuICByZW1vdmUoZnJ1aXQ6IGFueSk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnNlbGVjdGVkVGFncy5pbmRleE9mKGZydWl0KTtcclxuICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWdzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9jaGFuZ2UodGhpcy5zZWxlY3RlZFRhZ3MpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0ZWQoZXZlbnQ6IE1hdEF1dG9jb21wbGV0ZVNlbGVjdGVkRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMucHVzaFRhZyhldmVudC5vcHRpb24udmFsdWUpO1xyXG4gICAgdGhpcy50YWdzSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgdGhpcy5zZWFyY2hDb250cm9sLnNldFZhbHVlKG51bGwpO1xyXG4gICAgdGhpcy5zZWxlY3QuZW1pdChldmVudC5vcHRpb24udmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGVkVGFncyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgcHVzaFRhZyh0YWc6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnNlbGVjdGVkVGFncy5pbmNsdWRlcyh0YWcpKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWdzLnB1c2godGFnKTtcclxuICAgICAgdGhpcy5fY2hhbmdlKHRoaXMuc2VsZWN0ZWRUYWdzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2ZpbHRlcih2YWx1ZTogYW55KTogc3RyaW5nW10ge1xyXG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSAodGhpcy5kaXNwbGF5QnkgJiYgdmFsdWVbdGhpcy5kaXNwbGF5QnldID8gdmFsdWVbdGhpcy5kaXNwbGF5QnldIDogdmFsdWUpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBpZiAodGhpcy5kaXNwbGF5QnkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb25bdGhpcy5kaXNwbGF5QnldLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyVmFsdWUpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyVmFsdWUpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0=