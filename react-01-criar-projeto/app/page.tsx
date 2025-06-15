// src/app/page.tsx
"use client";

import React, { useState } from "react";

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

const Tarefa: React.FC<TarefaProps> = ({titulo, concluido}) => {
    const [estaConcluido, setEstaConcluido] = useState(concluido);
	
		const classe = `p-3 mb-3 rounded-lg shadow-md hover:cursor-pointer hover:border ${
      estaConcluido 
        ? "bg-gray-800 hover:border-gray-900 hover:border-3" 
        : "bg-gray-400 hover:border-gray-500 hover:border-3"
    }`;

    const escutarClique = () => {
      console.log(`A tarefa '${titulo}' foi clicada!`)
      setEstaConcluido(!estaConcluido); 
    }

		return (
			<div 
        className={classe}
        onClick={() => escutarClique()}
      >
				<h3 className="text-xl font-bold">{titulo}</h3>
				<p className="text-sm">
          {concluido ? "Concluída" : "Pendente"}</p>
			</div>
		);
	};

interface TarefaInterface {
  id: number;
  title: string;
  completed: boolean;
}

interface TarefaProps {
  dados: Array<TarefaInterface>;
}

const Tarefas: React.FC<TarefasProps> = ({dados}) =>{
  return (
    <div>
      {dados.map((tarefa) => (
        <Tarefa
          key={tarefa.id}
          titule={tarefa.title}
          concluido={tarefa.completed}
        />
      ))}
    </div>
  );
};

const Home = () => {
  const tarefas = [
    {id: 1, title: "A Iara agarra e amarra a rara arara de Araraquara.", completed: false},
    {id: 2, title: "Num ninho de mafagafos há sete mafagafinhos. Quando a mafagafa gafa, gafam os sete mafagafinhos.", completed: true},
    {id: 3, title: "Trazei três pratos de trigo para três tigres tristes comerem.", completed: false},
  ]
	return (
		<div className="container mx-auto p-4">
			<Cabecalho />
			<Tarefa titulo={tarefas[0].title} concluido={tarefas[0].completed}/>
			<Tarefa titulo={tarefas[1].title} concluido={tarefas[1].completed}/>
			<Tarefa titulo={tarefas[2].title} concluido={tarefas[2].completed}/>
		</div>
	);
};

export default Home;
