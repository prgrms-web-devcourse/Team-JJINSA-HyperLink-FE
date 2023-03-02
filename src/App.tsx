import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import {
  HomePage,
  SignupPage,
  SearchResultPage,
  NotFoundPage,
  MyPage,
} from '@/pages';
import Layout from '@/components/layout/index';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/search/:keyword" element={<SearchResultPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
