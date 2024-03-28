const fillFormWithProductoData = (productoData) => {
    document.getElementById('nombreproducto').value = productoData.nombre;
    document.getElementById('gamaproducto').value = productoData.gama;
    document.getElementById('dimensiones').value = productoData.dimensiones;
    document.getElementById('proveedor').value = productoData.proveedor;
    document.getElementById('descripcion').value = productoData.descripcion;
    document.getElementById('cantidadstock').value = productoData.cantidadEnStock;
    document.getElementById('precioventa').value = productoData.precioVenta;
    document.getElementById('precioproveedor').value = productoData.precioProveedor;
};

const producto = async (wanted) => {
    try {
        const [productoResponse] = await Promise.all([
            fetch(`http://localhost:5066/api/Producto/${wanted}`),
        ]);
        
        if (!productoResponse.ok) {
            throw new Error('Network response was not ok');
        }
        
        const producto = await productoResponse.json();
        fillFormWithProductoData(producto);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const fillTableWithProductos = (productos) => {
    const tableBody = document.querySelector('.table tbody');

    // Iterar sobre los productos y crear filas para cada producto
    productos.forEach((producto) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${producto.codigoProducto}</td>
            <td>${producto.nombre}</td>
            <td>${producto.gama}</td>
            <td>${producto.dimensiones}</td>
            <td>${producto.proveedor}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.cantidadEnStock}</td>
            <td>${producto.precioVenta}</td>
            <td>${producto.precioProveedor}</td>
        `;
        tableBody.appendChild(row);
    });
};

const productos = async () => {
    try {
        const productosResponse = await fetch('http://localhost:5066/api/Producto/');
        if (!productosResponse.ok) {
            throw new Error('Network response was not ok');
        }

        const productos = await productosResponse.json();
        fillTableWithProductos(productos);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};


document.addEventListener('crearProducto', async () => {
    try {
      // Obtener los datos del formulario
      const codigoProducto = document.getElementById('codigoProducto').value;
      const nombre = document.getElementById('nombreproducto').value;
      const gama = document.getElementById('gamaproducto').value;
      const dimensiones = document.getElementById('dimensiones').value;
      const proveedor = document.getElementById('proveedor').value;
      const descripcion = document.getElementById('descripcion').value;
      const cantidadEnStock = document.getElementById('cantidadstock').value;
      const precioVenta = document.getElementById('precioventa').value;
      const precioProveedor = document.getElementById('precioproveedor').value;

  
      
      const postDataProducto = {
        codigoProducto: codigoProducto,
        nombre: nombre,
        gama: gama,
        dimensiones: dimensiones,
        proveedor: proveedor,
        descripcion: descripcion,
        cantidadEnStock: parseInt(cantidadEnStock),
        precioVenta: parseInt(precioVenta),
        precioProveedor: parseInt(precioProveedor),
      };
  
      const response = await fetch('http://localhost:5066/api/Producto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postDataProducto),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Hacer algo con la respuesta si es necesario
      const result = await response.json();
      console.log('Producto creado:', result);
    } catch (error) {
      console.error('Error al crear producto:', error);
    }
  });

  // PUT
document.addEventListener('actualizarProducto', async () => {
    try {
      const idProducto = event.detail.idProducto;
      const nombre = document.getElementById('nombreproducto').value;
      const gama = document.getElementById('gamaproducto').value;
      const dimensiones = document.getElementById('dimensiones').value;
      const proveedor = document.getElementById('proveedor').value;
      const descripcion = document.getElementById('descripcion').value;
      const cantidadEnStock = document.getElementById('cantidadstock').value;
      const precioVenta = document.getElementById('precioventa').value;
      const precioProveedor = document.getElementById('precioproveedor').value;
  
      const updatedDataProducto = {
        codigoProducto: idProducto,
        nombre: nombre,
        gama: gama,
        dimensiones: dimensiones,
        proveedor: proveedor,
        descripcion: descripcion,
        cantidadEnStock: parseInt(cantidadEnStock),
        precioVenta: parseInt(precioVenta),
        precioProveedor: parseInt(precioProveedor),
      };

      await updateProducto(idProducto, updatedDataProducto);
    } catch (error) {
      console.error('Error al procesar la actualización:', error);
    }
  });

  const updateProducto = async (idProducto, updatedDataProducto) => {
    try {
      const response = await fetch(`http://localhost:5066/api/Producto/${idProducto}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedDataProducto),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      console.log('Producto actualizado:', result);
    } catch (error) {
      console.error('Error al actualizar producto:', error);
    }
  };

  const deleteproducto = async (wanted) => {
    try {
        const response = await fetch(`http://localhost:5066/api/Producto/${wanted}`, {
        method: 'DELETE',
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          console.log('Producto eliminado exitosamente');
        } catch (error) {
          console.error('Error al eliminar el producto:', error);
        }
};

export { producto, productos, deleteproducto};