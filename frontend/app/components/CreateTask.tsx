// // components/CreateTask.tsx
// 'use client'

// import {
//     Box,
//     FormControl,
//     FormLabel,
//     Input,
//     Select,
//     Textarea,
//     Button,
//     Drawer,
//     DrawerBody,
//     DrawerFooter,
//     DrawerHeader,
//     DrawerOverlay,
//     DrawerContent,
//     DrawerCloseButton,
//   } from "@chakra-ui/react";
//   import { AddIcon } from "@chakra-ui/icons";
//   import React from "react";
//   import { useDrawer } from "@/context/DrawerContext";
  
//   const CreateTask: React.FC = () => {
//     const { isOpen, onClose } = useDrawer();

//     const createTask = () =>{

//     }
  
//     return (
//       <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton />
//           <DrawerHeader>Create a new task</DrawerHeader>
  
//           <DrawerBody>
//             <Box className="mt-4">
//               <FormControl>
//                 <FormLabel className="text-2xl font-bold">Title</FormLabel>
//                 <Input placeholder="Title" />
//               </FormControl>
//             </Box>
//             <Box className="mt-4 space-y-4">
//               <FormControl>
//                 <FormLabel>Status</FormLabel>
//                 <Select placeholder="Not selected">
//                   <option value="todo">To Do</option>
//                   <option value="in-progress">In Progress</option>
//                   <option value="underreview">Under Review</option>
//                   <option value="finished">Finished</option>
//                 </Select>
//               </FormControl>
//               <FormControl>
//                 <FormLabel>Priority</FormLabel>
//                 <Select placeholder="Not selected">
//                   <option value="low">Low</option>
//                   <option value="medium">Medium</option>
//                   <option value="high">High</option>
//                 </Select>
//               </FormControl>
//               <FormControl>
//                 <FormLabel>Deadline</FormLabel>
//                 <Input type="date" placeholder="Not selected" />
//               </FormControl>
//               <FormControl>
//                 <FormLabel>Description</FormLabel>
//                 <Textarea placeholder="Not selected" />
//               </FormControl>
//             </Box>
           
//           </DrawerBody>
  
//           <DrawerFooter>
//             <Button variant="outline" mr={3} onClick={onClose}>
//               Cancel
//             </Button>
//             <Button colorScheme="blue" onClick={createTask}>Save</Button>
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer>
//     );
//   };
  
//   export default CreateTask;



// components/CreateTask.tsx
'use client'

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { useDrawer } from "@/context/DrawerContext";
import axios from "axios";

const CreateTask: React.FC = () => {
  const { isOpen, onClose } = useDrawer();
  
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");

  const createTask = async () => {
    const taskData = {
      title,
      status,
      priority,
      deadline,
      description
    };

    const token = localStorage.getItem("token"); 

    if (!token) {
      console.error("No token found");
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/api/tasks/addtask', taskData,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data);

      // Handle success, e.g., close the drawer, reset form, etc.
      onClose();
      resetForm();
    } catch (error) {
      console.error("Error creating task:", error);
      // Handle error, e.g., show error message
    }
  };

  const resetForm = () => {
    setTitle("");
    setStatus("");
    setPriority("");
    setDeadline("");
    setDescription("");
  };

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Create a new task</DrawerHeader>

        <DrawerBody>
          <Box className="mt-4">
            <FormControl>
              <FormLabel className="text-2xl font-bold">Title</FormLabel>
              <Input 
                placeholder="Title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
              />
            </FormControl>
          </Box>
          <Box className="mt-4 space-y-4">
            <FormControl>
              <FormLabel>Status</FormLabel>
              <Select 
                placeholder="Not selected" 
                value={status} 
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="todo">To Do</option>
                <option value="in-progress">In Progress</option>
                <option value="underreview">Under Review</option>
                <option value="finished">Finished</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Priority</FormLabel>
              <Select 
                placeholder="Not selected" 
                value={priority} 
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Deadline</FormLabel>
              <Input 
                type="date" 
                placeholder="Not selected" 
                value={deadline} 
                onChange={(e) => setDeadline(e.target.value)} 
              />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea 
                placeholder="Not selected" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
              />
            </FormControl>
          </Box>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue" onClick={createTask}>Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CreateTask;

  