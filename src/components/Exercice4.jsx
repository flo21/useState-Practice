import { useState } from "react";
import Dice from "./container/Dice";
import Exercice from "./container/Exercice";

export default function Exercice4() {
  // 1. Crée un state qui garde en mémoire une valeur numérique.

const [num, setNum] = useState(1);

  const rollThatDice = () => {
    // 2. Génère une nouvelle valeur aléatoire entre 1 et 6 et met à jour le state avec cette valeur.
    const newNum = Math.floor(Math.random() * 6) + 1;
    setNum(newNum);
  };

  // 3. Passe le State au composant Dice pour l'affichage. (value={ton state})

  return (
    <Exercice>
      <h2>Exercice 4 : Jeu de dés</h2>
      <p className="instructions">
        Modifie le composant Exercice4 pour faire fonctionner le lancer de dé
      </p>
      <div className="solution">
        <div>
          <Dice value={num} />
          <button onClick={rollThatDice}> Roll !!!</button>
        </div>
      </div>
    </Exercice>
  );
}
