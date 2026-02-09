import React, { Suspense, lazy, useEffect } from 'react';
import ReactGA from 'react-ga4';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy loading components for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const CommunityPage = lazy(() => import('./pages/CommunityPage'));
const IncidentsPage = lazy(() => import('./pages/IncidentsPage'));
const GuruJambheshwarPage = lazy(() => import('./pages/GuruJambheshwarPage'));
const RulesPage = lazy(() => import('./pages/RulesPage'));

const DhamDetailPage = lazy(() => import('./pages/DhamDetailPage'));
const HistoryPage = lazy(() => import('./pages/HistoryPage'));
const AmritaDeviPage = lazy(() => import('./pages/AmritaDeviPage'));
const KhejarliMassacrePage = lazy(() => import('./pages/KhejarliMassacrePage'));
const MartyrDirectoryPage = lazy(() => import('./pages/MartyrDirectoryPage'));
const VillageDirectoryPage = lazy(() => import('./pages/VillageDirectoryPage'));
const ChipkoAndolanPage = lazy(() => import('./pages/ChipkoAndolanPage'));
const MartyrDetailPage = lazy(() => import('./pages/MartyrDetailPage'));
const GotraDetailPage = lazy(() => import('./pages/GotraDetailPage'));
const VillageDetailPage = lazy(() => import('./pages/VillageDetailPage'));
const RuleDetailPage = lazy(() => import('./pages/RuleDetailPage'));
const SabadwaniPage = lazy(() => import('./pages/SabadwaniPage'));
const SabadDetailPage = lazy(() => import('./pages/SabadDetailPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const NewsDetailPage = lazy(() => import('./pages/NewsDetailPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const BikanerAndolanPage = lazy(() => import('./pages/BikanerAndolanPage'));
const KhejriImportancePage = lazy(() => import('./pages/KhejriImportancePage'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));
const Disclaimer = lazy(() => import('./pages/Disclaimer'));
const AboutUs = lazy(() => import('./pages/AboutUsPage'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const ReportPage = lazy(() => import('./pages/ReportPage'));
const AdminPage = lazy(() => import('./pages/AdminPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));


function App() {

  useEffect(() => {
    // Check if GA has already been initialized to prevent multiple initializations
    if (!window.GA_INITIALIZED) {
      ReactGA.initialize("G-NLPGD37DRE");
      window.GA_INITIALIZED = true;
    }
  }, []);
  return (
    <Layout>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner />}>
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
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* Protected User Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/report" element={<ReportPage />} />
          </Route>

          {/* Protected Admin Routes */}
          <Route element={<AdminRoute />}>
            <Route path="/admin" element={<AdminPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
