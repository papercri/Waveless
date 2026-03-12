import { Header } from '../../organisms/Header/Header';
import { Footer } from '../../organisms/Footer/Footer';

export const MainLayout = ({ children }) => {
  return (
    <div className="layout flex flex-col min-h-screen">
      <Header />
      <main className="layout__main flex-grow w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};