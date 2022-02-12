import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Button,ButtonGroup  } from "@chakra-ui/react";
function App() {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  const collectImage = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?client_id=o9Vm45F5NteHfPypzQuc9N7IBGfgmGs_cMCSNebDnCs&query=value=${value}`
      )
      .then((res) => {
        setResults(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
    setResults("");
  };
  return (
    <div className="app">
        <div className="appmain__first">
          <h1>SEARCH IMAGES</h1>
          
          <input
            style={{ width: "60%" }}
            type="text"
            value={value}
            placeholder="Search here"
            onChange={(e) => setValue(e.target.value)}
          />
          <Button 
          colorScheme='blue' 
          onClick={() => collectImage()}>SEND</Button>
        </div>

        <h1>THESE ARE THE FOLLOWING IMAGES</h1>
        <div className="appimage__main">
          {results && results.map((image) => <img className="app__image" src={image.urls.regular} />)}
        </div>
       
    </div>
  );
}

export default App;
