
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  phone: z.string().min(10, { message: "Valid phone number is required" }),
  address: z.string().min(5, { message: "Address is required" }),
  city: z.string().min(2, { message: "City is required" }),
  province: z.string().min(2, { message: "Province is required" }),
  postalCode: z.string().min(6, { message: "Valid postal code is required" }),
  manualSelection: z.enum(["manual1", "manual2", "manual3", "all"], {
    required_error: "Please select which manual(s) you want",
  }),
  specialInstructions: z.string().optional(),
});

export type FormValues = z.infer<typeof formSchema>;

interface PriceCalculation {
  subtotal: number;
  hst: number;
  total: number;
}

interface OrderFormProps {
  selectedManual: string | null;
  isSubmitting: boolean;
  onSubmit: (data: FormValues) => Promise<void>;
  onCancel: () => void;
  calculateTotal: () => PriceCalculation;
}

const OrderForm: React.FC<OrderFormProps> = ({
  selectedManual,
  isSubmitting,
  onSubmit,
  onCancel,
  calculateTotal
}) => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      manualSelection: selectedManual as any || undefined,
      specialInstructions: "",
    }
  });

  const manualSelection = watch("manualSelection");
  const { subtotal, hst, total } = calculateTotal();

  return (
    <div className="container mx-auto px-4 max-w-3xl">
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
                Programs & Documentation for Successful Implementation - $89.99 CAD
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem 
                value="manual2" 
                id="manual2" 
                {...register("manualSelection")}
              />
              <Label htmlFor="manual2" className="flex-1">
                Recreation and Leisure in Long Term Care - $59.99 CAD
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem 
                value="manual3" 
                id="manual3" 
                {...register("manualSelection")}
              />
              <Label htmlFor="manual3" className="flex-1">
                PSW Restorative Therapy Basic Training - $39.99 CAD
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem 
                value="all" 
                id="all" 
                {...register("manualSelection")}
              />
              <Label htmlFor="all" className="flex-1">
                All Manuals - $189.97 CAD
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
                <span>$89.99</span>
              </div>
            )}
            {manualSelection === "manual2" && (
              <div className="flex justify-between">
                <span>Recreation and Leisure in Long Term Care</span>
                <span>$59.99</span>
              </div>
            )}
            {manualSelection === "manual3" && (
              <div className="flex justify-between">
                <span>PSW Restorative Therapy Basic Training</span>
                <span>$39.99</span>
              </div>
            )}
            {manualSelection === "all" && (
              <>
                <div className="flex justify-between">
                  <span>Programs & Documentation for Successful Implementation</span>
                  <span>$89.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Recreation and Leisure in Long Term Care</span>
                  <span>$59.99</span>
                </div>
                <div className="flex justify-between">
                  <span>PSW Restorative Therapy Basic Training</span>
                  <span>$39.99</span>
                </div>
              </>
            )}
            {manualSelection && (
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$12.00</span>
              </div>
            )}
            
            {manualSelection && (
              <div className="flex justify-between pt-2 border-t border-gray-200">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            )}
            
            {manualSelection && (
              <div className="flex justify-between">
                <span>HST (13%)</span>
                <span>${hst.toFixed(2)}</span>
              </div>
            )}
          </div>
          <div className="border-t pt-2 flex justify-between font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)} CAD</span>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <Button 
            type="button" 
            variant="outline" 
            onClick={onCancel}
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
  );
};

export default OrderForm;
