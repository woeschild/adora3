'use client'

import Button from "@/components/button";
import PaymentOption from "@/features/payment/PaymentOption";
import { useState } from "react";

export default function PaymentPage () {
    const [selected, setSelected] = useState("paystack")
    return (
        <div className="m-6">
            <div className="m-3">
                Select Payment Method
            </div>
              <PaymentOption
            label="Pay stack"
            value="paystack"
            icon={<span>💳</span>}
            selected={selected}
            onChange={setSelected}
          />
          <PaymentOption
            label="PayPal"
            value="paypal"
            icon={<span>💳</span>}
            selected={selected}
            onChange={setSelected}
          />
          <PaymentOption
            label="Stripe"
            value="stripe"
            icon={<span>💳</span>}
            selected={selected}
            onChange={setSelected}
          />
          <div className="m-3">
            <Button name="Continue" action={()=> null} />
          </div>
        </div>
    )
}