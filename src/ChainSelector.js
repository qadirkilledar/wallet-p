import React from "react";

const blockchainOptions = [
  { id: "eth", name: "Ethereum", logo: "./chainLogos/ethereum-eth-logo.svg" },
  {
    id: "polygon",
    name: "Polygon",
    logo: "./chainLogos/polygon-matic-logo.svg",
  },
  { id: "bsc", name: "BNB Chain", logo: "./chainLogos/bnb-bnb-logo.svg" },
  {
    id: "optimism",
    name: "Optimism",
    logo: "./chainLogos/optimism-op-logo.svg",
  },
  { id: "base", name: "Base", logo: "./chainLogos/base-logo.svg" },
];

const ChainSelector = ({ selectedChains, onSelectionChange }) => {
  const toggleChain = (chainId) => {
    onSelectionChange((prevSelected) => {
      const isCurrentlySelected = prevSelected.includes(chainId);
      if (isCurrentlySelected) {
        return prevSelected.filter((id) => id !== chainId);
      } else {
        return [...prevSelected, chainId];
      }
    });
  };

  return (
    <div className="chain-selector">
      {blockchainOptions.map((chain) => (
        <button
          key={chain.id}
          className={`chain-button ${
            selectedChains.includes(chain.id) ? "selected" : ""
          }`}
          onClick={() => toggleChain(chain.id)}
        >
          <img src={chain.logo} alt={chain.name} className="chain-logo" />
          <div className="chain-details">
            <div className="chain-name">{chain.name}</div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default ChainSelector;
