import React from 'react';

interface DrawButtonProps {
    onDraw: () => void;
}

const DrawButton: React.FC<DrawButtonProps> = ({ onDraw }) => {
    return (
        <button onClick={onDraw}>Sortear Números</button>
    );
};

export default DrawButton;
