import { useState } from 'react';
import type { TabId } from './types';
import { C } from './constants/theme';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { LeaderboardView } from './components/views/LeaderboardView';
import { TournamentsView } from './components/views/TournamentsView';
import { HallOfFameView } from './components/views/HallOfFameView';
import { ComingSoonView } from './components/views/ComingSoonView';
import { AdminLoginModal } from './components/modals/AdminLoginModal';
import { AdminPanelModal } from './components/modals/AdminPanelModal';
import './App.css';

export default function App() {
  const [tab, setTab] = useState<TabId>('leaderboard');
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const handleAdminButtonClick = () => {
    if (authenticated) {
      setAuthenticated(false);
    } else {
      setAdminModalOpen(true);
    }
  };

  const renderTabContent = () => {
    switch (tab) {
      case 'leaderboard':
      case 'dashboard':
        return <LeaderboardView />;
      case 'tournaments':
        return <TournamentsView />;
      case 'halloffame':
        return <HallOfFameView />;
      case 'wars':
        return <ComingSoonView moduleName="Registro de Guerras" />;
      case 'decks':
        return <ComingSoonView moduleName="Mazos Recomendados" />;
      case 'battles':
        return <ComingSoonView moduleName="Historial de Batallas" />;
      default:
        return <LeaderboardView />;
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: C.light, fontFamily: "'Segoe UI', Roboto, system-ui, -apple-system, sans-serif", display: "flex", flexDirection: "column" }}>
      {/* Navigation Header */}
      <Header
        activeTab={tab}
        onTabChange={setTab}
        authenticated={authenticated}
        onAdminClick={handleAdminButtonClick}
      />

      {/* Main View Area */}
      <main style={{ flex: 1, maxWidth: 1200, width: "100%", margin: "0 auto", padding: "20px 12px 60px", boxSizing: "border-box" }}>
        {renderTabContent()}
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <AdminLoginModal
        isOpen={adminModalOpen && !authenticated}
        onClose={() => setAdminModalOpen(false)}
        onLoginSuccess={() => {
          setAuthenticated(true);
          setAdminModalOpen(false);
        }}
      />

      {authenticated && (
        <AdminPanelModal
          isOpen={authenticated}
          onClose={() => setAuthenticated(false)}
          players={[]}
          setPlayers={() => {}}
          onResetAllData={() => {}}
        />
      )}
    </div>
  );
}
