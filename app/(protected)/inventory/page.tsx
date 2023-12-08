"use client";
import DataTable from "@/components/custom/Table";
import React from "react";
import useInventory from "./_hooks/useInventory";
import { ColumnDef } from "@tanstack/react-table";
import { IProduct } from "@/types";

// id: number;
// name: string;
// price: number;
// category: string;
// stock: number;

const columns: ColumnDef<IProduct>[] = [
  {
    header: "Product ID",
    accessorKey: "id",
  },
  {
    header: "Product Name",
    accessorKey: "name",
  },
  {
    header: "Price",
    accessorKey: "price",
  },
  {
    header: "Category",
    accessorKey: "category",
  },
  {
    header: "Stock",
    accessorKey: "stock",
  },
];

const Inventory = () => {
  const { products } = useInventory();
  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold mb-4">Inventory</h2>
      <DataTable data={products} columns={columns} />
    </div>
  );
};

export default Inventory;
