
import Stg from "./Stg.jsx";
function App() {
  let nom = "akhrouf";
  let stylelist = {
    color: "red",
    fontSize: "20px",
    fontFamily: "Arial",
  };
  let stg ={nom: "akhrouf", age: 19, ville: "tetouan"};
  let statut;
  if (stg.age >= 18) {
    statut="majeur";
  } else {
    statut="mineur";
  }
  return (
    <div >
      <p style={stylelist}>no :{nom}</p>
      <Stg nom={stg.nom} age={stg.age} ville={stg.ville} />
      <p style={stylelist}>statut:{statut}</p>
    </div>
  );
}

export default App;
