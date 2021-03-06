# MOUNTAIN GENERATOR

Essa aplicação foi desenvolvida com o  objetivo de praticar conceitos de Three.js juntamente com React, com o objetivo de desenvolver páginas completas, capazes de tanto entregar uma experiência diferenciada ao usuário, quanto manter uma estrutura web mais comum.

Ela consiste de uma seção inicial totalmente feita em Three.js, modificando um plano para simular a formação de montanhas através de shaders + Perlin Noise para criação de superficies irregulares mais naturais.

Nesse projeto foram utilizadas as seguintes tecnologias:

- React
- Three.js
- GLSL
- Webpack
- dat.gui

# App em produção

[https://mountain-generator.vercel.app/](https://mountain-generator.vercel.app/)

# Executando a aplicação localmente:

## Docker

Execute o seguinte comando no terminal:

`docker container run -dit -p 8080:80 gustavomiyazaki/mountain_generator`

Acesse [http://localhost:8080/](http://localhost:8080/) em seu navegador favorito.

## Node

Clone o repositório executando o seguinte comando no terminal:

`git@github.com:gustavoalves23/mountain_generator.git`

Acesse a pasta do projeto:

`cd mountain_generator`

Instale as dependências:

`npm install`

Inicie o servidor:

`npm run dev`

Caso nenhum navegador tenha sido aberto automaticamente, acesse [http://localhost:8080/](http://localhost:8080/)
