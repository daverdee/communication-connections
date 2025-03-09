
import React from "react";
import ManualCard from "./ManualCard";
import { Manual } from "@/data/manualsData";

interface ManualsListProps {
  manuals: Manual[];
  onManualSelect: (id: string) => void;
}

const ManualsList: React.FC<ManualsListProps> = ({ manuals, onManualSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {manuals.map((manual) => (
        <ManualCard
          key={manual.id}
          id={manual.id}
          title={manual.title}
          author={manual.author}
          pages={manual.pages}
          price={manual.price}
          description={manual.description}
          details={manual.details}
        />
      ))}
    </div>
  );
};

export default ManualsList;
