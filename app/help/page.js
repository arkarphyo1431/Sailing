// pages/page.tsx (or .js if not using TypeScript)
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Help from '@/components/Help';

export default function Page() {
  return (
    <div>
      <Navbar />
      <Help />
      <Footer />
    </div>
  );
}
