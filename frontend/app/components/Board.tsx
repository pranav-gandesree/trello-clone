
// 'use client'

// import React, { useEffect } from 'react';
// import {
//   DragDropContext,
//   Droppable,
//   Draggable
// } from '@hello-pangea/dnd';

// import { useBoard } from '../../context/BoardContext'; // Adjust path as necessary
// import Column from './Column';

// const Board: React.FC = () => {
//   const { getBoard, getTasksGroupedByColumn, updateTaskOrder } = useBoard();

//   useEffect(() => {
//     getBoard();
//   }, [getBoard]);

//   const tasksGroupedByColumn = getTasksGroupedByColumn();

//   const onDragEnd = (result: any) => {
//     const { destination, source, draggableId } = result;

//     if (!destination) return;

//     const sourceColumnId = source.droppableId;
//     const destinationColumnId = destination.droppableId;

//     // updateTaskOrder(sourceColumnId, destinationColumnId, source.index, destination.index, draggableId);
//   };

//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       <Droppable droppableId="board" direction="horizontal">
//         {(provided) => (
//           <div
//             ref={provided.innerRef}
//             {...provided.droppableProps}
//             className="flex space-x-4"
//           >
//             {Object.entries(tasksGroupedByColumn).map(([columnId, column]) => (
//               <Column key={columnId} column={column} />
//             ))}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// };

// export default Board;

// 'use client'

// import React, { useEffect } from 'react';
// import {
//   DragDropContext,
//   Droppable,
//   Draggable,
//   DropResult
// } from '@hello-pangea/dnd';
// import { useBoard } from '../../context/BoardContext'; // Adjust path as necessary
// import Column from './Column';

// const Board: React.FC = () => {
//   const { getBoard, getTasksGroupedByColumn, updateTaskOrder } = useBoard();

//   useEffect(() => {
//     getBoard();
//   }, [getBoard]);

//   const tasksGroupedByColumn = getTasksGroupedByColumn();

//   const onDragEnd = (result: DropResult) => {
//     const { destination, source, draggableId } = result;

//     if (!destination) return;

//     const sourceColumnId = source.droppableId;
//     const destinationColumnId = destination.droppableId;

//     // updateTaskOrder(sourceColumnId, destinationColumnId, source.index, destination.index, draggableId);
//   };

//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       <Droppable droppableId="board" direction="horizontal" type=''>
//         {(provided) => (
//           <div
//             ref={provided.innerRef}
//             {...provided.droppableProps}
//             className="flex space-x-4"
//           >
//             {Object.entries(tasksGroupedByColumn).map(([columnId, column]) => (
//               <Column key={columnId} column={column} />
//             ))}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// };

// export default Board;





// 'use client'

// import { useEffect } from "react"
// import { DragDropContext, Droppable } from "@hello-pangea/dnd"
// import { useBoard } from '../../context/BoardContext'; 
// import Column from './Column';

// function Board(){
//   const { getBoard, getTasksGroupedByColumn, updateTaskOrder } = useBoard();

//     useEffect(() => {
//       getBoard();
//     }, [getBoard]);

//     const handleDragEnd = (result: DropResult) =>{

//     }


// return (

// <DragDropContext onDragEnd={handleDragEnd}>
//   <Droppable droppableId="board" direction="horizantal"type= "column">

// {(provided)=>{
//   <div className="grid grid-cols-1 md:grid-cols-3"
//   {...provided.droppableProps}
//   ref={provided.innerRef}
//   >

// {Object.entries(getTasksGroupedByColumn).map(([columnId, column]) => (
//               <Column key={columnId} column={column} />
//             ))}
//             {provided.placeholder}
    
//   </div>
// }}

//   </Droppable>
// </DragDropContext>

// )
// }




import { DragDropContext, Droppable } from "@hello-pangea/dnd"
import { useBoard } from '../../context/BoardContext'
import Column from './Column'
import { DropResult } from "@hello-pangea/dnd"
import { useEffect } from "react"

function Board() {
  const { getBoard, getTasksGroupedByColumn, updateTaskOrder } = useBoard()

  useEffect(() => {
    getBoard()
  }, [getBoard])

  const handleDragEnd = (result: DropResult) => {
    // Handle drag end logic
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="grid grid-cols-1 md:grid-cols-3"
          >
            {Object.entries(getTasksGroupedByColumn()).map(([columnId, { tasks }], index) => (
              <Column key={columnId} columnId={columnId} tasks={tasks} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default Board
