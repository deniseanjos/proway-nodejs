export class Cliente{
    private _id: number;
    private _nome: string;
    private _sobrenome: string;
    
    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }
    
    public get sobrenome(): string {
        return this._sobrenome;
    }

    public set sobrenome(value: string) {
        this._sobrenome = value;
    }   

}