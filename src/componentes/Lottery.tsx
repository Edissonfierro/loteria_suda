// src/components/Lottery.tsx
import React, { useState } from 'react';
import NumberSelector from './NumberSelector';
import DrawButton from './DrawButton';
import ResultDisplay from './ResultDisplay';
import './Loteria.css';

const Lottery: React.FC = () => {
    const rows = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ];

    const [selectedRow, setSelectedRow] = useState<number[] | null>(null);
    const [winningRow, setWinningRow] = useState<number[] | null>(null);
    const [isDrawn, setIsDrawn] = useState(false);

    const handleRowSelection = (row: number[]) => {
        setSelectedRow(row);
    };

    const handleDraw = () => {
        const randomIndex = Math.floor(Math.random() * rows.length);
        const winningRow = rows[randomIndex];
        setWinningRow(winningRow);
        setIsDrawn(true);
    };

    return (
        <div>
            <h1>Lotería Sudamericano</h1>
            <NumberSelector onSelectRow={handleRowSelection} />
            <DrawButton onDraw={handleDraw} />
            {isDrawn && <ResultDisplay selectedRow={selectedRow} winningRow={winningRow} />}
        </div>
    );
};

export default Lottery;
