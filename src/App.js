import React, { useState } from "react";
import "./App.css";
import AssetTable from "./AssetTable";
import ChainSelector from "./ChainSelector";

function App() {
  const [selectedChains, setSelectedChains] = useState([
    "eth",
    "polygon",
    "bsc",
    "optimism",
    "base",
  ]);

  const [tempAddress, setTempAddress] = useState(
    "0x209c8bbE2454257Eb1A8E630f59f4b1b50a98543"
  );
  const [address, setAddress] = useState(tempAddress);

  const handleInputChange = (e) => {
    setTempAddress(e.target.value);
  };

  const handleButtonClick = () => {
    setAddress(tempAddress);
  };

  return (
    <div className="App">
      <h1>Crypto Portfolio</h1>
      <input
        className="addressInput"
        type="text"
        value={tempAddress}
        onChange={handleInputChange}
        placeholder="Enter wallet address"
      />
      <button onClick={handleButtonClick} className="fetchButton">
        Fetch assets
      </button>
      <ChainSelector
        selectedChains={selectedChains}
        onSelectionChange={setSelectedChains}
      />
      <AssetTable address={address} selectedChains={selectedChains} />
    </div>
  );
}

export default App;
