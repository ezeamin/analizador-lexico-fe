import { useEffect } from 'react';
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useReactFlow,
  useEdgesState,
} from 'reactflow';

import { getLayoutedElements } from '../../utilities/getLayoutedElements.js';
import { useCallback } from 'react';

import 'reactflow/dist/style.css';

const FlowChart = (props) => {
  const { nodes: initialNodes, edges: initialEdges } = props;

  const { fitView } = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);

  const reloadLayout = useCallback(() => {
    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
      nodes,
      edges,
    );

    setNodes([...layoutedNodes]);
    setEdges([...layoutedEdges]);

    window.requestAnimationFrame(() => {
      fitView();
    });
  }, [setEdges, setNodes, fitView, initialNodes]);

  useEffect(() => {
    if (initialNodes.length === 0) return;
    if (nodes.length !== initialNodes.length) {
      setNodes(initialNodes);
      setEdges(initialEdges);
      return;
    }

    // TODO
    // reloadLayout(); CHECK!!!!
  }, [reloadLayout, initialNodes, initialEdges, setEdges, setNodes]);

  return (
    <div className="flowchart-viewer">
      <button onClick={reloadLayout}>Reload</button>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        fitView
      >
        <Controls />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};
export default FlowChart;
