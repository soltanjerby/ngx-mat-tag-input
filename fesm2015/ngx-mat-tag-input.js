import { __decorate } from 'tslib';
import { EventEmitter, Input, Output, ViewChild, Component, forwardRef, NgModule } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { startWith, map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

var NgxMatTagInputComponent_1;
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

let NgxMatTagInputModule = class NgxMatTagInputModule {
};
NgxMatTagInputModule = __decorate([
    NgModule({
        declarations: [NgxMatTagInputComponent],
        imports: [
            CommonModule,
            MatFormFieldModule,
            MatIconModule,
            FormsModule,
            MatInputModule,
            ReactiveFormsModule,
            MatMenuModule,
            MatChipsModule,
            MatAutocompleteModule,
            MatProgressSpinnerModule,
            MatButtonModule
        ],
        exports: [NgxMatTagInputComponent]
    })
], NgxMatTagInputModule);

/*
 * Public API Surface of ngx-mat-tag-input
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxMatTagInputComponent, NgxMatTagInputModule };
//# sourceMappingURL=ngx-mat-tag-input.js.map
