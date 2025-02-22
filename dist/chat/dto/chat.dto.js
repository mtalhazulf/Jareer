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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMessageDto = exports.CreateMessageDto = exports.UpdateChatDto = exports.CreateChatDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateChatDto {
}
exports.CreateChatDto = CreateChatDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The name of the chat',
        example: 'Project Discussion'
    }),
    __metadata("design:type", String)
], CreateChatDto.prototype, "chatName", void 0);
class UpdateChatDto {
}
exports.UpdateChatDto = UpdateChatDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The updated name of the chat',
        example: 'Updated Project Discussion'
    }),
    __metadata("design:type", String)
], UpdateChatDto.prototype, "chatName", void 0);
class CreateMessageDto {
}
exports.CreateMessageDto = CreateMessageDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The ID of the chat this message belongs to'
    }),
    __metadata("design:type", String)
], CreateMessageDto.prototype, "chatId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The content of the message',
        example: 'Hello, how are you?'
    }),
    __metadata("design:type", String)
], CreateMessageDto.prototype, "msg", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The role of the message sender',
        example: 'user',
        enum: ['user', 'system', 'assistant']
    }),
    __metadata("design:type", String)
], CreateMessageDto.prototype, "role", void 0);
class UpdateMessageDto {
}
exports.UpdateMessageDto = UpdateMessageDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The updated content of the message',
        example: 'Updated message content'
    }),
    __metadata("design:type", String)
], UpdateMessageDto.prototype, "msg", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The updated role of the message sender',
        example: 'assistant',
        enum: ['user', 'system', 'assistant']
    }),
    __metadata("design:type", String)
], UpdateMessageDto.prototype, "role", void 0);
//# sourceMappingURL=chat.dto.js.map