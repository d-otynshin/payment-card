import './index.css';

/**
 * Button component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.text - The text content of the button.
 * @param {boolean} [props.disabled=false] - Whether the button is disabled or not.
 * @returns {JSX.Element} The rendered Button component.
 */
export const Button = ({ text, disabled = false }) => {
	return (
		<button disabled={disabled} className="Button">
			{text}
		</button>
	);
};
