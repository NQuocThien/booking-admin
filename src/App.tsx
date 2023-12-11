import "bootstrap/dist/css/bootstrap.min.css";
import MainLayout from "./layout/MainLayout";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import client from "src/config/graphql/apolo-client";
import { AuthContextProvider } from "./context/AuthContext";
import { GoogleMapProvider } from "./context/GoogleMapContext";
function App() {
  return (
    <ApolloProvider client={client}>
      <AuthContextProvider>
        <GoogleMapProvider>
          <MainLayout />
        </GoogleMapProvider>
      </AuthContextProvider>
    </ApolloProvider>
  );
}

export default App;
