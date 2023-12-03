export const downloadSymbols = (symbols, identifiers) => {
  const symbolsArray = Object.entries(symbols.symbols).map((symbol) => {
    return {
      type: symbol[1],
      value: symbol[0],
    };
  });
  const keywordsArray = Object.entries(symbols.keywords).map((symbol) => {
    return {
      type: symbol[1],
      value: symbol[0],
    };
  });

  let content = `Tabla de símbolos:\n\nPalabras clave:\n`;
  content += keywordsArray
    .map(
      (symbol) =>
        `Tipo: ${symbol.type}\t\t${symbol.type.length >= 6 ? '' : '\t'}Valor: ${
          symbol.value
        }`,
    )
    .join('\n');
  content += `\n\nSímbolos:\n`;
  content += symbolsArray
    .map(
      (symbol) =>
        `Tipo: ${symbol.type}\t\t\t${
          symbol.type.length >= 2 ? '' : '\t'
        }Valor: ${symbol.value}`,
    )
    .join('\n');
  content += `\n\nIdentificadores:\n`;
  content += identifiers.map((id) => `Valor: ${id}`).join('\n');

  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'tabla_simbolos.txt';
  a.click();
  URL.revokeObjectURL(url);
};
