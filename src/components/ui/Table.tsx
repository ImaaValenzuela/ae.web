import React from 'react';
import { C } from '../../constants/theme';
import { Icon } from './Icon';

interface TableProps {
  heads: string[];
  rows: React.ReactNode;
}

export const Table: React.FC<TableProps> = ({ heads, rows }) => (
  <div style={{ overflowX: "auto" }}>
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
      <thead>
        <tr style={{ background: C.light }}>
          {heads.map((h, i) => (
            <th key={i} style={{ padding: "10px 14px", textAlign: i === 0 ? "left" : "center", fontSize: 12, fontWeight: 700, color: C.blue, textTransform: "uppercase", letterSpacing: ".4px", whiteSpace: "nowrap" }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  </div>
);

interface TableRowProps {
  cells: React.ReactNode[];
  onDelete?: (() => void) | null;
}

export const TableRow: React.FC<TableRowProps> = ({ cells, onDelete }) => (
  <tr style={{ borderBottom: `1px solid ${C.light}` }}>
    {cells.map((c, i) => (
      <td key={i} style={{ padding: "12px 14px", textAlign: i === 0 ? "left" : "center", verticalAlign: "middle" }}>{c}</td>
    ))}
    {onDelete && (
      <td style={{ padding: "12px 14px", textAlign: "center" }}>
        <button onClick={onDelete} style={{ background: "none", border: "none", cursor: "pointer", color: "#ef5350" }} title="Eliminar">
          <Icon name="trash" size={16} />
        </button>
      </td>
    )}
  </tr>
);
