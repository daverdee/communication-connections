
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Book, Truck, CreditCard, DollarSign, CheckCircle } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  phone: z.string().min(10, { message: "Valid phone number is required" }),
  address: z.string().min(5, { message: "Address is required" }),
  city: z.string().min(2, { message: "City is required" }),
  province: z.string().min(2, { message: "Province is required" }),
  postalCode: z.string().min(6, { message: "Valid postal code is required" }),
  manualSelection: z.enum(["manual1", "manual2", "both"], {
    required_error: "Please select which manual(s) you want",
  }),
  specialInstructions: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const manuals = [
  {
    id: "manual1",
    title: "Programs & Documentation for Successful Implementation",
    author: "Sharron J. Brigham",
    pages: 124,
    price: 95,
    description: "A complete reference guide and resource guideline in support of Restorative Therapy principles.",
    details: [
      "Intended for facilitators and administrators",
      "Focuses on maintaining a quality lifestyle for seniors",
      "Comprehensive selection of workshops",
      "Defines a balanced approach towards seniors care"
    ]
  },
  {
    id: "manual2",
    title: "Recreation and Leisure in Long Term Care",
    author: "Communication Connections",
    pages: 96,
    price: 45,
    description: "Written for Recreation and Leisure Care services in Long Term Care.",
    details: [
      "Understanding of Ministry requirements",
      "Knowledge of policy, procedures and job descriptions",
      "Enhanced program suggestions",
      "Detailed understanding of assessments and evaluations",
      "Guidelines for volunteer teams",
      "Team building techniques",
      "Palliative care resources",
      "Positive connections to family councils"
    ]
  }
];

