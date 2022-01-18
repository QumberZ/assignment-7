import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GifCard from './components/GifCard'
import SearchFIeld from './components/SearchFIeld'
 
 
 
function App() {
const[gifs, setGifs] = useState([])
const[search, setSearch] = useState("")
const[getGiffy, setGiffy] = useState([])
const[loadData, setLoadData] = useState(false);
 
const url = "http://api.giphy.com/v1/gifs/search?api_key=CSIs6swXccz66TXhQ3EXrafhJUu4Lu5n&q="


function handleSubmit (event){
 event.preventDefault() 
   console.log("Handle submit working")
 
}
 
 
const searchGif = () => {
  if(search.length > 0){
   setLoadData(true)
   fetch(url + search)
   .then((res) =>{
     setLoadData(false)
     return res.json()
   })
   .then((res) =>{
   setGifs(res.data.map((gif) => {
     return (gif.images.fixed_height.url)
   
   }))
   })
  }}
   
 
useEffect(() => {
 
fetch(url)
.then(res => res.json()).then(getGiffy => {
 console.log(getGiffy);

})
}, [])






 return (   
     <div className="container mt-5">
        <form  onSubmit = {handleSubmit} >

        <label>
          
          <b>Enter a gif(Regular Search)</b>
         <input
           type="info"
           placeholder="Search Giffy"
           value={search}
         onChange={(element)=>setSearch(element.target.value)}
         />
   </label>

         <button className= "Button"
         onClick={searchGif}>
           Search
         </button>
        
         </form>
        
             {gifs.map((giffy)=>{
                 return (
                   <div className="item">
                     <img src={giffy}/> 
                   </div>
                 )
               })
             }
          
          <GifCard />
<SearchFIeld  />
 
   </div>
 )
}
 
export default App;
