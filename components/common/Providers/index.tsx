import { ProgressBarProvider } from "./progressContext";

function Providers({ children }: { children: React.ReactNode }) {
	return <ProgressBarProvider>{children}</ProgressBarProvider>;
}

export default Providers;
