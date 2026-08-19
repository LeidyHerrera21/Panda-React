import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Usuarios.css';

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: string;
  estado: 'Activo' | 'Pendiente' | 'Inactivo';
  fechaRegistro: string;
}

const usuarios: Usuario[] = [
  {
    id: 1,
    nombre: 'Ana Martínez',
    email: 'ana.martinez@gmail.com',
    rol: 'Administrador',
    estado: 'Activo',
    fechaRegistro: '12 Ago 2026'
  },
  {
    id: 2,
    nombre: 'Carlos Ruiz',
    email: 'carlos.ruiz@gmail.com',
    rol: 'Usuario',
    estado: 'Activo',
    fechaRegistro: '10 Ago 2026'
  },
  {
    id: 3,
    nombre: 'Lucía Gómez',
    email: 'lucia.gomez@gmail.com',
    rol: 'Editor',
    estado: 'Pendiente',
    fechaRegistro: '08 Ago 2026'
  },
  {
    id: 4,
    nombre: 'Marcos Peña',
    email: 'marcos.pena@gmail.com',
    rol: 'Usuario',
    estado: 'Activo',
    fechaRegistro: '05 Ago 2026'
  },
  {
    id: 5,
    nombre: 'Sofía Torres',
    email: 'sofia.torres@gmail.com',
    rol: 'Editor',
    estado: 'Inactivo',
    fechaRegistro: '02 Ago 2026'
  }
];

const Usuarios: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="usuarios-container">

  {/* Botón regresar */}
  <button
    className="btn-atras"
    onClick={() => navigate('/dashboard')}
  >
    ← Atrás
  </button>

      {/* Encabezado */}
      <header className="usuarios-header">
        <div>
          <span className="section-label">GESTIÓN</span>
          <h1>Usuarios</h1>
          <p>
            Administra los usuarios registrados en tu plataforma.
          </p>
        </div>

        <button className="btn-new-user">
          + Nuevo Usuario
        </button>
      </header>

      {/* Estadísticas */}
      <div className="usuarios-stats">

        <div className="usuario-stat-card">
          <div className="usuario-stat-icon">👥</div>

          <div>
            <span>Total Usuarios</span>
            <h3>1,280</h3>
          </div>
        </div>

        <div className="usuario-stat-card">
          <div className="usuario-stat-icon active-icon">✓</div>

          <div>
            <span>Usuarios Activos</span>
            <h3>1,145</h3>
          </div>
        </div>

        <div className="usuario-stat-card">
          <div className="usuario-stat-icon pending-icon">◷</div>

          <div>
            <span>Pendientes</span>
            <h3>82</h3>
          </div>
        </div>

        <div className="usuario-stat-card">
          <div className="usuario-stat-icon inactive-icon">○</div>

          <div>
            <span>Inactivos</span>
            <h3>53</h3>
          </div>
        </div>

      </div>

      {/* Contenedor de tabla */}
      <section className="usuarios-card">

        <div className="usuarios-card-header">
          <div>
            <h2>Lista de Usuarios</h2>
            <p>Usuarios registrados recientemente</p>
          </div>

          <div className="usuarios-actions">

            <div className="search-box">
              <span>⌕</span>

              <input
                type="text"
                placeholder="Buscar usuario..."
              />
            </div>

            <button className="filter-button">
              ☰ Filtrar
            </button>

          </div>
        </div>

        {/* Tabla */}
        <div className="usuarios-table-container">

          <table className="usuarios-table">

            <thead>
              <tr>
                <th>Usuario</th>
                <th>Correo</th>
                <th>Rol</th>
                <th>Estado</th>
                <th>Registro</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>

              {usuarios.map((usuario) => (
                <tr key={usuario.id}>

                  <td>
                    <div className="user-info">

                      <div className="user-avatar">
                        {usuario.nombre.charAt(0)}
                      </div>

                      <div>
                        <strong>{usuario.nombre}</strong>
                        <span>ID #{usuario.id}</span>
                      </div>

                    </div>
                  </td>

                  <td>
                    <span className="user-email">
                      {usuario.email}
                    </span>
                  </td>

                  <td>
                    <span className="role">
                      {usuario.rol}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`user-status ${usuario.estado
                        .toLowerCase()
                        .replace('é', 'e')}`}
                    >
                      <span className="status-dot"></span>
                      {usuario.estado}
                    </span>
                  </td>

                  <td>
                    <span className="register-date">
                      {usuario.fechaRegistro}
                    </span>
                  </td>

                  <td>
                    <div className="action-buttons">

                      <button
                        className="action-btn edit"
                        title="Editar usuario"
                      >
                        ✎
                      </button>

                      <button
                        className="action-btn delete"
                        title="Eliminar usuario"
                      >
                        🗑
                      </button>

                    </div>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

        {/* Paginación */}
        <div className="usuarios-pagination">

          <span>
            Mostrando <strong>1 - 5</strong> de <strong>1,280</strong> usuarios
          </span>

          <div className="pagination-buttons">

            <button disabled>
              ‹
            </button>

            <button className="pagination-active">
              1
            </button>

            <button>
              2
            </button>

            <button>
              3
            </button>

            <button>
              ...
            </button>

            <button>
              256
            </button>

            <button>
              ›
            </button>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Usuarios;