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
  CreatorDetailPage,
  DailyBriefingPage,
  MyPage,
  NotFoundPage,
  AdminPage,
} from '@/pages';
import Layout from './components/layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/search/:keyword" element={<SearchResultPage />} />
      <Route path="/creator/:creatorId" element={<CreatorDetailPage />} />
      <Route path="/daily-briefing" element={<DailyBriefingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
