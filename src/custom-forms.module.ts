import { NgModule } from '@angular/core';

import { integer, IntegerValidatorDirective } from './integer';
import { float, FloatValidatorDirective } from './float';

export const customValidators: any = {
    integer,
    float,
};

const CUSTOM_VALIDATORS_DIRECTIVES: any = [
  IntegerValidatorDirective,
  FloatValidatorDirective,
];

/**
 * This module is used for handling user input, 
 * by validating a {@link FormGroup}s and {@link FormControl}s.
 * 
 * @export
 * @class CustomFormsModule
 */
@NgModule({
  declarations: [CUSTOM_VALIDATORS_DIRECTIVES],
  exports: [CUSTOM_VALIDATORS_DIRECTIVES]
})
export class CustomFormsModule {}
