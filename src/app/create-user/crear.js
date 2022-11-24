import { createConnection } from 'mysql';
/*
  RowDataPacket {
    nombre, apellidos, direccion, celular, correo, contraseña,
    id_tipo: 'Pasaporte',
    id_num: '34564',
    facebook, num_folio: 7,
    tipo: null
  }

    id="nombre" 
    id="apellido"
    id="usuario",
    id="idTipo",
    id="domicilio" 
    id="estado" 
    id="codigoPostal" 
    id="facebook" 
    id="correo"
    id="telefono"
    id="contraseña"
    id="vContraseña"
        
*/

function myBox(){
    console.log("Hey");
    let connection = createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'hotelesCTMS' 
    });

    connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
    }); 
    alert("checkbox seleccionado");
}

// let isChecked = document.getElementById('box').checked;

// isChecked.addEventListener("change", validaCheckbox, false);
  
// function validaCheckbox(){
//   let checked = checkbox.checked;
//   if(checked){
//     alert('checkbox esta seleccionado');
//   }
// }

function crear(){     
    let consulta = {}
    connection.query('SELECT * FROM usuario;', function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        // consulta = results[0];
        // console.log(consulta["costo"]);
    });
}
 
connection.end();