import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessageService } from './message.sv';

@Controller('messages')
export class MessagesController {

    constructor(public messageService: MessageService){}

    @Get('/')
    public getMessages(){

        return this.messageService.find()

    }

    @Get('/:id')
    public async getMessage(@Param('id') id: string){

        const message = await this.messageService.findOne(id);

        if(!message){
            throw new NotFoundException('message does not exist')
        }

        return this.messageService.findOne(id)

    }

    @Post('/')
    public createMessage(@Body() body: CreateMessageDto){

        const message = this.messageService.create(body.content);
        return message;

    }

}
