import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

import { getTableFn } from '../../api/get';
import SymbolsTable from './SymbolsTable';

const SymbolsModal = () => {
  const { data: symbols, isError } = useQuery({
    queryKey: ['symbols'],
    queryFn: getTableFn,
  });

  if (isError) {
    Swal.fire({
      title: 'Ocurrió un error',
      text: 'No se pudo cargar la tabla de símbolos',
      icon: 'error',
      confirmButtonText: 'Aceptar',
      showCancelButton: false,
    });
  }

  return (
    <div className="modal fade" id="symbolsModal" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Tabla de símbolos</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <SymbolsTable symbols={symbols} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SymbolsModal;
