import './App.css';
import { useState, useEffect } from 'react';
import GladiatorService from "./services/gladiatorService.js";
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

function App() {
  const [gladiatorData, setGladiatorData] = useState([]);
  const [gladiatorDataColumns] = useState([{
    "field": "gladiator_name",
    "headerName": "Gladiator Name",
    "width": 250
  },
  {
    "field": "real_name",
    "headerName": "Real Name",
    "width": 250
  },
  {
    "field": "first_year",
    "headerName": "First Year",
    "width": 90
  },
  {
    "field": "last_year",
    "headerName": "Last Year",
    "width": 90
  }]);

  useEffect(() => {
    GladiatorService.get().then(data => {
      if (data instanceof Array) {
        data.forEach((item, index) => item.id = (index + 1));
        setGladiatorData(data);
      }
    });
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <h4>Gladiator Services</h4>

      <div>
        {gladiatorData && gladiatorData.length ? (
          <DataGrid style={{ maxWidth: '700px', width: "100%" }}
            rows={gladiatorData}
            columns={gladiatorDataColumns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        ) : (
          <h1 variant="primary">No Records found</h1>
        )
        }
      </div>
    </div>
  );
}

export default App;
