import React from "react";

const Filters = () => {
  return (
    <div>
      <img
        className="forbidden-logo"
        src="./img/forbidden.png"
        alt="vider les filtres"
      />
      <select name="status" id="status">
        <option value="">--Statut--</option>
        <option value="evaluated">Évalué</option>
        <option value="pre-certified">Pré-certifié</option>
        <option value="certified">Certifié</option>
      </select>

      {/* placeholder des dates à mettre via le CSS, pas de label pour ne pas surcharger */}
      <input type="date" id="dateDebut" />
      <input type="date" id="dateFin" />
    </div>
  );
};

export default Filters;
