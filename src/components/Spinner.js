import React from "react";
import './Spinner.css';

const Spinner = () => {
  return (
    <div>
      <div className="d-flex justify-content-center center">
        <div className="spinner-border center" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
