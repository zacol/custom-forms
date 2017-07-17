/**
 * Check if provided value is empty.
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export function isEmptyInputValue(value: any): boolean {
  // We don't check for string here so it also works with arrays.
  return value == null || value.length === 0;
}
