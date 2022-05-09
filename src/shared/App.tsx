import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import { AnimatePresence } from 'framer-motion';
import SpecPage from '@/pages/SpecPage';
import { MemoizedCommonLayout } from '@/components/layout/PageLayout/PageLayout';

function App() {
  const location = useLocation();

  return (
    <MemoizedCommonLayout headerFixed>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/spec" element={<SpecPage />} />
          <Route path="/*">Page Not Found</Route>
        </Routes>
      </AnimatePresence>
    </MemoizedCommonLayout>
  );
}

export default App;
