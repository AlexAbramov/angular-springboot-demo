import { DbParam } from '../param/param';

export enum EntityOp{Schema=0,Get=1,Manage=2}

export enum EntityFunction{Agency="agency", User="user"}

export interface DbEntity{
    name: string
    params:DbParam[]
}

export function createEntityObject(entity:DbEntity):any{
    const obj={}
    for(let p of entity.params){
        obj[p.name]=createParamValue(p.type)
    }
    return obj

}

function createParamValue(type:string){
    switch(type){
        case 'string': 
            return ''
        case 'int': 
        case 'number': 
            return 0
        case 'bool': 
            return false
        default:
            return null
    }
}