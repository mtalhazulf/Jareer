import { Injectable, NotFoundException } from '@nestjs/common';
import { Chat, Message } from './interfaces/chat.interface';
import { CreateChatDto, UpdateChatDto, CreateMessageDto, UpdateMessageDto } from './dto/chat.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ChatService {
  private chats: Chat[] = [];
  private messages: Message[] = [];

  // Chat operations
  createChat(createChatDto: CreateChatDto): Chat {
    const chat: Chat = {
      chatId: uuidv4(),
      chatName: createChatDto.chatName,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.chats.push(chat);
    return chat;
  }

  findAllChats(): Chat[] {
    return this.chats;
  }

  findOneChat(chatId: string): Chat {
    const chat = this.chats.find(chat => chat.chatId === chatId);
    if (!chat) {
      throw new NotFoundException(`Chat with ID ${chatId} not found`);
    }
    return chat;
  }

  updateChat(chatId: string, updateChatDto: UpdateChatDto): Chat {
    const chatIndex = this.chats.findIndex(chat => chat.chatId === chatId);
    if (chatIndex === -1) {
      throw new NotFoundException(`Chat with ID ${chatId} not found`);
    }

    this.chats[chatIndex] = {
      ...this.chats[chatIndex],
      ...updateChatDto,
      updatedAt: new Date(),
    };

    return this.chats[chatIndex];
  }

  removeChat(chatId: string): void {
    const chatIndex = this.chats.findIndex(chat => chat.chatId === chatId);
    if (chatIndex === -1) {
      throw new NotFoundException(`Chat with ID ${chatId} not found`);
    }
    // Remove all messages associated with this chat
    this.messages = this.messages.filter(message => message.chatId !== chatId);
    this.chats.splice(chatIndex, 1);
  }

  // Message operations
  createMessage(createMessageDto: CreateMessageDto): Message {
    // Verify chat exists
    this.findOneChat(createMessageDto.chatId);

    const message: Message = {
      messageId: uuidv4(),
      ...createMessageDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.messages.push(message);
    return message;
  }

  findAllMessages(chatId: string): Message[] {
    return this.messages.filter(message => message.chatId === chatId);
  }

  findOneMessage(messageId: string): Message {
    const message = this.messages.find(message => message.messageId === messageId);
    if (!message) {
      throw new NotFoundException(`Message with ID ${messageId} not found`);
    }
    return message;
  }

  updateMessage(messageId: string, updateMessageDto: UpdateMessageDto): Message {
    const messageIndex = this.messages.findIndex(message => message.messageId === messageId);
    if (messageIndex === -1) {
      throw new NotFoundException(`Message with ID ${messageId} not found`);
    }

    this.messages[messageIndex] = {
      ...this.messages[messageIndex],
      ...updateMessageDto,
      updatedAt: new Date(),
    };

    return this.messages[messageIndex];
  }

  removeMessage(messageId: string): void {
    const messageIndex = this.messages.findIndex(message => message.messageId === messageId);
    if (messageIndex === -1) {
      throw new NotFoundException(`Message with ID ${messageId} not found`);
    }
    this.messages.splice(messageIndex, 1);
  }

  generateMarkdownResponse(message: Message): string {
    return `### Message in Chat: ${this.findOneChat(message.chatId).chatName}\n\n**Role:** ${message.role}\n\n${message.msg}\n\n---\n*Generated at ${new Date().toLocaleString()}*`;
  }
}
