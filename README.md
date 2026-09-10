# 📱 Mi Primera APP en Expo Go — iOS Design System

Aplicación móvil desarrollada como parte de la asignatura **Desarrollo de Dispositivos Móviles** en la **Institución Universitaria Pascual Bravo**. 

El proyecto demuestra el uso de una arquitectura limpia y modular en **React Native** con **TypeScript**, implementando una experiencia visual optimizada inspirada en los lineamientos de diseño de **iOS (Human Interface Guidelines)**.

---

## 👤 Información del Estudiante

* **Asignatura:** Desarrollo de Dispositivos Móviles
* **Institución:** Institución Universitaria Pascual Bravo
* **Entorno:** Expo Go / React Native

---

## 🚀 Características Principales

* **Arquitectura Modular (SOLID):** Separación de responsabilidades mediante componentes, contextos, hooks personalizados, servicios y controladores de navegación.
* **Sistema de Diseño iOS:** Palette de colores, sombras, bordes difuminados y tipografías alineadas a la estética de iOS.
* **Componentes Reutilizables:**
  * `HeroCard`: Tarjeta informativa principal.
  * `Badge`: Indicadores de estado e información institucional.
  * `Button`: Botón interactivo con retroalimentación táctil y escala.
  * `CustomAlert`: Modal nativo interactivo para alertas personalizadas.
* **Tipado Estricto con TypeScript:** Interfaces claras para la comunicación entre capas.
* **Manejo de Estado Global:** Proveedor de contexto (`AppContext`) para la gestión de la sesión u onboarding.

---

## 📁 Estructura del Proyecto

```text
src/
├── components/       # Componentes visuales reutilizables (Badge, Button, CustomAlert, HeroCard)
├── context/          # Estado global de la aplicación (AppContext)
├── hooks/            # Hooks personalizados para la lógica de negocio (useWelcomeData)
├── navigation/       # Configuración de rutas e integración de React Navigation
├── screens/          # Vistas principales de la interfaz (WelcomeScreen)
├── services/         # Simulación o consumo de APIs y servicios externos
├── styles/           # Tokens del sistema de diseño (theme.ts, welcomeStyles.ts)
├── types/            # Definiciones de tipos e interfaces TypeScript
└── utils/            # Funciones auxiliares y formateadores
