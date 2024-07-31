'use client'

import React from 'react';
import { Box, Button, VStack, Text, Divider, Avatar, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { FiHome, FiSettings, FiUsers, FiBarChart2, FiDownload } from 'react-icons/fi';
import { useDrawer } from '@/context/DrawerContext';



const Sidebar = () => {
  const router = useRouter();
  const { onOpen } = useDrawer();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <Box
      w="250px"
      h="100vh"
      bg="gray.100"
      color="white"
      p={4}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <VStack spacing={4} align="start">
        <Stack direction="row" align="center" spacing={3}>
          <Avatar name="Joe Gardner" src="path/to/avatar.jpg" />
          <VStack align="start" spacing={0}>
            <Text fontWeight="bold">Joe Gardner</Text>
            <Button size="xs" variant="ghost" colorScheme="gray" onClick={() => {}}>Logout</Button>
          </VStack>
        </Stack>
        <Divider borderColor="gray.600" />
        <Button
          leftIcon={<FiHome />}
          w="full"
          variant="ghost"
          justifyContent="start"
          onClick={() => handleNavigation('/home')}
        >
          Home
        </Button>
        <Button
          leftIcon={<FiUsers />}
          w="full"
          variant="ghost"
          justifyContent="start"
          onClick={() => handleNavigation('/boards')}
        >
          Boards
        </Button>
        <Button
          leftIcon={<FiSettings />}
          w="full"
          variant="ghost"
          justifyContent="start"
          onClick={() => handleNavigation('/settings')}
        >
          Settings
        </Button>
        <Button
          leftIcon={<FiUsers />}
          w="full"
          variant="ghost"
          justifyContent="start"
          onClick={() => handleNavigation('/teams')}
        >
          Teams
        </Button>
        <Button
          leftIcon={<FiBarChart2 />}
          w="full"
          variant="ghost"
          justifyContent="start"
          onClick={() => handleNavigation('/analytics')}
        >
          Analytics
        </Button>
        <Button
          colorScheme="purple"
          w="full"
          onClick={onOpen}
        >
          Create new task
        </Button>
      </VStack>
      <Box textAlign="center" p={4} borderTop="1px solid" borderColor="gray.600">
        <Button
          leftIcon={<FiDownload />}
          w="full"
          variant="ghost"
          justifyContent="start"
          onClick={() => { /* handle download logic */ }}
        >
          Download the app
        </Button>
        <Text fontSize="sm" color="gray.400">Get the full experience</Text>
      </Box>
    </Box>
  );
};

export default Sidebar;
