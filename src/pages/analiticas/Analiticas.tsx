import React from 'react';
import './Analiticas.css';
import { useNavigate } from 'react-router-dom';

interface Fuente {
  nombre: string;
  porcentaje: number;
  visitas: string;
}

const fuentes: Fuente[] = [
  {
    nombre: 'Google',
    porcentaje: 42,
    visitas: '18,420'
  },
  {
    nombre: 'Redes Sociales',
    porcentaje: 28,
    visitas: '12,280'
  },
  {
    nombre: 'Directo',
    porcentaje: 18,
    visitas: '7,920'
  },
  {
    nombre: 'Referidos',
    porcentaje: 12,
    visitas: '5,280'
  }
];

const Analiticas: React.FC = () => {

  const navigate = useNavigate();

  return (
    <div className="analiticas-container">

      {/* BOTÓN ATRÁS */}
      <button
        className="btn-atras"
        onClick={() => navigate(-1)}
      >
        ← Atrás
      </button>

      {/* =========================================
          ENCABEZADO
      ========================================= */}

      <header className="analiticas-header">

        <div>
          <span className="analiticas-label">
            ESTADÍSTICAS
          </span>

          <h1>Analíticas</h1>

          <p>
            Analiza el rendimiento y comportamiento de tu plataforma.
          </p>
        </div>

        <div className="analytics-actions">

          <select className="period-select">
            <option>Últimos 7 días</option>
            <option>Últimos 30 días</option>
            <option>Últimos 3 meses</option>
            <option>Este año</option>
          </select>

          <button className="export-button">
            ↓ Exportar
          </button>

        </div>

      </header>

      {/* =========================================
          TARJETAS DE MÉTRICAS
      ========================================= */}

      <div className="analytics-stats">

        <div className="analytics-stat-card">

          <div className="analytics-icon purple">
            👁
          </div>

          <div className="analytics-stat-info">

            <span>Visitas Totales</span>

            <h3>43,900</h3>

            <small className="analytics-positive">
              ↑ 18.4% este mes
            </small>

          </div>

        </div>

        <div className="analytics-stat-card">

          <div className="analytics-icon pink">
            👥
          </div>

          <div className="analytics-stat-info">

            <span>Usuarios Únicos</span>

            <h3>12,840</h3>

            <small className="analytics-positive">
              ↑ 12.8% este mes
            </small>

          </div>

        </div>

        <div className="analytics-stat-card">

          <div className="analytics-icon green">
            ⚡
          </div>

          <div className="analytics-stat-info">

            <span>Conversión</span>

            <h3>4.6%</h3>

            <small className="analytics-positive">
              ↑ 2.1% este mes
            </small>

          </div>

        </div>

        <div className="analytics-stat-card">

          <div className="analytics-icon orange">
            ⏱
          </div>

          <div className="analytics-stat-info">

            <span>Tiempo Promedio</span>

            <h3>4m 32s</h3>

            <small className="analytics-neutral">
              0.4% sin cambios
            </small>

          </div>

        </div>

      </div>

      {/* =========================================
          GRÁFICO PRINCIPAL
      ========================================= */}

      <div className="analytics-main-grid">

        <section className="analytics-card performance-card">

          <div className="analytics-card-header">

            <div>
              <h2>Rendimiento</h2>

              <p>
                Visitas y usuarios durante el periodo seleccionado.
              </p>
            </div>

            <div className="chart-legend">

              <span>
                <i className="legend-visits"></i>
                Visitas
              </span>

              <span>
                <i className="legend-users"></i>
                Usuarios
              </span>

            </div>

          </div>

          {/* Gráfico */}
          <div className="analytics-chart">

            <div className="chart-y-axis">

              <span>50K</span>
              <span>40K</span>
              <span>30K</span>
              <span>20K</span>
              <span>10K</span>
              <span>0</span>

            </div>

            <div className="chart-area">

              <div className="chart-grid-lines">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <svg
                className="analytics-line-chart"
                viewBox="0 0 700 250"
                preserveAspectRatio="none"
              >

                <polyline
                  points="
                    0,190
                    100,145
                    200,165
                    300,105
                    400,125
                    500,65
                    600,90
                    700,35
                  "
                  className="visits-line"
                />

                <polyline
                  points="
                    0,215
                    100,185
                    200,195
                    300,150
                    400,165
                    500,120
                    600,135
                    700,95
                  "
                  className="users-line"
                />

              </svg>

              <div className="chart-x-axis">

                <span>Lun</span>
                <span>Mar</span>
                <span>Mié</span>
                <span>Jue</span>
                <span>Vie</span>
                <span>Sáb</span>
                <span>Dom</span>

              </div>

            </div>

          </div>

        </section>

        {/* =========================================
            RESUMEN DE CONVERSIONES
        ========================================= */}

        <section className="analytics-card conversion-card">

          <div className="analytics-card-header">

            <div>
              <h2>Conversiones</h2>

              <p>
                Objetivos completados
              </p>
            </div>

          </div>

          <div className="conversion-circle">

            <div className="conversion-inner">
              <strong>4.6%</strong>
              <span>Conversión</span>
            </div>

          </div>

          <div className="conversion-info">

            <div>
              <span className="conversion-dot completed"></span>
              <span>Completadas</span>
              <strong>1,842</strong>
            </div>

            <div>
              <span className="conversion-dot pending"></span>
              <span>Pendientes</span>
              <strong>736</strong>
            </div>

            <div>
              <span className="conversion-dot failed"></span>
              <span>Abandonadas</span>
              <strong>312</strong>
            </div>

          </div>

        </section>

      </div>

      {/* =========================================
          PARTE INFERIOR
      ========================================= */}

      <div className="analytics-bottom-grid">

        {/* Fuentes de tráfico */}

        <section className="analytics-card traffic-card">

          <div className="analytics-card-header">

            <div>
              <h2>Fuentes de Tráfico</h2>

              <p>
                De dónde llegan tus visitantes.
              </p>
            </div>

          </div>

          <div className="traffic-list">

            {fuentes.map((fuente) => (
              <div
                className="traffic-item"
                key={fuente.nombre}
              >

                <div className="traffic-item-header">

                  <span>
                    {fuente.nombre}
                  </span>

                  <strong>
                    {fuente.porcentaje}%
                  </strong>

                </div>

                <div className="traffic-progress">

                  <div
                    className="traffic-progress-bar"
                    style={{
                      width: `${fuente.porcentaje}%`
                    }}
                  ></div>

                </div>

                <small>
                  {fuente.visitas} visitas
                </small>

              </div>
            ))}

          </div>

        </section>

        {/* Actividad */}

        <section className="analytics-card activity-card">

          <div className="analytics-card-header">

            <div>
              <h2>Actividad</h2>

              <p>
                Actividad reciente de la plataforma.
              </p>
            </div>

          </div>

          <div className="activity-list">

            <div className="activity-item">

              <div className="activity-icon">
                👤
              </div>

              <div>
                <strong>
                  Nuevo usuario registrado
                </strong>

                <span>
                  Hace 5 minutos
                </span>
              </div>

            </div>

            <div className="activity-item">

              <div className="activity-icon">
                📦
              </div>

              <div>
                <strong>
                  Producto añadido
                </strong>

                <span>
                  Hace 18 minutos
                </span>
              </div>

            </div>

            <div className="activity-item">

              <div className="activity-icon">
                💰
              </div>

              <div>
                <strong>
                  Nueva conversión
                </strong>

                <span>
                  Hace 32 minutos
                </span>
              </div>

            </div>

            <div className="activity-item">

              <div className="activity-icon">
                📈
              </div>

              <div>
                <strong>
                  Rendimiento actualizado
                </strong>

                <span>
                  Hace 1 hora
                </span>
              </div>

            </div>

          </div>

        </section>

      </div>

    </div>
  );
};

export default Analiticas;