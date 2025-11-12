export const customTextRule = ( value ) => {
	if ( ! /^[a-zA-Z ]+$/.test( value.text ) ) {
		return 'Value must only contain letters and spaces.';
	}
	return null;
};

export const customSelectRule = ( value ) => {
	if ( value.select !== 'option1' ) {
		return 'Value must be Option 1.';
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
	if ( value.url !== 'https://example.com' ) {
		return 'URL must be exactly https://example.com';
	}
	return null;
};

export const customColorRule = ( value ) => {
	if ( value.color === '#ff0000' ) {
		return 'Color cannot be red (#ff0000).';
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

export const customDateRule = ( value ) => {
	const selectedDate = new Date( value.date );
	const today = new Date();
	today.setHours( 0, 0, 0, 0 );

	if ( selectedDate < today ) {
		return 'Date cannot be in the past.';
	}
	return null;
};

// Async validation example
export const asyncValidateTitle = async ( value ) => {
	// Simulate API call delay
	await new Promise( ( resolve ) => setTimeout( resolve, 500 ) );

	// Simulate checking if title is unique
	const existingTitles = [ 'existing', 'taken', 'duplicate' ];
	if ( existingTitles.includes( value.title?.toLowerCase() ) ) {
		return 'Title is already taken. Please choose a different one.';
	}

	return null;
};
