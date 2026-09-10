# 📱 TOTH — Asistente Académico con IA Generativa & RAG Híbrido

**TOTH** es una aplicación móvil innovadora diseñada específicamente para la comunidad académica de la **I.U. Pascual Bravo** (Asignatura: *Programación de Dispositivos Móviles*). 

A diferencia de las herramientas convencionales de generación de texto, TOTH utiliza un **motor sintáctico Anti-Cliché**, una **arquitectura de RAG Híbrido** (documentación institucional + Búsqueda Web en tiempo real) y **perfiles adaptativos (Estudiante / Docente)** para producir documentos técnicos y académicos de alta calidad sin estructuras predecibles.

---

### ✨ Características Principales
* 🚫 **Filtro Anti-Cliché (Negative Prompting):** Prohíbe explícitamente muletillas comunes de IA (*"En conclusión"*, *"Un aspecto clave"*, *"Juega un papel crucial"*).
* 🧠 **RAG Híbrido Inteligente:** Prioriza la base documental de la I.U. Pascual Bravo (Supabase pgvector) y complementa con **Google Search Grounding** para información actualizada en tiempo real.
* 🎓 **Perfiles Académicos Adaptativos:**
  * **Perfil Estudiante:** Formato explicativo, guiado paso a paso y orientado a la entrega de proyectos.
  * **Perfil Docente:** Alta densidad académica, tono evaluativo y estructura para guías/papers.
* ⚡ **Arquitectura Eficiente:** Frontend responsivo en React Native (Expo) con integración de módulos nativos en **Kotlin** para gestión pesada local y exportación de archivos.

---

### 🛠️ Stack Técnico
* **Frontend Móvil:** React Native (Expo) + TypeScript + NativeWind (Tailwind CSS)
* **Módulos Nativos:** Kotlin (Android Native Modules)
* **Backend & Serverless:** Vercel (Functions) + Firebase Auth / Cloud Firestore
* **Motor de IA & RAG:** Google Gen AI SDK (Gemini 1.5 Flash) + Supabase (`pgvector`)
