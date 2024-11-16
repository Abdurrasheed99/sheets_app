import {useState } from 'react';
import Cell from './Cell';
import CellId from '../models/CellId';
// const cols = Array.from(Array(10).keys());
const cols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Sheet() {
  const [selected, setSelected] = useState<CellId | null>(null);
  const [mouseDownCell, setMouseDownCell] = useState<CellId | null>(null);
  const [mouseUpCell, setMouseUpCell] = useState<CellId | null>(null);

  const isSelected =
    (id: CellId) => {
      if (mouseDownCell && mouseUpCell) {
        const minCol = Math.min(
          mouseDownCell.col.charCodeAt(0),
          mouseUpCell.col.charCodeAt(0)
        );
        const maxCol = Math.max(
          mouseDownCell.col.charCodeAt(0),
          mouseUpCell.col.charCodeAt(0)
        );
        const minRow = Math.min(mouseDownCell.row, mouseUpCell.row);
        const maxRow = Math.max(mouseDownCell.row, mouseUpCell.row);
        const col = id.col.charCodeAt(0);
        const row = id.row;
        if (col >= minCol && col <= maxCol && row >= minRow && row <= maxRow) {
          return true;
        }
        return false;
      }
    };

  return (
    <>
      <p>
        {selected?.toString()} {mouseDownCell?.toString()}{' '}
        {mouseUpCell?.toString()}
      </p>
      <div
        className="grid grid-rows-10"
        onBlur={() => {
          setSelected(null);
          setMouseDownCell(null);
          setMouseUpCell(null);
        }}
      >
        {cols.map((col) => (
          <div key={col} className="grid grid-cols-10 row-span-1">
            {rows.map((row) => (
              <Cell
                key={col + row}
                id={new CellId({ row, col })}
                isSelectedCell={!!isSelected(new CellId({ row, col }))}
                onSelect={(value) => {
                  setSelected(value);
                }}
                handleMouseDown={(id: CellId) => {
                  setMouseDownCell(id);
                }}
                handleMouseUp={(id: CellId) => {
                  setMouseUpCell(id);
                }}
                className="col-span-1 border border-solid border-black focus-within:rounded-xs focus-within:outline focus-within:border-blue-600 focus-within:outline-[1.5] focus-within:outline-blue-600 focus-within:z-10"
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
