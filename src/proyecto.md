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

---------------------------------------------------------------------------------------------------------------------------------------------------------------


## 2. Crear archivos con múltiples componentes

### NumberSelector
Permite al usuario seleccionar una fila de números.

### DrawButton
Realiza el sorteo al hacer clic.

### ResultDisplay
Muestra los resultados del sorteo.

### Lottery
Gestiona el estado y lógica del juego. 

---------------------------------------------------------------------------------------------------------------------------------------------------------------

3  Añadir marcado a JavaScript con JSX

JSX (JavaScript XML) es una extensión de la sintaxis de JavaScript que permite escribir HTML dentro del código JavaScript. En React, JSX es utilizado para crear y estructurar la interfaz de usuario de manera declarativa y legible.

Cuando se dice "Usar JSX para mostrar la interfaz de selección de números y los resultados del sorteo", se refiere a crear la parte visual de la aplicación donde el usuario puede interactuar con los elementos de la lotería, como las filas de números, el botón para realizar el sorteo y los resultados.

## ¿Qué hace este fragmento de código?

Este fragmento de código en JSX realiza lo siguiente:

1. **Seleccionar una fila de números**: Se muestran botones con las filas de números que el usuario puede seleccionar. Esta interacción se maneja en el componente `NumberSelector`.
2. **Realizar un sorteo**: El componente `DrawButton` muestra un botón que, al hacer clic, selecciona aleatoriamente una fila ganadora de entre las filas disponibles.
3. **Mostrar los resultados**: El componente `ResultDisplay` muestra si la fila seleccionada por el usuario coincide con la fila ganadora y presenta los resultados.

## ¿Cómo cumple con el requisito de la habilidad?

El código cumple con el requisito de "Añadir marcado a JavaScript con JSX" porque:

- Usa **JSX** para estructurar el HTML dentro de los componentes de React.
- Muestra la **interfaz de usuario** interactiva (selección de números, sorteo y resultados).
- Maneja eventos como clics de usuario para actualizar la interfaz dinámicamente.

## ¿Por qué es la mejor forma de implementarlo?

Es la mejor forma de implementarlo por las siguientes razones:

1. **Simplicidad y claridad**: JSX permite escribir HTML directamente dentro de JavaScript, lo que facilita la comprensión de la estructura de la interfaz.
2. **Integración con React**: JSX es la forma recomendada para crear interfaces en React, lo que permite vincular fácilmente los datos del estado con la interfaz.
3. **Interactividad**: JSX, junto con el estado de React, facilita manejar la interacción del usuario y actualizar la interfaz de manera eficiente.
4. **Escalabilidad**: JSX permite crear componentes reutilizables y modulares, facilitando la expansión de la aplicación.

--------------------------------------------------------------------------------------------------------------