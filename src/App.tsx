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
} from '@/pages/index';
import Layout from './components/layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/search/:keyword" element={<SearchResultPage />} />
      <Route path="/creator/:creatorName" element={<CreatorDetailPage />} />
      <Route path="/daily-briefing" element={<DailyBriefingPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
