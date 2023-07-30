export function filterPhoneNumber(phoneNumber: string) {
	// Filter only numbers from the input
	const cleaned = `${phoneNumber}`.replace(/\D/g, '');

	const len = cleaned.length;
	switch (len) {
		case 10:
			if (cleaned[0] === '6' && cleaned[1] === '5') {
				return cleaned;
			}
			return `91${cleaned}`; // indian number without country code
		case 11:
			if (cleaned[0] === '0') {
				// indian number with 0
				return `91${cleaned.substring(1)}`;
			}
			return cleaned;
		case 12:
			if (cleaned.substring(0, 2) === '91') {
				// indian number with 91
				return `91${cleaned.substring(2)}`;
			}
			return cleaned;
		case 13:
			if (cleaned.substring(0, 3) === '+91') {
				// indian number with +91
				return `91${cleaned.substring(3)}`;
			}
			return cleaned;
		default:
			return cleaned;
	}
}
