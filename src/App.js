import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Admin from './Admin';

function App() {

  const routerConfig = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/admin",
      element:<Admin/>
    },
  ]);

  return (
    <RouterProvider router={routerConfig}/>
  );
}

export default App;
