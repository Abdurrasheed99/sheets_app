import CellId from "../models/CellId";

export default function Cell({
  className,
  id,
  isSelectedCell,
  onSelect,
  handleMouseDown,
  handleMouseUp
}: {
  className?: string;
  id: CellId;
  isSelectedCell: boolean;
  onSelect: (value: CellId) => void;
  handleMouseDown: (id: CellId) => void;
  handleMouseUp: (id: CellId) => void;
}) {
  return (
    <div
      id={id.col + id.row}
      className={className}
      
      onMouseDown={() => { handleMouseDown(id); onSelect(id)}}
      onMouseUp={() => handleMouseUp(id)}
    >
      {/* <input className="outline-none w-full border-none" /> */}
      <div className={`${isSelectedCell?"bg-blue-400":"bg-green-500"}  w-24 h-12`}>{id.col+id.row}</div>
    </div>
  );
}
