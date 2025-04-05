import antfu from '@antfu/eslint-config';

export default antfu({
	rules: {
		'complexity': ['error', { max: 4 }],
		'max-depth': ['error', 4],
		'max-lines': ['error', 100],
		'max-lines-per-function': ['error', 100],
		'max-nested-callbacks': ['error', 4],
		'max-params': ['error', 3],
		'max-statements': ['error', 20],
		'perfectionist/sort-array-includes': 'error',
		'perfectionist/sort-classes': 'error',
		'perfectionist/sort-exports': 'error',
		'perfectionist/sort-imports': 'error',
		'perfectionist/sort-interfaces': 'error',
		'perfectionist/sort-intersection-types': 'error',
		'perfectionist/sort-maps': 'error',
		'perfectionist/sort-modules': 'error',
		'perfectionist/sort-named-exports': 'error',
		'perfectionist/sort-named-imports': 'error',
		'perfectionist/sort-object-types': 'error',
		'perfectionist/sort-objects': 'error',
		'perfectionist/sort-sets': 'error',
		'perfectionist/sort-switch-case': 'error',
		'perfectionist/sort-union-types': 'error',
		'perfectionist/sort-variable-declarations': 'error',
	},
	stylistic: {
		indent: 'tab',
		semi: true,
	},
	typescript: {
		tsconfigPath: './tsconfig.json',
	},
});
