import { useState } from 'react';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Pages
import { LivePage } from './pages/LivePage';
import { ArchivePage } from './pages/ArchivePage';
import { ExperimentPage } from './pages/ExperimentPage';

type PageType = 'live' | 'archive' | 'experiment';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('live');

  const renderPage = () => {
    switch (currentPage) {
      case 'live': return <LivePage />;
      case 'archive': return <ArchivePage />;
      case 'experiment': return <ExperimentPage />;
      default: return <LivePage />;
    }
  };

  return (
    <Layout>
      <div className="flex flex-col h-full w-full">
        <Header currentPage={currentPage} onNavigate={setCurrentPage} />

        {/* Main Content Area */}
        <main className="flex-grow w-full h-full relative z-10 overflow-hidden flex flex-col min-h-0">
          {renderPage()}
        </main>
      </div>

      <Footer />
    </Layout>
  );
}

export default App;
