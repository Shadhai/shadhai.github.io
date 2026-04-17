import React from 'react';
import { motion } from 'framer-motion';

const NeuralNetwork = () => {
    // Define layers and nodes with increased spacing
    const layers = [
        { id: 'input', label: 'INPUT', nodes: 3, x: 60 },
        { id: 'hidden1', label: 'LATENT_01', nodes: 5, x: 200 },
        { id: 'hidden2', label: 'LATENT_02', nodes: 4, x: 340 },
        { id: 'output', label: 'OUTPUT', nodes: 2, x: 480 },
    ];

    const layerHeight = 350;
    const getNodeY = (nodeIndex, totalNodes) => {
        const spacing = layerHeight / (totalNodes + 1);
        return spacing * (nodeIndex + 1);
    };

    // Generate connections
    const connections = [];
    for (let i = 0; i < layers.length - 1; i++) {
        const currentLayer = layers[i];
        const nextLayer = layers[i + 1];
        for (let j = 0; j < currentLayer.nodes; j++) {
            for (let k = 0; k < nextLayer.nodes; k++) {
                connections.push({
                    id: `${i}-${j}-${k}`,
                    x1: currentLayer.x,
                    y1: getNodeY(j, currentLayer.nodes),
                    x2: nextLayer.x,
                    y2: getNodeY(k, nextLayer.nodes),
                });
            }
        }
    }

    return (
        <div className="neural-net-wrapper" style={{ width: '100%', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <svg width="100%" height="100%" viewBox="0 0 550 450" style={{ maxWidth: '600px' }}>
                {/* Connections */}
                {connections.map((conn) => (
                    <g key={conn.id}>
                        {/* Static Path */}
                        <line
                            x1={conn.x1}
                            y1={conn.y1}
                            x2={conn.x2}
                            y2={conn.y2}
                            stroke="var(--accent-color)"
                            strokeWidth="0.8"
                            opacity="0.1"
                        />
                        {/* Animated Pulse */}
                        <motion.line
                            x1={conn.x1}
                            y1={conn.y1}
                            x2={conn.x2}
                            y2={conn.y2}
                            stroke="var(--accent-color)"
                            strokeWidth="1.8"
                            strokeDasharray="4 24"
                            initial={{ strokeDashoffset: 28 }}
                            animate={{ strokeDashoffset: -28 }}
                            transition={{
                                duration: 1.5 + Math.random() * 2,
                                repeat: Infinity,
                                ease: "linear",
                                delay: Math.random() * 2,
                            }}
                            opacity="0.5"
                        />
                    </g>
                ))}

                {/* Nodes and Labels */}
                {layers.map((layer) => (
                    <g key={layer.id}>
                        {/* Layer Label */}
                        <text
                            x={layer.x}
                            y={layerHeight + 50}
                            fill="var(--accent-color)"
                            fontSize="10"
                            textAnchor="middle"
                            fontFamily="var(--font-home-heading)"
                            letterSpacing="1px"
                            opacity="0.8"
                        >
                            {layer.label}
                        </text>

                        {Array.from({ length: layer.nodes }).map((_, i) => (
                            <motion.circle
                                key={`${layer.id}-${i}`}
                                cx={layer.x}
                                cy={getNodeY(i, layer.nodes)}
                                r="5"
                                fill="var(--accent-color)"
                                initial={{ scale: 0.8, opacity: 0.5 }}
                                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                }}
                            />
                        ))}
                    </g>
                ))}
            </svg>
        </div>
    );
};

export default NeuralNetwork;
