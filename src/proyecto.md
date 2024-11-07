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

4 #### Añadir llaves con JSX

Las llaves `{}` en JSX se usan para insertar valores de JavaScript dentro del HTML. Permiten mostrar datos dinámicos en la interfaz, como el estado o los resultados de funciones.

## ¿Qué hace este fragmento de código?

Usa llaves para:

- Mostrar la fila seleccionada por el usuario: `{selectedRow}`
- Mostrar el resultado del sorteo: `{winningRow}`

## ¿Cómo cumple con el requisito?

Cumple al usar llaves para actualizar dinámicamente la interfaz con los datos de la selección de fila y el sorteo.

## ¿Por qué es la mejor forma?

Es eficiente porque:

- Conecta la lógica y la vista.
- Actualiza la interfaz automáticamente cuando el estado cambia.
- Hace el código más limpio y fácil de entender.

----------------------------------------------------------------------------------------------------------------------------

#### 5 Configurar componentes con props

El código utiliza `props` para pasar datos de un componente padre a un componente hijo. Esto permite que el componente hijo reciba datos de su componente padre y los use para renderizar contenido dinámico. Por ejemplo, se pasan las filas seleccionadas y los resultados del sorteo desde el componente `Lottery` a los componentes `NumberSelector`, `DrawButton`, y `ResultDisplay`.

### Ejemplo de uso de `props` en los componentes:
- **En el componente `Lottery`**: 
  - Se pasa la función `handleRowSelection` a `NumberSelector` a través de `props`.
  - Se pasa el estado de la fila seleccionada y la fila ganadora a `ResultDisplay`.

## ¿Cómo cumple con el requisito de la habilidad?

Cumple con el requisito de aprender a usar `props` en React. A través de las `props`, el componente `Lottery` puede pasar datos y funciones a los componentes hijos, lo que facilita la reutilización y modularidad del código.

## ¿Por qué es la mejor forma de implementarlo?

- **Modularidad**: Hace que los componentes sean más reutilizables y fáciles de mantener.
- **Simplicidad**: `props` permite pasar datos de forma sencilla entre componentes sin necesidad de gestionar el estado global.
- **Escalabilidad**: Facilita la creación de interfaces dinámicas que pueden crecer en funcionalidad sin complicar el flujo de datos.

---------------------------------------------------------------------------------------------------------

# Resumen de Conceptos en el Proyecto de la Lotería

## Renderizar Condicionalmente

**¿Qué hace este fragmento de código?**
Utiliza la renderización condicional para mostrar el componente `ResultDisplay` solo si el sorteo ha sido realizado. Esto se controla mediante el estado `isDrawn`.

**¿Cómo cumple con el requisito de la habilidad?**
Este fragmento demuestra cómo usar la renderización condicional en React para decidir qué mostrar en la interfaz de usuario basándose en el estado de la aplicación.

**¿Por qué es la mejor forma de implementarlo?**
La renderización condicional optimiza el rendimiento al evitar la renderización innecesaria de componentes. Usar la expresión `&&` es una forma concisa de implementar la condición.

**Componente relacionado:** `Lottery`

---

## Renderizar Múltiples Componentes a la Vez

**¿Qué hace este fragmento de código?**
Este fragmento renderiza varios componentes en el mismo nivel, como `NumberSelector`, `DrawButton` y `ResultDisplay`, dentro del componente `Lottery`.

**¿Cómo cumple con el requisito de la habilidad?**
Demuestra cómo manejar múltiples componentes en una estructura jerárquica sin que dependan directamente entre sí, sino que cada uno tiene su responsabilidad.

**¿Por qué es la mejor forma de implementarlo?**
Este enfoque hace que el código sea modular y fácil de mantener. Cada componente tiene una sola responsabilidad, y se pueden reutilizar en otras partes de la aplicación sin duplicar la lógica.

**Componente relacionado:** `Lottery`

---

## Mantener Componentes Puros

**¿Qué hace este fragmento de código?**
El fragmento mantiene los componentes `NumberSelector`, `DrawButton` y `ResultDisplay` puros, ya que estos no modifican su propio estado sino que reciben todo lo necesario a través de `props`.

**¿Cómo cumple con el requisito de la habilidad?**
Los componentes puros son aquellos que no gestionan su estado interno, sino que dependen únicamente de sus `props` para renderizarse. Esto reduce la complejidad y facilita las pruebas.

**¿Por qué es la mejor forma de implementarlo?**
Mantener los componentes puros mejora el rendimiento y la predictibilidad, ya que React puede optimizar su re-renderizado. Además, facilita la depuración y pruebas unitarias.

