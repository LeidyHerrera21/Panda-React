import React, { useState } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

interface Reporte {
  id: number;
  titulo: string;
  tipo: string;
  descripcion: string;
  fecha: string;
  estado: string;
}

const Dashboard: React.FC = () => {

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [reportes, setReportes] = useState<Reporte[]>([]);

  const [nuevoReporte, setNuevoReporte] = useState({
    titulo: '',
    tipo: 'Rendimiento',
    descripcion: ''
  });

  const manejarCambio = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setNuevoReporte({
      ...nuevoReporte,
      [e.target.name]: e.target.value
    });
  };

  const guardarReporte = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nuevoReporte.titulo.trim()) {
      alert('Ingresa un título para el reporte.');
      return;
    }

    const reporte: Reporte = {
      id: Date.now(),
      titulo: nuevoReporte.titulo,
      tipo: nuevoReporte.tipo,
      descripcion: nuevoReporte.descripcion,
      fecha: new Date().toLocaleDateString('es-PE'),
      estado: 'Completado'
    };

    setReportes([...reportes, reporte]);

    setNuevoReporte({
      titulo: '',
      tipo: 'Rendimiento',
      descripcion: ''
    });

    setMostrarFormulario(false);

    alert('Reporte guardado correctamente.');
  };

  return (
    <div className="dashboard-container">

      {/* SIDEBAR */}
      <aside className="dashboard-sidebar">

        <div className="sidebar-header">
          <h3>Panel Control</h3>
        </div>

        <nav className="sidebar-nav">
          <Link to="/dashboard" className="active">
            📊 Resumen
          </Link>

          <Link to="/dashboard/usuarios">
            👥 Usuarios
          </Link>

          <Link to="/dashboard/productos">
            📦 Productos
          </Link>

          <Link to="/dashboard/analiticas">
            📈 Analíticas
          </Link>

          <Link to="/dashboard/configuracion">
            ⚙️ Configuración
          </Link>
        </nav>

      </aside>


      {/* CONTENIDO PRINCIPAL */}
      <main className="dashboard-content">

        {/* HEADER */}
        <header className="dashboard-header">

          <div>
            <h2>¡Hola de nuevo! 👋</h2>

            <p>
              Aquí tienes un resumen del rendimiento general de tu plataforma.
            </p>
          </div>

          <button
            className="btn-primary"
            onClick={() => setMostrarFormulario(true)}
          >
            + Nuevo Reporte
          </button>

        </header>


        {/* FORMULARIO NUEVO REPORTE */}
        {mostrarFormulario && (
          <div className="report-form-overlay">

            <div className="report-form-card">

              <div className="report-form-header">

                <div>
                  <span className="report-label">
                    NUEVO REPORTE
                  </span>

                  <h2>Crear reporte</h2>

                  <p>
                    Completa la información del nuevo reporte.
                  </p>
                </div>

                <button
                  className="report-close"
                  onClick={() => setMostrarFormulario(false)}
                >
                  ✕
                </button>

              </div>


              <form onSubmit={guardarReporte}>

                <div className="report-form-group">

                  <label htmlFor="titulo">
                    Título del reporte
                  </label>

                  <input
                    id="titulo"
                    name="titulo"
                    type="text"
                    placeholder="Ej. Reporte mensual"
                    value={nuevoReporte.titulo}
                    onChange={manejarCambio}
                  />

                </div>


                <div className="report-form-group">

                  <label htmlFor="tipo">
                    Tipo de reporte
                  </label>

                  <select
                    id="tipo"
                    name="tipo"
                    value={nuevoReporte.tipo}
                    onChange={manejarCambio}
                  >
                    <option value="Rendimiento">
                      Rendimiento
                    </option>

                    <option value="Ventas">
                      Ventas
                    </option>

                    <option value="Usuarios">
                      Usuarios
                    </option>

                    <option value="Productos">
                      Productos
                    </option>

                    <option value="Analítica">
                      Analítica
                    </option>
                  </select>

                </div>


                <div className="report-form-group">

                  <label htmlFor="descripcion">
                    Descripción
                  </label>

                  <textarea
                    id="descripcion"
                    name="descripcion"
                    placeholder="Escribe una descripción del reporte..."
                    value={nuevoReporte.descripcion}
                    onChange={manejarCambio}
                    rows={4}
                  />

                </div>


                <div className="report-form-actions">

                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setMostrarFormulario(false)}
                  >
                    Cancelar
                  </button>

                  <button
                    type="submit"
                    className="btn-primary"
                  >
                    💾 Guardar reporte
                  </button>

                </div>

              </form>

            </div>

          </div>
        )}


        {/* ESTADÍSTICAS */}
        <div className="stats-grid">

          <div className="stat-card">
            <div className="stat-icon">💰</div>

            <div className="stat-info">
              <span>Ingresos Totales</span>
              <h3>$12,450.00</h3>
              <small className="trend positive">
                +15% este mes
              </small>
            </div>
          </div>


          <div className="stat-card">
            <div className="stat-icon">👥</div>

            <div className="stat-info">
              <span>Usuarios Activos</span>
              <h3>1,280</h3>

              <small className="trend positive">
                +8% esta semana
              </small>
            </div>
          </div>


          <div className="stat-card">
            <div className="stat-icon">⚡</div>

            <div className="stat-info">
              <span>Proyectos Realizados</span>
              <h3>42</h3>

              <small className="trend neutral">
                0% cambio
              </small>
            </div>
          </div>


          <div className="stat-card">
            <div className="stat-icon">🔥</div>

            <div className="stat-info">
              <span>Tasa de Conversión</span>
              <h3>4.6%</h3>

              <small className="trend positive">
                +2.1% incremento
              </small>
            </div>
          </div>

        </div>


        {/* GRÁFICO Y ACTIVIDAD */}
        <div className="dashboard-grid">

          <div className="dashboard-card chart-card">

            <h3>Rendimiento Semanal</h3>

            <div className="chart-bar-container">

              <div className="bar-group">
                <div className="bar" style={{ height: '60%' }}></div>
                <span>Lun</span>
              </div>

              <div className="bar-group">
                <div className="bar" style={{ height: '80%' }}></div>
                <span>Mar</span>
              </div>

              <div className="bar-group">
                <div className="bar" style={{ height: '45%' }}></div>
                <span>Mié</span>
              </div>

              <div className="bar-group">
                <div className="bar" style={{ height: '95%' }}></div>
                <span>Jue</span>
              </div>

              <div className="bar-group">
                <div className="bar" style={{ height: '70%' }}></div>
                <span>Vie</span>
              </div>

              <div className="bar-group">
                <div className="bar" style={{ height: '85%' }}></div>
                <span>Sáb</span>
              </div>

              <div className="bar-group">
                <div className="bar" style={{ height: '40%' }}></div>
                <span>Dom</span>
              </div>

            </div>

          </div>


          {/* ACTIVIDAD */}
          <div className="dashboard-card table-card">

            <h3>Actividad Reciente</h3>

            <div className="table-responsive">

              <table>

                <thead>
                  <tr>
                    <th>Usuario</th>
                    <th>Acción</th>
                    <th>Estado</th>
                    <th>Fecha</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>Ana Martínez</td>
                    <td>Suscripción Pro</td>
                    <td>
                      <span className="badge completed">
                        Completado
                      </span>
                    </td>
                    <td>Hace 5m</td>
                  </tr>

                  <tr>
                    <td>Carlos Ruiz</td>
                    <td>Actualizó perfil</td>
                    <td>
                      <span className="badge completed">
                        Completado
                      </span>
                    </td>
                    <td>Hace 20m</td>
                  </tr>

                  <tr>
                    <td>Lucía Gómez</td>
                    <td>Pago pendiente</td>
                    <td>
                      <span className="badge pending">
                        Pendiente
                      </span>
                    </td>
                    <td>Hace 1h</td>
                  </tr>

                  <tr>
                    <td>Marcos Peña</td>
                    <td>Registro de cuenta</td>
                    <td>
                      <span className="badge completed">
                        Completado
                      </span>
                    </td>
                    <td>Hace 3h</td>
                  </tr>

                  {/* REPORTES GUARDADOS */}
                  {reportes.map((reporte) => (

                    <tr key={reporte.id}>

                      <td>Administrador</td>

                      <td>
                        {reporte.titulo}
                      </td>

                      <td>
                        <span className="badge completed">
                          {reporte.estado}
                        </span>
                      </td>

                      <td>
                        {reporte.fecha}
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>


        {/* REPORTES GUARDADOS */}
        {reportes.length > 0 && (

          <div className="dashboard-card reports-card">

            <div className="reports-header">

              <div>
                <h3>📄 Reportes guardados</h3>

                <p>
                  Reportes creados desde el panel de control.
                </p>
              </div>

              <span className="report-count">
                {reportes.length} reporte
                {reportes.length !== 1 ? 's' : ''}
              </span>

            </div>


            <div className="reports-list">

              {reportes.map((reporte) => (

                <div
                  className="saved-report"
                  key={reporte.id}
                >

                  <div className="saved-report-icon">
                    📄
                  </div>

                  <div className="saved-report-info">

                    <h4>
                      {reporte.titulo}
                    </h4>

                    <span>
                      {reporte.tipo} · {reporte.fecha}
                    </span>

                    <p>
                      {reporte.descripcion ||
                        'Sin descripción'}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        )}

      </main>

    </div>
  );
};

export default Dashboard;