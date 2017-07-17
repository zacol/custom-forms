import { Directive, forwardRef, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

import { integer } from './';

/**
 * Provider which adds {@link IntegerValidatorDirective} to {@link NG_VALIDATORS}.
 */
const INTEGER_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => IntegerValidatorDirective),
  multi: true,
};

/**
 * A Directive that adds the `integer` validator to controls marked with the
 * `integer` attribute, via the {@link NG_VALIDATORS} binding.
 *
 * ### Example
 *
 * ```
 * <input type="number" name="amount" ngModel integer>
 * <input type="number" name="amount" ngModel integer="true">
 * <input type="number" name="amount" ngModel [integer]="true">
 * ```
 */
@Directive({
  selector: '[integer][formControlName],[integer][formControl],[integer][ngModel]',
  providers: [INTEGER_VALIDATOR]
})
export class IntegerValidatorDirective implements Validator {
  private _enabled: boolean;
  private _onChange: () => void;

  @Input()
  set integer(value: boolean|string) {
    this._enabled = value === '' || value === true || value === 'true';

    if (this._onChange) {
      this._onChange();
    }
  }

  validate(control: AbstractControl): ValidationErrors|null {
    return this._enabled ? integer(control) : null;
  }

  registerOnValidatorChange(fn: () => void): void {
    this._onChange = fn;
  }
}
