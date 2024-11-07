import React from 'react';

interface NumberSelectorProps {
    onSelectRow: (row: number[]) => void;
}

const NumberSelector: React.FC<NumberSelectorProps> = ({ onSelectRow }) => {
    // Definimos las filas de números
    const rows = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
       
    ];

    return (
        <div>
            <h2>Selecciona una fila de números:</h2>
            <div className="number-grid">
                {rows.map((row, index) => (
                    <div key={index} className="number-row">
                        <button onClick={() => onSelectRow(row)}>
                            {row.join(', ')}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NumberSelector;
