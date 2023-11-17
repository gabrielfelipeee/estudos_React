import { useState } from 'react';


import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const [teams, setTeams] = useState([
    {
      name: "Programação",
      color: "#57C278",      
    },
    {
      name: "Front-End",
      color: "#82CFFA",      
    },
    {
      name: "Data Science",
      color: "#A6D157",     
    },
    {
      name: "Devops",
      color: "#E06B69",     
    },
    {
      name: "Ux e Design",
      color: "#DB6EBF",   
    },
    {
      name: "Mobile",
      color: "#FFBA05",
    },
    {
      name: "Inovação e Gestão",
      color: "#FF8A29",
    },
  ]);

  const [collaborators, setCollaborators] = useState([]);

  const newCollaboratorAdded = (collaborator) => {
    // Espalha(cópia), e depois adiciona mais um colaborador no fianl do array
    setCollaborators([...collaborators, collaborator]);
  }



  const changeColorTeam = (color, name) => {
    setTeams(teams.map(item => {
      if (item.name === name) {
        item.color = color;
      }
      return item;
    }))
  };



  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams.map(element => element.name)}
        registeredCollaborator={collaborator => newCollaboratorAdded(collaborator)}
      />

      {teams.map(team => {
        return <Team
          key={team.name}
          teamName={team.name}
          collaborators={collaborators.filter(element => element.team === team.name)}
          changeColor={changeColorTeam}
          color={team.color}
        />
      })}
      <Footer />
    </div>
  );
}
export default App;