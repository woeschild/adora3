import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-accent hover:bg-accent-dark text-white font-medium transition-colors duration-200',
    secondary: 'bg-transparent border border-accent text-accent hover:bg-accent hover:text-white font-medium transition-all duration-200',
    ghost: 'bg-transparent text-primary hover:bg-surface hover:text-accent font-medium transition-colors duration-200'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-md'
  };
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}