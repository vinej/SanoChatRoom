
class Action {
    type: string;
    payload: any | null;
    prefixType: String | null = null;
    min: number = 0;
    max: number = 1;
    list: any[] = [];
    next: any = null;

    constructor(type: string, payload: any | null = null, prefixType: String = '', min: number = 0, max: number = 1) {
        this.type = type;
        this.payload = payload;
        this.prefixType = prefixType;
        this.min = min;
        this.max = max;
    }
}

export { Action };