# 📱 Mi Primera APP en Expo Go — iOS Design System

Aplicación móvil desarrollada como parte de la asignatura **Desarrollo de Dispositivos Móviles** en la **Institución Universitaria Pascual Bravo**. 

El proyecto demuestra el uso de una arquitectura limpia y modular en **React Native** con **TypeScript**, implementando una experiencia visual fluida y nativa inspirada en los lineamientos de diseño de **iOS (Human Interface Guidelines)**.

---

## 👤 Información del Estudiante

* **Asignatura:** Desarrollo de Dispositivos Móviles
* **Institución:** Institución Universitaria Pascual Bravo
* **Entorno:** Expo Go / React Native

---

## 🚀 Características Principales

* **Arquitectura Modular (SOLID):** Separación estricta de responsabilidades mediante componentes visuales, hooks personalizados, definición centralizada de tipos y módulos de estilos dedicados.
* **Sistema de Diseño iOS:** Paleta de colores nativa (System Blue, System Green, System Red), sombras sutiles, bordes redondeados y tipografías alineadas a la estética iOS.
* **Flujo de Navegación Stack:** Navegación por pila entre pantallas con botones de retorno estilizados (`‹ Inicio`, `‹ Directorio`).
* **Pantallas Implementadas:**
  * **`WelcomeScreen`**: Tarjeta de presentación (*HeroCard*) con diálogo modal intermedio (*CustomAlert*).
  * **`MenuScreen`**: Directorio de perfiles registrados presentados en tarjetas (*ProfileCard*).
  * **`CounterScreen`**: Contador interactivo con validación de límite inferior ($count \ge 0$), controles de incremento, decremento y reinicio, e indicador visual dinámico al alcanzar el valor objetivo ($10$).
* **Componentes Reutilizables:**
  * `HeroCard`: Tarjeta informativa principal.
  * `ProfileCard`: Componente de perfil con avatar, información profesional y ubicación.
  * `Badge`: Indicadores visuales de estado.
  * `Button`: Botones táctiles con respuestas contextuales.
  * `CustomAlert`: Modal personalizado de alerta nativa.
* **Tipado Estricto:** Interfaces de TypeScript centralizadas para datos y propiedades de navegación (`AppStackParamList`).

---

## 📁 Estructura del Proyecto

```text
src/
├── components/       # Componentes reutilizables (Badge, Button, CustomAlert, HeroCard, ProfileCard)
├── context/          # Estado global de la aplicación (AppContext)
├── hooks/            # Hooks personalizados para la lógica de negocio (useWelcomeData)
├── navigation/       # Configuración del Stack Navigator (AppNavigator)
├── screens/          # Pantallas (WelcomeScreen, MenuScreen, CounterScreen)
├── services/         # Simulación o consumo de APIs y servicios
├── styles/           # Sistema de diseño (theme.ts, welcomeStyles.ts, profileStyles.ts, counterStyles.ts)
├── types/            # Tipado de TypeScript (navigation.ts, profile.ts, welcome.ts)
└── utils/            # Funciones auxiliares y formateadores