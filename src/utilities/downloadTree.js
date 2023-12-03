export const downloadTree = (data) => {
  let content = `Analisis sintáctico:\n\n`;
  content += JSON.stringify(data, null, 2);

  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'analisis_sintactico.txt';
  a.click();
  URL.revokeObjectURL(url);
};
