import { Sequence } from '../shared/sequence'
import { ColorUtils } from '../../utils/color-utils';

export class BarChartModel{

    ylabels:string[]=['0','25','50','75','100']
    xlabels:string[]=['Q1','Q2','Q3','Q4']

    sequences:Sequence[]=[]

    addSeq(name: string, values: number[]) {
        const seq=new Sequence(name, values);
        seq.color=ColorUtils.getColor(this.sequences.length);
        this.sequences.push(seq)
    }
}