import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import {
  signInWithPopup
} from "firebase/auth";

import {
  auth,
  googleProvider,
  githubProvider
} from "../firebase";

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

    const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(
        auth,
        googleProvider
      );

      console.log("Usuario de Google:", result.user);

      // Aquí puedes redirigir al dashboard
      navigate("/dashboard");

    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
    }
  };

  const handleGithubLogin = async () => {
    try {
      const result = await signInWithPopup(
        auth,
        githubProvider
      );

      console.log("Usuario de GitHub:", result.user);

      // Redirigir al dashboard
      navigate("/dashboard");

    } catch (error) {
      console.error("Error al iniciar sesión con GitHub:", error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación básica
    if (email && password) {
      console.log('Iniciar sesión con:', {
        email,
        password,
        rememberMe
      });

      // Ir al Dashboard
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">

        <div className="login-header">
          <h2>¡Hola de nuevo! 👋</h2>
          <p>Ingresa tus credenciales para acceder a tu cuenta</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>

            <input
              type="email"
              id="email"
              placeholder="ejemplo@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>

            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-options">

            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />

              <span className="checkmark"></span>

              Recordarme
            </label>

            <a href="#" className="forgot-password">
              ¿Olvidaste tu contraseña?
            </a>

          </div>

          <button type="submit" className="btn-login">
            Iniciar Sesión
          </button>

        </form>

        <div className="login-divider">
          <span>O continúa con</span>
        </div>

       <div className="social-login">

        <button
          type="button"
          className="btn-social"
          onClick={handleGoogleLogin}
        >
          <span></span>
          Continuar con Google
        </button>

        <button
          type="button"
          className="btn-social"
          onClick={handleGithubLogin}
        >
          <span></span>
          Continuar con GitHub
        </button>

      </div>

        <p className="login-footer">
          ¿No tienes una cuenta?{' '}
          <a href="#">Regístrate aquí</a>
        </p>

      </div>
    </div>
  );
};

export default Login;