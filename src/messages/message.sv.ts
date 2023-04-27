import { Injectable } from '@nestjs/common';
import { MessageRepository } from './message.repo';

@Injectable()
export class MessageService{

    constructor(public messageRepo: MessageRepository){}

    public async find(): Promise<any>{
        return this.messageRepo.find();
    }

    public async findOne(id: string): Promise<any>{
        return this.messageRepo.findOne(id)
    }

    public async create(message: string): Promise<any>{
        return this.messageRepo.create(message)
    }

}