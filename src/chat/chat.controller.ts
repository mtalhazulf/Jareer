import { Controller, Get, Post, Body, Param, Put, Delete, HttpCode } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatDto, UpdateChatDto, CreateMessageDto, UpdateMessageDto } from './dto/chat.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { markdownResponse } from './markdown';

@ApiTags('Chat System')
@Controller()
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  // Chat endpoints
  @Post('chats')
  @ApiOperation({ summary: 'Create a new chat' })
  @ApiResponse({ status: 201, description: 'Chat has been created successfully.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  createChat(@Body() createChatDto: CreateChatDto) {
    return this.chatService.createChat(createChatDto);
  }

  @Get('chats')
  @ApiOperation({ summary: 'Get all chats' })
  @ApiResponse({ status: 200, description: 'Return all chats.' })
  findAllChats() {
    return this.chatService.findAllChats();
  }

  @Get('chats/:chatId')
  @ApiOperation({ summary: 'Get a specific chat' })
  @ApiParam({ name: 'chatId', description: 'ID of the chat' })
  @ApiResponse({ status: 200, description: 'Return the chat.' })
  @ApiResponse({ status: 404, description: 'Chat not found.' })
  findOneChat(@Param('chatId') chatId: string) {
    return this.chatService.findOneChat(chatId);
  }

  @Put('chats/:chatId')
  @ApiOperation({ summary: 'Update a chat' })
  @ApiParam({ name: 'chatId', description: 'ID of the chat to update' })
  @ApiResponse({ status: 200, description: 'Chat has been updated successfully.' })
  @ApiResponse({ status: 404, description: 'Chat not found.' })
  updateChat(@Param('chatId') chatId: string, @Body() updateChatDto: UpdateChatDto) {
    return this.chatService.updateChat(chatId, updateChatDto);
  }

  @Delete('chats/:chatId')
  @ApiOperation({ summary: 'Delete a chat' })
  @ApiParam({ name: 'chatId', description: 'ID of the chat to delete' })
  @ApiResponse({ status: 204, description: 'Chat has been deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Chat not found.' })
  @HttpCode(204)
  removeChat(@Param('chatId') chatId: string) {
    this.chatService.removeChat(chatId);
  }

  // Message endpoints
  @Post('chats/:chatId/messages')
  @ApiOperation({ summary: 'Create a new message in a chat' })
  @ApiParam({ name: 'chatId', description: 'ID of the chat to add the message to' })
  @ApiResponse({ status: 201, description: 'Message has been created successfully.' })
  @ApiResponse({ status: 404, description: 'Chat not found.' })
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
      markdownResponse: markdownResponse
    };
  }

  @Get('chats/:chatId/messages')
  @ApiOperation({ summary: 'Get all messages in a chat' })
  @ApiParam({ name: 'chatId', description: 'ID of the chat' })
  @ApiResponse({ status: 200, description: 'Return all messages in the chat.' })
  @ApiResponse({ status: 404, description: 'Chat not found.' })
  findAllMessages(@Param('chatId') chatId: string) {
    return this.chatService.findAllMessages(chatId);
  }

  @Get('messages/:messageId')
  @ApiOperation({ summary: 'Get a specific message' })
  @ApiParam({ name: 'messageId', description: 'ID of the message' })
  @ApiResponse({ status: 200, description: 'Return the message.' })
  @ApiResponse({ status: 404, description: 'Message not found.' })
  findOneMessage(@Param('messageId') messageId: string) {
    const message = this.chatService.findOneMessage(messageId);
    return {
      ...message,
      markdownResponse: this.chatService.generateMarkdownResponse(message)
    };
  }

  @Put('messages/:messageId')
  @ApiOperation({ summary: 'Update a message' })
  @ApiParam({ name: 'messageId', description: 'ID of the message to update' })
  @ApiResponse({ status: 200, description: 'Message has been updated successfully.' })
  @ApiResponse({ status: 404, description: 'Message not found.' })
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
  @ApiOperation({ summary: 'Delete a message' })
  @ApiParam({ name: 'messageId', description: 'ID of the message to delete' })
  @ApiResponse({ status: 204, description: 'Message has been deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Message not found.' })
  @HttpCode(204)
  removeMessage(@Param('messageId') messageId: string) {
    this.chatService.removeMessage(messageId);
  }
}
