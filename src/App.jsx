import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import ReportPage from './pages/ReportPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';

import HistoryPage from './pages/HistoryPage';
import GuruJambheshwarPage from './pages/GuruJambheshwarPage';
import RulesPage from './pages/RulesPage';

import DhamDetailPage from './pages/DhamDetailPage';
import AmritaDeviPage from './pages/AmritaDeviPage';
import KhejarliMassacrePage from './pages/KhejarliMassacrePage';
import MartyrDetailPage from './pages/MartyrDetailPage';
import GotraDetailPage from './pages/GotraDetailPage';
import VillageDetailPage from './pages/VillageDetailPage';
import MartyrDirectoryPage from './pages/MartyrDirectoryPage';
import VillageDirectoryPage from './pages/VillageDirectoryPage';
import ChipkoAndolanPage from './pages/ChipkoAndolanPage';
import RuleDetailPage from './pages/RuleDetailPage';
import SabadwaniPage from './pages/SabadwaniPage';
import SabadDetailPage from './pages/SabadDetailPage';
import CommunityPage from './pages/CommunityPage';
import IncidentsPage from './pages/IncidentsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import BikanerAndolanPage from './pages/BikanerAndolanPage';
import KhejriImportancePage from './pages/KhejriImportancePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/incidents" element={<IncidentsPage />} />
        <Route path="/guru" element={<GuruJambheshwarPage />} />
        <Route path="/dham/:id" element={<DhamDetailPage />} />
        <Route path="/rules" element={<RulesPage />} />

        <Route path="/history" element={<HistoryPage />} />
        <Route path="/history/amrita-devi" element={<AmritaDeviPage />} />
        <Route path="/history/khejarli" element={<KhejarliMassacrePage />} />
        <Route path="/history/martyrs-directory" element={<MartyrDirectoryPage />} />
        <Route path="/history/villages-directory" element={<VillageDirectoryPage />} />
        <Route path="/history/chipko-movement" element={<ChipkoAndolanPage />} />
        <Route path="/history/martyr/:id" element={<MartyrDetailPage />} />
        <Route path="/history/gotra/:id" element={<GotraDetailPage />} />
        <Route path="/history/village/:id" element={<VillageDetailPage />} />
        <Route path="/rules/:id" element={<RuleDetailPage />} />
        <Route path="/sabadwani" element={<SabadwaniPage />} />
        <Route path="/sabadwani/:id" element={<SabadDetailPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:slug" element={<NewsDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/movements/bikaner-2026" element={<BikanerAndolanPage />} />
        <Route path="/movements/importance" element={<KhejriImportancePage />} />

        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* Protected User Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/report" element={<ReportPage />} />
        </Route>

        {/* Protected Admin Routes */}
        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
