export class StringUtils {
    static amendName(s: string):string {
        if (s) {
            return s.replace(/([A-Z])/g, ' $1')
        }
    }
}