import { useEffect, useRef, useState } from 'react';

const Editor = (props) => {
  const { text, setText } = props;

  // REF -----------------------------------------

  const lineNumbersRef = useRef(null);

  // STATE ---------------------------------------

  const [lineNumbers, setLineNumbers] = useState(1);

  // EFFECTS -------------------------------------

  useEffect(() => {
    const lines = text.split('\n').length >= 1 ? text.split('\n').length : 1;
    setLineNumbers(lines);
  }, [text]);

  // RENDER --------------------------------------

  return (
    <div className="outer-area">
      <div className="editor">
        <div className="line-numbers" ref={lineNumbersRef}>
          {new Array(lineNumbers).fill(undefined).map((_, index) => (
            <span key={index}></span>
          ))}
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          id="entry"
        ></textarea>
      </div>
    </div>
  );
};

export default Editor;
