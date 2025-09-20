import { useRouter } from 'next/navigation';

export default function useRedirect() {
  const router = useRouter();

  const redirectToDashboard = () => {
    router.push('/dashboard');
  };

  return { redirectToDashboard };
}