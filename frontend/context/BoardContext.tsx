
// "use client"
// import React, { createContext, useState, useEffect, ReactNode } from 'react';
// import { Task, Column } from '@/typings';

// interface BoardContextType {
//   tasks: Task[];
//   getBoard: () => void;
//   getTasksGroupedByColumn: () => Record<string, Column>;
//   updateTaskOrder: (sourceIndex: number, destinationIndex: number, draggableId: string) => void; 
// }

// const BoardContext = createContext<BoardContextType | undefined>(undefined);

// const updateTaskOrder = (sourceIndex: number, destinationIndex: number, draggableId: string) => {
//   // Logic to update the task order
//   // For example, you can update the state or make an API call to update the task order in the backend
// };

// export const BoardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [tasks, setTasks] = useState<Task[]>([]);

//   const getBoard = async () => {
//     const token = localStorage.getItem('token');

//     try {
//       const response = await fetch('http://localhost:4000/api/tasks/gettasks', {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//         },
//       });

//       if (response.status === 401) {
//         alert('You are not authorized. Please log in.');
//         localStorage.removeItem('token');
//         window.location.href = '/login';
//         return;
//       }

//       if (!response.ok) {
//         throw new Error('Failed to fetch tasks');
//       }

//       const data = await response.json();
//       setTasks(data);
//     } catch (error) {
//       console.error('Error fetching tasks:', error);
//     }
//   };

//   const getTasksGroupedByColumn = (): Record<string, Column> => {
//     // Initialize an empty object to hold the columns
//     const columns: Record<string, Column> = {
//       todo: { id: 'todo', tasks: [] },
//       inprogress: { id: 'inprogress', tasks: [] },
//       underreview: { id: 'underreview', tasks: [] },
//       finished: { id: 'finished', tasks: [] },
//     };
  
//     // Group tasks by their status
//     tasks.forEach(task => {
//       const columnId = task.status;
  
//       // Check if the column ID is valid
//       if (columns[columnId]) {
//         columns[columnId].tasks.push(task);
//       }
//     });
  
//     return columns;
//   };

//   useEffect(() => {
//     getBoard();
//   }, []);

//   return (
//     <BoardContext.Provider value={{ tasks, getBoard, getTasksGroupedByColumn, updateTaskOrder }}>
//       {children}
//     </BoardContext.Provider>
//   );
// };

// export const useBoard = () => {
//   const context = React.useContext(BoardContext);
//   if (context === undefined) {
//     throw new Error('useBoard must be used within a BoardProvider');
//   }
//   return context;
// };




"use client"
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Task, Column } from '@/typings';

interface BoardContextType {
  tasks: Task[];
  getBoard: () => void;
  getTasksGroupedByColumn: () => Record<string, Column>;
  updateTaskOrder: (sourceIndex: number, destinationIndex: number, draggableId: string) => void;
}

const BoardContext = createContext<BoardContextType | undefined>(undefined);

const updateTaskOrder = (sourceIndex: number, destinationIndex: number, draggableId: string) => {
  // Logic to update the task order
  // For example, you can update the state or make an API call to update the task order in the backend
};

export const BoardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const getBoard = async () => {
    const token = localStorage.getItem('token');

    try {
      const response = await fetch('http://localhost:4000/api/tasks/gettasks', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.status === 401) {
        alert('You are not authorized. Please log in.');
        localStorage.removeItem('token');
        window.location.href = '/login';
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to fetch tasks');
      }

      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const getTasksGroupedByColumn = (): Record<string, Column> => {
    
    const columns: Record<string, Column> = {
      todo: { id: 'todo', tasks: [] },
      inprogress: { id: 'inprogress', tasks: [] },
      underreview: { id: 'underreview', tasks: [] },
      finished: { id: 'finished', tasks: [] },
    };

    tasks.forEach(task => {
      const columnId = task.status;

      if (columns[columnId]) {
        columns[columnId].tasks.push(task);
      }
    });

    return columns;
  };

  useEffect(() => {
    getBoard();
  }, []);

  return (
    <BoardContext.Provider value={{ tasks, getBoard, getTasksGroupedByColumn, updateTaskOrder }}>
      {children}
    </BoardContext.Provider>
  );
};

export const useBoard = () => {
  const context = React.useContext(BoardContext);
  if (context === undefined) {
    throw new Error('useBoard must be used within a BoardProvider');
  }
  return context;
};
