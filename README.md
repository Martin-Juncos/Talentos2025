


# Talentos2025 API RESTful

## 📘 Descripción General

**Talentos2025** es una API RESTful educativa desarrollada en **Node.js**, **Express** y **MongoDB**, diseñada como parte del programa de formación **Talentos Digitales 2025**.  
Su objetivo es ofrecer una arquitectura backend moderna y escalable para la enseñanza de conceptos fundamentales de desarrollo web, gestión de datos y seguridad en aplicaciones JavaScript Full Stack.

Este repositorio reúne la evolución progresiva del proyecto, desde la creación de un servidor básico con **HTTP**, la implementación de rutas y controladores con **Express**, la validación de datos con **Joi**, la autenticación y autorización con **JWT y bcryptjs**, hasta la persistencia de información mediante **Mongoose**.

---

## 🧩 Tecnologías y Librerías Principales

| Tecnología | Descripción |
|-------------|-------------|
| **Node.js** | Entorno de ejecución para JavaScript en el servidor. |
| **Express.js** | Framework minimalista para crear aplicaciones web y APIs REST. |
| **MongoDB** | Base de datos NoSQL orientada a documentos. |
| **Mongoose** | ODM (Object Data Modeling) para modelar esquemas y manejar relaciones. |
| **dotenv** | Gestión de variables de entorno y configuración. |
| **bcryptjs** | Cifrado y hash de contraseñas para autenticación segura. |
| **jsonwebtoken (JWT)** | Autenticación basada en tokens. |
| **Joi** | Validación de datos y estructuras. |
| **Nodemon** | Reinicio automático del servidor durante el desarrollo. |
| **Morgan** | Middleware para registro de solicitudes HTTP. |

---

## 🏗️ Arquitectura del Proyecto

```

/Talentos2025
├── src/
│   ├── app.js                # Configuración principal de Express y middlewares
│   ├── routes/
│   │   ├── mainRoutes.js     # Enrutador principal
│   │   ├── userRoutes.js     # Rutas para gestión de usuarios
│   │   └── postRoutes.js     # Rutas para gestión de publicaciones/productos
│   ├── handlers/
│   │   ├── userHandler.js    # Procesa solicitudes y respuestas del cliente
│   │   └── postHandler.js
│   ├── controllers/
│   │   ├── userController.js # Lógica de negocio y conexión con la base de datos
│   │   └── postController.js
│   ├── middlewares/
│   │   ├── authMiddleware.js # Verificación de JWT
│   │   └── authorizeAdmin.js # Autorización basada en roles
│   ├── models/
│   │   ├── User.js           # Esquema de usuario con Mongoose
│   │   └── Product.js        # Esquema de producto
│   └── db/
│       └── dataBase.js       # Conexión a MongoDB Atlas
├── index.js                  # Punto de entrada del servidor
├── package.json              # Dependencias y scripts
├── .env                      # Variables de entorno
└── .gitignore

````

---

## ⚙️ Funcionalidades Principales

### 1. Servidor y Configuración Inicial
- Creación del servidor con `http` y posterior migración a **Express.js**.
- Uso de `nodemon` para desarrollo ágil.
- Registro de solicitudes HTTP con `morgan`.

### 2. Rutas RESTful y Modularización
- Organización mediante `express.Router`.
- Implementación de rutas GET, POST, PUT y DELETE para recursos `User` y `Product`.
- Separación clara entre **handlers**, **controllers** y **middlewares**.

### 3. Validación y Seguridad
- Validación de entrada con **Joi** (formato de email, longitud de contraseñas, roles válidos).
- Cifrado de contraseñas con **bcryptjs**.
- Autenticación de usuarios mediante **JWT**.
- Protección de rutas privadas y roles administrativos con middlewares personalizados.

### 4. Persistencia de Datos con MongoDB y Mongoose
- Modelos `User` y `Product` con relaciones referenciales (`ref`).
- Uso de `populate()` para traer información asociada (por ejemplo, productos creados por un usuario).
- Ejemplo de relación **uno a muchos** entre usuarios y productos.

### 5. Manejo de Errores y Respuestas
- Control de excepciones con bloques `try...catch`.
- Envío de códigos de estado HTTP apropiados (200, 201, 400, 401, 404, 500).
- Uso de mensajes personalizados para una comunicación clara con el cliente.

---

## 🧠 Conceptos Educativos Cubiertos

El proyecto **Talentos2025** funciona como un **recurso pedagógico progresivo** que abarca:

1. **Fundamentos de Node.js y Módulos.**
2. **Configuración de proyectos con NPM.**
3. **Creación de servidores HTTP y migración a Express.**
4. **Uso de Middlewares y enrutamiento modular.**
5. **Validación de datos y manejo de errores.**
6. **Autenticación con JWT y roles.**
7. **Conexión a bases de datos NoSQL con Mongoose.**
8. **Modelado de datos y relaciones entre colecciones.**
9. **Buenas prácticas en arquitectura backend.**

---

## 🔐 Ejemplo de Autenticación con JWT

```js
const jwt = require("jsonwebtoken");

const token = jwt.sign(
  { id: user.id, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: "1h" }
);
````

El middleware de autenticación (`authMiddleware.js`) valida la firma y expira automáticamente el token cuando el tiempo definido se cumple, garantizando seguridad en los endpoints protegidos.

---

## 📦 Instalación y Ejecución

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/Martin-Juncos/Talentos2025.git
   cd Talentos2025
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   Crea un archivo `.env` con el siguiente contenido:

   ```
   PORT=3000
   MONGO_URI=tu_conexion_a_MongoDB
   JWT_SECRET=tu_clave_secreta
   ```

4. **Ejecutar en modo desarrollo**

   ```bash
   npm run dev
   ```

5. **Probar endpoints**
   Utiliza **Postman** o **Insomnia** para enviar solicitudes a:

   ```
   GET  /users
   POST /register
   POST /login
   GET  /products
   ```

---

## 📚 Créditos y Autoría

Proyecto diseñado y desarrollado por
**Carlos Martín Juncos (Profe Martin)**
Docente y desarrollador de software — Programa **Talentos Digitales 2025**
💻 GitHub: [Martin-Juncos](https://github.com/Martin-Juncos)

---

**"Aprender a programar no es solo escribir código, sino entender cómo cada pieza se conecta para construir soluciones reales."**
— *By Profe Martin*


         Made by Prof. Martin with a lot of 💖 and ☕


