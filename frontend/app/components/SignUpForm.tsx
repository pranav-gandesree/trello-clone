
import { Box, Button, FormControl, Input, Stack, Text, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignupForm = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
      const [username, setUsername] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

    const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        console.log(username, email, password)
        
     const response=  await axios.post('http://localhost:4000/api/auth/signup', {username, email, password });
      router.push('/signin');
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" p={4}>
      <Box maxW="md" w="full" boxShadow="lg" rounded="md" p={6}>
        <Stack spacing={4}>
          <Text fontSize="2xl" fontWeight="bold" textAlign="center">
            Welcome to <Text as="span" color="purple.500">Workflo</Text>!
          </Text>

          <FormControl id="username" isRequired>
            <Input type="text" 
            placeholder="Full name" 
            onChange={(e)=>{setUsername(e.target.value)}}
            />
          </FormControl>

          <FormControl id="email" isRequired>
            <Input type="email"
             placeholder="Your email"
             onChange={(e)=>{setEmail(e.target.value)}} />
          </FormControl>

          <FormControl id="password" isRequired>
            <InputGroup size='md'>
              <Input pr='4.5rem' type={show ? 'text' : 'password'} 
              placeholder='Enter password'
              onChange={(e)=>{setPassword(e.target.value)}}
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Button type="submit"
          onClick={handleRegister}
           bg="purple.500" color="white" _hover={{ bg: 'purple.600' }} w="full">
            Sign up
          </Button>
        </Stack>

        <Text textAlign="center">
          Already have an account? <Text onClick={() => router.push('/signin')} color="blue.500" className="cursor-pointer">Log in.</Text>
        </Text>
      </Box>
    </Box>
  );
};

export default SignupForm;

