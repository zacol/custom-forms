import { AbstractControl, ValidationErrors } from '@angular/forms';

import { isEmptyInputValue } from '../util/util';

const INTEGER_REGEXP = /^\d+$/;

/**
 * Validator that performs integer validation.
 *
 * @export
 * @param {AbstractControl} control
 * @returns {(ValidationErrors|null)}
 */
export function integer(control: AbstractControl): ValidationErrors|null {
  if (isEmptyInputValue(control.value)) {
    return null; // Don't validate empty values to allow optional controls.
  }

  return INTEGER_REGEXP.test(control.value) ? null : {'integer': true};
}
