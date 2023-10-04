import React, { useState } from "react";
import SearchBar from "../componets/SearchBar";
import Results from "../componets/Results";
import {
  LocationResponse,
  searchByCountyAndVendorMerchType,
} from "../services/api";
import { Container } from "react-bootstrap";
import "./HomeView.css";

const HomeView: React.FC = () => {
  const [searchResults, setSearchResults] = useState<LocationResponse[]>([]);
  const [vendorMerchType, setVendorMerchType] = useState<string>("");
  const [county, setCounty] = useState<string>("");
  const [searchAttempted, setSearchAttempted] = useState<boolean>(false); // New state variable

  const handleSearch = async (
    selectedCounty: string,
    selectedVendorMerchType: string
  ) => {
    setSearchAttempted(true); // Update the state when search is triggered

    try {
      setVendorMerchType(selectedVendorMerchType);
      setCounty(selectedCounty);
      const results = await searchByCountyAndVendorMerchType(
        selectedCounty,
        selectedVendorMerchType
      );
      setSearchResults(results);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setSearchResults([]); // Clear previous results on error
    }
  };

  return (
    <Container>
      <Container className="hero-container">
        <h1>KRFN</h1>
        <p>GUIDANCE, COMPLIANCE, AND SUPPORT</p>
      </Container>

      <SearchBar onSearch={handleSearch} />
      {searchAttempted && (
        <Results
          data={searchResults}
          vendorMerchType={vendorMerchType}
          county={county}
        />
      )}
    </Container>
  );
};

export default HomeView;
