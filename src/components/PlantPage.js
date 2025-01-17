import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, theePlants] = useState([]);
  // fetch request to GET the plants from the server

  useEffect(() => {
    fetch(" http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => theePlants(data));
  }, []);

  function addPlant(newPlant) {
    const newPlants = [...plants, newPlant];
    theePlants(newPlants);
  }
  const [submittedSearch, setSubmittedSearch] = useState("");

  function deletePlant(id) {
    const newPlants = plants.filter((plant) => plant.id !== id);
    theePlants(newPlants);
  }

  return (
    <main>
      <NewPlantForm onAddPlant={addPlant} />
      <Search setSubmittedSearch={setSubmittedSearch} />
      <PlantList
        plants={plants}
        submittedSearch={submittedSearch}
        onDeletePlant={deletePlant}
      />
    </main>
  );
}

export default PlantPage;