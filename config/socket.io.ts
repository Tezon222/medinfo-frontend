"use client";

import { io, Socket } from "socket.io-client";

type ServerToClientEvents = {
	active: () => void;
};

type ClientToServerEvents = {
	send_message: () => void;
};

export const socket3: Socket<ServerToClientEvents, ClientToServerEvents> = io("http://localhost:3000");
