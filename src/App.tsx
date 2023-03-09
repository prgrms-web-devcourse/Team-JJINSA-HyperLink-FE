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
  CreatorListPage,
  DailyBriefingPage,
  MyPage,
  ErrorPage,
  AdminPage,
  HistoryPage,
} from '@/pages';
import Layout from './components/layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/creatorList" element={<CreatorListPage />} />
      <Route path="/search/:keyword" element={<SearchResultPage />} />
      <Route path="/creator/:creatorId" element={<CreatorDetailPage />} />
      <Route path="/daily-briefing" element={<DailyBriefingPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
