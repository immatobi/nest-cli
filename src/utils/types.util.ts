export interface IMessageServiceRepo{
    find(): Promise<any>,
    findOne(id: string): Promise<any>
    create(message: string): Promise<any>
}