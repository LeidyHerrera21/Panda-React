import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      icon: '💻',
      title: 'Desarrollo Web',
      description:
        'Creamos sitios web modernos, rápidos y adaptables a cualquier dispositivo.',
      features: ['Diseño responsive', 'Interfaz moderna', 'Optimización web'],
      color: 'purple',
    },
    {
      icon: '⚙️',
      title: 'Desarrollo de Software',
      description:
        'Desarrollamos soluciones de software enfocadas en las necesidades de cada proyecto.',
      features: ['Sistemas personalizados', 'Automatización', 'Mantenimiento'],
      color: 'pink',
    },
    {
      icon: '📊',
      title: 'Análisis de Datos',
      description:
        'Transformamos datos en información útil para facilitar la toma de decisiones.',
      features: ['Reportes', 'Estadísticas', 'Visualización de datos'],
      color: 'cyan',
    },
    {
      icon: '🤖',
      title: 'Inteligencia Artificial',
      description:
        'Integramos herramientas de inteligencia artificial para mejorar procesos y experiencias.',
      features: ['Automatización', 'Modelos inteligentes', 'Asistentes virtuales'],
      color: 'orange',
    },
    {
      icon: '🔐',
      title: 'Seguridad',
      description:
        'Implementamos buenas prácticas para proteger la información y los sistemas.',
      features: ['Protección de datos', 'Control de acceso', 'Buenas prácticas'],
      color: 'green',
    },
    {
      icon: '📱',
      title: 'Aplicaciones',
      description:
        'Diseñamos aplicaciones funcionales con interfaces intuitivas y fáciles de utilizar.',
      features: ['UI moderna', 'Experiencia de usuario', 'Diseño adaptable'],
      color: 'blue',
    },
  ];

  return (
    <section className="services-container">

      {/* HEADER */}
      <div className="services-header">
        <div>
          <span className="services-label">NUESTROS SERVICIOS</span>

          <h1>Soluciones digitales</h1>

          <p>
            Desarrollamos soluciones tecnológicas modernas para transformar
            ideas en proyectos funcionales.
          </p>
        </div>

        <div className="services-badge">
          <span className="services-badge-icon">⚡</span>

          <div>
            <strong>Innovación</strong>
            <small>Tecnología para crecer</small>
          </div>
        </div>
      </div>

      {/* ESTADÍSTICAS */}
      <div className="services-stats">

        <div className="service-stat">
          <strong>+20</strong>
          <span>Proyectos</span>
        </div>

        <div className="service-stat">
          <strong>+10</strong>
          <span>Soluciones</span>
        </div>

        <div className="service-stat">
          <strong>100%</strong>
          <span>Compromiso</span>
        </div>

        <div className="service-stat">
          <strong>24/7</strong>
          <span>Disponibilidad</span>
        </div>

      </div>

      {/* SERVICIOS */}
      <div className="services-grid">

        {services.map((service, index) => (
          <article
            className={`service-card ${service.color}`}
            key={index}
          >

            <div className="service-card-top">
              <div className="service-icon">
                {service.icon}
              </div>

              <span className="service-number">
                0{index + 1}
              </span>
            </div>

            <h2>{service.title}</h2>

            <p>{service.description}</p>

            <div className="service-divider"></div>

            <ul>
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex}>
                  <span>✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="service-button">
              Ver servicio
              <span>→</span>
            </button>

          </article>
        ))}

      </div>

      {/* BLOQUE FINAL */}
      <div className="services-bottom">

        <div className="services-bottom-icon">
          🚀
        </div>

        <div>
          <span>¿TIENES UN PROYECTO?</span>

          <h2>
            Hagamos realidad tu próxima idea
          </h2>

          <p>
            Combinamos diseño, desarrollo y tecnología para crear
            soluciones digitales que generen resultados.
          </p>
        </div>

        <button className="services-contact-button">
          Contáctanos →
        </button>

      </div>

    </section>
  );
};

export default Services;