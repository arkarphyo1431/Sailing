// pages/page.tsx (or .js if not using TypeScript)
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import YourInfo from '@/components/YourInfo';

export default function Page() {
  return (
    <div>
      <Navbar />
      <YourInfo />
      <Footer />
    </div>
  );
}
