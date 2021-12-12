import { FC } from "react";

import "./Piece.css";

type PieceProps = {
  x: number;
  y: number;
  value: number;
  onClick: (x: number, y: number) => void;
};

export const Piece: FC<PieceProps> = ({ x, y, value, onClick }) => {
  const clickHandle = () => {
    onClick(x, y);
  };

  return (
    <div className="Piece" onClick={clickHandle}>
      {value}
    </div>
  );
};
