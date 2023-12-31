import { ReactFlowProvider } from 'reactflow';

import { downloadTree } from '../../utilities/downloadTree';

import Tokens from './Tokens';
import FlowChart from './FlowChart';

const Result = (props) => {
  const { data, text } = props;

  const nodes = data.tree.nodes;
  const edges = data.tree.edges;

  const handleDownload = () => {
    downloadTree(data.raw);
  };

  return (
    <div className="row my-5">
      <div className="col-12 col-md-4 col-lg-3 pe-md-4 px-4 px-md-0">
        <Tokens data={data.lexicalAnalysis} text={text} />
      </div>
      <div className="col-12 col-md-8 col-lg-9 mt-3 mt-md-0 px-3 px-md-0">
        <div className="d-flex align-items-center gap-2 w-100 justify-content-center mb-2">
          <h3 className="text-center">Arbol sintáctico</h3>
          <button
            type="button"
            className="btn btn-dark"
            onClick={handleDownload}
          >
            <i className="fa-solid fa-download"></i>
          </button>
        </div>
        {nodes && (
          <ReactFlowProvider>
            <FlowChart nodes={nodes} edges={edges} />
          </ReactFlowProvider>
        )}
      </div>
    </div>
  );
};
export default Result;
