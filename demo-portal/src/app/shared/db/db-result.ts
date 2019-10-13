import { DbEntity } from '../entity/entity';

export interface DbResult{
    rows?:any[]
    info?:any
    entity?:DbEntity
}