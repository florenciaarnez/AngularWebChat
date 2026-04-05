# AngularWebChat

##Simulador de Chat, Pagina web para agregar chats, mensajear y recibir una respuesta automatica.

<img width="1862" height="962" alt="Captura desde 2026-04-04 20-39-23" src="https://github.com/user-attachments/assets/7618a8f8-a7d6-42c2-b627-b0163b503800" />

## Instrucciones para el desarollo:

Clonar el repositorio

```bash
git clone 
```
instalar las dependencias 

```bash
npm install 
```
Correr localmente:

```bash
ng serve
```
Una vez que este corriendo abrir el navegador en 
`http://localhost:4200/`

## Instrucciones para probar el proyecto: 
Contraseña para acceder al chat: admin
## Estructura del proyecto

Arquietectura modular para optimizar la organizacion y futura escalabilidad

```bash
src/app/components
```
Contiene todos los componentes reutilizables del proyecto: 
formularios: Form, message-form
Header
sidebar
chatWindow
```bash
src/app/guards
```
Mecamismos de seguridad, (guardianes) que deciden si un usuario tiene acceso a las rutas

```bash
src/app/interfaces
```
Estructura typescript para definir estructura de message y chat

```bash
src/app/services
```
Servicios: ChatService para manejo de datos del localStorage con Signals
```bash
getChat() //para seleccionar un chat
addChat() // Añadir un nuevo chat
addMessage() //para añadir nuevos mensajes por chat
response() //Respuestas automaticas
```
```bash
src/app/views
```
Las distintas vistas/paginas que tiene la pagina web

```bash
src/app/app.routes.ts
```
Confuguracion de rutas


##  Arquitectura y Decisiones tecnicas

## Deploy 
El proyecto fue desplegado en Vercel https://angular-web-chat.vercel.app/login
