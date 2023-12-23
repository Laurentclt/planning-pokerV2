export abstract class IdGenerator {
    idCount: number = 0;
    generateId(): string {
        this.idCount ++ ;
        return this.idCount.toString();
    };
}
