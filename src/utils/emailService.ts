
import emailjs from 'emailjs-com';

// Initialize EmailJS with your User ID
emailjs.init("qrE2DuP8Ut_zHJrSm"); // EmailJS User ID

interface EmailParams {
  name: string;
  email?: string;
  phone: string;
  interest?: string;
  hasHealthcareBackground?: string;
  comments?: string;
}

export const sendContactEmail = async (params: EmailParams): Promise<boolean> => {
  try {
    // Prepare template parameters
    const templateParams = {
      to_email: "david@communicationconnections.ca",
      from_name: params.name,
      from_email: params.email || "No email provided",
      from_phone: params.phone,
      interest: params.interest || "Not specified",
      healthcare_background: params.hasHealthcareBackground || "Not specified",
      message: params.comments || "No additional comments",
    };

    // Send the email using EmailJS
    const response = await emailjs.send(
      "service_yksoj5v", // EmailJS Service ID
      "template_cxesopo", // EmailJS Template ID
      templateParams
    );

    console.log("Email sent successfully:", response);
    return true;
  } catch (error) {
    console.error("Failed to send email:", error);
    return false;
  }
};

interface ManualOrderParams {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  manualSelection: string;
  specialInstructions?: string;
  subtotal: number;
  hst: number;
  total: number;
}

export const sendManualOrderEmail = async (params: ManualOrderParams): Promise<boolean> => {
  try {
    // Prepare template parameters
    const templateParams = {
      to_email: "david@communicationconnections.ca",
      from_name: params.fullName,
      from_email: params.email,
      from_phone: params.phone,
      address: params.address,
      city: params.city,
      province: params.province,
      postal_code: params.postalCode,
      manual_selection: params.manualSelection,
      special_instructions: params.specialInstructions || "No special instructions",
      subtotal: `$${params.subtotal.toFixed(2)}`,
      hst: `$${params.hst.toFixed(2)}`,
      total: `$${params.total.toFixed(2)}`,
    };

    // Send the email using EmailJS
    const response = await emailjs.send(
      "service_yksoj5v", // EmailJS Service ID
      "template_cxesopo", // EmailJS Template ID
      templateParams
    );

    console.log("Manual order email sent successfully:", response);
    return true;
  } catch (error) {
    console.error("Failed to send manual order email:", error);
    return false;
  }
};
