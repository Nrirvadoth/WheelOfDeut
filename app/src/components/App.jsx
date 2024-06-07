import { Wheel } from "./Wheel";
import style from "../styles.css"
import data from '../data/data'

function App() {
  return (
    <div id="container">
        <header>
          <h1 className="title">La Roue de la Deut-une</h1>
          <h2 className="subtitle">- offerte par la DDN -</h2>
          <p className="intro">Un tirage toutes les 48h, l'alliance gagnante aura l'honneur de livrer 1G deut à la DDN, sous peine de représailles.</p>
          <p className="intro">Vous ne souhaitez pas être tiré au sort ? Contactez la DDN et réglez 250M deut pour être exclu du prochain tirage !</p>
        </header>
        <main>
            <Wheel/>
        </main>
    </div>
  );
}

export default App;
