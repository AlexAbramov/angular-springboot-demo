import { Sequence } from '../shared/sequence'
import { ColorUtils } from '../../utils/color-utils';
import { Input } from '@angular/core';

export class BubbleChartModel{

    bubbles:Bubble[]=[]
    year:number=1970
    
    get text():string{return Math.round(this.year).toString()}

    ylabels:string[]=['0','25','50','75','100']
    xlabels:string[]=['Q1','Q2','Q3','Q4']

    constructor(){
        for(let i=0;i<20;i++){
            this.createBubble()
        }
    }

    createBubble() {
        const b=new Bubble();
        this.bubbles.push(b);
    }

    update(){
        this.year+=0.1;
        for(let b of this.bubbles){
            b.update();
        }
    }
}

export class Bubble{
    update() {
        let x=this.x+this.random(1.0)
        let y=this.y+this.random(0.5)
        this.rad*=1+(Math.random()-0.5)*0.1
        if(x>180 || y>90){
            x=this.random(20)
            y=this.random(10)
        }
        this.x=x
        this.y=y
        this.r=this.updateColor(this.r)
        this.r=this.updateColor(this.r)
        this.r=this.updateColor(this.r)
    }
    updateColor(c: number): number {
        c+=this.random(5)-2.5;
        if(c>255) c=255;
        else if(c<0) c=0
        return c
    }
    x:number=20+this.random(40)
    y:number=10+this.random(20)
    rad:number=this.random(5)
    r:number=this.random(255)
    g:number=this.random(255)
    b:number=this.random(255)
    get c(){return `rgb(${Math.round(this.r)},${Math.round(this.g)},${Math.round(this.b)})`}
    random(max:number):number{return Math.random()*max;}
}