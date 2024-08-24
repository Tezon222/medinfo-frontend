export default {
	"*.{js,ts,tsx}": "pnpm test:lint",
	"*.{ts,tsx}": () => "pnpm test:check-types",
};
