export const customTextRule = ( value ) => {
	if ( ! /^[a-zA-Z ]+$/.test( value.text ) ) {
		return 'Value must only contain letters and spaces.';
	}
	return null;
};

export const customEmailRule = ( value ) => {
	if ( ! /^[a-zA-Z0-9._%+-]+@example\.com$/.test( value.email ) ) {
		return 'Email address must be from @example.com domain.';
	}
	return null;
};

export const customTelephoneRule = ( value ) => {
	if ( ! /^\+30\d{10}$/.test( value.telephone ) ) {
		return 'Telephone number must start with +30 and have 10 digits after.';
	}
	return null;
};

export const customUrlRule = ( value ) => {
	if ( ! /^https:\/\/example\.com/.test( value.url ) ) {
		return 'URL must be from https://example.com domain.';
	}
	return null;
};

export const customIntegerRule = ( value ) => {
	if ( value.integer % 2 !== 0 ) {
		return 'Integer must be an even number.';
	}
	return null;
};

export const customPasswordRule = ( value ) => {
	if ( value.password.length < 8 ) {
		return 'Password must be at least 8 characters long.';
	}
	if ( ! /[A-Z]/.test( value.password ) ) {
		return 'Password must contain at least one uppercase letter.';
	}
	if ( ! /[0-9]/.test( value.password ) ) {
		return 'Password must contain at least one number.';
	}
	return null;
};
