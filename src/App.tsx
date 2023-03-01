import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Layout from '@/components/layout/index';
import {
  HomePage,
  NotFoundPage,
  SearchResultPage,
  SignupPage,
  MyPage,
} from '@/pages/index';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/search/:keyword" element={<SearchResultPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/mypage" element={<MyPage />} />
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
