export class Todo {
    public id: number;
    public texto: string;
    public completado: boolean;

    constructor(texto: string) {
        console.log(texto);
        this.texto = texto;
        this.id = Math.random();
        this.completado = false;
    }

}