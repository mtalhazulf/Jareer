"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let ChatService = class ChatService {
    constructor() {
        this.chats = [];
        this.messages = [];
    }
    createChat(createChatDto) {
        const chat = {
            chatId: (0, uuid_1.v4)(),
            chatName: createChatDto.chatName,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        this.chats.push(chat);
        return chat;
    }
    findAllChats() {
        return this.chats;
    }
    findOneChat(chatId) {
        const chat = this.chats.find(chat => chat.chatId === chatId);
        if (!chat) {
            throw new common_1.NotFoundException(`Chat with ID ${chatId} not found`);
        }
        return chat;
    }
    updateChat(chatId, updateChatDto) {
        const chatIndex = this.chats.findIndex(chat => chat.chatId === chatId);
        if (chatIndex === -1) {
            throw new common_1.NotFoundException(`Chat with ID ${chatId} not found`);
        }
        this.chats[chatIndex] = {
            ...this.chats[chatIndex],
            ...updateChatDto,
            updatedAt: new Date(),
        };
        return this.chats[chatIndex];
    }
    removeChat(chatId) {
        const chatIndex = this.chats.findIndex(chat => chat.chatId === chatId);
        if (chatIndex === -1) {
            throw new common_1.NotFoundException(`Chat with ID ${chatId} not found`);
        }
        this.messages = this.messages.filter(message => message.chatId !== chatId);
        this.chats.splice(chatIndex, 1);
    }
    createMessage(createMessageDto) {
        this.findOneChat(createMessageDto.chatId);
        const message = {
            messageId: (0, uuid_1.v4)(),
            ...createMessageDto,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        this.messages.push(message);
        return message;
    }
    findAllMessages(chatId) {
        return this.messages.filter(message => message.chatId === chatId);
    }
    findOneMessage(messageId) {
        const message = this.messages.find(message => message.messageId === messageId);
        if (!message) {
            throw new common_1.NotFoundException(`Message with ID ${messageId} not found`);
        }
        return message;
    }
    updateMessage(messageId, updateMessageDto) {
        const messageIndex = this.messages.findIndex(message => message.messageId === messageId);
        if (messageIndex === -1) {
            throw new common_1.NotFoundException(`Message with ID ${messageId} not found`);
        }
        this.messages[messageIndex] = {
            ...this.messages[messageIndex],
            ...updateMessageDto,
            updatedAt: new Date(),
        };
        return this.messages[messageIndex];
    }
    removeMessage(messageId) {
        const messageIndex = this.messages.findIndex(message => message.messageId === messageId);
        if (messageIndex === -1) {
            throw new common_1.NotFoundException(`Message with ID ${messageId} not found`);
        }
        this.messages.splice(messageIndex, 1);
    }
    generateMarkdownResponse(message) {
        return `### Message in Chat: ${this.findOneChat(message.chatId).chatName}\n\n**Role:** ${message.role}\n\n${message.msg}\n\n---\n*Generated at ${new Date().toLocaleString()}*`;
    }
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = __decorate([
    (0, common_1.Injectable)()
], ChatService);
//# sourceMappingURL=chat.service.js.map