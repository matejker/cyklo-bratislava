import React from "react";
import { colorSchema } from "./colors";

export const ColorHeatmap = (values) => {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const n = colorSchema.length - 1;

  return values.map(
    (x) => colorSchema[Math.round((n * (x - min)) / (max - min))],
  );
};

export const ColorHeatmapValues = (values) => {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const n = colorSchema.length - 1;

  return (
    <table style={{ width: "100%" }}>
      <tr>
        {colorSchema.map((color, i) => (
          <td
            style={{
              backgroundColor: color,
              width: `${1000 / (n + 1)}px`,
              color: "#f8f8f9",
            }}
          >
            {Math.round((i * (max - min)) / n)}
          </td>
        ))}
      </tr>
    </table>
  );
};
