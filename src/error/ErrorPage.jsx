const ErrorPage = () => {
  return (
    <main className="w-100 vh-100 d-flex flex-column justify-content-center align-items-center text-center">
      <img src="/favicon.png" alt="Logo UNSTA" className="upper-logo" />
      <h1>Ocurrió un error! 🥺</h1>
      <p>Reinicia la página con el siguiente botón y volvé a intentar</p>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => window.location.reload()}
      >
        Reintentar
      </button>
    </main>
  );
};
export default ErrorPage;
