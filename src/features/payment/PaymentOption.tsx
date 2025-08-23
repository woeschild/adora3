import React from "react";

interface PaymentOptionProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  selected: string;
  onChange: (value: string) => void;
}

const PaymentOption: React.FC<PaymentOptionProps> = ({
  label,
  value,
  icon,
  selected,
  onChange,
}) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer border rounded-lg px-4 py-3 hover:border-orange-400 transition w-full">
      <input
        type="radio"
        name="payment"
        value={value}
        checked={selected === value}
        onChange={() => onChange(value)}
        className="hidden"
      />
      <span
        className={`w-4 h-4 flex items-center justify-center rounded-full border ${
          selected === value ? "border-orange-500" : "border-gray-400"
        }`}
      >
        {selected === value && (
          <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
        )}
      </span>
      <div className="flex items-center gap-2 text-gray-700 font-medium">
        {icon} {label}
      </div>
    </label>
  );
};

export default PaymentOption;
