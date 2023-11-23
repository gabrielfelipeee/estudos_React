import { useState } from 'react';

// Serve para colocar ids únicos | uuidv4 é um "apelido" de v4
import { v4 as uuidv4 } from 'uuid'; 

import Banner from './components/Banner';
import Form from './components/Form';
import Add from './components/Add';
import Team from './components/Team';
import Footer from './components/Footer';


function App() {

  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: "Programação",
      color: "#57C278",      
    },
    {
      id: uuidv4(),
      name: "Front-End",
      color: "#82CFFA",      
    },
    {
      id: uuidv4(),
      name: "Data Science",
      color: "#A6D157",     
    },
    {
      id: uuidv4(),
      name: "Devops",
      color: "#E06B69",     
    },
    {
      id: uuidv4(),
      name: "Ux e Design",
      color: "#DB6EBF",   
    },
    {
      id: uuidv4(),
      name: "Mobile",
      color: "#FFBA05",
    },
    {
      id: uuidv4(),
      name: "Inovação e Gestão",
      color: "#FF8A29",
    },
  ]);

  const [collaborators, setCollaborators] = useState([]);

  const newCollaboratorAdded = (collaborator) => {
    // Espalha(cópia), e depois adiciona mais um colaborador no fianl do array
    setCollaborators([...collaborators, collaborator]);
  }


  const changeColorTeam = (color, id) => {
    setTeams(teams.map(item => {
      if (item.id === id) {
        item.color = color;
      }
      return item;
    }))
  };


  const deleteCollaborator = (id) => {
    setCollaborators(collaborators.filter(item => item.id !== id));
  }

  const registerTeam = (newTeam) => {
    setTeams([... teams, {... newTeam, id: uuidv4()}]);
    console.log("funcionou")
  }


  const whenFavorite = (id) => {
    setCollaborators(collaborators.map(item => {
      if (item.id === id) {
        item.favorite = !item.favorite;
      }
      return item

    }))
  }

  const [display, setDisplay] = useState("none");
  const addCollaborator = () => {
    if (display === "none") {
      setDisplay("flex");
    } else {
      setDisplay("none");
    }
    return display;
  };


  return (
    <div className="App">
      <Banner />
      <Form
        registerTeam={registerTeam}
        teams={teams.map(element => element.name)}
        registeredCollaborator={collaborator => newCollaboratorAdded(collaborator)}
        idCollaborator={uuidv4()}
        display={display}
      />

      {teams.map(team => {
        return <Team
          key={team.id}
          teamName={team.name}
          collaborators={collaborators.filter(element => element.team === team.name)}
          changeColor={changeColorTeam}
          color={team.color}
          whenDelete={deleteCollaborator}
          id={team.id}
          whenFavorite={whenFavorite}
        />
      })}
      <Add addCollaborator={addCollaborator}/>
      <Footer />
    </div>
  );
}
export default App;