import { useEffect } from 'react';

import './style.css';

const colors = [
  '#FFB6C1', // Light Pink
  '#E6E6FA', // Pale Lavender
  '#90FB98', // Mint Green
  '#80AFF0', // Baby Blue
  '#FFDAB9', // Peach
  '#FFFF99', // Pale Yellow
  '#E6E6FA', // Lavender
  '#8FCEEB', // Sky Blue
  '#79b579', // Light Green
  '#C8A2C8', // Lilac
  '#FFA09A', // Light Salmon
];

const Highlighted = (props) => {
  const { data, error } = props;

  useEffect(() => {
    if (!data?.text) return;

    const spans = document.querySelectorAll('.highlighted-token');

    spans.forEach((span) => {
      if (span.innerHTML === '\n') return;

      let randomColor = colors[Math.floor(Math.random() * colors.length)];

      // make sure previous span's color is not repeated
      if (span.previousSibling) {
        const previousColor = span.previousSibling.style?.backgroundColor || '';

        // previous color is in rgb, convert to hex
        const previousColorHex = previousColor
          .replace('rgb(', '')
          .replace(')', '')
          .split(',')
          .map((color) => parseInt(color).toString(16))
          .join('')
          .toUpperCase();

        if (`#${previousColorHex}` === randomColor) {
          const newRandomColors = colors.filter(
            (color) => color !== previousColor,
          );
          randomColor =
            newRandomColors[Math.floor(Math.random() * newRandomColors.length)];
          console.log(previousColorHex, newRandomColors, randomColor);
        }
      }

      span.style.backgroundColor = randomColor;
    });
  }, [data?.text]);

  if (!data) return <div className="result-text-container"></div>;

  return (
    <div
      className="result-text-container"
      dangerouslySetInnerHTML={{ __html: data?.text }}
    ></div>
  );
};
export default Highlighted;
