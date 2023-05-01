/**
 * Returns the common prefix of two strings.
 *
 * @param {string} a - The first string to compare.
 * @param {string} b - The second string to compare.
 * @returns {string} (an empty string if there is no common prefix)
 */
// prettier-ignore
const getCommonPrefix = (a, b) => {
	let prefix = '';
	if (a && b) {
		let r = 0, l = Math.min(a.length, b.length);
		while (r < l) {
			const j = ((r + l) / 2) | 0, n = 1 + j;
			if (a.slice(0, n) !== b.slice(0, n)) {
				l = j;
			} else {
				r = n;
			}
		}
		const s = a.slice(0, r), n = s.length;
		if (n) {
			let i = 0;
			while (i < n) {
				const c = s[i], d = b[i];
				if (c !== d || s.codePointAt(i) !== b.codePointAt(i)) {
					break;
				}
				++i;
			}
			prefix = s.slice(0, i);
		}
	}
	return prefix;
};


export default getCommonPrefix;
