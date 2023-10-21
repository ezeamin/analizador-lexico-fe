import SymbolRow from './SymbolRow';

const SymbolsTable = (props) => {
  const { symbols } = props;

  if (!symbols) return null;

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

  const fullSymbols = [...symbolsArray, ...keywordsArray];

  return (
    <table className="table table-striped table-bordered overflow-hidden">
      <thead>
        <tr>
          <th>Token</th>
          <th>Lexema</th>
          <th>Palabra reservada</th>
        </tr>
      </thead>
      <tbody>
        {fullSymbols.map((symbol, index) => (
          <SymbolRow symbol={symbol} key={index} />
        ))}
      </tbody>
    </table>
  );
};
export default SymbolsTable;
