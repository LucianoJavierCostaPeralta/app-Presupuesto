//Clase Padre 
class Dato {
  //Metodo Constructor
  constructor(descripcion, valor) {
    this._descripcion = descripcion;

    this._valor = valor;
  }

  //Metodo get y set
  get descripcion() {
    return this._descripcion;
  }

  get valor() {
    return this._valor;
  }

  set descripcion(descripcion) {
    this._descripcion = descripcion;
  }

  set valor(valor) {
    this._valor = valor;
  }
}
