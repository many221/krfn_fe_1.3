import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './Results.css';

interface ApplicationPacket {
    id: number;
    name: string;
    agency: string;
    link: string;
    timeInDays: number;
    cost: number;
}

interface LocationResponse {
    id: number;
    name: string;
    log: number;
    lat: number;
    vendorMerchType: string;
    county: string;
    accessType: string;
    spotCount: number;
    applicationPacket: ApplicationPacket[];
}

interface ResultsProps {
    data: LocationResponse[];
    vendorMerchType: string;
    county: string;
}

const ResultsTableHeader = () => (
    <thead>
        <tr>
            <th>County</th>
            <th>Name</th>
            <th>Merch Type</th>
            <th>Access Type</th>
            <th>Spot Count</th>
            <th>Application Packet Size</th>
            <th>Total Cost</th>
            <th>Total Time In Days (in days)</th>
        </tr>
    </thead>
);

const Results: React.FC<ResultsProps> = ({ data, vendorMerchType, county }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentItems = data.slice(firstIndex, lastIndex);

    const pagesCount = Math.ceil(data.length / itemsPerPage);

    if (!data.length) {
        return (
            <Container className='m-container'>
                Sorry, We Don't Have Any Information About Selling {vendorMerchType} in {county}
            </Container>
        );
    }

    return (
        <div className="table-responsive">
            <table className="table table-bordered table-hover">
                <ResultsTableHeader />
                <tbody>
                    {currentItems.map((item) => (
                        <tr key={item.id}>
                            <td>{item.county}</td>
                            <td>{item.name}</td>
                            <td>{item.vendorMerchType}</td>
                            <td>{item.accessType}</td>
                            <td>{item.spotCount}</td>
                            <td>{item.applicationPacket.length}</td>
                            <td>
                                {item.applicationPacket.reduce(
                                    (acc, curr) => acc + curr.cost,
                                    0
                                )}
                            </td>
                            <td>
                                {item.applicationPacket.reduce(
                                    (acc, curr) => acc + curr.timeInDays,
                                    0
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {pagesCount > 1 && (
                <div className="pagination-container">
                    {[...Array(pagesCount)].map((_, i) => (
                        <button
                            key={i}
                            className={`pagination-button ${i + 1 === currentPage ? 'active' : ''}`}
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Results;

