import { AlertCircle } from 'lucide-react';

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  id: string;
  type?: string;
  error?: string;
}

export default function TextField({ label, value, onChange, placeholder = '', id, type = 'text', error }: TextFieldProps) {
  const hasError = !!error;

  return (
    <div>
      <label htmlFor={id} className="text-primary block font-medium">
        <small>
          {label}
        </small>
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border border-subtle rounded-md text-sm placeholder:text-muted focus:outline-none transition-colors ${
          hasError
            ? 'focus:border-red-500'
            : 'focus:border-accent'
        }`}
      />
      {error && (
        <div className="flex items-start gap-2 mt-2 p-2 bg-red-500/5 rounded border-l-2 border-red-500/30">
          <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-600 leading-relaxed">{error}</p>
        </div>
      )}
    </div>
  );
}