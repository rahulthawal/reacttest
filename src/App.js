import './App.css';
import { useState, useEffect } from 'react';
import GladiatorService from "./services/gladiatorService.js";
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [gladiatorData, setGladiatorData] = useState([]);

  useEffect(() => {
    setGladiatorData(GladiatorService.get());
  },[]);

  return (
    <div style={{
      display: 'block', width: 700, padding: 30
    }}>
      <h4>Gladiator Services</h4>

      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-8 col-lg-5">
            <ul className="list-group">
              {gladiatorData && gladiatorData.length ? (
                gladiatorData.map((data, index) => (
                  <a key={index} href="/#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                    <div className="flex-column">
                      <p><small> Glaidator Name: {data.gladiator_name}</small></p>
                      <p><small>Real Name: {data.real_name}</small></p>
                      <p><small> First Year: {data.first_year}</small></p>
                      <p><small>  Last year: {data.last_year}</small></p>
                    </div>
                  </a>
                ))
              ) : (
                <h1 variant="primary">No Records found</h1>
              )
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
