"use client";

import { Card } from "@/app/_components/atoms/ui/card";
import MainLayout from "@/app/_components/template/main-layout";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { PostFormData, postSchema } from "@/commons/types/cost/requestSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { RajaOngkirResponse } from "@/commons/types/cost/response";
import useItems from "@/app/_hook/useItems";
import { toast } from 'react-toastify';

function Home() {
  const [serverResponse, setServerResponse] = useState<RajaOngkirResponse>();
  const { data } = useItems();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
  });

  const onSubmit = async (data: PostFormData) => {
    try {
      const response = await axios.post("/api/rajaongkir", data);
      setServerResponse(response.data);
    } catch {
      toast("Gagal mendapatkan estimasi!");
    }
  };
  return (
    <MainLayout>
      <section className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mt-12 mb-12">
          Estimasi Perjalanan Kue mu
        </h1>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12">
            <Card>
              <div className="p-4">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Origin */}
                  <div>
                    <label className="block font-medium">Origin</label>
                    <select className="w-full p-2 border rounded" {...register("origin")}>
                      {data?.rajaongkir.results.map((city, index) => {
                        return <option key={`origin-${index}`} value={city.city_id}>{city.city_name}</option>
                      })}
                    </select>
                    {errors.origin && <p className="text-red-500">{errors.origin.message}</p>}
                  </div>

                  {/* Destination */}
                  <div>
                    <label className="block font-medium">Destination</label>
                    <select className="w-full p-2 border rounded" {...register("destination")}>
                      {data?.rajaongkir.results.map((city, index) => {
                        return <option key={`destination-${index}`} value={city.city_id}>{city.city_name}</option>
                      })}
                    </select>
                    {errors.destination && (
                      <p className="text-red-500">{errors.destination.message}</p>
                    )}
                  </div>

                  {/* Weight */}
                  <div>
                    <label className="block font-medium">Weight (grams)</label>
                    <input
                      type="number"
                      {...register("weight", { valueAsNumber: true })}
                      className="w-full p-2 border rounded"
                    />
                    {errors.weight && <p className="text-red-500">{errors.weight.message}</p>}
                  </div>

                  {/* Courier */}
                  <div>
                    <label className="block font-medium">Courier</label>
                    <select className="w-full p-2 border rounded" {...register("courier")}>
                      <option value="jne">JNE</option>
                      <option value="pos">POS</option>
                      <option value="tiki">TIKI</option>
                    </select>
                    {errors.courier && <p className="text-red-500">{errors.courier.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                  >
                    Submit
                  </button>
                </form>

                {/* Server Response */}
                {serverResponse && (
                  <div className="mt-4 p-4 bg-gray-100 border rounded">
                    <p>
                      ongkir dari:
                    </p>
                    <p className="mb-4">
                      {serverResponse.rajaongkir.origin_details.city_name} ke {serverResponse.rajaongkir.destination_details.city_name}
                    </p>
                    {serverResponse.rajaongkir.results.map((data, index) => (
                      <div key={`result-${index}`}>
                        {data.costs.map((cost, index) => (
                          <div key={`service-cost-${index}`} className="mb-3">
                            <p>service: {cost.service}</p>
                            <p>description: {cost.description}</p>
                            {cost.cost.map((costData, index) => (
                              <ul key={`cost-estimate-${index}`}>
                                <li>Harga: {costData.value}</li>
                                <li>Estimasi: {costData.etd}</li>
                              </ul>
                            ))}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Home;
