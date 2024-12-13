"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./_components/atoms/ui/card";
import { Input } from "./_components/atoms/ui/input";
import useCake from "./_hook/useCake";
import MainLayout from "./_components/template/main-layout";
import { useState } from "react";
import Image from "next/image";

function Home() {
  const { data: datacake = [] } = useCake();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const filteredCakes = datacake.filter((cake) =>
    cake.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <MainLayout>
      <section className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mt-12">
          {`"Hitung Ongkir, Hemat Waktu, Pilih Sesuai Kantong!"`}
        </h1>
        <Input
          type="search"
          placeholder="Yuk Cari Barangmu!"
          className="mt-16 mb-14 py-3 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="grid grid-cols-12 gap-6">
          {filteredCakes.map((cake, index) => (
            <Link key={index} href={`/${cake.id}/detail`} className="col-span-4">
              <div>
                <Card>
                  <CardHeader>
                    <Image
                      src={cake.img}
                      alt={`Image of ${cake.name}`}
                      className="w-full h-48 object-cover"
                    />
                    <CardTitle className="mt-2">{cake.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{cake.harga}</p>
                  </CardContent>
                </Card>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}

export default Home;
