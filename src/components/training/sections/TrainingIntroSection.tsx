
import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

const TrainingIntroSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-900 mb-6 text-center">
            Why Restorative Therapy Training is Essential
          </h2>
          
          <p className="text-gray-700 mb-8">
            Restorative therapy is a government-mandated component of care in long-term care homes. Our comprehensive training programs are designed to ensure your facility meets all regulatory requirements while enhancing the quality of care you provide.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="flex items-start mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">
                      All programs are designed for trained healthcare professionals only
                    </p>
                    <p className="text-gray-600 text-sm">
                      (PSWs, RNs, RPNs, PTs, OTs, etc.)
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start">
                  <XCircle className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">
                      Administrators, volunteers, and non-clinical staff are NOT eligible for certification
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-gray-700">
            Our tiered training solutions support both direct care providers and leadership roles in restorative care. Each program is meticulously designed to ensure that your staff is certified, compliant, and prepared for Ministry audits.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrainingIntroSection;
