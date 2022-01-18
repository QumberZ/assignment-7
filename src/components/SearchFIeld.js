import React, {useEffect, useState} from "react";

function SearchFIeld(props) {

const {gif} = props
const[search3, setSearch3] = useState("")
const[gifs3, setGifs3] = useState([])
const[loadData3, setLoadData3] = useState(false);
const[data2, setData2] = useState([])

let url = "http://api.giphy.com/v1/gifs/random?api_key=CSIs6swXccz66TXhQ3EXrafhJUu4Lu5n&q="
let jsonData = []


function handleSubmit3 (event){
    event.preventDefault()
    console.log("Searchfield")
 
}


const searchGif3 = () => {
    if(search3.length > 0){
     setLoadData3(true)
     fetch(url + search3)
     .then((res) =>{
       setLoadData3(false)
       return res.json()
     })
     .then((res) =>{
     setGifs3(res.data.map((gif) => {
       return (gif.images.fixed_height.url)
     
     }))
     })   
 }}

    function displayGif(){
        if (jsonData){
            console.log(jsonData)
        }
     }
      
      
     function noGif(){
        console.log("noGif")
     }
     
      
     useEffect(() => {
      
      //  fetch(url)
     //.then(res => res.json()).then(gifs3 => {
      //console.log(gifs3);
      //setGifs3(gifs3.data2[0].images.fixed_height.url)
      //setGifs3(gifs3.data2[0].images.fixed_height.url)

      
     //})
     }, [jsonData])
     







    
    return (
        <>
      
<div className="SearchField mt-5 ">
        <form  onSubmit = {handleSubmit3} >

        <label>
          <b>Enter a gif(Random Search)</b>
       {/*} <input
           //type="info"
           //placeholder="Search Giffy"
          // value={search3}
        // onChange={(SearchF)=>setSearch3(SearchF.target.value)}
    /> */}
</label>
         <button className= "Button3"
         onClick={searchGif3}>
           Search


         </button>


         <div>
         <img src={gifs3} alt ="Random" />
</div>
         </form>

             {gifs3.map((giffy)=>{
                 return (
                   <div className="item">
                     <img src={giffy}/> 
                   </div>
                 )
               })
             }
          
</div>
        </>
)}

export default SearchFIeld;