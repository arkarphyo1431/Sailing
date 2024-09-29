import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SignUp from '@/components/SignUp';
import { exportTraceState } from 'next/dist/trace';

export default function SignUpPage() {
  return (
    <div>
      <Navbar />
      <SignUp />
      <Footer />
    </div>
  );
}
// exportTraceState