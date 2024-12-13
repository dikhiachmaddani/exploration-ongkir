interface Query {
    province: string;
    id: string;
}

interface Status {
    code: number;
    description: string;
}

interface LocationDetails {
    city_id: string;
    province_id: string;
    province: string;
    type: string;
    city_name: string;
    postal_code: string;
}

export interface CityResponse {
    rajaongkir: {
        query: Query;
        status: Status;
        results: LocationDetails[];
    };
}
