import { dashboardoficina } from './dashboard.js';
import { deleteoficina } from './dashboard.js';
import { dashboardempleado } from './dashboard.js';
import { deleteempleado } from './dashboard.js';
import { dashboardcliente } from './dashboard.js';
import { deletecliente } from './dashboard.js';
import { producto } from './productos.js';
import { productos } from './productos.js';
import { deleteproducto } from './productos.js';
import { consultaRequerida } from './dashboard.js';
import { consultaMultitablaInterna } from './dashboard.js';


document.addEventListener('DOMContentLoaded', () => {
    const buscarBtnOficina = document.getElementById('buscarBtnOficina');
    buscarBtnOficina.addEventListener('click', () => {
        const codigoOficina = document.getElementById('codigoOficina').value;
        dashboardoficina(codigoOficina);
    })
});

document.addEventListener('DOMContentLoaded', () => {
    const crearOficinaBtn = document.getElementById('crearOficinaBtn');
    crearOficinaBtn.addEventListener('click', () => {
      // Emitir un evento personalizado para manejar la lógica del POST
      const event = new Event('crearOficina');
      document.dispatchEvent(event);
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const actualizarOficinaBtn = document.getElementById('actualizarOficinaBtn');
    actualizarOficinaBtn.addEventListener('click', () => {
      const idOficina = document.getElementById('codigoOficina').value;
  
      const event = new CustomEvent('actualizarOficina', {
        detail: { idOficina: idOficina }
      });
      document.dispatchEvent(event);
    });
  });

document.addEventListener('DOMContentLoaded', () => {
    const borrarBtnOficina = document.getElementById('borrarOficinaBtn');
    borrarBtnOficina.addEventListener('click', () => {
        const codigoOficina = document.getElementById('codigoOficina').value;
        deleteoficina(codigoOficina);
    })
});

document.addEventListener('DOMContentLoaded', () => {
    const buscarBtnEmpleado = document.getElementById('buscarBtnEmpleado');
    buscarBtnEmpleado.addEventListener('click', () => {
        const codigoEmpleadoInput = document.getElementById('codigoEmpleado');
        const codigoEmpleadoValue = codigoEmpleadoInput.value.trim(); // Elimina espacios en blanco al principio y al final

        // Verifica si el valor es un número antes de convertirlo
        if (!isNaN(codigoEmpleadoValue) && codigoEmpleadoValue !== '') {
            const codigoEmpleado = parseInt(codigoEmpleadoValue, 10); // Convertir a entero (base 10)
            dashboardempleado(codigoEmpleado);
        } else {
            // Manejar el caso en el que el valor no es un número válido
            console.error('El valor no es un número válido.');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const crearEmpleadoBtn = document.getElementById('crearEmpleadoBtn');
    crearEmpleadoBtn.addEventListener('click', () => {
      // Emitir un evento personalizado para manejar la lógica del POST
      const event = new Event('crearEmpleado');
      document.dispatchEvent(event);
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const actualizarEmpleadoBtn = document.getElementById('actualizarEmpleadoBtn');
    actualizarEmpleadoBtn.addEventListener('click', () => {
      const idEmpleado = document.getElementById('codigoEmpleado').value;
  
      const event = new CustomEvent('actualizarEmpleado', {
        detail: { idEmpleado: idEmpleado }
      });
      document.dispatchEvent(event);
    });
  });

document.addEventListener('DOMContentLoaded', () => {
    const borrarBtnEmpleado = document.getElementById('borrarEmpleadoBtn');
    borrarBtnEmpleado.addEventListener('click', () => {
        const codigoEmpleado = document.getElementById('codigoEmpleado').value;
        deleteempleado(codigoEmpleado);
    })
});

document.addEventListener('DOMContentLoaded', () => {
    const buscarBtnCliente = document.getElementById('buscarBtnCliente');
    buscarBtnCliente.addEventListener('click', () => {
        const codigoClienteInput = document.getElementById('codigoCliente');
        const codigoClienteValue = codigoClienteInput.value.trim(); // Elimina espacios en blanco al principio y al final

        // Verifica si el valor es un número antes de convertirlo
        if (!isNaN(codigoClienteValue) && codigoClienteValue !== '') {
            const codigoCliente = parseInt(codigoClienteValue, 10); // Convertir a entero (base 10)
            dashboardcliente(codigoCliente);
        } else {
            // Manejar el caso en el que el valor no es un número válido
            console.error('El valor no es un número válido.');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const crearClienteBtn = document.getElementById('crearClienteBtn');
    crearClienteBtn.addEventListener('click', () => {
      // Emitir un evento personalizado para manejar la lógica del POST
      const event = new Event('crearCliente');
      document.dispatchEvent(event);
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const actualizarClienteBtn = document.getElementById('actualizarClienteBtn');
    actualizarClienteBtn.addEventListener('click', () => {
      const idCliente = document.getElementById('codigoCliente').value;
  
      const event = new CustomEvent('actualizarCliente', {
        detail: { idCliente: idCliente }
      });
      document.dispatchEvent(event);
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    const borrarBtnCliente = document.getElementById('borrarClienteBtn');
    borrarBtnCliente.addEventListener('click', () => {
        const codigoCliente = document.getElementById('codigoCliente').value;
        deletecliente(codigoCliente);
    })
});

document.addEventListener('DOMContentLoaded', () => {
    const buscarBtnProducto = document.getElementById('buscarBtnProducto');
    buscarBtnProducto.addEventListener('click', () => {
        const codigoProducto = document.getElementById('codigoProducto').value;
        producto(codigoProducto);
    })
});

document.addEventListener('DOMContentLoaded', () => {
    const crearProductoBtn = document.getElementById('crearProductoBtn');
    crearProductoBtn.addEventListener('click', () => {
      // Emitir un evento personalizado para manejar la lógica del POST
      const event = new Event('crearProducto');
      document.dispatchEvent(event);
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const actualizarProductoBtn = document.getElementById('actualizarProductoBtn');
    actualizarProductoBtn.addEventListener('click', () => {
      const idProducto = document.getElementById('codigoProducto').value;
  
      const event = new CustomEvent('actualizarProducto', {
        detail: { idProducto: idProducto }
      });
      document.dispatchEvent(event);
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const borrarBtnProducto = document.getElementById('borrarProductoBtn');
    borrarBtnProducto.addEventListener('click', () => {
        const codigoProducto = document.getElementById('codigoProducto').value;
        deleteproducto(codigoProducto);
    })
});


document.addEventListener('DOMContentLoaded', () => {
  const consultasRequeridasBtn = document.getElementById('consultaBtnRequerida');
  consultasRequeridasBtn.addEventListener('click', () => {
      const idConsultaInput = document.getElementById('codigoConsulta');
      const idConsultaValue = idConsultaInput.value.trim(); // Elimina espacios en blanco al principio y al final

      // Verifica si el valor es un número antes de convertirlo
      if (!isNaN(idConsultaValue) && idConsultaValue !== '') {
          const idConsulta = parseInt(idConsultaValue, 10); // Convertir a entero (base 10)
          consultaRequerida(idConsulta);
      } else {
          // Manejar el caso en el que el valor no es un número válido
          console.error('El valor no es un número válido.');
      }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const consultasMultitablaInternaBtn = document.getElementById('consultaBtnMultitablainterna');
  consultasMultitablaInternaBtn.addEventListener('click', () => {
      const idConsultaInput = document.getElementById('codigoConsultaMi');
      const idConsultaValue = idConsultaInput.value.trim(); // Elimina espacios en blanco al principio y al final

      // Verifica si el valor es un número antes de convertirlo
      if (!isNaN(idConsultaValue) && idConsultaValue !== '') {
          const idConsulta = parseInt(idConsultaValue, 10); // Convertir a entero (base 10)
          consultaMultitablaInterna(idConsulta);
      } else {
          // Manejar el caso en el que el valor no es un número válido
          console.error('El valor no es un número válido.');
      }
  });
});
  

productos();