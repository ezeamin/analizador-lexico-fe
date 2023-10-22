import { useEffect } from 'react';

import './style.css';

const Highlighted = (props) => {
  const { data, error, text } = props;

  useEffect(() => {
    if (!data?.text) return;

    const spans = document.querySelectorAll('.highlighted-token');

    spans.forEach((span) => {
      if (span.innerHTML === '\n') return;

      const color = span.className.split('color-')[1];

      span.style.backgroundColor = color;
      span.classList.add('hover-effect');
    });
  }, [data?.text]);

  if (data) {
    return (
      <div
        className="result-text-container monospace"
        dangerouslySetInnerHTML={{ __html: data?.text }}
      ></div>
    );
  }

  if (error) {
    // Show where the error is
    const errorSection = text
      ?.trim()
      ?.replace('\n', ';')
      ?.split(';')
      ?.find((line) => line.includes(error.split(': ')[1]));

    // Spaces + 4 of "En: "
    const spacesBeforeSymbol =
      errorSection?.trim().split(error.split(': ')[1])[0].length + 4;

    return (
      <div
        className="result-text-container monospace"
        style={{ color: '#A00000', backgroundColor: '#ffc8c8' }}
      >
        <p>{error}</p>
        {error.includes('Caracter') && (
          <p className="mb-0">En: {errorSection}</p>
        )}
        {error.includes('Caracter') && (
          <p>
            {new Array(spacesBeforeSymbol).fill('').map((_, index) => (
              <span key={index}>&nbsp;</span>
            ))}
            <span>^</span>
          </p>
        )}
      </div>
    );
  }

  return <div className="result-text-container"></div>;
};
export default Highlighted;
