export const downloadTokens = (data, text) => {
  let content = `Texto de entrada:\n\n${text}\n\n------------------------------------------------------\n\nTokens:\n\n`;
  content += data
    .map(
      (row) =>
        `Token: ${row.type}\t\t${row.type.length >= 6 ? '' : '\t'}Lexema: ${
          row.value
        }`,
    )
    .join('\n');

  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'datos_salida.txt';
  a.click();
  URL.revokeObjectURL(url);
};
