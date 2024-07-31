// 'use client'

// import React from 'react';
// import { Task as TaskType } from '../../typings';
// import { Draggable } from 'react-beautiful-dnd';

// interface TaskProps {
//   task: TaskType;
//   index: number;
// }

// const Task: React.FC<TaskProps> = ({ task, index }) => {
//   return (
//     <Draggable draggableId={task.$id} index={index}>
//       {(provided) => (
//         <div
//           ref={provided.innerRef}
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//           className="p-2 bg-white rounded shadow"
//         >
//           <h3 className="text-sm font-bold">{task.title}</h3>
//           <p className="text-xs">{task.description}</p>
//           <p className="text-xs">{task.priority}</p>
//           <p className="text-xs">{task.deadline?.toLocaleDateString()}</p>
//         </div>
//       )}
//     </Draggable>
//   );
// };

// export default Task;


import React from 'react';
import { Task as TaskType } from '../../typings';
import { Draggable } from 'react-beautiful-dnd';

interface TaskProps {
  task: TaskType;
  index: number;
}

// const Task: React.FC<TaskProps> = ({ task, index }) => {
//   console.log(task); // Log the task object
//   return (
//     <Draggable draggableId={task.$id} index={index}>
//       {(provided) => (
//         <div
//           ref={provided.innerRef}
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//           className="p-2 bg-white rounded shadow"
//         >
//           <h3 className="text-sm font-bold">{task.title}</h3>
//           <p className="text-xs">{task.description}</p>
//           <p className="text-xs">{task.priority}</p>
//           {/* <p className="text-xs">{task.deadline}</p> */}
//         </div>
//       )}
//     </Draggable>
//   );
// };

const sampleTask = {
  $id: "1",
  title: "Sample Task Title",
  description: "Sample Task Description",
  priority: "High",
};

const Task: React.FC<TaskProps> = ({ task = sampleTask, index }) => {
  return (
    <Draggable draggableId={task.$id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="p-2 bg-white rounded shadow"
        >
          <h3 className="text-sm font-bold">{task.title}</h3>
          <p className="text-xs">{task.description}</p>
          <p className="text-xs">{task.priority}</p>
        </div>
      )}
    </Draggable>
  );
};

export default Task;


