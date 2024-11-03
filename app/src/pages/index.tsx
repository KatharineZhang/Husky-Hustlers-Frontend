// import React, { ReactNode } from 'react';
// import { AppProps } from 'next/app'; // Import AppProps
// import { SessionProvider, useSession } from "next-auth/react";
// import Homepage from './Homepage';
// import LoginPage from './LoginPage';

// interface AppContentProps {
//   children: ReactNode; // Specify that children can be any valid React node
// }

// const AppContent: React.FC<AppContentProps> = ({ children }) => {
//   const { data: session } = useSession();
//   return (
//     <div>
//       {session ? (
//         <Homepage />
//       ) : (
//         <LoginPage/> // Pass setSignedIn to LoginPage
//       )}
//       {children}
//     </div>
//   );
// }

// const App = ({ Component, pageProps }: AppProps) => {
//   return (
//     <SessionProvider session={pageProps.session}>
//       <AppContent>
//         <Component {...pageProps} />
//       </AppContent>
//     </SessionProvider>
//   );
// };

// export default App;


import React from 'react';
import Head from 'next/head';
import Homepage from './Homepage';

const Home: React.FC = () => {
  return (<div>
    <h1>Does this wrok?</h1>
  </div>);
}

export default Home;