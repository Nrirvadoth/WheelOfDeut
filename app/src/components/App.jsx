import { Wheel } from "./Wheel";
import style from "../styles.css"
import data from '../data/data'

function App() {
  return (
    <div id="container">
        <header>
          <h1 className="title">La Roue de la Deut-une de Bharani</h1>
          <h2 className="subtitle">- offerte par la DDN -</h2>
          <p>Un tirage chaque semaine ! Un tirage consiste en deux lancers de la Roue de la Deut-une. La première alliance tirée recevra un pull de <strong><u>500M deut dans les 48h</u></strong> de la part de la seconde alliance (ou commerce à taux avantageux de 1G deut si pull impossible).</p>
          <p>Vous ne souhaitez pas être sur la Roue de la Deut-une ? Contactez la DDN et réglez <strong><u>30M</u></strong> deut pour être exclu du prochain tirage !</p>
          <p className="disclaimer">Toute infraction aux règles de la Roue de la Deut-une sera sévèrement réprimée par la DDN.</p>
        </header>
        <main>
            <Wheel/>
        </main>
    </div>
  );
}

export default App;
