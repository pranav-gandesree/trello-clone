// ' use client'

// import React from 'react';
// import { Column as ColumnType } from '../../typings';
// import Task from './Task';
// import { Droppable } from 'react-beautiful-dnd';

// interface ColumnProps {
//   column: ColumnType;
// }

// const Column: React.FC<ColumnProps> = ({ column }) => {
//   return (
//     <div className="w-1/4 p-4 bg-gray-200 rounded">
//       <h2 className="text-lg font-bold">{column.id.toUpperCase()}</h2>
//       <Droppable droppableId={column.id}>
//         {(provided) => (
//           <div
//             ref={provided.innerRef}
//             {...provided.droppableProps}
//             className="space-y-2"
//           >
//             {column.tasks.map((task, index) => (
//               <Task key={task.$id} task={task} index={index} />
//             ))}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     </div>
//   );
// };

// export default Column;




// import React from 'react';
// import { Droppable, Draggable } from '@hello-pangea/dnd';
// import TaskComponent from './Task'; // Rename the import to TaskComponent
// import { Task as TaskType } from '@/typings'; // Rename the type import to TaskType

// const Column: React.FC<{ column: any }> = ({ column }) => {
//   return (
//     <div className="column">
//       <h2>{column.title}</h2>
//       <Droppable droppableId={column.id} type="TASK">
//         {(provided) => (
//           <div ref={provided.innerRef} {...provided.droppableProps}>
//             {column.tasks.map((task: TaskType, index: number) => (
//               <Draggable key={task.id} draggableId={task.id} index={index}>
//                 {(provided) => (
//                   <div
//                     ref={provided.innerRef}
//                     {...provided.draggableProps}
//                     {...provided.dragHandleProps}
//                   >
//                     <TaskComponent task={task} index={0} />
//                   </div>
//                 )}
//               </Draggable>
//             ))}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     </div>
//   );
// };

// export default Column;



// import { TypedColumn, Task } from "@/typings"
// import { Draggable } from "@hello-pangea/dnd"

// type Props ={
//   id: TypedColumn
//   tasks: Task[]
//   index: number
// }

// function Column(id, tasks, index){
// return(

// <Draggable draggableId="id" index={index}>
//   {(provided)=>{
//     <div
//     {...provided.draggableProps}
//     {...provided.dragHandleProps}
//     ref={provided.innerRef}
//     >

//       {/* {render droppable} */}
//       <Droppable droppableId={index.toString()} type="card">
// {(provided, snapshot)=>{
//   <div 
//   {...provided.droppableProps}
//   ref={provided.innerRef}
//   className={`p-2 rounded-2xl ${snapshot.isDraggingOver ? "bg-green200": "bg-white/50"}`}
  
//   >
// <h2>{</h2>
//   </div>
// }}
//       </Droppable>

//     </div>
//   }}
// </Draggable>
// )
// }

// export default Column





import { Droppable, Draggable } from "@hello-pangea/dnd"
import { Task, TypedColumn } from "@/typings"

type Props = {
  columnId: string
  tasks: Task[]
  index: number
}

function Column({ columnId, tasks, index }: Props) {
  return (
    <Draggable draggableId={columnId} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="p-2 rounded-2xl bg-white/50"
        >
          <Droppable droppableId={columnId} type="card">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`p-2 rounded-2xl ${snapshot.isDraggingOver ? "bg-green-200" : "bg-white/50"}`}
              >
                <h2 className="text-lg font-bold">{columnId}</h2>
                {tasks.map((task) => (
                  <div key={task.id} className="my-2 p-2 bg-gray-100 rounded">{task.content}</div>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  )
}

export default Column
