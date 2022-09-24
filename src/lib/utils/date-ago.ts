// function who return time ago in french
export const timeAgo = (date: Date): string => {
	const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
	let interval = Math.floor(seconds / 31536000);
	if (interval > 1) {
		return 'Il y a ' + interval + ' an(s)';
	}
	interval = Math.floor(seconds / 2592000);
	if (interval > 1) {
		return 'Il y a ' + interval + ' mois';
	}
	interval = Math.floor(seconds / 86400);
	if (interval > 1) {
		return 'Il y a ' + interval + ' jour(s)';
	}
	interval = Math.floor(seconds / 3600);
	if (interval > 1) {
		return 'Il y a ' + interval + ' heure(s)';
	}
	interval = Math.floor(seconds / 60);
	if (interval >= 1) {
		return 'Il y a ' + interval + ' minute(s)';
	}
	return 'Il y a ' + Math.floor(seconds) + ' secondes';
}

export const format = (date: Date): string => {
	const day = date.getDate();
	const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
	const month = months[date.getMonth()];
	const year = date.getFullYear();
	return `${day} ${month} ${year}`;
}