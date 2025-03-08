
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
