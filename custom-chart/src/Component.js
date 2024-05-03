import React from 'react';

const VerticalLine = () => {
    
    
    
    return (
        <svg height={100} width={1} style={{ cursor: 'pointer' }}>
            <line x1={0} y1={0} x2={0} y2={100} stroke="black" strokeWidth={1} />
        </svg>
    );
};

export default VerticalLine;