**Componentes relacionados:** `NumberSelector`, `DrawButton`, `ResultDisplay`

---

## Entender la UI como Árboles

**¿Qué hace este fragmento de código?**
Este fragmento muestra cómo la interfaz de usuario se organiza como un árbol de componentes en React, donde cada componente tiene un árbol de elementos hijos que puede modificar.

**¿Cómo cumple con el requisito de la habilidad?**
React trata la UI como un árbol jerárquico donde los componentes pueden ser anidados. Esto permite que el estado se propague hacia abajo y las actualizaciones se gestionen de manera eficiente.

**¿Por qué es la mejor forma de implementarlo?**
Ver la UI como un árbol simplifica la gestión de componentes y su estado. React optimiza la actualización del árbol para mejorar el rendimiento al renderizar solo los cambios necesarios.

**Componente relacionado:** `Lottery`

---

## Controlar Eventos del Usuario

**¿Qué hace este fragmento de código?**
El fragmento muestra cómo manejar eventos del usuario, como la selección de una fila o el clic en el botón de sorteo, a través de las funciones `handleRowSelection` y `handleDraw`.

**¿Cómo cumple con el requisito de la habilidad?**
El manejo de eventos es fundamental para interactuar con la interfaz de usuario y realizar cambios en el estado. React ofrece una forma estructurada de controlar estos eventos.

**¿Por qué es la mejor forma de implementarlo?**
El uso de funciones específicas para manejar eventos mejora la claridad y el control sobre la lógica del componente. Además, React maneja de forma eficiente la actualización del estado al asociar eventos con cambios en la UI.

**Componente relacionado:** `Lottery`, `NumberSelector`, `DrawButton`

---

## Gestionar el Estado

**¿Qué hace este fragmento de código?**
Gestiona el estado de la aplicación utilizando el hook `useState`. Los estados `selectedRow`, `winningRow` y `isDrawn` se usan para almacenar la fila seleccionada, la fila ganadora y el estado del sorteo, respectivamente.

**¿Cómo cumple con el requisito de la habilidad?**
El fragmento usa `useState` para gestionar el estado local en componentes funcionales, lo cual es esencial para interactuar con la UI en React.

**¿Por qué es la mejor forma de implementarlo?**
`useState` es la forma recomendada de gestionar el estado en componentes funcionales, lo que hace que el código sea más limpio y fácil de entender. Además, React optimiza los cambios en el estado para mejorar el rendimiento.

**Componente relacionado:** `Lottery`

---

## Actualizar un Array en el Estado

**¿Qué hace este fragmento de código?**
El fragmento usa un array estático de filas de números (`rows`) para seleccionar una fila ganadora de manera aleatoria y actualizar el estado con la fila ganadora.

**¿Cómo cumple con el requisito de la habilidad?**
Este código demuestra cómo trabajar con arrays en el estado. Aunque el array es constante, es un buen ejemplo de cómo manejar datos estructurados en React.

**¿Por qué es la mejor forma de implementarlo?**
React permite la manipulación eficiente de arrays en el estado, y la actualización es optimizada para evitar renderizados innecesarios.

**Componente relacionado:** `Lottery`

---

## Levantar el Estado

**¿Qué hace este fragmento de código?**
El estado del componente `Lottery` se "levanta" al pasar datos como `onSelectRow` y `onDraw` a los componentes hijos, para que estos puedan actualizar el estado del componente padre.

**¿Cómo cumple con el requisito de la habilidad?**
El fragmento demuestra cómo levantar el estado de un componente hijo a un componente padre, lo cual es una técnica esencial en React para compartir datos entre componentes no relacionados.

**¿Por qué es la mejor forma de implementarlo?**
Levantar el estado centraliza la lógica del estado en un solo lugar, lo que facilita el mantenimiento y evita la duplicación de código.

**Componente relacionado:** `Lottery`, `NumberSelector`, `DrawButton`

---

## Efectos Opcionales

**¿Qué hace este fragmento de código?**

el hook `useEffect` es opcional y puede utilizarse para realizar efectos secundarios (como la actualización de datos o el registro de eventos) en componentes de React.

**¿Cómo cumple con el requisito de la habilidad?**
El hook `useEffect` permite realizar tareas como obtener datos, suscribirse a eventos o limpiar recursos cuando el componente se monta o actualiza.

**¿Por qué es la mejor forma de implementarlo?**
`useEffect` es una herramienta poderosa que permite manejar efectos secundarios de manera declarativa, lo que hace que el código sea más limpio y fácil de entender. React optimiza la ejecución de los efectos para mejorar el rendimiento.

**Componente relacionado:** No se usa directamente en el proyecto de la Lotería.
