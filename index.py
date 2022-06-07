#Se importa la librería Flask
from flask import Flask, request, jsonify
from flask_cors import CORS

diccionario_usuarios = {
    "administrador": {
        "nombreUsuario": "administrador",
        "correo": "administrador@mail.com",
        "password": "admin12345",
        "rol": "administrador"
    },
    "invitado": {
        "nombreUsuario": "administrador",
        "correo": "administrador1@mail.com",
        "password": "admin12345",
        "rol": "inivitado"
    },
}

diccionario_productos = {
    "0": {
        "id": "0",
        "codigo": "p-001",
        "nombre": "producto1",
        "categoria": "electronico",
        "precio": 1.00,
        "cantidad": 1,
        "descripcion": "Primer producto electronico de prueba..."
    },
    "1": {
        "id": "1",
        "codigo": "p-001",
        "nombre": "producto2",
        "categoria": "electronico",
        "precio": 2.00,
        "cantidad": 10,
        "descripcion": "Segundo producto electronico de prueba..."
    },
    "2": {
        "id": "2",
        "codigo": "p-002",
        "nombre": "producto3",
        "categoria": "electronico",
        "precio": 3.00,
        "cantidad": 15,
        "descripcion": "Tercer producto electronico de prueba..."
    }
}
diccionario_proveedores = {
    "0": {
        "id": "0",
        "ruc": "1234567899001",
        "nombre": "proveedor1",
        "telefono": "1234567",
        "correo_electronico": "proveedor1@mail.com",
    }
}

diccionario_categoría = {
    "0": {
        "id": "0",
        "codigo": "c-001",
        "nombre": "tecnologia",
    }
}
diccionario_clientes = {}

#Variable de instancia app
app = Flask(__name__)

# Settings
CORS(app)

#Decorador ruta raíz
@app.route('/')
#Función que retorna la página principal 
def principal(): 
    return '<h1>Hola mundo</h1>'

# producto, proveedor, cliente, stock de producto, categoría, informe y catálogo, 
# ------------- Acceso
@app.route('/usuario/<id>', methods=['GET'])
def obtenerUsuarios(id):
    return {
        "nombreUsuario": diccionario_usuarios.get(id)["nombreUsuario"],
        "correo": diccionario_usuarios.get(id)["correo"],
        "rol": diccionario_usuarios.get(id)["rol"],
    }

@app.route('/login', methods=['POST'])
def loginUsuario():
    if (diccionario_usuarios[request.json['userName']]):
        return {
            "registrado": "true"
        }
    else:
        return {
            "registrado": "false"
        }
    

@app.route('/registro', methods=['POST'])
def registrarusuario():
    diccionario_usuarios[request.json['id']] = request.json
    return {
        "registrado": "true"
    }

# ------------- Productos
@app.route('/productos', methods=['GET'])
def obtenerProductos():
    # return diccionario_productos
    listaproductos = list(diccionario_productos.values())
    return jsonify(listaproductos)

@app.route('/producto/<id>', methods=['GET'])
def obtenerProducto(id):
    return diccionario_productos.get(id)

@app.route('/productos', methods=['POST'])
def agregarProductos():
    diccionario_productos[request.json['id']] = request.json
    return diccionario_productos

@app.route('/productos/<id>', methods=['DELETE'])
def eliminarProductos(id):
    diccionario_productos.pop(id, None)
    return diccionario_productos

@app.route('/productos/<id>', methods=['PUT'])
def actualiarProductos(id):
    diccionario_productos[id] = request.json
    return diccionario_productos

# ------------- Proveedores
@app.route('/proveedores', methods=['GET'])
def obtenerProveedores():
    return diccionario_proveedores

@app.route('/proveedor/<id>', methods=['GET'])
def obtenerProveedor(id):
    return diccionario_proveedores.get(id)

@app.route('/proveedores', methods=['POST'])
def agregarProveedores():
    diccionario_proveedores[request.json['id']] = request.json
    return diccionario_proveedores

@app.route('/proveedores/<id>', methods=['DELETE'])
def eliminarProveedores(id):
    diccionario_proveedores.pop(id, None)
    return diccionario_proveedores

@app.route('/proveedores/<id>', methods=['PUT'])
def actualiarProveedores(id):
    diccionario_proveedores[id] = request.json
    return diccionario_proveedores

# ------------- Categorias
@app.route('/categorias', methods=['GET'])
def obtenerCategorias():
    return diccionario_categoría

@app.route('/categoria/<id>', methods=['GET'])
def obtenerCategoria(id):
    return diccionario_categoría.get(id)

@app.route('/categorias', methods=['POST'])
def agregarCategorias():
    diccionario_categoría[request.json['id']] = request.json
    return diccionario_categoría

@app.route('/categorias/<id>', methods=['DELETE'])
def eliminarCategorias(id):
    diccionario_categoría.pop(id, None)
    return diccionario_categoría

@app.route('/categorias/<id>', methods=['PUT'])
def actualiarCategorias(id):
    diccionario_categoría[id] = request.json
    return diccionario_categoría


#Main del programa
if __name__ == '__main__':
    #debug cada vez que cambiamos dentro del servidor se reinicia automaticamente
    app.run( debug = True)

