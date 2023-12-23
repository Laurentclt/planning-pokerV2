export class VotingSystemModel {
    constructor(
        public id: string,
        public name: string,
        public values: number[]
    ) {} ;

    getTitle() {
        return `${this.name}(${this.values})`
    }

}
