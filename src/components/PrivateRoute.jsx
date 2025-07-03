import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function parseJwt(token) {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch {
    return null;
  }
}

export default function PrivateRoute({ children, adminOnly = false }) {
  const token = localStorage.getItem('token');
  if (!token) return <Navigate to="/login" />;

  if (adminOnly) {
    const payload = parseJwt(token);
    if (!payload?.isAdmin) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <span className="text-6xl mb-4">⛔</span>
          <h2 className="text-2xl font-bold text-amber-700 mb-2">Acceso restringido</h2>
          <p className="text-gray-600 mb-4">No tienes permisos de administrador para ver esta sección.</p>
          <a href="/" className="text-amber-600 underline">Volver al inicio</a>
        </div>
      );
    }
  }
  return children;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  adminOnly: PropTypes.bool
};