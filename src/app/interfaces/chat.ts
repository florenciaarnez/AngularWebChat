import { Message } from "./message";

export interface Chat {
    id: number;
    name: string;
    avatar: string;
    telephone: number;
    status: 'online' | 'offline' | string;
    messages: Message[];

}
