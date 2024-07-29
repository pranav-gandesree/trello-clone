// "use client"

// import { useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';

// const SignUp = () => {
//     const [username, setUsername] = useState('')
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:4000/api/auth/signup', {username, email, password });
//       router.push('/signin');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>

//       <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// };

// export default SignUp;

"use client"

import SignupForm from '../components/SignUpForm'

const signupPage = () => {
  return (
    <div>
      <SignupForm />
    </div>
  )
}

export default signupPage

