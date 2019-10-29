export class Core {

    constructor (model = '', speed = 0) {
        this.model = model;
        this.speed = speed;
    }

    model: string;
    speed: number;
    times: {
        user: number,
        nice: number,
        sys: number,
        idle: number,
        irq: number
    }
}

