import { Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/home';
import Layout from '@/components/layout/index';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
