import getCommonPrefix from './getCommonPrefix.mjs';

const suite = [
	//#00
	{
		arg: [undefined, undefined],
		expected: '',
	},
	//#01
	{
		arg: [undefined, null],
		expected: '',
	},
	//#02
	{
		arg: ['', null],
		expected: '',
	},
	//#03
	{
		arg: ['', ''],
		expected: '',
	},
	//#04
	{
		arg: [' ', ' '],
		expected: ' ',
	},
	//#05
	{
		arg: ['  ', '   '],
		expected: '  ',
	},
	//#06
	{
		arg: ['  \t', '   \t'],
		expected: '  ',
	},
	//#07
	{
		arg: ['\t', '\t'],
		expected: '\t',
	},
	//#08
	{
		arg: ['hello', 'world'],
		expected: '',
	},
	//#09
	{
		arg: ['hello', 'heaven'],
		expected: 'he',
	},
	//#10
	{
		arg: ['abc', 'abc'],
		expected: 'abc',
	},
	//#11
	{
		arg: ['abcd', 'ab'],
		expected: 'ab',
	},
	//#12
	{
		arg: ['abcdef', 'abcdeg'],
		expected: 'abcde',
	},
	//#13
	{
		arg: ['a', 'a'],
		expected: 'a',
	},
	//#14
	{
		arg: ['a', 'aa'],
		expected: 'a',
	},
	//#15
	{
		arg: ['aa', 'a'],
		expected: 'a',
	},
	//#16
	{
		arg: ['aaa', 'aa'],
		expected: 'aa',
	},
	//#17
	{
		arg: ['aa', 'aaa'],
		expected: 'aa',
	},
	//#18
	{
		arg: ['a', ''],
		expected: '',
	},
	//#19
	{
		arg: [' a', ' a'],
		expected: ' a',
	},
	//#20
	{
		arg: ['abcdefgh', 'abefgh'],
		expected: 'ab',
	},
	//#21
	{
		arg: ['  abcdef', ' abcdef '],
		expected: ' ',
	},
	//#22 Unicode characters with multiple code points
	{
		arg: ['𝐻𝑒𝓁𝓁𝑜', '𝐻𝑒𝓁𝓁𝓄'],
		expected: '𝐻𝑒𝓁𝓁',
	},
	//#23
	{
		arg: ['💻💬📱', '💻💬💾'],
		expected: '💻💬',
	},
	//#24
	{
		arg: ['北海道', '北海道'],
		expected: '北海道',
	},
	//#25
	{
		arg: ['Δύο ξανθές χήνες', 'Δύο ξανθές χήνες'],
		expected: 'Δύο ξανθές χήνες',
	},
	//#26
	{
		arg: ['ทดสอบ', 'ทดสอบการทดสอบ'],
		expected: 'ทดสอบ',
	},
	//#27
	{
		arg: ['ԺԻԼԽԾԿ', 'ԺԻԼԽԾԿ'],
		expected: 'ԺԻԼԽԾԿ',
	},
	//#28
	{
		arg: ['שלום', 'שלום'],
		expected: 'שלום',
	},
	//#29
	{
		arg: ['👋🌎', '👋🌎'],
		expected: '👋🌎',
	},
	//#30
	{
		arg: ['अँग्रेज़', 'अँग्रेज़ी'],
		expected: 'अँग्रेज़',
	},
];

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const passed = Object.create(null);
const failed = Object.create(null);

const total = new Map([
	[passed, 0],
	[failed, 0],
]);

suite.forEach((test, index) => {
	const [a, b] = test.arg;
	const result = getCommonPrefix(a, b);
	const e = test.expected !== result ? failed : passed;
	e[index] = test;
	const n = total.get(e);
	total.set(e, 1 + n);
});

const totalFailed = total.get(failed);
if (totalFailed) {
	console.log('%d failed:\n%O', totalFailed, failed);
}
console.log('%d passed:\n%O', total.get(passed), passed);
