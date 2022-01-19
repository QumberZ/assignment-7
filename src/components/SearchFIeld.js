import React, {useEffect, useState} from "react";

function SearchFIeld(props) {

const {gif} = props
const [randomGif, setRandomGif] = useState([]);
const [randomS, setRandom] = useState(false);
let jsonData = []

const url = "http://api.giphy.com/v1/gifs/random?api_key=CSIs6swXccz66TXhQ3EXrafhJUu4Lu5n"

function handleSubmit3 (event){
    event.preventDefault()
    console.log("Searchfield")
 
}


const randomSearch = async() => {
  
    const response = await fetch(url)
    console.log(response);

    const jsonData = await response.json();
    console.log(jsonData);

    setRandomGif(jsonData.data);
    setRandom(true);

}



    function displayGif(){
        if (jsonData){
            console.log(jsonData)
        }
     }
      
      
     function noGif(){
        console.log("noGif")
     }
     
      
     useEffect(() => {
     }, [jsonData])

    return (
        <>
        
<div className="SearchField mt-5 ">
        <form  onSubmit = {handleSubmit3} >

        <label>
          <b>Enter a gif(Random Search)</b>
      
</label>
         <button className= "Button3"
         onClick={randomSearch}>
           Search
         </button>
         </form>

             
                 
         <div className=" Random mt-5" >
                <img src={randomGif?.images?.original?.url} 
                alt={randomGif}
                ></img>   
                   </div>
              
</div>
        </>
)}

export default SearchFIeld;