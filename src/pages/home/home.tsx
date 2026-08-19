import React from 'react';
import './home.css';

const Home: React.FC = () => {
  return (
    <section className="home-container">

      {/* =========================================
          ENCABEZADO
      ========================================= */}
      <header className="home-header">
        <div>
          <span className="home-label">
            
          </span>

          <h1>
            Bienvenido de nuevo 👋
          </h1>

          <p>
            Consulta el estado general de tu plataforma y revisa
            las actividades más recientes.
          </p>
        </div>

        <div className="home-date">
          <span>Hoy</span>
          <strong>19 Agosto 2026</strong>
        </div>
      </header>


      {/* =========================================
          ESTADÍSTICAS
      ========================================= */}
      <div className="home-stats">

        <div className="home-stat-card">
          <div className="home-stat-icon purple">
            👥
          </div>

          <div>
            <span>Usuarios</span>
            <h2>12,840</h2>
            <small className="positive">
              ↑ 12.8% este mes
            </small>
          </div>
        </div>


        <div className="home-stat-card">
          <div className="home-stat-icon pink">
            📦
          </div>

          <div>
            <span>Productos</span>
            <h2>1,284</h2>
            <small className="positive">
              ↑ 8.4% este mes
            </small>
          </div>
        </div>


        <div className="home-stat-card">
          <div className="home-stat-icon green">
            💰
          </div>

          <div>
            <span>Ventas</span>
            <h2>S/ 43,920</h2>
            <small className="positive">
              ↑ 18.2% este mes
            </small>
          </div>
        </div>


        <div className="home-stat-card">
          <div className="home-stat-icon orange">
            📈
          </div>

          <div>
            <span>Conversión</span>
            <h2>4.6%</h2>
            <small className="neutral">
              0.4% sin cambios
            </small>
          </div>
        </div>

      </div>


      {/* =========================================
          CONTENIDO PRINCIPAL
      ========================================= */}
      <div className="home-main-grid">

        {/* RESUMEN */}
        <section className="home-card overview-card">

          <div className="home-card-header">
            <div>
              <h2>Resumen general</h2>
              <p>
                Rendimiento de la plataforma durante los últimos días.
              </p>
            </div>

            <span className="status-badge">
              ● Activo
            </span>
          </div>


          <div className="overview-content">

            <div className="overview-item">
              <div className="overview-icon">
                👁
              </div>

              <div>
                <span>Visitas totales</span>
                <strong>43,900</strong>
              </div>
            </div>


            <div className="overview-item">
              <div className="overview-icon">
                🛒
              </div>

              <div>
                <span>Pedidos</span>
                <strong>2,890</strong>
              </div>
            </div>


            <div className="overview-item">
              <div className="overview-icon">
                ⭐
              </div>

              <div>
                <span>Valoración promedio</span>
                <strong>4.8 / 5</strong>
              </div>
            </div>

          </div>


          <div className="home-progress-section">

            <div className="progress-header">
              <span>Objetivo mensual</span>
              <strong>78%</strong>
            </div>

            <div className="home-progress">
              <div className="home-progress-bar"></div>
            </div>

            <small>
              Has alcanzado el 78% de tu objetivo mensual.
            </small>

          </div>

        </section>


        {/* ACCIONES RÁPIDAS */}
        <section className="home-card quick-card">

          <div className="home-card-header">
            <div>
              <h2>Acciones rápidas</h2>
              <p>
                Accede rápidamente a las funciones principales.
              </p>
            </div>
          </div>


          <div className="quick-actions">

            <button className="quick-action">
              <span>👤</span>
              <div>
                <strong>Usuarios</strong>
                <small>Gestionar usuarios</small>
              </div>
            </button>


            <button className="quick-action">
              <span>📦</span>
              <div>
                <strong>Productos</strong>
                <small>Administrar productos</small>
              </div>
            </button>


            <button className="quick-action">
              <span>📊</span>
              <div>
                <strong>Analíticas</strong>
                <small>Ver estadísticas</small>
              </div>
            </button>


            <button className="quick-action">
              <span>⚙️</span>
              <div>
                <strong>Configuración</strong>
                <small>Personalizar panel</small>
              </div>
            </button>

          </div>

        </section>

      </div>


      {/* =========================================
          ACTIVIDAD RECIENTE
      ========================================= */}
      <section className="home-card activity-card">

        <div className="home-card-header">

          <div>
            <h2>Actividad reciente</h2>
            <p>
              Últimos movimientos realizados en la plataforma.
            </p>
          </div>

          <button className="view-all-button">
            Ver todo →
          </button>

        </div>


        <div className="home-activity-list">

          <div className="home-activity-item">

            <div className="activity-icon purple">
              👤
            </div>

            <div className="activity-info">
              <strong>Nuevo usuario registrado</strong>
              <span>María López creó una nueva cuenta.</span>
            </div>

            <time>
              Hace 5 min
            </time>

          </div>


          <div className="home-activity-item">

            <div className="activity-icon pink">
              📦
            </div>

            <div className="activity-info">
              <strong>Nuevo producto añadido</strong>
              <span>Se añadió un nuevo producto al catálogo.</span>
            </div>

            <time>
              Hace 18 min
            </time>

          </div>


          <div className="home-activity-item">

            <div className="activity-icon green">
              💰
            </div>

            <div className="activity-info">
              <strong>Nueva venta registrada</strong>
              <span>Se completó una venta por S/ 280.00.</span>
            </div>

            <time>
              Hace 32 min
            </time>

          </div>


          <div className="home-activity-item">

            <div className="activity-icon orange">
              📈
            </div>

            <div className="activity-info">
              <strong>Rendimiento actualizado</strong>
              <span>Las estadísticas del dashboard fueron actualizadas.</span>
            </div>

            <time>
              Hace 1 hora
            </time>

          </div>

        </div>

      </section>


      {/* =========================================
          MENSAJE FINAL
      ========================================= */}
      <div className="home-welcome-box">

        <div className="welcome-icon">
          ✨
        </div>

        <div>
          <h2>
            Todo está bajo control
          </h2>

          <p>
            Tu plataforma funciona correctamente.
            Revisa las métricas para mantener el rendimiento.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Home;