import { connect } from 'dva';
import styles from './index.less';

const Home = () => {
  return (
    <div>
      <h1 className={styles.title}>
        {33333}</h1>
    </div>
  );
};

const NewIndex = connect(({ global }) => ({ ...global }))(Home);
NewIndex.wrappers = ['@/wrappers/auth'];

export default NewIndex;
