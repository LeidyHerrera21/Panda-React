import React, { useState } from "react";
import "./ImportarCSV.css";

const ImportarCSV: React.FC = () => {
  const [archivo, setArchivo] = useState<File | null>(null);
  const [mensaje, setMensaje] = useState("");
  const [datos, setDatos] = useState<string[][]>([]);

  const handleArchivo = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.name.toLowerCase().endsWith(".csv")) {
      setMensaje("Selecciona un archivo CSV válido.");
      setArchivo(null);
      return;
    }

    setArchivo(file);
    setMensaje("");

    const reader = new FileReader();

    reader.onload = (e) => {
      const contenido = e.target?.result;

      if (typeof contenido !== "string") return;

      const filas = contenido
        .split(/\r?\n/)
        .filter((fila) => fila.trim() !== "")
        .map((fila) => fila.split(","));

      setDatos(filas);
    };

    reader.readAsText(file);
  };

  const eliminarArchivo = () => {
    setArchivo(null);
    setDatos([]);
    setMensaje("");
  };

  return (
    <section className="csv-page">

      <div className="csv-header">
        <span className="csv-label">IMPORTACIÓN DE DATOS</span>

        <h1>Subir archivo CSV</h1>

        <p>
          Importa información de forma rápida y organizada
          desde un archivo CSV.
        </p>
      </div>

      <div className="csv-card">

        <div className="csv-upload-area">

          <div className="csv-icon">
            📊
          </div>

          <h2>
            {archivo
              ? archivo.name
              : "Selecciona tu archivo CSV"}
          </h2>

          <p>
            Arrastra tu archivo aquí o selecciónalo desde tu
            computadora.
          </p>

          <label className="csv-upload-button">
            Seleccionar archivo

            <input
              type="file"
              accept=".csv,text/csv"
              onChange={handleArchivo}
              hidden
            />
          </label>

          <small>
            Formato permitido: CSV · Tamaño recomendado: máximo 10 MB
          </small>

        </div>

        {mensaje && (
          <div className="csv-message error">
            {mensaje}
          </div>
        )}

        {archivo && (
          <div className="csv-file-info">

            <div>
              <strong>Archivo seleccionado</strong>
              <span>
                {archivo.name} ·{" "}
                {(archivo.size / 1024).toFixed(1)} KB
              </span>
            </div>

            <button
              type="button"
              className="csv-remove"
              onClick={eliminarArchivo}
            >
              Eliminar
            </button>

          </div>
        )}

      </div>

      {datos.length > 0 && (
        <div className="csv-preview">

          <div className="csv-preview-header">
            <div>
              <span className="csv-label">VISTA PREVIA</span>
              <h2>Datos del archivo</h2>
            </div>

            <span className="csv-count">
              {datos.length} filas
            </span>
          </div>

          <div className="csv-table-container">

            <table>
              <thead>
                <tr>
                  {datos[0].map((columna, index) => (
                    <th key={index}>
                      {columna || `Columna ${index + 1}`}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {datos.slice(1, 11).map((fila, filaIndex) => (
                  <tr key={filaIndex}>
                    {fila.map((celda, celdaIndex) => (
                      <td key={celdaIndex}>
                        {celda}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

            </table>

          </div>

          <div className="csv-actions">

            <button
              type="button"
              className="csv-cancel"
              onClick={eliminarArchivo}
            >
              Cancelar
            </button>

            <button
              type="button"
              className="csv-import"
              onClick={() => {
                setMensaje("Archivo listo para importar.");
              }}
            >
              Importar CSV
            </button>

          </div>

        </div>
      )}

    </section>
  );
};

export default ImportarCSV;