import React from 'react';

interface ResultDisplayProps {
    selectedRow: number[];
    winningRow: number[];
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ selectedRow, winningRow }) => {
    const isWinningRow = JSON.stringify(selectedRow) === JSON.stringify(winningRow);

    return (
        <div>
            <h2>Resultados del Sorteo</h2>
            <p>Fila Seleccionada: {selectedRow.join(', ')}</p>
            <p>Números Ganadores: {winningRow.join(', ')}</p>
            
            {isWinningRow ? (
                <p>¡Felicidades! Has seleccionado la fila correcta.</p>
            ) : (
                <p>No has seleccionado la fila correcta. ¡Inténtalo de nuevo!</p>
            )}
        </div>
    );
};

export default ResultDisplay;
