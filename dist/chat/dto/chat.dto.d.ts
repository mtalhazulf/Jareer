export declare class CreateChatDto {
    chatName: string;
}
export declare class UpdateChatDto {
    chatName?: string;
}
export declare class CreateMessageDto {
    chatId: string;
    msg: string;
    role: string;
}
export declare class UpdateMessageDto {
    msg?: string;
    role?: string;
}
