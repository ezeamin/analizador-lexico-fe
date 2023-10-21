import TokenRow from './TokenRow';

const Tokens = (props) => {
  const { data } = props;

  const downloadTxtFile = () => {
    const content = data
      .map((row) => `Token: ${row.type}; Lexema: ${row.value}`)
      .join('\n');
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'datos_salida.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <table className="table table-striped table-bordered overflow-hidden">
        <thead>
          <tr>
            <th>Token</th>
            <th>Lexema</th>
          </tr>
        </thead>
        <tbody>
          {data.map((token, index) => (
            <TokenRow token={token} key={index} />
          ))}
        </tbody>
      </table>
      <div className="text-end">
        <button
          type="button"
          className="btn btn-dark"
          onClick={downloadTxtFile}
        >
          Descargar salida
        </button>
      </div>
    </>
  );
};
export default Tokens;
