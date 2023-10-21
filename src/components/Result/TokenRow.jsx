const TokenRow = (props) => {
  const { token } = props;

  return (
    <tr>
      <td>{token.type}</td>
      <td>{token.value}</td>
    </tr>
  );
};
export default TokenRow;
