import { AbstractControl, ValidationErrors } from '@angular/forms';

import { isEmptyInputValue } from '../util/util';

const FLOAT_REGEXP = /^(?:[1-9]\d*|0)?(?:\.\d+)?$/;

/**
 * Validator that performs float validation.
 *
 * @export
 * @param {AbstractControl} control
 * @returns {(ValidationErrors|null)}
 */
export function float(control: AbstractControl): ValidationErrors|null {
  if (isEmptyInputValue(control.value)) {
    return null; // Don't validate empty values to allow optional controls.
  }

  return FLOAT_REGEXP.test(control.value) ? null : {'float': true};
}
