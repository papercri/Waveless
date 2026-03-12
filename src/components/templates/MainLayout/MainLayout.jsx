import { Header } from '../../organisms/Header/Header';
import { Footer } from '../../organisms/Footer/Footer';

export const MainLayout = ({ children }) => {
  return (
    <div className="layout flex flex-col min-h-screen" role="document">
      <Header />
      <main className="layout__main flex-grow w-full" role="main" aria-label="Contenido principal">
        {children}
      </main>
      <Footer />
    </div>
  );
};