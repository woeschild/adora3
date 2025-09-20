import { Eye, EyeOff, AlertCircle } from 'lucide-react';
import useToggle from './hooks/useToggle';

interface PasswordFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  id: string;
  error?: string;
}

export default function PasswordField({ label, value, onChange, placeholder = 'Enter password', id, error }: PasswordFieldProps) {
  const [showPassword, toggleShowPassword] = useToggle();
  const hasError = !!error;

  return (
    <div>
      <label htmlFor={id} className="text-primary block font-medium">
        <small>
          {label}
        </small>
      </label>
      <div className="relative">
        <input
          id={id}
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full px-3 py-2 pr-10 border border-subtle rounded-md text-sm placeholder:text-muted focus:outline-none transition-colors ${
            hasError
              ? 'focus:border-red-500'
              : 'focus:border-accent'
          }`}
        />
        <button
          type="button"
          onClick={toggleShowPassword}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-light hover:text-accent transition-colors"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>
      {error && (
        <div className="flex items-start gap-2 mt-2 p-2 bg-red-500/5 rounded border-l-2 border-red-500/30">
          <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-600 leading-relaxed">{error}</p>
        </div>
      )}
    </div>
  );
}