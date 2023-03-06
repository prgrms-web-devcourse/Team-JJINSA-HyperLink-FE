import { Card, Heading, Icon } from '../common';
import * as style from './style.css';

const MEMBER = {
  title: '방문자 수',
  standardTime: '2023.03.04 15PM',
  increase: 243,
  total: 1156,
};

const Summary = ({ color }: { color: string }) => {
  return (
    <Card type="default" color={color}>
      <div className={style.title}>
        <Heading level={6}>{MEMBER.title}</Heading>
        <span className={style.standardTime}>{MEMBER.standardTime}</span>
      </div>
      <div className={style.detail}>
        <Heading level={2}>{MEMBER.total.toLocaleString()}</Heading>
        <div>
          <span className={style.count}>
            {MEMBER.increase.toLocaleString()}
          </span>
          <Icon
            name="arrow-trend-up"
            size="small"
            isPointer={false}
            style={{ marginLeft: '1rem' }}
          />
          {/* <Icon name="arrow-trend-down" size="small" /> */}
        </div>
      </div>
    </Card>
  );
};

export default Summary;
