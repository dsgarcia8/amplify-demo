import { Amplify, Auth } from 'aws-amplify';
import Componente from './test'
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

const getInfo = async () => {
  console.log('test', Auth.currentUserInfo())
  return 'hola'
}
function App({ signOut, user , currentUserInfo}) {
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
      <Componente></Componente>
    </>
  );
}

export default withAuthenticator(App);
