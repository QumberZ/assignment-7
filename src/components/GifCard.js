import React, {useEffect, useState} from "react";
import SearchFIeld from "./SearchFIeld";

 

function GifCard(props) {
    //destructure props
const {gif} = props
const[searchTrend, setSearchTrend] = useState([])
const[loadTrend, setTrend] = useState(false);

const url = "http://api.giphy.com/v1/gifs/trending?api_key=CSIs6swXccz66TXhQ3EXrafhJUu4Lu5n"


function handleSubmit2 (event){
    event.preventDefault()
    console.log("gifcard is working")
 
}

const trendingSearch = () => {
   
    
     setTrend(true)
     fetch(url)
     .then((res) =>{
       setTrend(false)
       return res.json()
     })
     .then((res) =>{
     setSearchTrend(res.data.map((gif) => {
       return (gif.images.fixed_height.url)
     
     }))
     })
}


useEffect(() => {
}, [])

 return(
<>
 
<div className="GifCard mt-5 ">
        <form  onSubmit = {handleSubmit2} >

        <label>
          <b>Enter a gif(Trending Search)</b>
        
</label>

         <button className= "Button2"
         onClick={trendingSearch}>
           Search
         </button>
         </form>
        
             {searchTrend.map((giffy)=>{
                 return (
                   <div className="item">
                     <img src={giffy}
                      alt = "trending"
                      /> 
                   </div>
                 )
               })
             }
          
</div>
</>


)   
}

export default GifCard