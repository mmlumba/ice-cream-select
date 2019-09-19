import React, { useState } from 'react';
import './App.css';
import IceCream from './components/IceCream'
import FlavorPicker from './components/FlavorPicker';
import { Button, Snackbar } from '@material-ui/core';

const App = () => {
  const [flavor, setFlavor] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false);

  return (
    <div className="App">
      <h1>What's your favorite flavor?</h1>
      <IceCream color={flavor.color} />
      <h3>{flavor.name || ""}</h3>
      <div style={{ display: "inline-block" }}>
        <FlavorPicker flavor={flavor} setFlavor={setFlavor} />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setShowSuccess(true)}
          style={{
            backgroundColor: "#f48fb1",
            color: "#333",
            marginTop: 50
          }}
        >
          Submit
        </Button>
      </div>
      <Snackbar
        open={showSuccess}
        message="Thanks for submitting!"
        onClose={() => setShowSuccess(false)}
        autoHideDuration={3000}
      />
      <Snackbar
        open={showError}
        message="There was an error! Please refresh the page and try again!"
      />
    </div>
  );
}

export default App;
