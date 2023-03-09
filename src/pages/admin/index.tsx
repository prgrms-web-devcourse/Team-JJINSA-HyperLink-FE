import { Contents, Creators, Companies, WeeklyViews } from '@/components/admin';
import { Divider } from '@/components/common';
import * as style from './style.css';

const Admin = () => {
  return (
    <div className={style.container}>
      <Contents />
      <Divider />
      <Creators />
      <Divider />
      <Companies />
      <Divider />
      <WeeklyViews />
    </div>
  );
};

export default Admin;
