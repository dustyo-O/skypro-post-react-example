import { FC, useState } from "react";
import { Piece } from "../Piece/Piece";

import "./Playground.css";

const INITIAL_FIELD = [
  [0, 1, 3, 4, 2, 3, 2, 0, 1, 1],
  [1, 1, 3, 4, 2, 3, 2, 0, 1, 1],
  [4, 1, 3, 4, 2, 2, 2, 0, 1, 1],
  [3, 4, 3, 4, 3, 1, 2, 0, 1, 1],
  [0, 1, 3, 4, 2, 3, 2, 0, 1, 1],
  [0, 1, 3, 4, 2, 3, 2, 0, 1, 1],
  [0, 1, 3, 1, 2, 4, 2, 0, 1, 1],
  [0, 1, 3, 4, 2, 3, 2, 0, 1, 1],
  [0, 1, 3, 4, 2, 3, 2, 0, 1, 1],
  [0, 1, 3, 4, 2, 3, 2, 0, 1, 1],
];

type Point = {
  x: number;
  y: number;
};

function findAdjustentSameType(
  point: Point,
  field: number[][],
  found: Point[] = []
) {
  const value = field[point.x][point.y];

  const pointsToCheck = [
    { x: point.x, y: point.y },
    { x: point.x + 1, y: point.y },
    { x: point.x - 1, y: point.y },
    { x: point.x, y: point.y + 1 },
    { x: point.x, y: point.y - 1 },
  ].filter((point) =>
    found.every(
      (foundPoint) => foundPoint.x !== point.x || foundPoint.y !== point.y
    )
  );

  console.log(value);
  console.log(pointsToCheck);

  pointsToCheck.forEach((point) => {
    if (field[point.x][point.y] === value) {
      found.push(point);
    }
  });

  return found;
}

export const Playground: FC = () => {
  const [field, setField] = useState(INITIAL_FIELD);

  const pointClickHandle = (x: number, y: number) => {
    console.log(x, y);
    console.log(findAdjustentSameType({ x, y }, field));
  };

  return (
    <div className="Playground">
      {field.map((row, index) => (
        <div className="Playground-Row" key={index}>
          {row.map((point, pointIndex) => (
            <Piece
              key={`${index}, ${pointIndex}`}
              x={pointIndex}
              y={index}
              value={point}
              onClick={pointClickHandle}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
