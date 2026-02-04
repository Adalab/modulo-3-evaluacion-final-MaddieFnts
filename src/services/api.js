const apiURL = "https://hp-api.onrender.com/api/characters";

const getCharacters = () => {
return fetch(apiURL)
.then((response) => response.json())
.then((data) => {
  return data;  
})
}

export default getCharacters 

