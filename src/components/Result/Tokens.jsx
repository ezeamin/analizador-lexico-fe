import { downloadTokens } from '../../utilities/downloadTokens';

import TokenRow from './TokenRow';

const Tokens = (props) => {
  const { data, text } = props;

  const downloadTxtFile = () => {
    downloadTokens(data, text);
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
