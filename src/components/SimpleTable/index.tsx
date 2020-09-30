import React, { ReactElement, useState } from 'react';

import { CellComponent, SimpleTableColumn, SimpleTableProps } from './types';

import styles from './styles.module.css';
import { createRowSorter, rowElementKey } from './helpers';
import { classNames, typedMemo } from 'utilities';

function SimpleTable<Row>({
  className,
  columns,
  rows,
  idKey,
}: SimpleTableProps<Row>): ReactElement {
  const [columnToSortBy, setColumnToSortBy] = useState<
    SimpleTableColumn<Row> | undefined
  >();

  const [sortOrder, setSortOrder] = useState<1 | -1>(1);

  const onColumnHeadingClick = (column: SimpleTableColumn<Row>) => {
    if (column.compare) {
      if (columnToSortBy !== column || sortOrder === 1) {
        setColumnToSortBy(column);
      } else {
        setColumnToSortBy(undefined);
      }
      setSortOrder(columnToSortBy === column ? -1 : 1);
    }
  };

  const sortRows = createRowSorter(columnToSortBy, sortOrder);

  return (
    <table className={classNames(styles.table, className)}>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <td
              className={
                column === columnToSortBy ? styles.activeColumnHeading : ''
              }
              key={index}
              onClick={() => onColumnHeadingClick(column)}
            >
              {typeof column.heading === 'string' ||
              column.heading === undefined ? (
                column.heading
              ) : (
                <column.heading />
              )}
            </td>
          ))}
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {sortRows(rows).map(([row, originalRowIndex]) => (
          <tr
            key={rowElementKey(row as Row, idKey, originalRowIndex as number)}
          >
            {columns.map(({ cell, cellClassName }, columnIndex) => (
              <td key={columnIndex} className={cellClassName}>
                {(() => {
                  if (typeof cell === 'string') {
                    return String((row as Row)[cell as keyof Row]);
                  } else {
                    const Cell = cell as CellComponent<Row>;
                    return <Cell row={row as Row} />;
                  }
                })()}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default typedMemo(SimpleTable);
