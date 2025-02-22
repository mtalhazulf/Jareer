import { ChatService } from './chat.service';
import { CreateChatDto, UpdateChatDto, CreateMessageDto, UpdateMessageDto } from './dto/chat.dto';
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    createChat(createChatDto: CreateChatDto): import("./interfaces/chat.interface").Chat;
    findAllChats(): import("./interfaces/chat.interface").Chat[];
    findOneChat(chatId: string): import("./interfaces/chat.interface").Chat;
    updateChat(chatId: string, updateChatDto: UpdateChatDto): import("./interfaces/chat.interface").Chat;
    removeChat(chatId: string): void;
    createMessage(chatId: string, createMessageDto: CreateMessageDto): {
        markdownResponse: string;
        messageId: string;
        chatId: string;
        msg: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
    };
    findAllMessages(chatId: string): import("./interfaces/chat.interface").Message[];
    findOneMessage(messageId: string): {
        markdownResponse: string;
        messageId: string;
        chatId: string;
        msg: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
    };
    updateMessage(messageId: string, updateMessageDto: UpdateMessageDto): {
        markdownResponse: string;
        messageId: string;
        chatId: string;
        msg: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
    };
    removeMessage(messageId: string): void;
}
