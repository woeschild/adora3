export interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error';
}

export interface ToastContextType {
  toasts: Toast[];
  addToast: (message: string, type: 'success' | 'error') => void;
  removeToast: (id: number) => void;
}

export interface UseToastReturn {
  showToast: (message: string, type: 'success' | 'error') => void;
}