import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from './layout/MainLayout';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import client from 'src/config/graphql/apolo-client';
import { AuthContextProvider } from './context/AuthContext';
function App() {
  return (

    <ApolloProvider client={client}>
      <AuthContextProvider>
        <MainLayout />
      </AuthContextProvider>
    </ApolloProvider>
  );
}

export default App;
