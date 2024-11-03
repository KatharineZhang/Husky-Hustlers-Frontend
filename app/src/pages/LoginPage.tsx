// pages/login.tsx
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const handleLogin = () => {
    signIn("google");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
};

export default LoginPage;


// import React, { useState, useEffect, FC } from "react";
// import { memo } from "react";
// import NextAuth from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google';


// interface Props {
//   setSignedIn: (value: boolean) => void; // Accepts setSignedIn as a prop from App.tsx
// }

// interface User {
//   access_token: string;
// }

// interface Profile {
//   picture: string;
//   name: string;
//   email: string;
//   hd?: string;
// }

// const LoginPageContent: FC<Props> = ({ setSignedIn }) => {
  
// };

// export const LoginPage: FC<Props> = memo(function LoginPage(props: Props) {
//   return (
//     <div className={`${resets.clapyResets} ${classes.root}`}>
//       <GoogleOAuthProvider clientId="410136854211-33d088kspbh9se3oej3sebpmj0jal8v7.apps.googleusercontent.com">
//         <LoginPageContent {...props} />
//       </GoogleOAuthProvider>
//     </div>
//   );
// });

// export default LoginPage;
