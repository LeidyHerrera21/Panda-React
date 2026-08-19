import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert('¡Mensaje enviado correctamente!');

    setFormData({
      nombre: '',
      email: '',
      asunto: '',
      mensaje: '',
    });
  };

  return (
    <section className="contact-container">

      {/* HEADER */}
      <div className="contact-header">
        <div>
          <span className="contact-label">PONTE EN CONTACTO</span>

          <h1>Hablemos de tu proyecto</h1>

          <p>
            Estamos aquí para escuchar tus ideas, resolver tus dudas
            y ayudarte a convertirlas en soluciones digitales.
          </p>
        </div>

        <div className="contact-status">
          <span className="contact-status-dot"></span>

          <div>
            <strong>Estamos disponibles</strong>
            <small>Respondemos lo antes posible</small>
          </div>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="contact-layout">

        {/* INFORMACIÓN */}
        <div className="contact-info">

          <div className="contact-card">
            <div className="contact-card-header">
              <span className="contact-card-icon">📬</span>

              <div>
                <h2>Información de contacto</h2>
                <p>Encuentra diferentes formas de comunicarte con nosotros.</p>
              </div>
            </div>

            <div className="contact-info-list">

              <div className="contact-info-item">
                <div className="contact-info-icon purple">
                  📧
                </div>

                <div>
                  <span>Correo electrónico</span>
                  <strong>contacto@proyecto.com</strong>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon pink">
                  📱
                </div>

                <div>
                  <span>Teléfono</span>
                  <strong>+51 990 326 787</strong>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon cyan">
                  📍
                </div>

                <div>
                  <span>Ubicación</span>
                  <strong>Lima, Perú</strong>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon green">
                  🕐
                </div>

                <div>
                  <span>Horario</span>
                  <strong>Lunes - Viernes, 9:00 - 18:00</strong>
                </div>
              </div>

            </div>
          </div>

          {/* REDES */}
          <div className="contact-social-card">

            <div>
              <span className="contact-social-label">
                CONECTA CON NOSOTROS
              </span>

              <h2>También puedes encontrarnos aquí</h2>

              <p>
                Síguenos y descubre más sobre nuestros proyectos y
                soluciones tecnológicas.
              </p>
            </div>

            <div className="contact-socials">
              <button>💼</button>
              <button>📷</button>
              <button>🐙</button>
              <button>💬</button>
            </div>

          </div>

        </div>

        {/* FORMULARIO */}
        <div className="contact-form-card">

          <div className="contact-form-header">
            <span className="contact-form-label">
              ENVÍANOS UN MENSAJE
            </span>

            <h2>Cuéntanos qué necesitas</h2>

            <p>
              Completa el formulario y nos pondremos en contacto contigo.
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="contact-form-grid">

              <div className="contact-form-group">
                <label htmlFor="nombre">
                  Nombre
                </label>

                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="email">
                  Correo electrónico
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="correo@ejemplo.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="contact-form-group">
              <label htmlFor="asunto">
                Asunto
              </label>

              <input
                id="asunto"
                name="asunto"
                type="text"
                placeholder="¿En qué podemos ayudarte?"
                value={formData.asunto}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="mensaje">
                Mensaje
              </label>

              <textarea
                id="mensaje"
                name="mensaje"
                rows={6}
                placeholder="Escribe tu mensaje..."
                value={formData.mensaje}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="contact-submit-button"
            >
              Enviar mensaje
              <span>→</span>
            </button>

          </form>

        </div>

      </div>

      {/* BLOQUE FINAL */}
      <div className="contact-bottom">

        <div className="contact-bottom-icon">
          ⚡
        </div>

        <div>
          <span>RESPUESTA RÁPIDA</span>

          <h2>
            Tu idea merece convertirse en realidad
          </h2>

          <p>
            Cuéntanos tu proyecto y trabajaremos juntos para encontrar
            la mejor solución tecnológica.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Contact;