
import React from "react";

const TitleSection: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-900 leading-tight mb-6">
          Training Manuals
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Specialized resources written in Canada for Canadians and the Canadian Care System, designed to enhance care quality and ensure compliance with Canadian regulations.
        </p>
      </div>
    </section>
  );
};

export default TitleSection;
