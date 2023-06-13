/**
 * Handles the input change event for a form field.
 *
 * @param {object} event - The input change event object.
 * @param {function} formatHelper - The helper function to format the input value.
 * @param {string} fieldName - The name of the field being updated.
 * @param {function} setFieldValue - The function to set the form field value in Formik.
 * @param {function} setData - The function to update the form data object.
 * @param {function} setState - The function to update the component state.
 */
export const handleInputChange = (
	event,
	formatHelper,
	fieldName,
	setFieldValue,
	setData,
	setState
) => {
	const input = event.target.value;
	const formattedInput = formatHelper(input);

	setFieldValue(fieldName, formattedInput);
	setData((prevState) => ({ ...prevState, [fieldName]: formattedInput }));
	setState(formattedInput);
};
