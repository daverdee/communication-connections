
const CalendarLegend = () => {
  return (
    <div className="flex flex-wrap mb-4">
      <div className="w-full md:w-1/2 flex items-center mb-2">
        <div className="w-3 h-3 rounded-full bg-brand-400 mr-2"></div>
        <span className="text-sm text-brand-700">Fundamental Restorative Therapy Training</span>
      </div>
      <div className="w-full md:w-1/2 flex items-center mb-2">
        <div className="w-3 h-3 rounded-full bg-brand-600 mr-2"></div>
        <span className="text-sm text-brand-700">Comprehensive Restorative Training</span>
      </div>
      <div className="w-full md:w-1/2 flex items-center mb-2">
        <div className="w-3 h-3 rounded-full bg-brand-800 mr-2"></div>
        <span className="text-sm text-brand-700">Principles for Successful Implementation</span>
      </div>
    </div>
  );
};

export default CalendarLegend;
