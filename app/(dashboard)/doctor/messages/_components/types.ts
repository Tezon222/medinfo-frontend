export type chatListUserType = {
	id: string;
	firstname: string;
	lastName: string;
	picture: string;
	time: string;
	lastMessage: string | null;
};

export type messageType = {
	id: string;
	senderId: string;
	receiverId: string;
	message: string;
	time: string;
};
