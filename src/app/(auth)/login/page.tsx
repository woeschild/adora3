import LoginForm from '@/features/auth/login/LoginForm';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-main flex items-center justify-center p-4 sm:p-6 md:p-8">
      <LoginForm />
    </main>
  );
}