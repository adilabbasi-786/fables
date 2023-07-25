import React, { useState } from "react";
import { Button, FormCheck } from "react-bootstrap";
import Rating from "./Rating";

const Filters = () => {
  const [rate, setRate] = useState(4);
  return (
    <div className="filters">
      <span className="title"> Filter products</span>
      <span>
        <FormCheck
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={"inline-1"}
        ></FormCheck>
      </span>
      <span>
        <FormCheck
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={"inline-2"}
        ></FormCheck>
      </span>
      <span>
        <FormCheck
          inline
          label="Include out of Stock"
          name="group1"
          type="checkbox"
          id={"inline-3"}
        ></FormCheck>
      </span>
      <span>
        <FormCheck
          inline
          label="Fast Delivery"
          name="group1"
          type="checkbox"
          id={"inline-4 "}
        ></FormCheck>
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>RAting</label>
        <Rating
          rating={rate}
          onClick={(i) => setRate(i + 1)}
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button variant="light ">Clear Filters</Button>
    </div>
  );
};

export default Filters;
