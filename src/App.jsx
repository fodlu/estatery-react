import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ResetPassword from './Pages/Reset Password/ResetPassword';
import SignUp from './Pages/signup/SignUp';
import Login from './Pages/login/Login';
import Home from './Pages/Home/Home';
import AppLayout from './Pages/AppLayout';
// import { getAPI } from './resources/resource';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    hasErrorBoundary: true,
    errorElement: <Error />,

    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp />, errorElement: <Error /> },
      { path: '/reset-password', element: <ResetPassword /> }
    ]
  }
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
