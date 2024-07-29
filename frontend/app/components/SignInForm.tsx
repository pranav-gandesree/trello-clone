
import { Box, Button, FormControl, Input, Stack, Text, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignInForm = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
     const response = await axios.post('http://localhost:4000/api/auth/signin', { email, password });
      router.push('/dashboard');
      localStorage.setItem('token', response.data.token);
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

          <FormControl id="email">
            <Input type="email"
             placeholder="Your email"
             onChange={(e)=>{setEmail(e.target.value)}} />
          </FormControl>

          <FormControl id="password">
            <InputGroup size='md'>
              <Input pr='4.5rem'
                onChange={(e)=>{setPassword(e.target.value)}}
              type={show ? 'text' : 'password'}
               placeholder='Enter password' />

              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Button type="submit"
           bg="purple.500" 
           onClick={handleLogin}
          color="white" _hover={{ bg: 'purple.600' }} w="full">
            Sign In
          </Button>
        </Stack>

        <Text textAlign="center">
          Dont have an account? Create a <Text onClick={() => router.push('/signup')} color="blue.500" className="cursor-pointer">new account</Text>
        </Text>
      </Box>
    </Box>
  );
};

export default SignInForm;

