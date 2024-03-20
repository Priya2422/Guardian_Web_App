// import { useEffect } from 'react';
import * as ReactDOM from 'react-dom/client';
import './main.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
// import { Provider } from 'react-redux';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Error from './pages/Error';
import Home from './pages/Home';
import ProtectedRoutes from './utils/ProtectedRoute';
// import store from './store/store';
import Authentication from './components/Authentication/Authentication';
import ForgetPassword from './components/Authentication/ForgetPassword';
import Privacy from './components/Others/Privacy/Privacy';
import Vault from './pages/Vault';
import AuthLayout from './pages/AuthLayout';
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:4000/graphql',
});
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Authentication />}>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<Signup />} />
        <Route path="forget-password" element={<ForgetPassword />} />
        {/* <Route path="otp" element={<OTPPage />} /> */}
      </Route>
      {/* <Route path="*" element={<Error />} /> */}
      <Route path="/auth" element={<ProtectedRoutes />}>
        <Route index element={<Home />} />
        <Route path="vault" element={<Vault />} />
        <Route path="privacy" element={<Privacy />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>
);
