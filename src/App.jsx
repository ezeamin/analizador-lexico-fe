import Form from './components/Form/Form';

const App = () => {
  return (
    <main className="py-3 py-md-5">
      <section className="container">
        <img src="/favicon.png" alt="Logo UNSTA" className="upper-logo" />
        <h1>Analizador léxico y sintáctico</h1>
        <p>
          Integrantes: Valentina Ormaechea, Bernardita Peñalba, Ezequiel Amín
        </p>
        <hr />
        <Form />
      </section>
    </main>
  );
};

export default App;
