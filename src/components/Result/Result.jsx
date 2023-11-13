import { ReactFlowProvider } from 'reactflow';
import Tokens from './Tokens';
import FlowChart from './FlowChart';

const Result = (props) => {
  const { data, text } = props;

  const nodes = data.tree.nodes;
  const edges = data.tree.edges;

  return (
    <>
      <Tokens data={data.lexicalAnalysis} text={text} />
      {nodes && (
        <ReactFlowProvider>
          <FlowChart nodes={nodes} edges={edges} />}
        </ReactFlowProvider>
      )}
    </>
  );
};
export default Result;
