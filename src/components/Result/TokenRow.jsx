const TokenRow = (props) => {
  const { token } = props;

  return (
    <tr>
      <td className="color-table-item">
        <div style={{ backgroundColor: token.color }}></div>
      </td>
      <td align="center">{token.type}</td>
      <td className="monospace" align="center">
        <span className="mb-0 lexeme">{token.value}</span>
      </td>
    </tr>
  );
};
export default TokenRow;
