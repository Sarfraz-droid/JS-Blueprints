![v1vpW6fWwt](https://user-images.githubusercontent.com/73013838/180638472-1d207273-11c6-4d23-9504-aea0d7c93cf9.gif)

### BLOCK BASED JAVASCRIPT BLUEPRINTS

Block based Javascript Builder, Built on Typescript, React. 
Managed with Lerna.


The app uses ```lerna```. If lerna CLI isn't set up. Get started on [Getting Started | Lerna](https://lerna.js.org/docs/getting-started)

### Tech Stack
- Typescript
- React.JS
- Node.JS
- Lerna
- Firebase

### Folder Structure

-  packages
	- client
	- lib
	- server

**Client**
- This contains the client side react application

**Lib**
- the `lib` folder shares the common types and documentation for the application

**Server**
- the `server` folder contains the express application as a server.

---
### SETTING UP THE APPLICATION
1. Setup
```npx lerna bootstrap --use-workspaces```
		*This installs all the dependencies needed*

2. Run by
```npx lerna run dev```
*Runs the client and the server in development mode*

