import './App.css';
import 'animate.css';
import { BrowserRouter } from "react-router-dom";
import Routing from './routes/Routing';
import { UserContextProvider } from './context/UserContext';

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
