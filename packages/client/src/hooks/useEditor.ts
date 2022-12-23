import React, { MouseEvent, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { Connection, Edge, Node, NodeChange, useUpdateNodeInternals } from 'react-flow-renderer';
import { addEdgeThunk } from '../redux/functions/add_edge.action';
import { UpdateNode } from '../redux/features/node.slice';
import { setEdge, setNode } from '../redux/features/active.slice';
import DefaultEdge from '../components/edges/default';
import { removeEdgeById } from '../redux/features/edge.slice';

function useEditor() {
    const edgeTypes = useMemo(() => {
        return {
            "default": DefaultEdge
        }
    }, []);

    const nodes = useSelector((state: RootState) => state.nodes);
    const edges = useSelector((state: RootState) => state.edges);
    const dispatch = useDispatch<AppDispatch>();
    // gets called after end of edge gets dragged to another source or target

    const onEdgeUpdate = (oldEdge: Edge<any>, newConnection: Connection) => {
        console.log("onEdgeUpdate", oldEdge, newConnection);
        // setEdges((els) => updateEdge(oldEdge, newConnection, els));
    };


    const updateNodeInternals = useUpdateNodeInternals();
    const onConnect = (params: Connection) => {
        console.log("onConnect", params);
        dispatch(addEdgeThunk(params));
    };

    const deleteEdgeById = (id: string) => {
        dispatch(removeEdgeById(id));
    }

    const onEdgeClick = (event: MouseEvent<Element, globalThis.MouseEvent>, edge: Edge) => {
        console.log("onEdgeClick", edge);
    };

    const onNodesChange = (_nodes: NodeChange[]) => {
        return dispatch(UpdateNode(_nodes));
    }

    const onNodeDoubleClick = (event: MouseEvent<Element, globalThis.MouseEvent>, node: Node<any>) => {
        dispatch(setNode(node));
    }

    const onEdgeContextMenu = (event: MouseEvent<Element, globalThis.MouseEvent>, edge: Edge) => {
        event.preventDefault();
        console.log("onEdgeContextMenu", edge);
        dispatch(setEdge({
            edge: edge,
            position: {
                x: event.clientX,
                y: event.clientY
            }
        }));
    }

    useEffect(() => {
        // Optimization: only update the nodes that changed
        nodes.forEach((node) => {
            updateNodeInternals(node.id);
        });
    }, [nodes]);

    return {
        edgeTypes,
        nodes,
        edges,
        onEdgeClick,
        onEdgeUpdate,
        onConnect,
        onNodesChange,
        onNodeDoubleClick,
        onEdgeContextMenu,
        deleteEdgeById
    }

}

export default useEditor