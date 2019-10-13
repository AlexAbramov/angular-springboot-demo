import { HttpClient } from '@angular/common/http';
import { AppService } from '../app/app.service';
import { EntityOp, EntityFunction, DbEntity, createEntityObject } from './entity';
import { DbResult } from '../db/db-result';
import { Injectable } from '@angular/core';
import { EvvError } from '../app/evv-error';
import { isParamVisible, ParamVisibility } from '../param/param';

@Injectable({
    providedIn: 'root'
})
export class EntityService {
    private entityDict=new Map<EntityFunction,DbEntity>()

    constructor(private http: HttpClient, private appService: AppService) { }

    async schema(func: EntityFunction): Promise<DbResult> {
        if(this.entityDict.has(func)) return {entity:this.entityDict.get(func)}
        return await this.fetch(func, EntityOp.Schema, null)
    }

    async get(func: EntityFunction, data?: any): Promise<DbResult> {
        return await this.fetch(func, EntityOp.Get, data)
    }

    async item(func: EntityFunction, data: any): Promise<DbResult> {
        const res= await this.fetch(func, data?EntityOp.Get:EntityOp.Schema, data)
        if(!data && res.entity){
            res.rows=[createEntityObject(res.entity)]
        }
        return res
    }

    async manageItem(func: EntityFunction, data: any): Promise<DbResult> {
        return await this.fetch(func, EntityOp.Manage, data)
    }

    private async fetch(func: EntityFunction, op: EntityOp, data: any): Promise<DbResult> {
        const path = func.toString().toLowerCase()
        const url = this.appService.getUrl("portalApi", path)
        const headers = this.appService.getHeaders()
        const res = await this.http.post<DbResult>(url, { op: op, data: data }, { headers: headers }).toPromise()
        if(res.entity){
            this.entityDict.set(func, res.entity)
        }
        if (res.info && res.info.errorCode) {
            throw new EvvError(res.info.errorCode, res.info.message)
        }
        return res
    }

    getDisplayedColumns(entity:DbEntity):any[]{
        const res=[]
        if(entity){
            for(let p of entity.params){
                if(isParamVisible(p, ParamVisibility.Table))
                    res.push(p.name)
            }
        }
        return res
    }

}


