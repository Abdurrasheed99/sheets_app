class CellId {
  row: number;
  col: string;
  constructor({ row, col }: { row: number; col: string }) {
    this.col = col;
    this.row = row;
  }
  toString() {
    return this.col + this.row;
  }
}

export default CellId;
