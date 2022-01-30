
export class Todo {

    static fromJson( {id, tarea, completado, creado} ){

        const tempTodo = new Todo ( tarea );
        
        tempTodo.id         = id;
        tempTodo.creado     = creado;
        tempTodo.completado = completado;

        return tempTodo;
    }


    constructor( tarea ){

        this.tarea = tarea;

        this.id         = new Date().getTime();  //12333341231231
        this.completado = false;
        this.creado     = new Date();
    }

    imprimirClase(){
        console.log(`${this.tarea} - ${this.id}`);
    }
}