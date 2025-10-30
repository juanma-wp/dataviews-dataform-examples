module.exports = {
	extends: [ 'plugin:@wordpress/eslint-plugin/recommended' ],
	rules: {
		// Allow webpack alias imports like '@/...'
		'import/no-unresolved': [ 'error', { ignore: [ '^@/' ] } ],
	},
};
