//Clase hija de Dato
class Egreso extends Dato {
  //Atriburo static
  static contadorEgreso = 0;

  //Metodo constructor
  constructor(descripcion, valor) {
    //heredamos los atribtuos de la clase padre
    //a traves de la palabra reservada super
    super(descripcion, valor);

    //atributo id
    this._id = ++Egreso.contadorEgreso;
  }

  //Metodo get id - No uso set .
  // Ya que no voy a modificar el valor del id
  // Lo va a ser automaticamente

  get id() {
    return this._id;
  }
}
