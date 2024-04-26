import React from "react";
import EditFood from "@/app/components/EditFood/EditFood";
import { useRouter } from "next/router";

interface PageProps {
  // Explicitly define the type of the 'params' object
  params: {
    id: string; // Assuming 'id' is a string in the URL parameter
  };
}
function page({ params }: PageProps) {
  const { id } = params;
  console.log(id);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-6">
        Edit Food Details Page
      </h1>
      <EditFood id={id} />
    </div>
  );
}

export default page;
