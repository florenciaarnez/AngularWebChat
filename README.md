# AngularWebChat

##Simulador de Chat, Pagina web para agregar chats, mensajear y recibir una respuesta automatica.

## Probar el proyect:
web: https://angular-web-chat.vercel.app/login
contraseña: admin

## Tecnologias Utilizadas:
**Angular 17:**  Freamework de js. Se utilizo: Guards, Control Flow Blocks, formularios reactivos y Singals.
**Typescript:**  Lenguaje de Programacion. Se utilizo: Interfaces, inyectables, constructores y Tipado. 
**HTML5**  Lenguaje de marcado de hipertexto Se utilizo para toda la estructura de los componentes de la pagina.
**CSS3:** lenguaje de hojas de estilo Se utilizo para la aplicacion de estilos y el estilo responsive con Flexbox y @media. 
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

Uso de Signals para estado reactivo

Persistencia en localStorage del usuario logueado y sus respectivos chats

Uso de guards para proteccion de rutas 

## Captura de la pagina
<img width="1862" height="962" alt="Captura desde 2026-04-04 20-39-23" src="https://github.com/user-attachments/assets/7618a8f8-a7d6-42c2-b627-b0163b503800" />

## Deploy 
El proyecto fue desplegado en Vercel https://angular-web-chat.vercel.app/login

