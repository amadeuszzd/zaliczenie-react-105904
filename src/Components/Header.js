import React from "react";

const Header = ({ title }) => {
  return (
    <>
      <div className="header">
        <div className="text-center">
          <h1 className="header-title">Katalog broni palnej</h1>
          <p className="header-text">{title}</p>
        </div>
      </div>
    </>
  );
};

export default Header;
