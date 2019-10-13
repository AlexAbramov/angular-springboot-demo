import { Injectable } from '@angular/core';
import { ColorUtils } from '../../utils/color-utils';

export class PieChartModel{
    items=[]

    push(id:number, name:string, val:number){
        this.items.push({id:id, name:name, val:val})
    }

    init(){
        let total=0;
        for(let item of this.items){
            total+=item.val;
        }
        if(total>0){
            let a=0;            
            let index=0;
            for(let item of this.items){
                a=this.setPath(a, item, total)
                item.color=ColorUtils.getColor(index++);
            }
        }
    }

    private setPath(a1, item, total):number{
        const val=item.val
        const d=val/total;
        item.text=Math.round(100*d)+'%';
        const da=360*d;
        const a2=a1+da;
        item.path=this.getArcPath(50,50,50,a1,a2); 
        const p=this.polarToCartesian(50,50,50,(a1+a2)/2);
        item.tx=50+(p.x-50)*0.8;
        item.ty=50+(p.y-50)*0.8;
        return a2;
    }

    private polarToCartesian(x, y, r, a){
        a=(a-90)*Math.PI/180;
        return {
            x: x+r*Math.cos(a),
            y: y+r*Math.sin(a)  
        }
    }
    
    private getArcPath(x,y,r,a1,a2){
        const start=this.polarToCartesian(x,y,r,a2)
        const end=this.polarToCartesian(x,y,r,a1)
        const sweep=a2-a1 <=180? '0'  :'1';
        return [
            'M', start.x, start.y,
            'A', r, r, 0, sweep,0, end.x, end.y,
            'L', x, y,
            'L', start.x, start.y
        ].join(' ');
    }

}