export const shouldDisableButton = (errors, touched) => {
	return Object.keys(errors).length > 0 || Object.keys(touched).length === 0;
};
