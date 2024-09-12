export type TipsArrayType = Array<{ id: string; title: string; imageUrl: string }>;

export type SingleTip = {
	imageAlt: string;
	mainTitle: string;
	imageUrl: string;
	lastUpdated: string;
	mainBody: Array<{
		Title: string;
		Description: string;
		Content: string;
	}>;
};
