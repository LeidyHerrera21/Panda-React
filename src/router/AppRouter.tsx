import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Login from '../pages/Login';
import Home from '../pages/home/home';
import Dashboard from '../pages/Dashboard';
import Usuarios from '../pages/usuario/Usuarios';
import Productos from '../pages/productos/Productos';
import Analiticas from '../pages/analiticas/Analiticas';
import Configuracion from '../pages/configuracion/Configuracion';
import ImportarCSV from '../pages/ImportarCSV';
import Proceso from '../pages/proceso/proceso';
import Services from '../pages/servicio/Services';
import Contact from '../pages/contact/Contact';

function AppRoutes() {
 return (
 <Routes>
 <Route element={<MainLayout />}>
 <Route path="login" element={<Login />} />
 <Route path="/" element={<Home />} />
 <Route path="/Dashboard" element={<Dashboard />} />
    <Route path="/dashboard/usuarios" element={<Usuarios />} />
    <Route path="/dashboard/productos" element={<Productos />}/>
    <Route path="/dashboard/analiticas" element={<Analiticas />}/>
    <Route path="dashboard/configuracion" element={<Configuracion />} /> 
 <Route path="/ImportarCSV" element={<ImportarCSV />} />
  <Route path="/nosotros" element={<Proceso />} />
 <Route path="/servicios" element={<Services />} />
 <Route path="/contacto" element={<Contact />} />
 </Route>
 </Routes>
 );
}
export default AppRoutes;