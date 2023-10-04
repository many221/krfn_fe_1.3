import React, { useRef } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const COUNTY = [
  "ALAMEDA",
  "CONTRA_COSTA",
  "MARIN",
  "NAPA",
  "SAN_FRANCISCO",
  "SAN_MATEO",
  "SANTA_CLARA",
  "SOLANO",
  "SONOMA",
];

const VENDOR_MERCH_TYPE = [
  "DRY_GOODS",
  "FOOD_AND_BEVERAGES",
  "PRODUCE",
  "CRAFTS",
  "OTHER",
];

interface SearchBarProps {
  onSearch: (county: string, vendorMerchType: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const countyRef = useRef<HTMLSelectElement>(null);
  const vendorMerchTypeRef = useRef<HTMLSelectElement>(null);

  const handleSearchClick = () => {
    if (countyRef.current && vendorMerchTypeRef.current) {
      onSearch(countyRef.current.value, vendorMerchTypeRef.current.value);
    }
  };

  return (
    <Form className="center-container">
      <Row>
        <Col md={4}>
          <Form.Group controlId="vendorMerchType">
            <Form.Control as="select" className="custom-select" ref={vendorMerchTypeRef} defaultValue="">
              <option value="" disabled>
               What do you sell?
              </option>
              {VENDOR_MERCH_TYPE.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="county">
            <Form.Control as="select" ref={countyRef} defaultValue="">
              <option value="" disabled>
               Where do you want to sell?
              </option>
              {COUNTY.map((county) => (
                <option key={county} value={county}>
                  {county}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={4}>
        <Button variant="primary" onClick={handleSearchClick}>
        Search
      </Button>
        </Col>
      </Row>

    
    </Form>
  );
};

export default SearchBar;
