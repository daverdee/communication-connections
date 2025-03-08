
const CalendarLegend = () => {
  return (
    <div className="flex flex-wrap mb-4">
      <div className="w-full md:w-1/2 flex items-center mb-2">
        <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
        <span className="text-sm text-brand-700">Fundamental Restorative Therapy Training</span>
      </div>
      <div className="w-full md:w-1/2 flex items-center mb-2">
        <div className="w-3 h-3 rounded-full bg-purple-600 mr-2"></div>
        <span className="text-sm text-brand-700">Comprehensive Restorative Therapy Training</span>
      </div>
      <div className="w-full md:w-1/2 flex items-center mb-2">
        <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
        <span className="text-sm text-brand-700">Principles for Successful Implementation</span>
      </div>
    </div>
  );
};

export default CalendarLegend;
