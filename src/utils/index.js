export const saveToLocalStorage = (key, data) => {
	const cache = {
		timestamp: new Date().getTime(), // Store the current time
		data, // This data will be stringified
	};
	localStorage.setItem(key, JSON.stringify(cache));
};

export const getFromLocalStorage = (key, maxAge) => {
	const cache = JSON.parse(localStorage.getItem(key)); // Parse stringified data

	if (!cache) return null;

	const isExpired = new Date().getTime() - cache.timestamp > maxAge;
	return isExpired ? null : cache.data; // Return the data if it's not expired
};

export const capitalizeFirstLetter = (str) => {
	if (!str) return str; // Return if the string is empty
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const makeObjectKeysLowercase = (obj) => {
	return Object.fromEntries(
		Object.entries(obj).map(([key, value]) => [key.toLowerCase(), value]),
	);
};
