import TokenRow from './TokenRow';

const Tokens = (props) => {
  const { data, text } = props;

  const downloadTxtFile = () => {
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

  return (
    <>
      <section className="row justify-content-center">
          <button
            type="button"
            className="btn btn-dark w-100 mb-2"
            onClick={downloadTxtFile}
          >
            Descargar salida léxica
          </button>
      </section>
      <section className="row justify-content-center">
          <table className="table table-striped table-bordered overflow-hidden mb-0">
            <thead>
              <tr>
                <th className="color-table-header"></th>
                <th className="text-center">Token</th>
                <th className="text-center">Lexema</th>
              </tr>
            </thead>
            <tbody>
              {data.map((token, index) => (
                <TokenRow token={token} key={index} />
              ))}
            </tbody>
          </table>
      </section>
    </>
  );
};
export default Tokens;
