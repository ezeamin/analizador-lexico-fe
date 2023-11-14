import { useRef } from 'react';

import { useMutation } from '@tanstack/react-query';
import Swal from 'sweetalert2';

import { postDataFn } from '../api/post';
import { useIdentifiers } from '../store/useIdentifiers';

import Highlighted from './Result/Highlighted';
import Result from './Result/Result';
import { useState } from 'react';

const Form = () => {
  // ZUSTAND -------------------------------------

  const { setIdentifiers, clearIdentifiers } = useIdentifiers();

  // REFS ----------------------------------------

  const entryRef = useRef(null);
  const inputRef = useRef(null);

  // FETCH ---------------------------------------

  const [errorType, setErrorType] = useState(null);

  const {
    mutate: sendData,
    data: result,
    error,
    reset,
  } = useMutation({
    mutationFn: postDataFn,
    onSuccess: (data) => {
      Swal.close();

      const identifiers = data.lexicalAnalysis.filter(
        (token) => token.type === 'Identificador',
      );

      const uniqueIdentifiers = [
        ...new Set(identifiers.map((item) => item.value)),
      ];

      setIdentifiers(uniqueIdentifiers);
    },
    onError: (e) => {
      console.log(e.type.toUpperCase());
      Swal.close();

      clearIdentifiers();

      if (!e.type) {
        Swal.fire({
          title: 'Ocurrió un error',
          text: e.error,
          icon: 'error',
          confirmButtonText: 'Aceptar',
          showCancelButton: false,
        });
      }

      setErrorType(e.type.toUpperCase());
    },
  });

  const isSuccess = result && !error;
  const isError = error && !result;

  // HANDLERS ------------------------------------

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

  const handleClean = () => {
    entryRef.current.value = '';
    inputRef.current.value = '';
    reset();
    clearIdentifiers();
  };

  // RENDER --------------------------------------

  return (
    <>
      {isSuccess && (
        <div className="alert alert-success">El análisis fue exitoso 🥳🎉</div>
      )}
      {isError && (
        <div className="d-flex gap-2">
          <div className="alert alert-danger w-100">
            El análisis falló. Revisa el error 🥺
          </div>
          <div className="alert alert-danger" style={{ whiteSpace: 'noWrap' }}>
            {`ERROR ${errorType}`}
          </div>
        </div>
      )}
      <form className="row" onSubmit={handleSubmit}>
        <fieldset className="col-12 col-md-6">
          <label htmlFor="entry" className="form-label">
            Texto de entrada
          </label>
          <textarea
            id="entry"
            rows="15"
            className="form-control monospace"
            ref={entryRef}
          ></textarea>
        </fieldset>
        <fieldset className="col-12 col-md-6">
          <label htmlFor="exit" className="form-label mt-2 mt-md-0">
            Texto de salida
          </label>
          <Highlighted
            data={result}
            error={error?.error}
            text={entryRef?.current?.value}
          />
        </fieldset>
        <div className="col-12">
          <div className="mt-3 d-flex flex-column flex-md-row justify-content-between gap-2">
            <input type="file" onChange={handleFileUpload} ref={inputRef} />
            <div className="d-flex gap-2">
              <button
                type="button"
                className="btn btn-secondary w-100"
                onClick={handleClean}
              >
                Limpiar
              </button>
              <button
                type="button"
                className="btn btn-dark w-100"
                data-bs-toggle="modal"
                data-bs-target="#symbolsModal"
              >
                Tabla de símbolos
              </button>
              <button type="submit" className="btn btn-danger w-100">
                Analizar
              </button>
            </div>
          </div>
        </div>
      </form>
      {result && <Result data={result} text={entryRef?.current?.value} />}
    </>
  );
};
export default Form;
