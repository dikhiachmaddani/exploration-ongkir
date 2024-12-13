import { CityResponse } from "@/commons/types/city/type";
import { envClient } from "@/configs/env-client.config";
import { axiosInstance } from "@/utils/axios-instance";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useItems() {
  const query = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const { data } = await axios.get<CityResponse>(`/api/rajaongkir`);
      return data;
    },
  });

  const data = query.data;

  return {
    ...query,
    data,
  };
}

export default useItems;
