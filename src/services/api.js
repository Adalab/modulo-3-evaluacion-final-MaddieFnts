const apiURL = "https://hp-api.onrender.com/api/characters";

const getCharacters = async () => {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log("Datos recibidos de la API:", data);
    return data;
  } catch (error) {
    console.error("Error en la petición:", error);
    return [];
  }
}

export default getCharacters 

