export class Activity {
    constructor(
        public id: number,
        public name: string,
        public date: Date,
        public gpxData: string,
        public comments?: string,
        public distance?: number
    ) {}
}

