export default {
	"*.{js,ts,tsx}": "pnpm lint:eslint",
	"*.{ts,tsx}": () => "pnpm lint:check-types",
};
