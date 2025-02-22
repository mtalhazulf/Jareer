import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

// Chat DTOs
export class CreateChatDto {
  @ApiProperty({
    description: 'The name of the chat',
    example: 'Project Discussion'
  })
  chatName: string;
}

export class UpdateChatDto {
  @ApiPropertyOptional({
    description: 'The updated name of the chat',
    example: 'Updated Project Discussion'
  })
  chatName?: string;
}

// Message DTOs
export class CreateMessageDto {
  @ApiProperty({
    description: 'The ID of the chat this message belongs to'
  })
  chatId: string;

  @ApiProperty({
    description: 'The content of the message',
    example: 'Hello, how are you?'
  })
  msg: string;

  @ApiProperty({
    description: 'The role of the message sender',
    example: 'user',
    enum: ['user', 'system', 'assistant']
  })
  role: string;
}

export class UpdateMessageDto {
  @ApiPropertyOptional({
    description: 'The updated content of the message',
    example: 'Updated message content'
  })
  msg?: string;

  @ApiPropertyOptional({
    description: 'The updated role of the message sender',
    example: 'assistant',
    enum: ['user', 'system', 'assistant']
  })
  role?: string;
}
