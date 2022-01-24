import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const Bar = ({ getUserWord }) => {
  const [searchWord, setSearchWord] = useState("");

  const userTypedInSearchBox = (event) => {
    setSearchWord(event.target.value);
  };

  const userClickedButton = () => {
    getUserWord(searchWord);
  }

  return (
    <InputGroup className="mb-3 mt-3">
      <FormControl
        size="lg"
        placeholder="Proszę wpisać markę, model, typ lub rodzaj amunicji"
        aria-describedby="basic-addon2"
        value={searchWord}
        onChange={userTypedInSearchBox}
      />
      <Button
        variant="outline-secondary"
        style={{ backgroundColor: "#a70f0f", color: "#fff", width: "150px" }}
        onClick={userClickedButton}
      >
        Szukaj
      </Button>
    </InputGroup>
  );
};
export default Bar;
