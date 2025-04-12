import { heroui } from "@heroui/theme";
import type { Config } from "tailwindcss";

const config = {
	plugins: [heroui()],
} satisfies Config;

export default config;
