const IdentifierRow = (props) => {
  const { identifier } = props;

  return (
    <tr>
      <td align="center">Identificador</td>
      <td className="monospace" align="center">
        <span className="lexeme">{identifier}</span>
      </td>
      <td align="center">No</td>
    </tr>
  );
};
export default IdentifierRow;
