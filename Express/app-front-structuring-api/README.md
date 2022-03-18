### I - Secão Setup Inicial

![image info](./assets/img/nodeReact.jpg)

- Tecnologias:
  - [x] - Biblioteca React ;
  - [x] - Biblioteca Styled Components

-Comandos executados:

```console
   - [x] - npx create-react-app app
   - [x] - npm install --save styled-components
   
```

- Limpando Arquivos (exclusões):
  - [x] - excluindo logo.svg
  - [x] - excluindo setupTests.js
  - [x] - excluindo reportWebVitals.js
  - [x] - excluindo index.css
- Alterações em arquivos:
  - [x] - Apagando conteúdo no arquivo index.js

```javascript
import "./index.css";
import reportWebVitals from "./reportWebVitals";
reportWebVitals();
```

- [x] - Apagando conteúdo App.css

```css
.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

- [x] - Apagando conteúdo no arquivo App.js

  ```javasript
  import './App.css'
  ```

  ```html
  <img src="{logo}" className="App-logo" alt="logo" />
  <header className="App-header">
    <p>Edit <code>src/App.js</code> and save to reload.</p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
  ```
