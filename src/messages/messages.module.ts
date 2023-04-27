import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessageService } from './message.sv';
import { MessageRepository } from './message.repo';

@Module({
  controllers: [MessagesController],
  providers: [MessageService, MessageRepository]
})
export class MessagesModule {}
