export interface Location {
    id: string;
    name: string;
    type: string;
    dimension: string;
  }
  
  export interface LocationsResponse {
    locations: {
      results: Location[];
    };
  }
