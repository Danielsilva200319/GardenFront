const fillFormWithOficinaData = (oficinaData) => {
    document.getElementById('paisoficina').value = oficinaData.pais;
    document.getElementById('regionoficina').value = oficinaData.region;
    document.getElementById('ciudadoficina').value = oficinaData.ciudad;
    document.getElementById('codigopostaloficina').value = oficinaData.codigoPostal;
    document.getElementById('telefonooficina').value = oficinaData.telefono;
    document.getElementById('direccion1oficina').value = oficinaData.lineaDireccion1;
    document.getElementById('direccion2oficina').value = oficinaData.lineaDireccion2;
};

const dashboardoficina = async (wanted) => {
    try {
        const [oficinaResponse] = await Promise.all([
            fetch(`http://localhost:5066/api/Oficina/${wanted}`),
        ]);
        
        if (!oficinaResponse.ok) {
            throw new Error('Network response was not ok');
        }
        
        const oficina = await oficinaResponse.json();
        fillFormWithOficinaData(oficina);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

document.addEventListener('crearOficina', async () => {
    try {
      // Obtener los datos del formulario
      const codigoOficina = document.getElementById('codigoOficina').value;
      const ciudad = document.getElementById('ciudadoficina').value;
      const pais = document.getElementById('paisoficina').value;
      const region = document.getElementById('regionoficina').value;
      const codigoPostal = document.getElementById('codigopostaloficina').value;
      const telefono = document.getElementById('telefonooficina').value;
      const lineaDireccion1 = document.getElementById('direccion1oficina').value;
      const lineaDireccion2 = document.getElementById('direccion2oficina').value;
  
      // Construir el objeto con los datos
      const postDataOficina = {
        codigoOficina: codigoOficina,
        ciudad: ciudad,
        pais: pais,
        region: region,
        codigoPostal: codigoPostal,
        telefono: telefono,
        lineaDireccion1: lineaDireccion1,
        lineaDireccion2: lineaDireccion2,
      };
  
      const response = await fetch('http://localhost:5066/api/Oficina', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postDataOficina),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Hacer algo con la respuesta si es necesario
      const result = await response.json();
      console.log('Oficina creada:', result);
    } catch (error) {
      console.error('Error al crear oficina:', error);
    }
  });

  // PUT
  document.addEventListener('actualizarOficina', async () => {
    try {
      const idOficina = event.detail.idOficina;
      const ciudad = document.getElementById('ciudadoficina').value;
      const pais = document.getElementById('paisoficina').value;
      const region = document.getElementById('regionoficina').value;
      const codigoPostal = document.getElementById('codigopostaloficina').value;
      const telefono = document.getElementById('telefonooficina').value;
      const lineaDireccion1 = document.getElementById('direccion1oficina').value;
      const lineaDireccion2 = document.getElementById('direccion2oficina').value;
  
      const updatedData = {
        codigoOficina: idOficina,
        ciudad: ciudad,
        pais: pais,
        region: region,
        codigoPostal: codigoPostal,
        telefono: telefono,
        lineaDireccion1: lineaDireccion1,
        lineaDireccion2: lineaDireccion2,
      };

      await updateOficina(idOficina, updatedData);
    } catch (error) {
      console.error('Error al procesar la actualización:', error);
    }
  });

  const updateOficina = async (idOficina, updatedData) => {
    try {
      const response = await fetch(`http://localhost:5066/api/Oficina/${idOficina}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      console.log('Oficina actualizada:', result);
    } catch (error) {
      console.error('Error al actualizar oficina:', error);
    }
  };

    //DELETE

const deleteoficina = async (wanted) => {
    try {
        const response = await fetch(`http://localhost:5066/api/Oficina/${wanted}`, {
        method: 'DELETE',
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          console.log('Oficina eliminada exitosamente');
        } catch (error) {
          console.error('Error al eliminar la oficina:', error);
        }
};


// Manejar la respuesta si es necesario 

const fillFormWithEmpleadoData = (empleadoData) => {
    document.getElementById('nombreempleado').value = empleadoData.nombre;
    document.getElementById('apellido1empleado').value = empleadoData.apellido1;
    document.getElementById('apellido2empleado').value = empleadoData.apellido2;
    document.getElementById('extensionempleado').value = empleadoData.extension;
    document.getElementById('mailempleado').value = empleadoData.email;
    document.getElementById('codigooficina').value = empleadoData.codigoOficina;
    document.getElementById('codigojefe').value = empleadoData.codigoJefe;
    document.getElementById('puestoempleado').value = empleadoData.puesto;
};

const dashboardempleado = async (wanted) => {
    try {
        const [empleadoResponse] = await Promise.all([
            fetch(`http://localhost:5066/api/Empleado/${wanted}`),
        ]);
        
        if (!empleadoResponse.ok) {
            throw new Error('Network response was not ok');
        }
        
        const empleado = await empleadoResponse.json();
        fillFormWithEmpleadoData(empleado);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// POST
document.addEventListener('crearEmpleado', async () => {
    try {
      // Obtener los datos del formulario
      const codigoEmpleado = document.getElementById('codigoEmpleado').value;
      const nombre = document.getElementById('nombreempleado').value;
      const apellido1 = document.getElementById('apellido1empleado').value;
      const apellido2 = document.getElementById('apellido2empleado').value;
      const extension = document.getElementById('extensionempleado').value;
      const email = document.getElementById('mailempleado').value;
      const codigoOficina = document.getElementById('codigooficina').value;
      const codigoJefe = document.getElementById('codigojefe').value;
      const puesto = document.getElementById('puestoempleado').value;
  
      // Construir el objeto con los datos
      const postDataEmpleado = {
        codigoEmpleado: codigoEmpleado,
        nombre: nombre,
        apellido1: apellido1,
        apellido2: apellido2,
        extension: extension,
        email: email,
        codigoOficina: codigoOficina,
        codigoJefe: codigoJefe,
        puesto: puesto,
      };
  
      const response = await fetch('http://localhost:5066/api/Empleado', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postDataEmpleado),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Hacer algo con la respuesta si es necesario
      const result = await response.json();
      console.log('Empleado creado:', result);
    } catch (error) {
      console.error('Error al crear empleado:', error);
    }
  });

// PUT
document.addEventListener('actualizarEmpleado', async () => {
    try {
        const idEmpleado = event.detail.idEmpleado;
        const nombre = document.getElementById('nombreempleado').value;
        const apellido1 = document.getElementById('apellido1empleado').value;
        const apellido2 = document.getElementById('apellido2empleado').value;
        const extension = document.getElementById('extensionempleado').value;
        const email = document.getElementById('mailempleado').value;
        const codigoOficina = document.getElementById('codigooficina').value;
        const codigoJefe = document.getElementById('codigojefe').value;
        const puesto = document.getElementById('puestoempleado').value;
  
      const updatedDataEmpleado = {
        codigoEmpleado: idEmpleado,
        nombre: nombre,
        apellido1: apellido1,
        apellido2: apellido2,
        extension: extension,
        email: email,
        codigoOficina: codigoOficina,
        codigoJefe: codigoJefe,
        puesto: puesto,
      };

      await updateEmpleado(idEmpleado, updatedDataEmpleado);
    } catch (error) {
      console.error('Error al procesar la actualización:', error);
    }
  });

  const updateEmpleado = async (idEmpleado, updatedDataEmpleado) => {
    try {
      const response = await fetch(`http://localhost:5066/api/Empleado/${idEmpleado}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedDataEmpleado),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      console.log('Empleado actualizado:', result);
    } catch (error) {
      console.error('Error al actualizar empleado:', error);
    }
  };

  const deleteempleado = async (wanted) => {
    try {
        const response = await fetch(`http://localhost:5066/api/Empleado/${wanted}`, {
        method: 'DELETE',
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          console.log('empleado eliminada exitosamente');
        } catch (error) {
          console.error('Error al eliminar la empleado:', error);
        }
};


const fillFormWithClienteData = (clienteData) => {
    document.getElementById('nombrecliente').value = clienteData.nombreCliente;
    document.getElementById('nombrecontacto').value = clienteData.nombreContacto;
    document.getElementById('apellidocontacto').value = clienteData.apellidoContacto;
    document.getElementById('telefono').value = clienteData.telefono;
    document.getElementById('fax').value = clienteData.fax;
    document.getElementById('paiscliente').value = clienteData.pais;
    document.getElementById('regioncliente').value = clienteData.region;
    document.getElementById('ciudadcliente').value = clienteData.ciudad;
    document.getElementById('codigopostalcliente').value = clienteData.codigoPostal;
    document.getElementById('direccion1cliente').value = clienteData.lineaDireccion1;
    document.getElementById('direccion2cliente').value = clienteData.lineaDireccion2;
    document.getElementById('codigoempleado').value = clienteData.codigoEmpleadoRepVentas;
    document.getElementById('limitecredito').value = clienteData.limiteCredito;
};

const dashboardcliente = async (wanted) => {
    try {
        const [clienteResponse] = await Promise.all([
            fetch(`http://localhost:5066/api/Cliente/${wanted}`),
        ]);
        
        if (!clienteResponse.ok) {
            throw new Error('Network response was not ok');
        }
        
        const cliente = await clienteResponse.json();
        fillFormWithClienteData(cliente);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// POST
document.addEventListener('crearCliente', async () => {
    try {
      // Obtener los datos del formulario
      const codigoCliente = document.getElementById('codigoCliente').value;
      const nombreCliente = document.getElementById('nombrecliente').value;
      const nombreContacto = document.getElementById('nombrecontacto').value;
      const apellidoContacto = document.getElementById('apellidocontacto').value;
      const telefono = document.getElementById('telefono').value;
      const fax = document.getElementById('fax').value;
      const lineaDireccion1 = document.getElementById('direccion1cliente').value;
      const lineaDireccion2 = document.getElementById('direccion2cliente').value;
      const ciudad = document.getElementById('ciudadcliente').value;
      const region = document.getElementById('regioncliente').value;
      const pais = document.getElementById('paiscliente').value;
      const codigoPostal = document.getElementById('codigopostalcliente').value;
      const codigoEmpleadoRepVentas = document.getElementById('codigoempleado').value;
      const limiteCredito = document.getElementById('limitecredito').value;
  
      // Construir el objeto con los datos
      const postDataCliente = {
        codigoCliente: codigoCliente,
        nombreCliente: nombreCliente,
        nombreContacto: nombreContacto,
        apellidoContacto: apellidoContacto,
        telefono: telefono,
        fax: fax,
        lineaDireccion1: lineaDireccion1,
        lineaDireccion2: lineaDireccion2,
        ciudad: ciudad,
        region: region,
        pais: pais,
        codigoPostal: codigoPostal,
        codigoEmpleadoRepVentas: codigoEmpleadoRepVentas,
        limiteCredito: limiteCredito,
      };
  
      const response = await fetch('http://localhost:5066/api/Cliente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postDataCliente),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Hacer algo con la respuesta si es necesario
      const result = await response.json();
      console.log('Cliente creado:', result);
    } catch (error) {
      console.error('Error al crear cliente:', error);
    }
  });

  // PUT
document.addEventListener('actualizarEmpleado', async () => {
    try {
      const idCliente = event.detail.idCliente;
      const nombreCliente = document.getElementById('nombrecliente').value;
      const nombreContacto = document.getElementById('nombrecontacto').value;
      const apellidoContacto = document.getElementById('apellidocontacto').value;
      const telefono = document.getElementById('telefono').value;
      const fax = document.getElementById('fax').value;
      const lineaDireccion1 = document.getElementById('direccion1cliente').value;
      const lineaDireccion2 = document.getElementById('direccion2cliente').value;
      const ciudad = document.getElementById('ciudadcliente').value;
      const region = document.getElementById('regioncliente').value;
      const pais = document.getElementById('paiscliente').value;
      const codigoPostal = document.getElementById('codigopostalcliente').value;
      const codigoEmpleadoRepVentas = document.getElementById('codigoempleado').value;
      const limiteCredito = document.getElementById('limitecredito').value;
  
  
      const updatedDataEmpleado = {
        codigoCliente: idCliente,
        nombreCliente: nombreCliente,
        nombreContacto: nombreContacto,
        apellidoContacto: apellidoContacto,
        telefono: telefono,
        fax: fax,
        lineaDireccion1: lineaDireccion1,
        lineaDireccion2: lineaDireccion2,
        ciudad: ciudad,
        region: region,
        pais: pais,
        codigoPostal: codigoPostal,
        codigoEmpleadoRepVentas: codigoEmpleadoRepVentas,
        limiteCredito: limiteCredito,
      };

      await updateCliente(idCliente, updatedDataCliente);
    } catch (error) {
      console.error('Error al procesar la actualización:', error);
    }
  });

  const updateCliente = async (idCliente, updatedDataCliente) => {
    try {
      const response = await fetch(`http://localhost:5066/api/Cliente/${idCliente}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedDataCliente),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      console.log('Cliente actualizado:', result);
    } catch (error) {
      console.error('Error al actualizar cliente:', error);
    }
  };

  const deletecliente = async (wanted) => {
    try {
        const response = await fetch(`http://localhost:5066/api/Cliente/${wanted}`, {
        method: 'DELETE',
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          console.log('Cliente eliminado exitosamente');
        } catch (error) {
          console.error('Error al eliminar la cliente:', error);
        }
};

// CONSULTAS
//requeridas

const consultaRequerida = async (idConsulta) => {
  const urls = [
    `http://localhost:5066/api/Oficina/consultas-requeridas/${idConsulta}`,
    `http://localhost:5066/api/CLiente/consultas-requeridas/${idConsulta}`,
    `http://localhost:5066/api/Pedido/consultas-requeridas/${idConsulta}`
  ];

  try {
    let consultaResponse;
    for (const url of urls) {
      consultaResponse = await fetch(url);
      if (consultaResponse.ok) {
        break; // Si la solicitud es exitosa, detener el bucle
      }
    }
    
    if (!consultaResponse || !consultaResponse.ok) {
      throw new Error('Network response was not ok');
    }
    
    const consulta = await consultaResponse.json();
    fillFormWithConsultaData1(consulta);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};




const fillFormWithConsultaData1 = (consultaData) => {
  const consultasRequeridasTextarea = document.getElementById('consultasrequeridas');

  // Verifica si hay datos válidos en la respuesta de la consulta
  if (consultaData && consultaData.length > 0) {
      // Formatea los datos de la consulta para mostrarlos en el textarea
      const formattedData = consultaData.join('\n');
      
      // Actualiza el contenido del textarea con la información de la consulta
      consultasRequeridasTextarea.value = formattedData;
  } else {
      // Si no hay datos o son inválidos, muestra un mensaje indicando que no hay datos disponibles
      consultasRequeridasTextarea.value = 'No se encontraron datos de consulta.';
  }
};

//multitablaInterna
const consultaMultitablaInterna = async (idConsulta) => {
  const urls = [
    `http://localhost:5066/api/Cliente/consultas-multitabla-interna/${idConsulta}`,

  ];

  try {
    let consultaResponse;
    for (const url of urls) {
      consultaResponse = await fetch(url);
      if (consultaResponse.ok) {
        break; // Si la solicitud es exitosa, detener el bucle
      }
    }
    
    if (!consultaResponse || !consultaResponse.ok) {
      throw new Error('Network response was not ok');
    }
    
    const consulta = await consultaResponse.json();
    fillFormWithConsultaData2(consulta);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
const fillFormWithConsultaData2 = (consultaData) => {
  const consultasMultitablaInternaTextarea = document.getElementById('consultasmultitablainterna');

  // Verifica si hay datos válidos en la respuesta de la consulta
  if (consultaData && consultaData.length > 0) {
    // Formatea los datos de la consulta para mostrarlos en el textarea
    const formattedData = consultaData.map(item => {
      return `Nombre Cliente: ${item.nombreCliente}, Nombre Empleado: ${item.nombreEmpleado}, Apellido Empleado: ${item.apellidoEmpleado}`;
    }).join('\n');
    
    // Actualiza el contenido del textarea con la información de la consulta
    consultasMultitablaInternaTextarea.value = formattedData;
  } else {
    // Si no hay datos o son inválidos, muestra un mensaje indicando que no hay datos disponibles
    consultasMultitablaInternaTextarea.value = 'No se encontraron datos de consulta.';
  }
};

export { dashboardoficina, updateOficina, deleteoficina, dashboardempleado,deleteempleado, dashboardcliente, deletecliente, consultaRequerida, consultaMultitablaInterna}; 
