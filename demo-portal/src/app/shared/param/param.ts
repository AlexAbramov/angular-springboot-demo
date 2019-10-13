export enum ParamVisibility{Table=1, Form=2}

export function isParamVisible(param:DbParam, vis:ParamVisibility):boolean{
    return param.vis && (param.vis & vis)===vis
}

export interface DbParam{
    name: string
    type: string
    min: number
    max: number
    vis:number
    format:string
}
