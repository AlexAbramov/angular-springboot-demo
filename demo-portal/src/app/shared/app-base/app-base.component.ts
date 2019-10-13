import { StringUtils } from '../utils/string-utils';

export class AppBaseComponent{
    amendName(s:string){
        return StringUtils.amendName(s)
    }
}