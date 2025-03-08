
const CalendarLegend = () => {
  return (
    <div className="flex items-center space-x-6 mb-4">
      <div className="flex items-center">
        <div className="w-3 h-3 rounded-full bg-brand-400 mr-2"></div>
        <span className="text-sm text-brand-700">Fundamental Restorative Therapy Training (1 Day)</span>
      </div>
      <div className="flex items-center">
        <div className="w-3 h-3 rounded-full bg-brand-600 mr-2"></div>
        <span className="text-sm text-brand-700">Advanced Certification</span>
      </div>
    </div>
  );
};

export default CalendarLegend;
