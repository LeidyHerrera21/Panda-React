import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Productos.css';

interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  precio: string;
  stock: number;
  estado: 'Disponible' | 'Agotado' | 'Bajo stock';
  fecha: string;
}

const productos: Producto[] = [
  {
    id: 1,
    nombre: 'Laptop Pro X15',
    categoria: 'Tecnología',
    precio: '$1,299.00',
    stock: 24,
    estado: 'Disponible',
    fecha: '15 Ago 2026'
  },
  {
    id: 2,
    nombre: 'Smartphone Ultra',
    categoria: 'Tecnología',
    precio: '$899.00',
    stock: 12,
    estado: 'Disponible',
    fecha: '13 Ago 2026'
  },
  {
    id: 3,
    nombre: 'Auriculares AirSound',
    categoria: 'Accesorios',
    precio: '$149.00',
    stock: 5,
    estado: 'Bajo stock',
    fecha: '11 Ago 2026'
  },
  {
    id: 4,
    nombre: 'Teclado Mecánico RGB',
    categoria: 'Accesorios',
    precio: '$89.00',
    stock: 0,
    estado: 'Agotado',
    fecha: '09 Ago 2026'
  },
  {
    id: 5,
    nombre: 'Monitor UltraWide 34"',
    categoria: 'Monitores',
    precio: '$549.00',
    stock: 18,
    estado: 'Disponible',
    fecha: '07 Ago 2026'
  },
  {
    id: 6,
    nombre: 'Mouse Gaming Pro',
    categoria: 'Accesorios',
    precio: '$69.00',
    stock: 8,
    estado: 'Bajo stock',
    fecha: '05 Ago 2026'
  }
];

const Productos: React.FC = () => {
  const navigate = useNavigate();
  return (
  <div className="productos-container">

    {/* Botón regresar */}
    <button
      className="btn-atras"
      onClick={() => navigate('/dashboard')}
    >
      ← Atrás
    </button>

      {/* Encabezado */}
      <header className="productos-header">
        <div>
          <span className="productos-label">
            INVENTARIO
          </span>

          <h1>Productos</h1>

          <p>
            Administra los productos y el inventario de tu plataforma.
          </p>
        </div>

        <button className="btn-new-product">
          + Nuevo Producto
        </button>
      </header>

      {/* Estadísticas */}
      <div className="productos-stats">

        <div className="producto-stat-card">
          <div className="producto-stat-icon">
            📦
          </div>

          <div>
            <span>Total Productos</span>
            <h3>486</h3>
          </div>
        </div>

        <div className="producto-stat-card">
          <div className="producto-stat-icon available-icon">
            ✓
          </div>

          <div>
            <span>Disponibles</span>
            <h3>421</h3>
          </div>
        </div>

        <div className="producto-stat-card">
          <div className="producto-stat-icon stock-icon">
            ⚠
          </div>

          <div>
            <span>Bajo Stock</span>
            <h3>42</h3>
          </div>
        </div>

        <div className="producto-stat-card">
          <div className="producto-stat-icon sold-icon">
            $
          </div>

          <div>
            <span>Valor Inventario</span>
            <h3>$86.4K</h3>
          </div>
        </div>

      </div>

      {/* Tabla de productos */}
      <section className="productos-card">

        <div className="productos-card-header">

          <div>
            <h2>Lista de Productos</h2>

            <p>
              Productos registrados en el inventario
            </p>
          </div>

          <div className="productos-actions">

            <div className="product-search">
              <span>⌕</span>

              <input
                type="text"
                placeholder="Buscar producto..."
              />
            </div>

            <select className="category-filter">
              <option value="">
                Categoría
              </option>

              <option value="tecnologia">
                Tecnología
              </option>

              <option value="accesorios">
                Accesorios
              </option>

              <option value="monitores">
                Monitores
              </option>
            </select>

          </div>

        </div>

        {/* Tabla */}
        <div className="productos-table-container">

          <table className="productos-table">

            <thead>
              <tr>
                <th>Producto</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Estado</th>
                <th>Fecha</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>

              {productos.map((producto) => (
                <tr key={producto.id}>

                  {/* Producto */}
                  <td>
                    <div className="product-info">

                      <div className="product-image">
                        📦
                      </div>

                      <div>
                        <strong>
                          {producto.nombre}
                        </strong>

                        <span>
                          ID #{producto.id}
                        </span>
                      </div>

                    </div>
                  </td>

                  {/* Categoría */}
                  <td>
                    <span className="product-category">
                      {producto.categoria}
                    </span>
                  </td>

                  {/* Precio */}
                  <td>
                    <span className="product-price">
                      {producto.precio}
                    </span>
                  </td>

                  {/* Stock */}
                  <td>
                    <span
                      className={`product-stock ${
                        producto.stock === 0
                          ? 'stock-empty'
                          : producto.stock <= 10
                          ? 'stock-low'
                          : 'stock-good'
                      }`}
                    >
                      {producto.stock} unidades
                    </span>
                  </td>

                  {/* Estado */}
                  <td>
                    <span
                      className={`product-status ${
                        producto.estado
                          .toLowerCase()
                          .replace(' ', '-')
                      }`}
                    >
                      <span className="product-status-dot"></span>

                      {producto.estado}
                    </span>
                  </td>

                  {/* Fecha */}
                  <td>
                    <span className="product-date">
                      {producto.fecha}
                    </span>
                  </td>

                  {/* Acciones */}
                  <td>

                    <div className="product-actions">

                      <button
                        className="product-action edit-product"
                        title="Editar producto"
                      >
                        ✎
                      </button>

                      <button
                        className="product-action delete-product"
                        title="Eliminar producto"
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

        {/* Pie de tabla */}
        <div className="productos-footer">

          <span>
            Mostrando <strong>1 - 6</strong> de{' '}
            <strong>486</strong> productos
          </span>

          <div className="product-pagination">

            <button disabled>
              ‹
            </button>

            <button className="product-page-active">
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
              81
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

export default Productos;