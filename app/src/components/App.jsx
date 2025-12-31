import { Wheel } from "./Wheel";
import style from "../styles.css"
import data from '../data/data'

function App() {
  return (
    <div id="container">
        <header>
          <h1 className="title">La Roue de l'infortune NGE</h1>
          <h2 className="subtitle">- offerte par la DDN, en collaboration avec GAT et Kay -</h2>
         <p>Afin d'offrir à l'alliance NGE un beau cadeau en ce début d'année, la roue désignera un NGE de façon régulière afin qu'il soit le centre de l'attention sur Tucana. Bien évidemment, en cas de MV, il faudrait désigner un nouveau NGE.</p>
         {/* <p className="disclaimer">Toute infraction aux règles de la Roue de la Deut-une sera sévèrement réprimée par la DDN.</p> */}
        </header>
        <main>
            <Wheel/>
        </main>
    </div>
  );
}

export default App;
