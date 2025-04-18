'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  const cloneColumn = (section) => {
    const rows = section.querySelectorAll('tr');

    rows.forEach((row) => {
      const cells = row.children;
      const secondCell = cells[1].cloneNode(true);

      row.insertBefore(secondCell, cells[cells.length - 1]);
    });
  };

  cloneColumn(table.tHead);
  cloneColumn(table.tBodies[0]);
  cloneColumn(table.tFoot);
});
