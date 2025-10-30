import React from "react";
import "./BookTable.css";
import { TextField, Button } from "@mui/material";

const BookTable = () => {
  return (
    <div className="bookTable-container">
      <div className="bookTable">
      <form>
        <h2>Reserve Your Table</h2>

        <div className="mb-3">
          <TextField label="Full Name" variant="standard" className="w-100" />
        </div>

        <div className="mb-3">
          <TextField label="Email" variant="standard" className="w-100" />
        </div>

        <div className="mb-3">
          <TextField label="Mobile Number" variant="standard" className="w-100" />
        </div>

        <div className="mb-3 date-time-row">
          <TextField type="date" variant="standard" label="" />
          <TextField type="time" variant="standard" label="" />
        </div>

        <div className="mb-4">
          <TextField type="number" label="No. of Persons" variant="standard" className="w-100" />
        </div>

        <Button type="submit" variant="contained" color="warning" className="w-100">
          BOOK TABLE
        </Button>
      </form>
    </div>
    </div>
  );
};

export default BookTable;
