import React, { useState } from "react";
import Exercice from "./container/Exercice";

export default function Exercice3() {
  // 1. Crée un state pour suivre l'état de visibilité du texte.

const [visibility, setVisibility] = useState(true);

  // 2. Implémente une fonction pour basculer a l'état contraire ! .

const inversVisibility = () => {
  setVisibility(!visibility);
}

  // 3. Passe la fonction de toggle au bouton.
  // 4. Affiche ou masque le texte en fonction de l'état de visibilité.
  return (
    <Exercice>
      <h2>Exercice 3 : Toggle</h2>
      <p className="instructions">
        Modifie le composant Exercice3 pour basculer entre "Afficher" et
        "Masquer" un texte.
      </p>
      <div className="solution">
        <div>
          <button onClick={inversVisibility}>Afficher/Masquer</button>
          {visibility && <p>Texte à afficher/masquer</p>}
        </div>
      </div>
    </Exercice>
  );
}
