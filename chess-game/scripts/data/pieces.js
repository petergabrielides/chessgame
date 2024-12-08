const pieces = [];

class Piece{
  #color;
  type;
  location;
  #id;

  constructor(color, type, location, id) {
    this.#color = color;
    this.type = type;
    this.location = location;
    this.#id = id
  }
}

class Pawn extends Piece{
  hasMoved = false;
  justMovedTwo = false;
}

class Bishop extends Piece{

}

class Knight extends Piece{

}

class Rook extends Piece{
  hasMoved = false;
}

class King extends Piece{
  hasMoved = false;
  inCheck = false;
}

class Queen extends Piece{

}
