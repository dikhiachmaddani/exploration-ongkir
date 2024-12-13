interface Query {
    origin: string;
    destination: string;
    weight: number;
    courier: string;
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

interface Cost {
    value: number;
    etd: string;
    note: string;
}

interface ShippingCost {
    service: string;
    description: string;
    cost: Cost[];
}

interface Result {
    code: string;
    name: string;
    costs: ShippingCost[];
}

export interface RajaOngkirResponse {
    rajaongkir: {
        query: Query;
        status: Status;
        origin_details: LocationDetails;
        destination_details: LocationDetails;
        results: Result[];
    };
}
