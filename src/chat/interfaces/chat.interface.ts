export interface Chat {
  chatId: string;
  chatName: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Message {
  messageId: string;
  chatId: string;
  msg: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}
