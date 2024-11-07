**Escribir tu primer componente de React**

#### Descripción
Crear un componente `Lotería` que permita al usuario seleccionar una fila de números, realizar un sorteo aleatorio y ver el resultado del sorteo.

#### Código correspondiente
```tsx
import React, { useState } from 'react';
import NumberSelector from './NumberSelector';
import DrawButton from './DrawButton';
import ResultDisplay from './ResultDisplay';
import './Loteria.css';

const Lottery: React.FC = () => {   

#### Definimos las filas de números para el sorteo

    
    const rows = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ];

#### Estados para almacenar la fila seleccionada, la fila ganadora y el estado del sorteo
    const [selectedRow, setSelectedRow] = useState<number[] | null>(null);
    const [winningRow, setWinningRow] = useState<number[] | null>(null);
    const [isDrawn, setIsDrawn] = useState(false);    // tiene 3 estados select winnig isdrraw 

#### Función para manejar la selección de una fila por parte del usuario
    const handleRowSelection = (row: number[]) => {
        setSelectedRow(row);
    };
#### Función para realizar el sorteo y obtener la fila ganadora
    const handleDraw = () => {
        const randomIndex = Math.floor(Math.random() * rows.length); // Selección aleatoria de la fila ganadora
        const winningRow = rows[randomIndex];
        setWinningRow(winningRow); // Actualizamos la fila ganadora
        setIsDrawn(true); // Marcamos que el sorteo ha sido realizado
    };

    return (
        <div>
            <h1>Lotería Sudamericano</h1>
            {/* Componente para seleccionar la fila de números */}
            <NumberSelector onSelectRow={handleRowSelection} />
            {/* Botón para realizar el sorteo */}
            <DrawButton onDraw={handleDraw} />
            {/* Mostramos los resultados si el sorteo ha sido realizado */}
            {isDrawn && <ResultDisplay selectedRow={selectedRow} winningRow={winningRow} />}
        </div>
    );
};

export default Lottery;

Estructura:


Selección de fila::

Se muestran filas de números que el usuario puede seleccionar a través del componente NumberSelector.
Realización del sorteo:

El sorteo se realiza al hacer clic en el componente DrawButton, el cual selecciona aleatoriamente una fila ganadora de las filas disponibles.
Resultados:

Después del sorteo, el componente ResultDisplay muestra los resultados: la fila seleccionada por el usuario y la fila ganadora.

¿Qué hace este fragmento de código?
Implementa el componente Lottery, que permite seleccionar una fila de números, realizar un sorteo y verificar si la selección coincide con la fila ganadora, usando el estado de React para gestionar los datos.

¿Cómo cumple con el requisito de la habilidad?
Cumple al ser el primer componente React que maneja eventos y estado, y utiliza componentes como NumberSelector, DrawButton y ResultDisplay para dividir responsabilidades.

¿Por qué es la mejor forma de implementarlo?
Es modular y reutilizable, utilizando el estado de React para una interfaz dinámica y eficiente, siguiendo buenas prácticas para crear aplicaciones escalables


