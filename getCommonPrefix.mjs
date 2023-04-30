/**
 * Returns the common prefix of two strings.
 * @param {string} a
 * @param {string} b
 * @returns {string}
 */
// prettier-ignore
const getCommonPrefix = (a, b) => {
	let prefix = '';
	if (a && b) {
		let left = Math.min(a.length, b.length);
		let right = 0;
		while (right < left) {
			const mid = ((right + left) / 2) | 0;
			const n = 1 + mid;
			if (a.slice(0, n) === b.slice(0, n)) {
				right = n;
			} else {
				left = mid;
			}
		}
		const str = a.slice(0, right);
		const len = str.length;
		if (len) {
			let i = 0;
			while (i < len) {
				const c1 = str[i];
				const c2 = b[i];
				if (c1 !== c2 || str.codePointAt(i) !== b.codePointAt(i)) {
					break;
				}
				++i;
			}
			prefix = str.slice(0, i);
		}
	}
	return prefix;
};

export default getCommonPrefix;
