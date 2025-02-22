import { Controller, Get, Post, Body, Param, Put, Delete, HttpCode } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatDto, UpdateChatDto, CreateMessageDto, UpdateMessageDto } from './dto/chat.dto';

@Controller()
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  // Chat endpoints
  @Post('chats')
  createChat(@Body() createChatDto: CreateChatDto) {
    return this.chatService.createChat(createChatDto);
  }

  @Get('chats')
  findAllChats() {
    return this.chatService.findAllChats();
  }

  @Get('chats/:chatId')
  findOneChat(@Param('chatId') chatId: string) {
    return this.chatService.findOneChat(chatId);
  }

  @Put('chats/:chatId')
  updateChat(@Param('chatId') chatId: string, @Body() updateChatDto: UpdateChatDto) {
    return this.chatService.updateChat(chatId, updateChatDto);
  }

  @Delete('chats/:chatId')
  @HttpCode(204)
  removeChat(@Param('chatId') chatId: string) {
    this.chatService.removeChat(chatId);
  }

  // Message endpoints
  @Post('chats/:chatId/messages')
  createMessage(
    @Param('chatId') chatId: string,
    @Body() createMessageDto: CreateMessageDto
  ) {
    const message = this.chatService.createMessage({
      ...createMessageDto,
      chatId,
    });
    return {
      ...message,
      markdownResponse: this.chatService.generateMarkdownResponse(message)
    };
  }

  @Get('chats/:chatId/messages')
  findAllMessages(@Param('chatId') chatId: string) {
    return this.chatService.findAllMessages(chatId);
  }

  @Get('messages/:messageId')
  findOneMessage(@Param('messageId') messageId: string) {
    const message = this.chatService.findOneMessage(messageId);
    return {
      ...message,
      markdownResponse: this.chatService.generateMarkdownResponse(message)
    };
  }

  @Put('messages/:messageId')
  updateMessage(
    @Param('messageId') messageId: string,
    @Body() updateMessageDto: UpdateMessageDto
  ) {
    const message = this.chatService.updateMessage(messageId, updateMessageDto);
    return {
      ...message,
      markdownResponse: this.chatService.generateMarkdownResponse(message)
    };
  }

  @Delete('messages/:messageId')
  @HttpCode(204)
  removeMessage(@Param('messageId') messageId: string) {
    this.chatService.removeMessage(messageId);
  }
}
