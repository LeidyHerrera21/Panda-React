import React, { useState,useRef } from 'react';
import './Configuracion.css';
import { useTheme } from '../../ThemeContext';
import { useNavigate } from 'react-router-dom';


const Configuracion: React.FC = () => {
  const navigate = useNavigate();
  const { tema, setTema } = useTheme();

  const [activeTab, setActiveTab] = useState('perfil');
  const [profileImage, setProfileImage] = useState<string | null>(null);

const fileInputRef = useRef<HTMLInputElement>(null);

const handleProfileImageChange = (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  const file = event.target.files?.[0];

  if (!file) return;

  // Comprobar formato
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/webp"
  ];

  if (!allowedTypes.includes(file.type)) {
    alert("Solo se permiten imágenes JPG, PNG o WEBP.");
    return;
  }

  // Comprobar tamaño máximo: 2 MB
  if (file.size > 2 * 1024 * 1024) {
    alert("La imagen no puede superar los 2 MB.");
    return;
  }

  // Crear vista previa
  const imageUrl = URL.createObjectURL(file);

  setProfileImage(imageUrl);
};

  const [nombre, setNombre] = useState('Leidy Herrera');
  const [email, setEmail] = useState('leidy@correo.com');
  const [telefono, setTelefono] = useState('+51 990 326 787');
  const [idioma, setIdioma] = useState('Español');
  const [zonaHoraria, setZonaHoraria] = useState('GMT-5 Lima');

  const [notificacionesEmail, setNotificacionesEmail] = useState(true);
  const [notificacionesPush, setNotificacionesPush] = useState(true);
  const [notificacionesVentas, setNotificacionesVentas] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Configuración guardada:', {
      nombre,
      email,
      telefono,
      idioma,
      zonaHoraria,
      notificacionesEmail,
      notificacionesPush,
      notificacionesVentas,
      tema
    });

    alert('Configuración guardada correctamente.');
  };

