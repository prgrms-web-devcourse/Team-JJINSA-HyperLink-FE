import { HomePage, SignupPage } from '@/pages/index';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
};

export default App;
