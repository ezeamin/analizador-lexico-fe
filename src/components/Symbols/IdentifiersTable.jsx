import { useIdentifiers } from '../../store/useIdentifiers';

import IdentifierRow from './IdentifierRow';

const IdentifiersTable = () => {
  const { identifiers } = useIdentifiers();

  if (!identifiers?.length) return null;

  return (
    <>
      <p className="mt-3 mb-1">Identificadores</p>
      <hr className="mt-1" />
      <table className="table table-striped table-bordered overflow-hidden">
        <thead>
          <tr>
            <th className="text-center" style={{ width: '30%' }}>
              Token
            </th>
            <th className="text-center" style={{ width: '30%' }}>
              Lexema
            </th>
            <th className="text-center" style={{ width: '40%' }}>
              Palabra reservada
            </th>
          </tr>
        </thead>
        <tbody>
          {identifiers.map((identifier, index) => (
            <IdentifierRow identifier={identifier} key={index} />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default IdentifiersTable;
