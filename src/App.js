import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import BasicTable from "./component/BasicTable";
import { CSVLink, CSVDownload } from "react-csv";
import { Button } from "@mui/material";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log("Data fetched from API:---->", data);
  const headers = [
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Username", key: "username" },
    { label: "Email", key: "email" },
    { label: "Phone", key: "phone" },
    { label: "Website", key: "website" }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <div>Exporting Table Data to CSV in React</div>
        <div className="export-button-container">
          {data && (
            <>
              <Button variant="contained" color="primary">
                <CSVLink
                  data={data}
                  headers={headers}
                  filename={"table-data.csv"}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Export to CSV
                </CSVLink>
              </Button>
            </>
          )}
        </div>
      </header>

      <main>
        <div className="App-content">
          <BasicTable data={data} headers={headers} />
        </div>
      </main>
    </div>
  );
}
export default App;
