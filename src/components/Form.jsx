import { useRef } from 'react';

import { useMutation } from '@tanstack/react-query';
import Swal from 'sweetalert2';

import { postDataFn } from '../api/post';

// import Tokens from './Result/Tokens';
import Highlighted from './Result/Highlighted';

const Form = () => {
  const entryRef = useRef(null);

  const {
    mutate: sendData,
    data: result,
    error,
  } = useMutation({
    mutationFn: postDataFn,
    onSuccess: () => {
      Swal.close();
    },
    onError: (e) => {
      Swal.close();

      if (!error.message.includes('Caracter')) {
        Swal.fire({
          title: 'Ocurrió un error',
          text: e.message,
          icon: 'error',
          confirmButtonText: 'Aceptar',
          showCancelButton: false,
        });
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // const entry = entryRef.current.value;
    // get the text from the entryRef, but preserve the line breaks
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
    sendData({ text: entry });
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      if (file.type === 'text/plain' || file.name.endsWith('.txt')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const fileContent = e.target.result;
          entryRef.current.value = fileContent;
        };
        reader.readAsText(file);
      } else {
        Swal.fire({
          title: 'Ocurrió un error',
          text: 'El archivo debe ser de tipo .txt',
          icon: 'error',
          confirmButtonText: 'Aceptar',
          showCancelButton: false,
        });
      }
    }
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
        <Highlighted
          data={result}
          error={error?.message}
          // text={entryRef.current.value}
        />
      </fieldset>
      <div className="col-12 col-md-6">
        <div className="mt-3 d-flex justify-content-around gap-2">
          <input type="file" onChange={handleFileUpload} />
          <button
            type="button"
            className="btn btn-dark"
            data-bs-toggle="modal"
            data-bs-target="#symbolsModal"
          >
            Tabla de símbolos
          </button>
          <button type="submit" className="btn btn-danger">
            Analizar
          </button>
        </div>
      </div>
    </form>
  );
};
export default Form;
