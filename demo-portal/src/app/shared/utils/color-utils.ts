export class ColorUtils {
    static getColor(index: number): string {
        switch(index%7){
            case 0: return "red";
            case 1: return "green";
            case 2: return "blue";
            case 3: return "magenta";
            case 4: return "pink";
            case 5: return "brown";
            case 6: return "orange";
            default: return "gray";
       }
    }
}