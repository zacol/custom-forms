import { Directive, forwardRef, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

import { float } from './';

/**
 * Provider which adds {@link FloatValidatorDirective} to {@link NG_VALIDATORS}.
 */
const FLOAT_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => FloatValidatorDirective),
  multi: true,
};

/**
 * A Directive that adds the `float` validator to controls marked with the
 * `float` attribute, via the {@link NG_VALIDATORS} binding.
 *
 * ### Example
 *
 * ```
 * <input type="number" name="amount" ngModel float>
 * <input type="number" name="amount" ngModel float="true">
 * <input type="number" name="amount" ngModel [float]="true">
 * ```
 */
@Directive({
  selector: '[float][formControlName],[float][formControl],[float][ngModel]',
  providers: [FLOAT_VALIDATOR]
})
export class FloatValidatorDirective implements Validator {
  private _enabled: boolean;
  private _onChange: () => void;

  @Input()
  set float(value: boolean|string) {
    this._enabled = value === '' || value === true || value === 'true';

    if (this._onChange) {
      this._onChange();
    }
  }

  validate(control: AbstractControl): ValidationErrors|null {
    return this._enabled ? float(control) : null;
  }

  registerOnValidatorChange(fn: () => void): void {
    this._onChange = fn;
  }
}
