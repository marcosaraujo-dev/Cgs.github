module.exports = {
	env: {
		browser: true,
		es2021: true,
		es6: true,
		jest: true,
	},
	extends: ["plugin:react/recommended", "airbnb", "prettier"],
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "testing-library"],
	rules: {
		"import/prefer-default-export": "off",
	},
};
