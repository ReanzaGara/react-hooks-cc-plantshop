import React, { useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

const [plants, setPlants] = useState([]);
const [searchTerm, setSearchTerm] = useState('');

useEffect(() => {
  fetch ('http://localhost:6001/plants')
  .then (res => res.json())
  .then (data => setPlants(data))
}, []);

function addPlant(object) {
  setPlants(plants => [...plants, object])
}

function searchPlants (string) {
  setSearchTerm(string)
}

const itemsToDisplay = plants.filter((plant) => 
  plant.name.toLowerCase().includes(searchTerm.toLowerCase())
)

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search onSearch={searchPlants}/>
      <PlantList plants={itemsToDisplay}/>
    </main>
  );
}

export default PlantPage;