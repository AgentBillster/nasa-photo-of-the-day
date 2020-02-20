import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"
import Title from "./components/title"
import Image from "./components/image"
import Description from "./components/description"
import Date from "./components/date"
import Copyright from "./components/copyright"

function App() {
  const [data, setData] = useState ([])
  
    useEffect(() => {
      axios.get("https://api.nasa.gov/planetary/apod?api_key=bqSg8cRP3XnjA62GFdp9aRliSIROLvR18b2wZCD0")
      .then(response => {
        console.log(response)
        setData(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    }, [])
  
    return (
      <div className="App">
        <p>
          Read through the instructions in the README.md file to build your NASA
          app! Have fun 🚀!
        </p>
      <Title info={data}/>\
      <Image img={data}/>
      <div><Description data={data}/></div>
      <Date date={data}/>
      <Copyright Copyright={data}/>
      </div>
    );
  }
  
  export default App;