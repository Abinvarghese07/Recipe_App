import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Recipes from './Recipes';
import Searchbox from './Searchbox';

function App() {
  const api_id = '284deb41';
  const app_key = '85e0e87f1f9f85ad0bc0e5936f8dc994'	

  const[recipeData,setrecipeData] = useState([])
  const[searchValue,setSearchValue] = useState('')
  const[query,setQuery] = useState('chicken')
  

  const getRecipes =async () =>{
    const api_url = `https://api.edamam.com/search?q=${query}&app_id=${api_id}&app_key=${app_key}`;
    const response = await fetch(api_url)
    const data = await response.json()
    if(data.hits){
      setrecipeData(data.hits)
  }

    }
   
    




  



  useEffect(() =>{
    getRecipes()
    console.log(searchValue)

  },[query])

  const getQuery =() =>{
    setQuery(searchValue)


  }



  return (
    
    <div className="App">
    <Searchbox  searchValue = {searchValue} setSearchValue={setSearchValue} submitHandler={getQuery}></Searchbox>
    <Recipes recipeData={recipeData} ></Recipes>
      
    </div>
  );
}

export default App;
