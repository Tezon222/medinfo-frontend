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

export type TipsResponse = { data: Array<{ id: string; title: string; imageUrl: string }> };

export type Disease = {
	Disease: string;
	Description: string;
	Image: string;
};

export type DiseasesResponse = {
	page: number;
	limit: number;
	totalDiseases: number;
	diseases: Disease[];
};

export type SingleDisease = {
	Disease: string;
	Symptoms: string[];
	Description: string;
	Image: string;
	Precautions: string[];
};

type Doctor = {
	_id: string;
	firstName: string;
	lastName: string;
	picture: string;
	gender: string;
	email: string;
	country: string;
	specialty: string;
	medicalCert: string;
	role: string;
	haveAppointment: boolean;
	appointments: unknown[]; // You can define a more specific type if you know the structure of appointments
};

export type MatchDoctorsResponse = {
	selectedDoctors: Doctor[];
};
