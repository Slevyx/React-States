// Prendendo i dati da questa api https://restcountries.eu/rest/v2/all
// mostrare una lista contenente gli stati del mondo. Per ogni
// stato mostrare nome e continente.
// Al click della singola riga, nascondere la lista e mostrare
// maggiori informazioni riguardanti lo stato selezionato (tipo
// popolazione, bandiera...).

// Una volta completato l'esercizio arricchire il codice con
// ulteriori controlli (es: permettere all'utente di ritornare
// alla lista dopo aver selezionato uno stato) e con dello style.

import "./styles.css";
import React, { useState, useEffect } from "react";
import StatesList from "./StatesList";
import DetailsList from "./DetailsList";
import Arrow from "./Arrow";

export default function App() {
  const [statesList, setStatesList] = useState([]);
  const [detailsList, setDetailsList] = useState([]);
  const [isStatesList, setIsStatesList] = useState(true);

  useEffect(() => {
    getStates();
  }, []);

  const deleteElement = (selectedElement) => {
    const selectedIndex = statesList.findIndex(
      (element) => element.alpha3Code === selectedElement.alpha3Code
    );
    statesList.splice(selectedIndex, 1);
    setStatesList([...statesList]);
  };

  const getDetails = (selectedElement) => {
    setIsStatesList(false);
    setDetailsList(selectedElement);
  };

  const backToList = () => {
    setIsStatesList(true);
    getStates();
  };

  const getStates = async () => {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const json = await response.json();
    setStatesList(json);
  };

  return (
    <div className="App">
      {isStatesList ? (
        <StatesList
          statesList={statesList}
          elementDeletion={deleteElement}
          getDetails={getDetails}
        />
      ) : (
        <>
          <Arrow backToList={backToList} />
          <DetailsList elementDetails={detailsList} />
        </>
      )}
    </div>
  );
}
