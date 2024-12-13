import { ListCake } from "@/commons/types/cake/list-cake";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useCake() {
  const query = useQuery({
    queryKey: ["cake"],
    queryFn: async () => {
      const { data } = await axios.get<ListCake[]>('http://my-json-server.typicode.com/dimadani/dicoding-api/cake/');
      return data;
    },
  });

  const data = query.data;

  return {
    ...query,
    data,
  };
}

export default useCake;
