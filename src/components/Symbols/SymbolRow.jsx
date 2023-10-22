const SymbolRow = (props) => {
    const { symbol } = props;

    return (
      <tr>
        <td align="center">{symbol.type}</td>
        <td className="monospace" align="center"><span className="lexeme">{symbol.value}</span></td>
        <td align="center">Si</td>
      </tr>
    );
}
export default SymbolRow