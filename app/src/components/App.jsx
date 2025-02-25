import { Wheel } from "./Wheel";
import style from "../styles.css"
import data from '../data/data'

function App() {
  return (
    <div id="container">
        <header>
          <h1 className="title">La Roue de la Deut-une de Bharani</h1>
          <h2 className="subtitle">- offerte par la DDN -</h2>
          <p>Les règles de la Roue de la Deut-une sont variables et édictées par la DDN - elles peuvent être modifiées à tout instant.</p>
          <p className="disclaimer">Toute infraction aux règles de la Roue de la Deut-une sera sévèrement réprimée par la DDN.</p>
        </header>
        <main>
            <Wheel/>
        </main>
    </div>
  );
}

export default App;
