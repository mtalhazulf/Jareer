import { Chat, Message } from './interfaces/chat.interface';
import { CreateChatDto, UpdateChatDto, CreateMessageDto, UpdateMessageDto } from './dto/chat.dto';
export declare class ChatService {
    private chats;
    private messages;
    createChat(createChatDto: CreateChatDto): Chat;
    findAllChats(): Chat[];
    findOneChat(chatId: string): Chat;
    updateChat(chatId: string, updateChatDto: UpdateChatDto): Chat;
    removeChat(chatId: string): void;
    createMessage(createMessageDto: CreateMessageDto): Message;
    findAllMessages(chatId: string): Message[];
    findOneMessage(messageId: string): Message;
    updateMessage(messageId: string, updateMessageDto: UpdateMessageDto): Message;
    removeMessage(messageId: string): void;
    generateMarkdownResponse(message: Message): string;
}
