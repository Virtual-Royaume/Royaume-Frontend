const convertToSlug = (...args: unknown[]): string => {
    let string = '';
	args.forEach((arg) => string += `-${arg}`);
	string = string.toLowerCase();

	const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
	const to = 'aaaaeeeeiiiioooouuuunc------';

	for (let i = 0, l = from.length; i < l; i++) {
		string = string.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
	}

	return string
		.replace(/[^a-z0-9 -]/g, '')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-')
		.replace(/^-+/, '')
		.replace(/-+$/, '');
}

export default convertToSlug;