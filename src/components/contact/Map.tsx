
import React from "react";

const Map: React.FC = () => {
  return (
    <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.9346820629056!2d-79.3046873!3d43.8067517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d3e01ede9c77%3A0x84c5ac8e3ac3b737!2s3850%20Finch%20Ave%20E%2C%20Scarborough%2C%20ON%20M1T%203T6%2C%20Canada!5e0!3m2!1sen!2sus!4v1670287864303!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
