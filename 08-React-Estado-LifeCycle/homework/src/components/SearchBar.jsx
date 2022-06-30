import React, { useState } from "react";

export default function SearchBar({onSearch}) {

   const [city, setCity] = useState("");

   const handleInputChange = (e) => {
      e.preventDefault();
      setCity(e.target.value)
   }


  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      e.target[0].value = ""
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={(e) => handleInputChange(e)}
      />
      <input type="submit" value="Agregar"  />
      
    </form>
  );
}
