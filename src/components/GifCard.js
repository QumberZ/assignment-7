import React, {useEffect, useState} from "react";
import SearchFIeld from "./SearchFIeld";

 

function GifCard(props) {
    //destructure props
const {gif} = props
const[search2, setSearch2] = useState("")
const[gifs2, setGifs2] = useState([])
const[loadData2, setLoadData2] = useState(false);

let url = "http://api.giphy.com/v1/gifs/trending?api_key=CSIs6swXccz66TXhQ3EXrafhJUu4Lu5n&q="


function handleSubmit2 (event){
    event.preventDefault()
    console.log("gifcard is working")
 
}

const searchGif2 = () => {
    if(search2.length > 0){
     setLoadData2(true)
     fetch(url + search2)
     .then((res) =>{
       setLoadData2(false)
       return res.json()
     })
     .then((res) =>{
     setGifs2(res.data.map((gif) => {
       return (gif.images.fixed_height.url)
     
     }))
     })
}}


useEffect(() => {
}, [])



 return(
<>
 
<div className="GifCard mt-5 ">
        <form  onSubmit = {handleSubmit2} >

        <label>
          <b>Enter a gif(Trending Search)</b>
         <input
           type="info"
           placeholder="Search Giffy"
           value={search2}
         onChange={(gifC)=>setSearch2(gifC.target.value)}
         />
</label>
         <button className= "Button2"
         onClick={searchGif2}>
           Search
         </button>
         </form>
        
             {gifs2.map((giffy)=>{
                 return (
                   <div className="item">
                     <img src={giffy}/> 
                   </div>
                 )
               })
             }
          
</div>
</>


)   
}

export default GifCard