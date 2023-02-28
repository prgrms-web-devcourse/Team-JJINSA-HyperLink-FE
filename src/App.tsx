import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { HomePage, SignupPage, SearchResultPage } from '@/pages/index';
import Layout from '@/components/layout/index';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/search/:keyword" element={<SearchResultPage />} />
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
