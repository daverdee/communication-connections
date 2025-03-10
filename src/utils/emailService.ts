
import emailjs from 'emailjs-com';

// Initialize EmailJS with your User ID
emailjs.init("qrE2DuP8Ut_zHJrSm"); // EmailJS User ID

interface EmailParams {
  name: string;
  email: string;
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

export interface ManualOrderParams {
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

export const sendManualOrderEmail = async (data: ManualOrderParams): Promise<boolean> => {
  try {
    // Template ID for the manual order template in EmailJS
    const templateId = 'template_manual_order'; // Replace with your actual template ID
    
    // Service ID from EmailJS
    const serviceId = 'service_aq9y0mp'; // Replace with your actual service ID
    
    // Public Key from EmailJS
    const publicKey = 'sCmQrXlfTXS1HUScv';
    
    // Prepare the template parameters
    const templateParams = {
      to_email: 'david@communicationconnections.ca',
      from_name: data.fullName,
      from_email: data.email,
      phone: data.phone,
      address: data.address,
      city: data.city,
      province: data.province,
      postal_code: data.postalCode,
      manual_selection: data.manualSelection,
      special_instructions: data.specialInstructions || 'None',
      subtotal: `$${data.subtotal.toFixed(2)}`,
      hst: `$${data.hst.toFixed(2)}`,
      total: `$${data.total.toFixed(2)}`,
    };
    
    // Send the email using EmailJS
    await emailjs.send(serviceId, templateId, templateParams, publicKey);
    
    console.log('Manual order email sent successfully!');
    return true;
  } catch (error) {
    console.error('Error sending manual order email:', error);
    return false;
  }
};