return (
  <div className="configuracion-container">

    {/* =========================================
        BOTÓN ATRÁS
    ========================================= */}

    <button
      className="btn-atras-config"
      onClick={() => navigate('/dashboard')}
    >
      ← Atrás
    </button>

      {
      
      /* =========================================
          ENCABEZADO
      ========================================= */}

      <header className="configuracion-header">

        <div>
          <span className="configuracion-label">
            PREFERENCIAS
          </span>

          <h1>Configuración</h1>

          <p>
            Administra tu cuenta y personaliza tu experiencia.
          </p>
        </div>

      </header>

      {/* =========================================
          CONTENIDO
      ========================================= */}

      <div className="configuracion-layout">

        {/* =========================================
            SIDEBAR DE CONFIGURACIÓN
        ========================================= */}

        <aside className="configuracion-menu">

          <button
            className={activeTab === 'perfil' ? 'config-menu-item active' : 'config-menu-item'}
            onClick={() => setActiveTab('perfil')}
          >
            <span className="config-menu-icon">
              👤
            </span>

            <div>
              <strong>Perfil</strong>
              <small>Información personal</small>
            </div>
          </button>

          <button
            className={activeTab === 'seguridad' ? 'config-menu-item active' : 'config-menu-item'}
            onClick={() => setActiveTab('seguridad')}
          >
            <span className="config-menu-icon">
              🔒
            </span>

            <div>
              <strong>Seguridad</strong>
              <small>Contraseña y acceso</small>
            </div>
          </button>

          <button
            className={activeTab === 'notificaciones' ? 'config-menu-item active' : 'config-menu-item'}
            onClick={() => setActiveTab('notificaciones')}
          >
            <span className="config-menu-icon">
              🔔
            </span>

            <div>
              <strong>Notificaciones</strong>
              <small>Alertas y avisos</small>
            </div>
          </button>

          <button
            className={activeTab === 'preferencias' ? 'config-menu-item active' : 'config-menu-item'}
            onClick={() => setActiveTab('preferencias')}
          >
            <span className="config-menu-icon">
              ⚙️
            </span>

            <div>
              <strong>Preferencias</strong>
              <small>Personaliza tu panel</small>
            </div>
          </button>

        </aside>

        {/* =========================================
            PANEL PRINCIPAL
        ========================================= */}

        <main className="configuracion-content">

          {/* =========================================
              PERFIL
          ========================================= */}

          {activeTab === 'perfil' && (
            <form
              className="config-card"
              onSubmit={handleSave}
            >

              <div className="config-card-header">

                <div>
                  <h2>Información del Perfil</h2>

                  <p>
                    Actualiza la información asociada a tu cuenta.
                  </p>
                </div>

              </div>

              {/* Avatar */}

              <div className="profile-section">

                <div className="profile-avatar">

                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Foto de perfil"
                    />
                  ) : (
                    "LH"
                  )}

                </div>

                <div className="profile-avatar-info">

                  <h3>Foto de perfil</h3>

                  <p>
                    JPG, PNG o WEBP. Máximo 2 MB.
                  </p>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    onChange={handleProfileImageChange}
                    style={{ display: "none" }}
                  />

                  <button
                    type="button"
                    className="secondary-button"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    Cambiar imagen
                  </button>

                </div>

              </div>

              {/* Campos */}

              <div className="config-form-grid">

                <div className="config-form-group">

                  <label htmlFor="nombre">
                    Nombre completo
                  </label>

                  <input
                    id="nombre"
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />

                </div>

                <div className="config-form-group">

                  <label htmlFor="email">
                    Correo electrónico
                  </label>

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                </div>

                <div className="config-form-group">

                  <label htmlFor="telefono">
                    Teléfono
                  </label>

                  <input
                    id="telefono"
                    type="tel"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                  />

                </div>

                <div className="config-form-group">

                  <label htmlFor="idioma">
                    Idioma
                  </label>

                  <select
                    id="idioma"
                    value={idioma}
                    onChange={(e) => setIdioma(e.target.value)}
                  >
                    <option>Español</option>
                    <option>Inglés</option>
                    <option>Portugués</option>
                  </select>

                </div>

              </div>

              <div className="config-form-actions">

                <button
                  type="button"
                  className="cancel-button"
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  className="save-button"
                >
                  Guardar cambios
                </button>

              </div>

            </form>
          )}

          {/* =========================================
              SEGURIDAD
          ========================================= */}

          {activeTab === 'seguridad' && (
            <div className="config-card">

              <div className="config-card-header">

                <div>
                  <h2>Seguridad</h2>

                  <p>
                    Protege tu cuenta y administra tus opciones de acceso.
                  </p>
                </div>

              </div>

              <div className="security-item">

                <div className="security-icon">
                  🔑
                </div>

                <div className="security-info">

                  <h3>Contraseña</h3>

                  <p>
                    Última actualización hace 30 días.
                  </p>

                </div>

                <button className="secondary-button">
                  Cambiar
                </button>

              </div>

              <div className="security-item">

                <div className="security-icon">
                  🛡️
                </div>

                <div className="security-info">

                  <h3>Autenticación de dos factores</h3>

                  <p>
                    Añade una capa adicional de seguridad.
                  </p>

                </div>

                <label className="toggle">

                  <input type="checkbox" />

                  <span className="toggle-slider"></span>

                </label>

              </div>

              <div className="security-item">

                <div className="security-icon">
                  💻
                </div>

                <div className="security-info">

                  <h3>Sesiones activas</h3>

                  <p>
                    Actualmente tienes 2 sesiones activas.
                  </p>

                </div>

                <button className="secondary-button">
                  Administrar
                </button>

              </div>

              <div className="danger-zone">

                <div>
                  <h3>Eliminar cuenta</h3>

                  <p>
                    Esta acción no se puede deshacer.
                  </p>
                </div>

                <button className="danger-button">
                  Eliminar cuenta
                </button>

              </div>

            </div>
          )}

          {/* =========================================
              NOTIFICACIONES
          ========================================= */}

          {activeTab === 'notificaciones' && (
            <div className="config-card">

              <div className="config-card-header">

                <div>
                  <h2>Notificaciones</h2>

                  <p>
                    Decide qué notificaciones quieres recibir.
                  </p>
                </div>

              </div>

              <div className="notification-item">

                <div>
                  <h3>Notificaciones por correo</h3>

                  <p>
                    Recibe actualizaciones importantes en tu correo.
                  </p>
                </div>

                <label className="toggle">

                  <input
                    type="checkbox"
                    checked={notificacionesEmail}
                    onChange={(e) =>
                      setNotificacionesEmail(e.target.checked)
                    }
                  />

                  <span className="toggle-slider"></span>

                </label>

              </div>

              <div className="notification-item">

                <div>
                  <h3>Notificaciones Push</h3>

                  <p>
                    Recibe alertas directamente en tu dispositivo.
                  </p>
                </div>

                <label className="toggle">

                  <input
                    type="checkbox"
                    checked={notificacionesPush}
                    onChange={(e) =>
                      setNotificacionesPush(e.target.checked)
                    }
                  />

                  <span className="toggle-slider"></span>

                </label>

              </div>

              <div className="notification-item">

                <div>
                  <h3>Actividad de ventas</h3>

                  <p>
                    Recibe avisos sobre nuevas ventas y pedidos.
                  </p>
                </div>

                <label className="toggle">

                  <input
                    type="checkbox"
                    checked={notificacionesVentas}
                    onChange={(e) =>
                      setNotificacionesVentas(e.target.checked)
                    }
                  />

                  <span className="toggle-slider"></span>

                </label>

              </div>

            </div>
          )}

          {/* =========================================
              PREFERENCIAS
          ========================================= */}

          {activeTab === 'preferencias' && (
            <form
              className="config-card"
              onSubmit={handleSave}
            >

              <div className="config-card-header">

                <div>
                  <h2>Preferencias</h2>

                  <p>
                    Personaliza la apariencia y comportamiento del panel.
                  </p>
                </div>

              </div>

              <div className="config-form-group">

                <label htmlFor="tema">
                  Tema de la aplicación
                </label>

                <select
                  id="tema"
                  value={tema}
                  onChange={(e) =>
                    setTema(
                      e.target.value as 'Oscuro' | 'Claro' | 'Sistema'
                    )
                  }
                >
                  <option value="Oscuro">
                    Oscuro
                  </option>

                  <option value="Claro">
                    Claro
                  </option>

                  <option value="Sistema">
                    Sistema
                  </option>

                </select>

              </div>

              <div className="config-form-group">

                <label htmlFor="zona">
                  Zona horaria
                </label>

                <select
                  id="zona"
                  value={zonaHoraria}
                  onChange={(e) => setZonaHoraria(e.target.value)}
                >
                  <option>GMT-5 Lima</option>
                  <option>GMT-5 Bogotá</option>
                  <option>GMT-6 Ciudad de México</option>
                  <option>GMT-3 Buenos Aires</option>
                </select>

              </div>

              <div className="preference-preview">

                <div className="preview-icon">
                  ✨
                </div>

                <div>
                  <h3>Vista previa</h3>

                  <p>
                    Tu panel utiliza actualmente el tema oscuro.
                  </p>
                </div>

              </div>

              <div className="config-form-actions">

                <button
                  type="button"
                  className="cancel-button"
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  className="save-button"
                >
                  Guardar preferencias
                </button>

              </div>

            </form>
          )}

        </main>

      </div>

    </div>
  );
};

export default Configuracion;