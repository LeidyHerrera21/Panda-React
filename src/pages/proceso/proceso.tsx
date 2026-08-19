import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="page">

      {/* =========================================
          ENCABEZADO
      ========================================= */}
      <div className="about-header">

        <div>
          <span className="about-label">
            SOBRE NOSOTROS
          </span>

          <h1>
            Conoce nuestro proyecto
          </h1>

          <p>
            Somos un equipo enfocado en crear soluciones digitales
            modernas, eficientes y fáciles de utilizar.
          </p>
        </div>

        <div className="about-header-icon">
          👥
        </div>

      </div>


      {/* =========================================
          PRESENTACIÓN
      ========================================= */}
      <div className="about-intro">

        <div className="about-intro-icon">
          🚀
        </div>

        <div>
          <h2>
            ¿Quiénes somos?
          </h2>

          <p>
            Somos un equipo de estudiantes y desarrolladores interesados
            en la tecnología, el desarrollo de software y la creación de
            experiencias digitales. Nuestro proyecto busca combinar
            funcionalidad, diseño y tecnología para ofrecer una plataforma
            útil y sencilla.
          </p>

          <p>
            Trabajamos utilizando herramientas modernas de desarrollo web
            y aplicando buenas prácticas para construir una aplicación
            organizada, responsive y fácil de mantener.
          </p>
        </div>

      </div>


      {/* =========================================
          MISIÓN Y VISIÓN
      ========================================= */}
      <div className="about-cards">

        <article className="about-card">

          <div className="about-card-icon purple">
            🎯
          </div>

          <div>
            <h2>
              Nuestra misión
            </h2>

            <p>
              Crear soluciones tecnológicas que permitan gestionar
              información de manera rápida, organizada y eficiente,
              brindando una experiencia agradable para nuestros usuarios.
            </p>
          </div>

        </article>


        <article className="about-card">

          <div className="about-card-icon pink">
            🔭
          </div>

          <div>
            <h2>
              Nuestra visión
            </h2>

            <p>
              Convertir nuestro proyecto en una plataforma moderna,
              escalable y confiable que pueda adaptarse a las necesidades
              de diferentes usuarios y organizaciones.
            </p>
          </div>

        </article>

      </div>


      {/* =========================================
          VALORES
      ========================================= */}
      <div className="about-section">

        <div className="about-section-header">
          <span>
            NUESTROS VALORES
          </span>

          <h2>
            Lo que nos representa
          </h2>

          <p>
            Principios que guían nuestro trabajo y desarrollo.
          </p>
        </div>


        <div className="values-grid">

          <article className="value-card">
            <div className="value-icon">
              💡
            </div>

            <h3>
              Innovación
            </h3>

            <p>
              Buscamos nuevas ideas y formas de mejorar nuestras soluciones.
            </p>
          </article>


          <article className="value-card">
            <div className="value-icon">
              🤝
            </div>

            <h3>
              Trabajo en equipo
            </h3>

            <p>
              Colaboramos para alcanzar objetivos y resolver problemas.
            </p>
          </article>


          <article className="value-card">
            <div className="value-icon">
              ⚡
            </div>

            <h3>
              Eficiencia
            </h3>

            <p>
              Desarrollamos soluciones rápidas, organizadas y funcionales.
            </p>
          </article>


          <article className="value-card">
            <div className="value-icon">
              🛡️
            </div>

            <h3>
              Responsabilidad
            </h3>

            <p>
              Nos comprometemos con la calidad y seguridad de nuestro proyecto.
            </p>
          </article>

        </div>

      </div>


      {/* =========================================
          TECNOLOGÍAS
      ========================================= */}
      <div className="about-tech">

        <div>
          <span className="about-section-label">
            TECNOLOGÍA
          </span>

          <h2>
            Herramientas que utilizamos
          </h2>

          <p>
            Nuestro proyecto se desarrolla utilizando tecnologías
            actuales para crear una experiencia moderna y funcional.
          </p>
        </div>


        <div className="tech-list">

          <span>React</span>
          <span>TypeScript</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>HTML</span>

        </div>

      </div>


      {/* =========================================
          MENSAJE FINAL
      ========================================= */}
      <div className="about-footer">

        <div className="about-footer-icon">
          ✨
        </div>

        <div>
          <h2>
            Construimos pensando en el futuro
          </h2>

          <p>
            Cada parte del proyecto representa nuestro aprendizaje,
            creatividad y compromiso con el desarrollo de soluciones
            tecnológicas.
          </p>
        </div>

      </div>

    </section>
  );
};

export default About;