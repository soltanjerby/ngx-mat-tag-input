import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { NgxMatTagInputComponent } from './ngx-mat-tag-input.component';
var NgxMatTagInputModule = /** @class */ (function () {
    function NgxMatTagInputModule() {
    }
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
    return NgxMatTagInputModule;
}());
export { NgxMatTagInputModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdC10YWctaW5wdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hdC10YWctaW5wdXQvIiwic291cmNlcyI6WyJsaWIvbmd4LW1hdC10YWctaW5wdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUV6RCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQW1CdEU7SUFBQTtJQUNBLENBQUM7SUFEWSxvQkFBb0I7UUFqQmhDLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO1lBQ3ZDLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLGtCQUFrQjtnQkFDbEIsYUFBYTtnQkFDYixXQUFXO2dCQUNYLGNBQWM7Z0JBQ2QsbUJBQW1CO2dCQUNuQixhQUFhO2dCQUNiLGNBQWM7Z0JBQ2QscUJBQXFCO2dCQUNyQix3QkFBd0I7Z0JBQ3hCLGVBQWU7YUFDaEI7WUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNuQyxDQUFDO09BQ1csb0JBQW9CLENBQ2hDO0lBQUQsMkJBQUM7Q0FBQSxBQURELElBQ0M7U0FEWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQge01hdE1lbnVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xyXG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQge01hdENoaXBzTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XHJcbmltcG9ydCB7TWF0QXV0b2NvbXBsZXRlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9hdXRvY29tcGxldGUnO1xyXG5pbXBvcnQge01hdFByb2dyZXNzU3Bpbm5lck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lcic7XHJcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xyXG5cclxuaW1wb3J0IHtOZ3hNYXRUYWdJbnB1dENvbXBvbmVudH0gZnJvbSAnLi9uZ3gtbWF0LXRhZy1pbnB1dC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtOZ3hNYXRUYWdJbnB1dENvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG4gICAgTWF0SWNvbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgTWF0TWVudU1vZHVsZSxcclxuICAgIE1hdENoaXBzTW9kdWxlLFxyXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxyXG4gICAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxyXG4gICAgTWF0QnV0dG9uTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbTmd4TWF0VGFnSW5wdXRDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hNYXRUYWdJbnB1dE1vZHVsZSB7XHJcbn1cclxuIl19