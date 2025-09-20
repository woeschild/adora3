'use client'

import { useState } from "react";
import stripe from '../../../../public/pal.png'
import pal from '../../../../public/pal.png'
import stack from '../../../../public/pal.png'
import Image from "next/image";
import PaymentOption from "@/features/dashboard/payment/PaymentOption";
import Button from "@/features/auth/shared-components/Button";

export default function PaymentPage () {
    const [selected, setSelected] = useState("paystack")
    return (
        <div className="m-6">
            <div className="m-3 font-semibold">
                Select Payment Method
            </div>
              <PaymentOption
            label="Pay stack"
            value="paystack"
            icon={<div className="w-4 h-4">
              <Image src={stack} alt="paystack" />
            </div>}
            selected={selected}
            onChange={setSelected}
          />
          <PaymentOption
            label="PayPal"
            value="paypal"
             icon={<div className="w-4 h-4">
              <Image src={pal} alt="paystack" />
            </div>}
            selected={selected}
            onChange={setSelected}
          />
          <PaymentOption
            label="Stripe"
            value="stripe"
             icon={<div className="w-4 h-4">
              <Image width={100} height={100} src={stripe} alt="paystack" />
            </div>}
            selected={selected}
            onChange={setSelected}
          />
          <div className="m-3">
            <Button>
              Continue
            </Button>
          </div>
        </div>
    )
}