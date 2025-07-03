import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Contacto from "../pages/Contacto";
import Adopciones from "../pages/Adopciones";
import Tienda from "../pages/Tienda";
import Carrito from "../pages/Carrito";

import FormularioAdopcion from "../pages/FormularioAdopcion";

import PrivateRoute from "../components/PrivateRoute";
import AgregarProducto from "../pages/AgregarProducto";
import AdminProductos from "../pages/AdminProductos";
import AgregarPerrito from "../pages/AgregarPerrito";
import AdminPost from "../pages/AgregarPost";
import Login from "../pages/Login";

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/blog" element={<Blog />} />
			<Route path="/contacto" element={<Contacto />} />
			<Route path="/adopciones" element={<Adopciones />} />
			<Route path="/tienda" element={<Tienda />} />
			<Route path="/carrito" element={<Carrito />} />
			<Route path="/adoptar" element={<FormularioAdopcion />} />
			<Route
				path="/admin/agregar-producto"
				element={
					<PrivateRoute adminOnly={true}>
						<AgregarProducto />
					</PrivateRoute>
				}
			/>
        <Route
          path="/admin/productos"
          element={
            <PrivateRoute>
              <AdminProductos />
            </PrivateRoute>
          }
        />
			<Route
				path="/admin/agregar-perrito"
				element={
					<PrivateRoute adminOnly={true}>
						<AgregarPerrito />
					</PrivateRoute>
				}
			/>
			<Route
				path="/admin/agregar-post"
				element={
					<PrivateRoute>
						<AdminPost />
					</PrivateRoute>
				}
			/>

			<Route path="/login" element={<Login />} />
		</Routes>
	);
}
