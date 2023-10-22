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
      <section className="row mt-3 justify-content-center">
        <article className="col-12 col-md-4">
          <button
            type="button"
            className="btn btn-dark w-100 mb-2"
            onClick={downloadTxtFile}
          >
            Descargar salida
          </button>
        </article>
      </section>
      <section className="row justify-content-center">
        <article className="col-12 col-md-4">
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
        </article>
      </section>
    </>
  );
};
export default Tokens;
