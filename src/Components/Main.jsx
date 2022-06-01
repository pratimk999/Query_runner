import React, { useEffect, useState } from "react";
import CustomSelect from "./CustomSelect";
import "../Styling/Main.css";
import { Button, FormControlLabel, Switch } from "@mui/material";
import axios from "../axiosInstance";
import Editor from "./Editor";
import DataTable from "./DataTable";
import CustomSnacbar from "./CustomSnacbar";

function Header() {
  const [table, setTable] = useState(0);
  const [query, setQuery] = useState("None");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [customQuery, setCustomQuery] = useState("");
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (error !== "") {
      setSnackBarOpen(true);
    }
  }, [error]);
  //   console.log("queries are :: ", table);

  const loadData = async () => {
    setData([]);
    if (
      (!toggle && query === "None") ||
      (toggle && customQuery.trim() === "")
    ) {
      if (toggle) {
        setError("Please write a query");
      } else setError("Please select a query");
      // alert("Please select any query");
      return;
    }
    setLoading(true);
    let api = getApi();
    await axios
      .get(api)
      .then((res) => {
        console.log("Data is :: ", res.data);
        const responseData = res.data;
        setData(responseData);
        setLoading(false);
        if (responseData && responseData.length === 0) {
          setError("No data found");
        }
      })
      .catch((err) => {
        console.log("Error in loading data :: ", err);
        setLoading(false);
        setError("No data found");
      });
  };

  const handleClose = () => {
    setSnackBarOpen(false);
    setError("");
  };

  const getApi = () => {
    let api = "/D9FCVp/customers";
    switch (table) {
      case 0:
        if (!toggle) {
          if (
            query ===
            "Select * from Customer where contactTitle = 'Accounting Manager'"
          ) {
            api = `/D9FCVp/customers?contactTitle=${encodeURI(
              "Accounting Manager"
            )}`;
          } else {
            api = "/D9FCVp/customers";
          }
        } else api = "/D9FCVp/customers?id=10";
        break;
      case 1:
        if (!toggle) {
          if (query === "Select * from Product where unitPrice = 18.00") {
            api = "/SJL5LP/products?unitPrice=18.00";
          } else {
            api = "/SJL5LP/products";
          }
        } else api = "/SJL5LP/products?id=10";
        break;
      default:
        break;
    }
    return api;
  };
  // console.log(toggle);

  return (
    <div className="main">
      <h1 className="heading">SQL QUERY RUNNER</h1>
      <div className="form_page">
        <CustomSelect
          selectName="Schemas"
          setTable={setTable}
          table={table}
          query={query}
          setQuery={setQuery}
          setData={setData}
          isCustom={toggle}
          setCustomQuery={setCustomQuery}
        />
        <CustomSelect
          selectName="Queries"
          setQuery={setQuery}
          query={query}
          table={table}
          setTable={setTable}
          setData={setData}
          isCustom={toggle}
          setCustomQuery={setCustomQuery}
        />
      </div>
      <FormControlLabel
        control={
          <Switch
            onChange={(val) => {
              setData([]);
              setCustomQuery("");
              setToggle(!toggle);
            }}
          />
        }
        label="Custom Query"
        className="toggler"
      />
      {toggle && (
        <Editor customQuery={customQuery} setCustomQuery={setCustomQuery} />
      )}
      <Button variant="contained" onClick={loadData}>
        Run
      </Button>
      <DataTable loading={loading} data={data} />
      <CustomSnacbar
        snackBarOpen={snackBarOpen}
        handleClose={handleClose}
        errorMessage={error}
      />
    </div>
  );
}

export default Header;
