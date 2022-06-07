import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './componentes/Login';
import { Inicio } from './componentes/Inicio';
import { BarraNavegacion } from './componentes/BarraNavegacion';
import { Productos } from './componentes/Productos';
import { Proveedores } from './componentes/Proveedores';;

function App() {

  // const [user, setUser] = useState(null);
  const userLogin = { id: '1', name: 'robin' };
  const userLogout = null;
  // const userLogout = () => setUser(null);


  return (
    <Router>
      <BarraNavegacion />
      <div className="container p-5">
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='login' element={<Login />} />
          <Route path='/productos' element={<Productos user={userLogin}/>} />
          <Route path='/proveedores' element={<Proveedores />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
