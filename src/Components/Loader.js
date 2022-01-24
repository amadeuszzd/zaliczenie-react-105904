import React from "react";
import LoaderImage from "../images/three-dots.svg";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__container">
        <img src={LoaderImage} alt="Loading" />
        <h5 className="mt-3">Trwa ładowanie filmów ...</h5>
      </div>
    </div>
  );
};

export default Loader;
