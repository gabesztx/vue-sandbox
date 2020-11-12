export const generateColumns = (layoutData: any, layoutColumnNumber: number) => {
  const columns = [] as any;
  let column = 0;
  Object.keys(layoutData).forEach((key, index) => {
    if (index % layoutColumnNumber === 0) {
      columns.push({ row: [] });
      column++;
    }
    columns[column - 1].row.push(key);
  });
  return columns;
};
