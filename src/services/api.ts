import axios from 'axios';

const BASE_URL = 'http://44.239.193.82:8080/api/locations';

export interface LocationResponse {
  id: number;
  name: string;
  log: number;
  lat: number;
  vendorMerchType: string;
  county: string;
  accessType: string;
  spotCount: number;
  applicationPacket: {
    id: number;
    name: string;
    agency: string;
    link: string;
    timeInDays: number;
    cost: number;
  }[];
}

export const searchByCountyAndVendorMerchType = async (
  county: string,
  vendorMerchType: string
): Promise<LocationResponse[]> => {
  try {
    const response = await axios.get<LocationResponse[]>(`${BASE_URL}/search`, {
      params: {
        county: county,
        vendorMerchType: vendorMerchType,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];  // Return an empty array in case of error
  }
};
