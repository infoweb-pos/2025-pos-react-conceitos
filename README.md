# Notas de aula - React - Conceitos básicos

## Informações gerais
- **Objetivo**: mostrar os conceitos básicos de React
- **Público alvo**: alunos da disciplina de POS (Programação Orientada a Serviços) do curso de Infoweb (Técnico Integrado em Informática para Internet) no CNAT-IFRN (Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte - Campus Natal-Central)
- **Professor**: [L A Minora](https://github.com/leonardo-minora/)
- **Aluno**: [Murillo V O P](https://github.com/muri06/)


## Pré-requisitos
1. Conta ativa no Github (todos nossos projetos serão via github)
2. Ter realizado e compreendido a aula/atividade de [criar projeto react](https://github.com/infoweb-pos/2025-pos-react-criar-projeto)



## Sumário

1. Conceitos básicos (introdutórios) do React
2. Prática com os conceitos básicos


### 1. React - Conceitos básicos
by [copilot](https://copilot.microsoft.com/)

#### O que é React?
React é uma biblioteca JavaScript desenvolvida pelo Facebook para criar interfaces de usuário de forma eficiente e declarativa. Ele permite construir componentes reutilizáveis que gerenciam seu próprio estado.

#### Componentes
Componentes são blocos de construção fundamentais em React. Eles podem ser definidos como funções ou classes e retornam elementos React que descrevem o que deve aparecer na tela.

#### JSX
JSX é uma extensão de sintaxe para JavaScript que permite escrever HTML dentro do JavaScript. Ele torna o código mais legível e expressivo.

#### Estado e Props
- **Estado**: O estado é um objeto que representa partes dinâmicas de um componente. Ele pode ser atualizado e React automaticamente re-renderiza o componente quando o estado muda.
- **Props**: Props são argumentos passados para componentes, permitindo que você compartilhe dados entre eles.

#### Hooks
Hooks são funções que permitem usar estado e outros recursos do React em componentes funcionais. O `useState` e `useEffect` são dois dos hooks mais comuns.

#### Ciclo de Vida dos Componentes
Componentes de classe têm métodos de ciclo de vida como `componentDidMount`, `componentDidUpdate`, e `componentWillUnmount`. Em componentes funcionais, você pode usar o hook `useEffect` para lidar com efeitos colaterais.

### Renderização Condicional
React permite renderizar componentes condicionalmente usando operadores ternários ou condicionais simples.

#### Renderização de Listas
Para renderizar listas, você pode usar o método `map` para iterar sobre arrays e retornar elementos React.

#### Eventos
React facilita a manipulação de eventos como cliques, mudanças de formulário, etc., usando manipuladores de eventos.




### 2. Prática com os conceitos básicos

**Passos para praticar**
1. _Fork_ desse repositório para permitir a prática
2. Modificar a linha 7, colocando o nome do aluno e o link para o github também do aluno.
3. Baixar (`git clone`) para máquina local (lembrar de abrir o vscode na mesma pasta do projeto clonado) ou usar o _codespaces_ para "codar"
4. Lembrar de instalar as bibliotecas com `npm i`
5. Rodar a aplicação com `npm run dev`
6. Abrir o navegador e visualizar a aplicação enquanto modifica

**Práticas**
1. Escrevendo Markup com JSX
2. Criar e aninhar componentes react
3. Adicionando Estilos
4. Exibindo Dados
5. Renderização Condicional
6. Respondendo a Eventos
7. Renderizando Listas
8. Atualizando a Tela - _useState_

**Observação** as práticas serão modificando os arquivos `src/app/page.tsx` e `src/app/globals.css`.

#### Prática 1. Escrevendo Markup com JSX
JSX é a sintaxe baseada na linguagem de marcação HTML para descrever um componente, ou parte dele, em React.
JSX é mais rigoroso que os navegadores são com arquivos HTML, como abrir e fechar marcações na sequência correta, uso de propriedades, entre outras coisas.
O JSX para descrever um componente deve:
- ter somente 1 marcação pai, que pode conter vários filhos, netos, etc.
- quando for usar mais de 1 linha, sempre envolver a marcação pai com parenteses.
- caso não tenha uma marcação pai de fato, pode usar a marcação vazia `<> ... </>`.

```jsx
// src/app/page.tsx
"use client";

const Titulo = () => <h1>React - Conceitos básicos</h1>;

const SubTitulo = () => (<h2>Lista de tarefas</h2>);

const Cabecalho = () => (
  <>
    <Titulo />
    <SubTitulo />
  </>
);

const Home = () => {
  return <Cabecalho />;
}

export default Home;

```



#### Prática 2. Criar e aninhar componentes
Para criar componentes em React, você pode usar funções ou classes.
Abaixo está um exemplo de como criar e aninhar componentes.

Lembrando que o arquivo abaixo é `src/app/page.tsx`.

```jsx
// src/app/page.tsx
"use client";

import React from "react";

const Titulo = () => <h1>React - Conceitos básicos</h1>;

const SubTitulo = () => <h2>Lista de tarefas</h2>;

function Cabecalho() {
	return (
		<>
			<Titulo />
			<SubTitulo />
		</>
	);
}

class Tarefa extends React.Component {
	render(): React.ReactNode {
		return (
			<div>
				<h3>Codar e codar durante 2025</h3>
				<p>Pendente</p>
			</div>
		);
	}
}
const Home = () => {
	return (
		<>
			<Cabecalho />
			<Tarefa />
		</>
	);
};

export default Home;

```



#### Prática 3. Adicionando Estilos
Você pode adicionar estilos usando CSS modules ou styled-jsx, ou ainda usando Styled Components.
Abaixo está um exemplo com CSS adicionado classe `titulo` ao código padrão (linhas 1-26) dos projetos React com NextJS.

Lembrando que iremos usar o `tailwind` em sala de aula e como tal o exemplo do código React será usando o framework.

```css
/* src/app/globals.css */
@import "tailwindcss";

:root {
	--background: #ffffff;
	--foreground: #171717;
}

@theme inline {
	--color-background: var(--background);
	--color-foreground: var(--foreground);
	--font-sans: var(--font-geist-sans);
	--font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
	:root {
		--background: #0a0a0a;
		--foreground: #ededed;
	}
}

body {
	background: var(--background);
	color: var(--foreground);
	font-family: Arial, Helvetica, sans-serif;
}

.titulo {
	color: blue;
}

```

```jsx
// src/app/page.tsx
"use client";

import React from "react";

const Titulo = () => <h1 className="text-2xl font-bold mb-1">React - Conceitos básicos</h1>;

const SubTitulo = () => <h2 className="text-4xl font-bold mb-6">Lista de tarefas</h2>;

function Cabecalho() {
	return (
		<div className="text-center">
			<Titulo />
			<SubTitulo />
		</div>
	);
}

class Tarefa extends React.Component {
	render(): React.ReactNode {
		return (
			<div className="p-3 mb-3 rounded-lg shadow-md bg-gray-400">
				<h3 className="text-xl font-bold">Codar e codar durante 2025</h3>
				<p className="text-sm">Pendente</p>
			</div>
		);
	}
}

const Home = () => {
	return (
		<div className="container mx-auto p-4">
			<Cabecalho />
			<Tarefa />
		</div>
	);
};

export default Home;

```



#### Prática 4. Exibindo Dados
Para exibir dados, você pode usar `props` e estado.
Abaixo está um exemplo usando valores em `props`.

```jsx
// src/app/page.tsx
"use client";

import React from "react";

const Titulo = () => (
	<h1 className="text-2xl font-bold mb-1">React - Conceitos básicos</h1>
);

const SubTitulo = () => (
	<h2 className="text-4xl font-bold mb-6">Lista de tarefas</h2>
);

function Cabecalho() {
	return (
		<div className="text-center">
			<Titulo />
			<SubTitulo />
		</div>
	);
}

class Tarefa extends React.Component {
	render(): React.ReactNode {
		return (
			<div className="p-3 mb-3 rounded-lg shadow-md bg-gray-400">
				<h3 className="text-xl font-bold">{this.props.titulo}</h3>
				<p className="text-sm">Pendente</p>
			</div>
		);
	}
}

const Home = () => {
	const tarefas = [
		{ id: 1, title: "delectus aut autem", completed: false },
		{ id: 2, title: "quis ut nam facilis et officia qui", completed: true },
		{ id: 3, title: "fugiat veniam minus", completed: false },
	];

	return (
		<div className="container mx-auto p-4">
			<Cabecalho />
			<Tarefa titulo={tarefas[0].title} />
			<Tarefa titulo={tarefas[1].title} />
		</div>
	);
};

export default Home;

```

Talvez apareça um sublinhado vermelho nos códigos `<Tarefa titulo=... />` porque o editor de código não consegue inferir o tipo, sim _typescript_ é tipado.
Para isso, é tipar o componente React que além de tudo irá permitir verificar se o código JSX esta correto.
Abaixo segue um exemplo de código, definindo um tipo `TarefaProps` com 2 propriedades `titulo` e `concluido`.
Sendo este último opcional.

```jsx
// src/app/page.tsx
"use client";

import React from "react";

const Titulo = () => (
	<h1 className="text-2xl font-bold mb-1">React - Conceitos básicos</h1>
);

const SubTitulo = () => (
	<h2 className="text-4xl font-bold mb-6">Lista de tarefas</h2>
);

function Cabecalho() {
	return (
		<div className="text-center">
			<Titulo />
			<SubTitulo />
		</div>
	);
}

interface TarefaProps {
  titulo: string;
	concluido?: boolean;
}

class Tarefa extends React.Component<TarefaProps> {
	render(): React.ReactNode {
		return (
			<div className="p-3 mb-3 rounded-lg shadow-md bg-gray-400">
				<h3 className="text-xl font-bold">{this.props.titulo}</h3>
				<p className="text-sm">Pendente</p>
			</div>
		);
	}
}

const Home = () => {
	const tarefas = [
		{ id: 1, title: "delectus aut autem", completed: false },
		{ id: 2, title: "quis ut nam facilis et officia qui", completed: true },
		{ id: 3, title: "fugiat veniam minus", completed: false },
	];

	return (
		<div className="container mx-auto p-4">
			<Cabecalho />
			<Tarefa titulo={tarefas[0].title} />
			<Tarefa titulo={tarefas[1].title} />
		</div>
	);
};

export default Home;

```




#### Prática 5. Renderização Condicional
Você pode renderizar componentes condicionalmente usando operadores ternários ou condicionais simples.
Abaixo segue um exemplo com operator ternário.

```jsx
// src/app/page.tsx

"use client";

import React from "react";

const Titulo = () => (
	<h1 className="text-2xl font-bold mb-1">React - Conceitos básicos</h1>
);

const SubTitulo = () => (
	<h2 className="text-4xl font-bold mb-6">Lista de tarefas</h2>
);

function Cabecalho() {
	return (
		<div className="text-center">
			<Titulo />
			<SubTitulo />
		</div>
	);
}

interface TarefaProps {
  titulo: string;
	concluido?: boolean;
}

class Tarefa extends React.Component<TarefaProps> {
	
	render(): React.ReactNode {
		const classe = `p-3 mb-3 rounded-lg shadow-md ${this.props.concluido ? "bg-gray-800" : "bg-gray-400"}`;

		return (
			<div className={classe}>
				<h3 className="text-xl font-bold">{this.props.titulo}</h3>
				<p className="text-sm">{this.props.concluido ? "Concluída" : "Pendente"}</p>
			</div>
		);
	}
}

const Home = () => {
	const tarefas = [
		{ id: 1, title: "delectus aut autem", completed: false },
		{ id: 2, title: "quis ut nam facilis et officia qui", completed: true },
		{ id: 3, title: "fugiat veniam minus", completed: false },
	];

	return (
		<div className="container mx-auto p-4">
			<Cabecalho />
			<Tarefa titulo={tarefas[0].title} />
			<Tarefa titulo={tarefas[1].title} />
		</div>
	);
};

export default Home;

```

Esta incompleto porque o JSX de `Home` esta faltando passar o valor que informa se a tarefa esta completa ou não.
Ajustando esse detalhe com o código abaixo.

```jsx
// src/app/page.tsx
"use client";

import React from "react";

const Titulo = () => (
	<h1 className="text-2xl font-bold mb-1">React - Conceitos básicos</h1>
);

const SubTitulo = () => (
	<h2 className="text-4xl font-bold mb-6">Lista de tarefas</h2>
);

function Cabecalho() {
	return (
		<div className="text-center">
			<Titulo />
			<SubTitulo />
		</div>
	);
}

interface TarefaProps {
  titulo: string;
	concluido?: boolean;
}

class Tarefa extends React.Component<TarefaProps> {
	
	render(): React.ReactNode {
		const classe = `p-3 mb-3 rounded-lg shadow-md ${this.props.concluido ? "bg-gray-800" : "bg-gray-400"}`;

		return (
			<div className={classe}>
				<h3 className="text-xl font-bold">{this.props.titulo}</h3>
				<p className="text-sm">{this.props.concluido ? "Concluída" : "Pendente"}</p>
			</div>
		);
	}
}

const Home = () => {
	const tarefas = [
		{ id: 1, title: "delectus aut autem", completed: false },
		{ id: 2, title: "quis ut nam facilis et officia qui", completed: true },
		{ id: 3, title: "fugiat veniam minus", completed: false },
	];

	return (
		<div className="container mx-auto p-4">
			<Cabecalho />
			<Tarefa titulo={tarefas[0].title} concluido={tarefas[0].completed} />
			<Tarefa titulo={tarefas[1].title} concluido={tarefas[1].completed} />
		</div>
	);
};

export default Home;

```




#### Prática 6. Respondendo a Eventos
Para responder a eventos, você pode usar manipuladores de eventos que são bem parecidos como o utilizado no HTML.
Contudo, atenção com os nomes nas marcações, elas seguem a sintaxe _camelCase_.

Algumas coisas, podemos conseguir apenas com o css e auxiliado com o tailwindcss, como o uso do `hover` na parte do código abaixo.

```jsx
// src/app/page.tsx
...

class Tarefa extends React.Component<TarefaProps> {
	
	render(): React.ReactNode {
		const classe = `p-3 mb-3 rounded-lg shadow-md hover:cursor-pointer hover:border ${this.props.concluido ? "bg-gray-800 hover:border-gray-800" : "bg-gray-400 hover:border-gray-400"}`;

		return (
			<div className={classe}>
				<h3 className="text-xl font-bold">{this.props.titulo}</h3>
				<p className="text-sm">{this.props.concluido ? "Concluída" : "Pendente"}</p>
			</div>
		);
	}
}

...

```

Vamos transformar o componente `Home` de classe para _arrow function_ e seguir tratando eventos.

```jsx
// src/app/page.tsx
...
const Tarefa: React.FC<TarefaProps> = ({titulo, concluido}) => {
	const classe = `p-3 mb-3 rounded-lg shadow-md hover:cursor-pointer hover:border ${
		concluido
			? "bg-gray-800 hover:border-gray-800"
			: "bg-gray-400 hover:border-gray-400"
	}`;

	return (
		<div className={classe}>
			<h3 className="text-xl font-bold">{titulo}</h3>
			<p className="text-sm">
				{concluido ? "Concluída" : "Pendente"}
			</p>
		</div>
	);
};
...
```

Agora, iremos tratar o evento de clicar no `div` da tarefa no código abaixo.
O código apenas mostra como tratar o evento, definindo uma _arrow function_ anônima que executa uma chamada ao log do console do navegador.

```jsx
// src/app/page.tsx
"use client";

import React from "react";

const Titulo = () => (
	<h1 className="text-2xl font-bold mb-1">React - Conceitos básicos</h1>
);

const SubTitulo = () => (
	<h2 className="text-4xl font-bold mb-6">Lista de tarefas</h2>
);

function Cabecalho() {
	return (
		<div className="text-center">
			<Titulo />
			<SubTitulo />
		</div>
	);
}

interface TarefaProps {
	titulo: string;
	concluido?: boolean;
}

const Tarefa: React.FC<TarefaProps> = ({ titulo, concluido }) => {
	const classe = `p-3 mb-3 rounded-lg shadow-md hover:cursor-pointer hover:border ${
		concluido
			? "bg-gray-800 hover:border-gray-800"
			: "bg-gray-400 hover:border-gray-400"
	}`;

	return (
		<div
			className={classe}
			onClick={() => console.log(`A tarefa '${titulo}' foi clicada!`)}
		>
			<h3 className="text-xl font-bold">{titulo}</h3>
			<p className="text-sm">{concluido ? "Concluída" : "Pendente"}</p>
		</div>
	);
};

const Home = () => {
	const tarefas = [
		{ id: 1, title: "delectus aut autem", completed: false },
		{ id: 2, title: "quis ut nam facilis et officia qui", completed: true },
		{ id: 3, title: "fugiat veniam minus", completed: false },
	];

	return (
		<div className="container mx-auto p-4">
			<Cabecalho />
			<Tarefa titulo={tarefas[0].title} concluido={tarefas[0].completed} />
			<Tarefa titulo={tarefas[1].title} concluido={tarefas[1].completed} />
		</div>
	);
};

export default Home;

```




#### Prática 7. Renderizando Listas

Considerando o código de `Home` abaixo, temos algumas considerações: 
1. se for uma lista de tarefas muito grande, o código JSX de `Home` também ficará grande;
2. se a lista mudar de tamanho, precisaremos modificar o código de `Home`;
3. se a lista vier dinâmicamenteo, não tem como atualizar o código em tempo de execução.


```jsx
// src/app/page.tsx
...

const Home = () => {
	const tarefas = [
		{ id: 1, title: "delectus aut autem", completed: false },
		{ id: 2, title: "quis ut nam facilis et officia qui", completed: true },
		{ id: 3, title: "fugiat veniam minus", completed: false },
	];

	return (
		<div className="container mx-auto p-4">
			<Cabecalho />
			<Tarefa titulo={tarefas[0].title} concluido={tarefas[0].completed} />
			<Tarefa titulo={tarefas[1].title} concluido={tarefas[1].completed} />
			<Tarefa titulo={tarefas[2].title} concluido={tarefas[2].completed} />
		</div>
	);
};

export default Home;

```


Resolvendo os itens 1 e 2 construindo com construções de repetição que pode ser laços (`for` e `while`) ou métodos de coleções (`map`, `filter`).
No caso de componentes React, usualmente a comunidade prefere usar uma lista com método:
- `map` se for converter um objeto em um componente Reaact
- `filter` se for pegar um subconjunto da lista de objetos.

Ainda falanda de hábito da comunidade, normalmente usa um componente React para o conjunto e um outro para o item.
Neste caso, o código abaixo será utilizado `Tarefas` para o conjunto e `Tarefa` para o item.

Por fim, o React 'obriga' (para não dizer que apenas reclama com _error_ no console do navegador) a usar em uma lista a propriedade `key`.
O código abaixo mostra parte do arquivo `src/app/page.tsx` que mudou para apresentar a lista.

```jsx
// src/app/page.tsx 
...

interface TarefaInterface {
	id: number;
	title: string;
	completed: boolean;
}

interface TareafasProps {
	dados: Array<TarefaInterface>;
}

const Tarefas: React.FC<TareafasProps> = ({ dados }) => {
	return (
		<div>
			{dados.map((tarefa) => (
				<Tarefa
					key={tarefa.id}
					titulo={tarefa.title}
					concluido={tarefa.completed}
				/>
			))}
		</div>
	);
};

const Home = () => {
	const tarefas = [
		{ id: 1, title: "delectus aut autem", completed: false },
		{ id: 2, title: "quis ut nam facilis et officia qui", completed: true },
		{ id: 3, title: "fugiat veniam minus", completed: false },
	];

	return (
		<div className="container mx-auto p-4">
			<Cabecalho />
			<Tarefas dados={tarefas} />
		</div>
	);
};

export default Home;

```

O código completo pode ser acessado no [gist](https://gist.github.com/leonardo-minora/02a77601892e9ff160511dab184d4953).




#### Prática 8. Atualizando a Tela - _useState_
Para atualizar a tela, você pode usar o estado e hooks como `useEffect`.
No exemplo abaixo, foi usado o hook `useState` para definir estado (variável e função para modificar valor da variável) no componente `Tarefa`.
Este código é a parte que modificou da tarefa anterior e foi recortado para efeito de explicação.

Para o código completo, acessar o [gist](https://gist.github.com/leonardo-minora/89f427ec5500c2d0ba585c90760fc89f).

```jsx
// src/app/page.tsx
...
const Tarefa: React.FC<TarefaProps> = ({ titulo, concluido }) => {
	const [estaConcluido, setEstaConcluido] = useState(concluido);

	const classe = `p-3 mb-3 rounded-lg shadow-md hover:cursor-pointer hover:border ${
		estaConcluido
			? "bg-gray-800 hover:border-gray-800"
			: "bg-gray-400 hover:border-gray-400"
	}`;

	const escutarClique = () => {
		console.log(`A tarefa '${titulo}' foi clicada!`);
		setEstaConcluido(!estaConcluido);
	}

	return (
		<div
			className={classe}
			onClick={() => escutarClique()}
		>
			<h3 className="text-xl font-bold">{titulo}</h3>
			<p className="text-sm">{estaConcluido ? "Concluída" : "Pendente"}</p>
		</div>
	);
};
...

```
