import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessageRepository{

    public async find(): Promise<any>{

        const contents = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(contents);

        return messages;

    }

    public async findOne(id: string): Promise<any>{

        const contents = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(contents)

        return messages[id]

    }

    public async create(message: string): Promise<any>{

        const contents = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(contents)

        // generate id
        const id = Math.floor(Math.random() * 999)

        // save
        messages[id] = { id, content: message }

        await writeFile('messages.json', JSON.stringify(messages))

        return messages[id];

    }

}