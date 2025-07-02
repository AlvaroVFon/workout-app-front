# Workout App Frontend 🏋️‍♀️

[![Vue](https://img.shields.io/badge/Vue.js-35495E?style=flat-square&logo=vue.js&logoColor=4FC08D)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=flat-square&logo=daisyui&logoColor=white)](https://daisyui.com/)

> Aplicación frontend moderna para la gestión de entrenamientos, atletas y rutinas de ejercicio. Construida con Vue 3, TypeScript y Tailwind CSS, diseñada para conectarse con la [Workout App API](https://github.com/AlvaroVFon/workout-app).

## 📋 Tabla de Contenidos

- [Descripción](#descripción)
- [Stack Tecnológico](#stack-tecnológico)
- [Características](#características)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Ejecución](#ejecución)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Funcionalidades Implementadas](#funcionalidades-implementadas)
- [Componentes Principales](#componentes-principales)
- [API Integration](#api-integration)
- [Desarrollo](#desarrollo)
- [Contribución](#contribución)

## 🎯 Descripción

Aplicación frontend para la gestión completa de entrenamientos y atletas. Ofrece una interfaz moderna y responsiva para entrenadores y atletas, permitiendo el registro, autenticación y gestión de sesiones de entrenamiento a través de una API REST robusta.

## 🛠️ Stack Tecnológico

- **Framework**: Vue 3 (Composition API)
- **Lenguaje**: TypeScript
- **Build Tool**: Vite
- **Estilos**: Tailwind CSS + DaisyUI
- **Routing**: Vue Router 4
- **State Management**: Pinia
- **HTTP Client**: Axios
- **Validación**: Joi
- **Icons**: Lucide Vue Next
- **Linting**: ESLint + Prettier

## ✨ Características

- 🔐 **Sistema de autenticación completo** (Login/Register)
- 🎨 **UI moderna y responsiva** con Tailwind CSS y DaisyUI
- 🌙 **Tema claro/oscuro** con persistencia
- 📱 **Diseño mobile-first**
- 🔒 **Rutas protegidas** con guards de autenticación
- 🚀 **TypeScript** para type safety
- 📦 **Componentes reutilizables** y modulares
- 🔄 **Estado global** con Pinia
- ⚡ **Hot Module Replacement** con Vite
- 🧪 **Configuración de testing** lista para usar

## 📋 Requisitos

- Node.js 18+ 
- Yarn o npm
- [Workout App API](https://github.com/AlvaroVFon/workout-app) ejecutándose en el backend

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/workout-app-front.git
cd workout-app-front

# Instalar dependencias
yarn install
# o
npm install
```

## ⚙️ Configuración

1. **Configurar variables de entorno:**

```bash
# Copiar el archivo de ejemplo
cp .env.example .env

# Editar las variables de entorno
VITE_API_URL=http://localhost:3000
```

2. **Asegurar que la API esté ejecutándose:**
   - Seguir las instrucciones de la [Workout App API](https://github.com/AlvaroVFon/workout-app)
   - La API debe estar ejecutándose en `http://localhost:3000`

## 🏃‍♂️ Ejecución

### Desarrollo

```bash
# Iniciar servidor de desarrollo
yarn dev
# o
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Producción

```bash
# Verificar tipos
yarn type-check

# Construir para producción
yarn build

# Previsualizar build
yarn preview
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── auth/           # Componentes de autenticación
│   ├── common/         # Componentes comunes (buttons, inputs, etc.)
│   └── icons/          # Iconos SVG personalizados
├── composables/        # Lógica reutilizable de Vue
│   ├── useAuth.ts      # Manejo de autenticación
│   ├── useForm.ts      # Manejo de formularios
│   ├── useLocalStorage.ts  # Persistencia local
│   └── useTheme.ts     # Gestión de temas
├── config/             # Configuración de la aplicación
├── layouts/            # Layouts de páginas
│   ├── auth/           # Layout para autenticación
│   └── dashboard/      # Layout para dashboard
├── router/             # Configuración de rutas
├── schemas/            # Schemas de validación Joi
├── services/           # Servicios HTTP y API
├── types/              # Definiciones de tipos TypeScript
├── utils/              # Utilidades y helpers
└── views/              # Páginas/vistas principales
    ├── auth/           # Vistas de autenticación
    └── dashboard/      # Vistas del dashboard
```

## 🎯 Funcionalidades Implementadas

### ✅ Autenticación
- [x] Login de usuarios
- [x] Registro de nuevos usuarios  
- [x] Logout
- [x] Persistencia de sesión
- [x] Rutas protegidas
- [x] Manejo de tokens JWT

### ✅ UI/UX
- [x] Sistema de temas (claro/oscuro)
- [x] Componentes base reutilizables
- [x] Navegación responsiva
- [x] Formularios validados
- [x] Estados de carga
- [x] Manejo de errores

### 🚧 En Desarrollo
- [ ] Dashboard de atletas
- [ ] Gestión de ejercicios
- [ ] Sesiones de entrenamiento
- [ ] Estadísticas y gráficos
- [ ] Perfil de usuario

## 🧩 Componentes Principales

### Componentes Base
- **DefaultButton**: Botón reutilizable con variantes
- **DefaultInput**: Input con validación integrada
- **DefaultNavbar**: Barra de navegación principal
- **DefaultAlert**: Sistema de alertas
- **DefaultSpinner**: Indicador de carga
- **ThemeController**: Controlador de tema claro/oscuro

### Layouts
- **DefaultLayout**: Layout base para autenticación
- **DefaultDashboardLayout**: Layout para el dashboard con navegación

### Vistas
- **LoginView**: Página de inicio de sesión
- **RegisterView**: Página de registro
- **DefaultDashboardView**: Dashboard principal

## 🔗 API Integration

La aplicación se conecta con la [Workout App API](https://github.com/AlvaroVFon/workout-app) a través de:

### Endpoints Utilizados
- `POST /auth/login` - Autenticación de usuarios
- `POST /auth/signup` - Registro de usuarios

### Configuración HTTP
```typescript
// src/services/api.service.ts
const apiService = {
  baseURL: VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
}
```

## 🛠️ Desarrollo

### Scripts Disponibles

```bash
# Desarrollo con hot reload
yarn dev

# Verificación de tipos
yarn type-check

# Build de producción
yarn build

# Linting
yarn lint
yarn lint:check

# Formateo de código
yarn format
yarn format:check

# Lint + Format
yarn lint-and-format
```

### IDE Recomendado

**VSCode** con las siguientes extensiones:
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (deshabilitar Vetur)
- [TypeScript Vue Plugin](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

### Configuración de TypeScript

El proyecto utiliza TypeScript con configuración estricta. Los tipos para archivos `.vue` son manejados por `vue-tsc`.

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Convenciones de Código
- Usar TypeScript estricto
- Seguir la guía de estilos de Vue 3 Composition API
- Usar Tailwind CSS para estilos
- Componentes en PascalCase
- Archivos de composables con prefijo `use`

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🔗 Enlaces Relacionados

- [Workout App API (Backend)](https://github.com/AlvaroVFon/workout-app)
- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI Components](https://daisyui.com/)

---

⚡ **Desarrollado con Vue 3 + TypeScript + Vite**

```sh
yarn build
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```
