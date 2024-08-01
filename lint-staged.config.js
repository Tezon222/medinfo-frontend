export default {
	"*.{js,ts}": ["pnpm test:lint"],
	"*.ts": () => "pnpm test:check-types",
};
