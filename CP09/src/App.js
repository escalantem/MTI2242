/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

//https://gateway.marvel.com:443/v1/public/characters?apikey=acee3ebcf5e11d64f4b19f6143e5b812
//key privada: 8ce43aae2de470485447788dfddf91eb6c867a87
//key publica: acee3ebcf5e11d64f4b19f6143e5b812

//18ce43aae2de470485447788dfddf91eb6c867a87acee3ebcf5e11d64f4b19f6143e5b812
//hash: 46dc15bd07661ab1f50e6127d7668994

function App() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=acee3ebcf5e11d64f4b19f6143e5b812&hash=46dc15bd07661ab1f50e6127d7668994"
      )
      .then((res) => {
        setPersonajes(res.data.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  // console.log(personajes);

  return (
    <div className="App">
      <h1>MARVEL</h1>

      {/* GRID DE IMAGENES */}
      {/* Elemento extraido de bootstrap, doc: https://getbootstrap.com/docs/5.1/components/card/#card-layout */}

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* Recorriendo el arreglo de datos */}
        {personajes.map((p) => (
          <div className="col mt-5" key={p.id}>
            <div
              className="card align-items-center"
              style={{ width: "18rem", height: "18rem" }}
            >
              <img
                src={`${p.thumbnail.path}.${p.thumbnail.extension}`}
                className="card-img-top"
                style={{ width: "80%", height: "80%" }}
              />
              <div className="card-body">
                <h4 className="card-title">{p.name}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
