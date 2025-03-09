
import { useCallback } from "react";

interface PriceCalculation {
  subtotal: number;
  hst: number;
  total: number;
}

export function useManualPricing(manualSelection: string | undefined) {
  const calculateTotal = useCallback((): PriceCalculation => {
    let subtotal = 0;
    if (manualSelection === "manual1") subtotal = 89.99;
    else if (manualSelection === "manual2") subtotal = 59.99;
    else if (manualSelection === "manual3") subtotal = 39.99;
    else if (manualSelection === "all") subtotal = 189.97; // 89.99 + 59.99 + 39.99
    
    // Add shipping
    if (subtotal > 0) subtotal += 15;
    
    // Calculate HST (13%)
    const hst = subtotal * 0.13;
    
    // Total with HST
    const total = subtotal + hst;
    
    return { subtotal, hst, total };
  }, [manualSelection]);

  return { calculateTotal };
}
