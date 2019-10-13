export class Sequence{
    color:string
    path:string

    constructor(public name:string, public values:number[]){
        this.init();
    }

    init() {
        let path='';
        const l=this.values.length;
        if(l>1){
            for(let i=0;i<l;i++){
                const y=100-this.values[i];
                const x=200*i/(l-1);
                path+=`${Math.round(x)},${Math.round(y)} `
            }        
        }
        this.path=path;
    }
}
