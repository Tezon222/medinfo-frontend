export default {
	"pre-commit": "pnpm lint-staged",
	"pre-push": "pnpm test:format",
};
