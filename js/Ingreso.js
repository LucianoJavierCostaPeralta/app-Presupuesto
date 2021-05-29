//Clase hija de Dato
class Ingreso extends Dato {
  //Atributo static
  static contadorIngresos = 0;

  //Metodo Constructor
  constructor(descripcion, valor) {
    //heredamos los atribtuos de la clase padre
    //a traves de la palabra reservada super
    super(descripcion, valor);

    //Atributo id
    this._id = ++Ingreso.contadorIngresos;
  }

  //Metodo get id - No uso set .
  // Ya que no voy a modificar el valor del id
  // Lo va a ser automaticamente

  get id() {
    return this._id;
  }
}
