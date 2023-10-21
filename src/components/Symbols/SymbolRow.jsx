const SymbolRow = (props) => {
    const { symbol } = props;

    return (
      <tr>
        <td>{symbol.type}</td>
        <td>{symbol.value}</td>
        <td>Si</td>
      </tr>
    );
}
export default SymbolRow