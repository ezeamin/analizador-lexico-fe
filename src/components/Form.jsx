import { useRef } from 'react';

import { useMutation } from '@tanstack/react-query';
import Swal from 'sweetalert2';

import { postDataFn } from '../api/post';

const Form = () => {
  const entryRef = useRef(null);
  const exitRef = useRef(null);

  const { mutate: sendData } = useMutation({
    mutationFn: postDataFn,
    onSuccess: (e) => {
      Swal.close();
      exitRef.current.value = e.data;
    },
    onError: (e) => {
      Swal.close();
      Swal.fire({
        title: 'Ocurrió un error',
        text: e.message,
        icon: 'error',
        confirmButtonText: 'Aceptar',
        showCancelButton: false,
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const entry = entryRef.current.value;

    if (!entry) {
      Swal.fire({
        title: 'Ocurrió un error',
        text: 'El campo de entrada no puede estar vacío',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        showCancelButton: false,
      });
      return;
    }

    Swal.showLoading();
    sendData(entry);
  };

  return (
    <form className="row" onSubmit={handleSubmit}>
      <fieldset className="col-12 col-md-6">
        <label htmlFor="entry" className="form-label">
          Texto de entrada
        </label>
        <textarea
          id="entry"
          rows="15"
          className="form-control"
          ref={entryRef}
        ></textarea>
      </fieldset>
      <fieldset className="col-12 col-md-6">
        <label htmlFor="exit" className="form-label">
          Texto de salida
        </label>
        <textarea
          id="exit"
          rows="15"
          className="form-control"
          disabled
          ref={exitRef}
        ></textarea>
      </fieldset>
      <div className="mt-3 d-flex justify-content-around">
        <button type="submit" className="btn btn-dark">
          Cargar archivo
        </button>
        <button type="submit" className="btn btn-dark">
          Tabla de símbolos
        </button>
        <button type="submit" className="btn btn-danger">
          Analizar
        </button>
      </div>
    </form>
  );
};
export default Form;