export default function TrainingManuals() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderStep, setOrderStep] = useState<"browse" | "form" | "payment" | "confirmation">("browse");
  const [selectedManual, setSelectedManual] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      manualSelection: undefined,
      specialInstructions: "",
    }
  });

  const manualSelection = watch("manualSelection");

  const calculateTotal = () => {
    let total = 0;
    if (manualSelection === "manual1") total = 95;
    else if (manualSelection === "manual2") total = 45;
    else if (manualSelection === "both") total = 140;
    
    // Add shipping
    if (total > 0) total += 12;
    
    return total;
  };

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Order submitted:", data);
      setIsSubmitting(false);
      setOrderStep("confirmation");
      reset();
      toast.success("Your order has been placed successfully!");
    }, 1500);
  };

  const handleManualSelect = (id: string) => {
    setSelectedManual(id);
    setOrderStep("form");
  };

  const handleBackToBrowse = () => {
    setOrderStep("browse");
    setSelectedManual(null);
  };

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Title Section */}
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

        {/* Manuals Section */}
        {orderStep === "browse" && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {manuals.map((manual) => (
                  <div key={manual.id} className="border border-gray-200 rounded-lg shadow-sm p-6 bg-white hover:shadow-md transition-shadow">
                    <div className="flex items-start mb-4">
                      <div className="mr-4 bg-brand-100 p-3 rounded-lg">
                        <Book className="h-8 w-8 text-brand-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-brand-900">{manual.title}</h3>
                        <p className="text-gray-500">{manual.author} • {manual.pages} pages</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{manual.description}</p>
                    
                    <ul className="mb-6 space-y-2">
                      {manual.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-brand-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between mt-6">
                      <span className="text-2xl font-bold text-brand-900">${manual.price} CAD</span>
                      <Button 
                        onClick={() => handleManualSelect(manual.id)}
                        className="bg-brand-600 hover:bg-brand-700"
                      >
                        Order Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 p-6 bg-brand-50 rounded-lg border border-brand-100 max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold text-brand-900 mb-4 flex items-center">
                  <Truck className="mr-2 h-5 w-5" />
                  Shipping Information
                </h3>
                <p className="text-gray-700 mb-2">All manuals are shipped within Canada with a flat shipping rate of $12 CAD.</p>
                <p className="text-gray-700">Order both manuals together for combined shipping and save!</p>
                <Button 
                  onClick={() => {
                    setSelectedManual("both");
                    setOrderStep("form");
                  }}
                  variant="outline" 
                  className="mt-4"
                >
                  Order Both Manuals
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Order Form */}
        {orderStep === "form" && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="mb-8">
                <Button 
                  variant="ghost" 
                  onClick={handleBackToBrowse}
                  className="mb-4"
                >
                  ← Back to manuals
                </Button>
                <h2 className="text-2xl font-bold text-brand-900 mb-2">Order Form</h2>
                <p className="text-gray-600 mb-6">
                  Please fill out your shipping information to complete your order
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="p-6 border border-gray-200 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold mb-4">Manual Selection</h3>
                  <RadioGroup defaultValue={selectedManual || undefined} className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem 
                        value="manual1" 
                        id="manual1" 
                        {...register("manualSelection")}
                      />
                      <Label htmlFor="manual1" className="flex-1">
                        Programs & Documentation for Successful Implementation - $95 CAD
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem 
                        value="manual2" 
                        id="manual2" 
                        {...register("manualSelection")}
                      />
                      <Label htmlFor="manual2" className="flex-1">
                        Recreation and Leisure in Long Term Care - $45 CAD
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem 
                        value="both" 
                        id="both" 
                        {...register("manualSelection")}
                      />
                      <Label htmlFor="both" className="flex-1">
                        Both Manuals - $140 CAD
                      </Label>
                    </div>
                  </RadioGroup>
                  {errors.manualSelection && (
                    <p className="text-red-500 text-sm mt-2">{errors.manualSelection.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" {...register("fullName")} />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm">{errors.fullName.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" {...register("email")} />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" {...register("phone")} />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Shipping Address</Label>
                  <Input id="address" {...register("address")} />
                  {errors.address && (
                    <p className="text-red-500 text-sm">{errors.address.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" {...register("city")} />
                    {errors.city && (
                      <p className="text-red-500 text-sm">{errors.city.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="province">Province</Label>
                    <Input id="province" {...register("province")} />
                    {errors.province && (
                      <p className="text-red-500 text-sm">{errors.province.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input id="postalCode" {...register("postalCode")} />
                    {errors.postalCode && (
                      <p className="text-red-500 text-sm">{errors.postalCode.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialInstructions">Special Instructions (Optional)</Label>
                  <Textarea 
                    id="specialInstructions" 
                    {...register("specialInstructions")}
                    placeholder="Any special delivery instructions or notes"
                  />
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                  <div className="space-y-2 mb-4">
                    {manualSelection === "manual1" && (
                      <div className="flex justify-between">
                        <span>Programs & Documentation for Successful Implementation</span>
                        <span>$95.00</span>
                      </div>
                    )}
                    {manualSelection === "manual2" && (
                      <div className="flex justify-between">
                        <span>Recreation and Leisure in Long Term Care</span>
                        <span>$45.00</span>
                      </div>
                    )}
                    {manualSelection === "both" && (
                      <>
                        <div className="flex justify-between">
                          <span>Programs & Documentation for Successful Implementation</span>
                          <span>$95.00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Recreation and Leisure in Long Term Care</span>
                          <span>$45.00</span>
                        </div>
                      </>
                    )}
                    {manualSelection && (
                      <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>$12.00</span>
                      </div>
                    )}
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold">
                    <span>Total</span>
                    <span>${calculateTotal().toFixed(2)} CAD</span>
                  </div>
                </div>

                <div className="flex justify-end space-x-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={handleBackToBrowse}
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting || !manualSelection}
                    className="bg-brand-600 hover:bg-brand-700"
                  >
                    {isSubmitting ? "Processing..." : "Proceed to Payment"}
                  </Button>
                </div>
              </form>
            </div>
          </section>
        )}

        {/* Confirmation Section */}
        {orderStep === "confirmation" && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-2xl text-center">
              <div className="mb-8 flex flex-col items-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-brand-900 mb-2">Order Confirmed!</h2>
                <p className="text-gray-600 mb-8">
                  Thank you for your order. We'll ship your manual(s) soon.
                </p>
                <Button 
                  onClick={handleBackToBrowse}
                  className="bg-brand-600 hover:bg-brand-700"
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
