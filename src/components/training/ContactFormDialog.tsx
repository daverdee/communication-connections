
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ContactForm from "./contact-form/ContactForm";
import { useContactForm } from "./contact-form/useContactForm";
import { ContactFormDialogProps } from "./contact-form/types";

const ContactFormDialog = ({ trigger, initialComments = "" }: ContactFormDialogProps) => {
  const {
    formData,
    loading,
    open,
    setOpen,
    handleChange,
    handleRadioChange,
    handleHealthcareBackgroundChange,
    handleSubmit,
    resetForm
  } = useContactForm(initialComments);

  return (
    <Dialog 
      open={open} 
      onOpenChange={(newOpenState) => {
        setOpen(newOpenState);
        if (!newOpenState) {
          resetForm();
        }
      }}
    >
      <DialogTrigger asChild onClick={() => setOpen(true)}>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Send Us a Message</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you within 2 hours.
          </DialogDescription>
        </DialogHeader>
        
        <ContactForm 
          formData={formData}
          loading={loading}
          onSubmit={handleSubmit}
          onInputChange={handleChange}
          onInterestChange={handleRadioChange}
          onHealthcareBackgroundChange={handleHealthcareBackgroundChange}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormDialog;
