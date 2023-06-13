import './index.css';
import { forwardRef } from 'react';
import cn from 'classnames';

/**
 * FormField component represents a form input field with an optional legend and error message.
 * @component
 *
 * @param {Object} props - The component props.
 * @param {Function} props.onChange - The change event handler for the input field.
 * @param {string} props.legend - The legend text displayed for the input field.
 * @param {string} props.placeholder - The placeholder text for the input field.
 * @param {string} props.error - The error message to display, if any.
 * @param {string} [props.type="text"] - The type of the input field (e.g., "text", "password").
 * @param {string} [props.width="100%"] - The width of the form field.
 * @param {any} [props.restProps] - Additional props to be spread on the input element.
 * @param {React.Ref} ref - Forwarded ref to access the underlying input element.
 *
 * @returns {JSX.Element} The rendered FormField component.
 */
export const FormField = forwardRef((
	{
		onChange,
		legend,
		placeholder,
		error,
		type = "text",
		width = "100%",
		...restProps
	}, ref) => {
	return (
		<fieldset style={{width}} className="Fieldset">
			<legend className="Legend">{legend}</legend>
			<input
				ref={ref}
				onChange={onChange}
				placeholder={placeholder}
				type={type}
				className={cn('Input', { 'Input--error': error })}
				{ ...restProps }
			/>
			{error && <span className="Error">{error}</span>}
		</fieldset>
	)
})
