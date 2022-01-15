import React, { useEffect, useState, Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GifCard from './components/GifCard'
import SearchField from './components/SearchFIeld'




 function App() {
const[gif, setGif] = useState("Red")
const[data, setData] = useState([])

/*let link = 'http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=CSIs6swXccz66TXhQ3EXrafhJUu4Lu5n'

const getData = async() => {
  await axios.get(link)
  .then(res => {
    setData(res.data)
  })
}
*/

/*function handleSubmit (event){
  event.preventDefault()
  axios.get(`'http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=CSIs6swXccz66TXhQ3EXrafhJUu4Lu5n'`)
}
*/





//useEffect(() => {
//getData()
//}, [])






  return (
    <div className = "App" >
      
<h1> Welcome to Giffy Express! hello</h1>      
<form>

<label>
GIFS: 
<input type ="text" name= "gif" />
</label>
<input type= " Search" value ="Search" /> 

</form>
// props
<GifCard gif={gif} />




    </div>
  )


}
export default App;