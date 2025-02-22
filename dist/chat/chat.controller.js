"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatController = void 0;
const common_1 = require("@nestjs/common");
const chat_service_1 = require("./chat.service");
const chat_dto_1 = require("./dto/chat.dto");
let ChatController = class ChatController {
    constructor(chatService) {
        this.chatService = chatService;
    }
    createChat(createChatDto) {
        return this.chatService.createChat(createChatDto);
    }
    findAllChats() {
        return this.chatService.findAllChats();
    }
    findOneChat(chatId) {
        return this.chatService.findOneChat(chatId);
    }
    updateChat(chatId, updateChatDto) {
        return this.chatService.updateChat(chatId, updateChatDto);
    }
    removeChat(chatId) {
        this.chatService.removeChat(chatId);
    }
    createMessage(chatId, createMessageDto) {
        const message = this.chatService.createMessage({
            ...createMessageDto,
            chatId,
        });
        return {
            ...message,
            markdownResponse: this.chatService.generateMarkdownResponse(message)
        };
    }
    findAllMessages(chatId) {
        return this.chatService.findAllMessages(chatId);
    }
    findOneMessage(messageId) {
        const message = this.chatService.findOneMessage(messageId);
        return {
            ...message,
            markdownResponse: this.chatService.generateMarkdownResponse(message)
        };
    }
    updateMessage(messageId, updateMessageDto) {
        const message = this.chatService.updateMessage(messageId, updateMessageDto);
        return {
            ...message,
            markdownResponse: this.chatService.generateMarkdownResponse(message)
        };
    }
    removeMessage(messageId) {
        this.chatService.removeMessage(messageId);
    }
};
exports.ChatController = ChatController;
__decorate([
    (0, common_1.Post)('chats'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [chat_dto_1.CreateChatDto]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "createChat", null);
__decorate([
    (0, common_1.Get)('chats'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "findAllChats", null);
__decorate([
    (0, common_1.Get)('chats/:chatId'),
    __param(0, (0, common_1.Param)('chatId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "findOneChat", null);
__decorate([
    (0, common_1.Put)('chats/:chatId'),
    __param(0, (0, common_1.Param)('chatId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, chat_dto_1.UpdateChatDto]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "updateChat", null);
__decorate([
    (0, common_1.Delete)('chats/:chatId'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('chatId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "removeChat", null);
__decorate([
    (0, common_1.Post)('chats/:chatId/messages'),
    __param(0, (0, common_1.Param)('chatId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, chat_dto_1.CreateMessageDto]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "createMessage", null);
__decorate([
    (0, common_1.Get)('chats/:chatId/messages'),
    __param(0, (0, common_1.Param)('chatId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "findAllMessages", null);
__decorate([
    (0, common_1.Get)('messages/:messageId'),
    __param(0, (0, common_1.Param)('messageId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "findOneMessage", null);
__decorate([
    (0, common_1.Put)('messages/:messageId'),
    __param(0, (0, common_1.Param)('messageId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, chat_dto_1.UpdateMessageDto]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "updateMessage", null);
__decorate([
    (0, common_1.Delete)('messages/:messageId'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('messageId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "removeMessage", null);
exports.ChatController = ChatController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatController);
//# sourceMappingURL=chat.controller.js.map