import './App.css';
import {useRoutes} from 'react-router-dom';
import routes from './routes';
import Navbar from './components/Navbar';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const router =useRoutes(routes)

  return (
    <div className="App">
      <ToastContainer/>
      <Navbar/>
      {router}
    </div>
  );
}

export default App;
