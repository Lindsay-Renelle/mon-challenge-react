import './App.css';

function App() {
 const user = {
  prenom: "Gabriel",
  nom: "Durand"
 };

 const tasks = [
  "Apprendre les bases de React",
  "Installer npm",
  "Faire le dernier challenge"
 ];

 let tasksList = [];
 let key = 0;
 for (const task of tasks) {
  tasksList.push(<li key={key++}>{task}</li>);
 }



  return (
    <div className="App">
      <header>
        <h1> Bonjour {user.prenom} {user.nom}</h1>
      </header>

      <main>
        <h2>Mon premier projet React</h2>
        <ul>
          {tasks.map ((task, index) =>(
            <li key={index}>{task}</li>
          ))}
        </ul>
      </main>

      <footer>
        <p> Premier projet en local réalisé avec React - © Céline</p>
      </footer>
    </div>
  );
}

export default App;
