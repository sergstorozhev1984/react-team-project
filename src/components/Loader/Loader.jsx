import { Hearts } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.overlay}>
      <Hearts
        height="80"
        width="80"
        color="#FC842D"
        ariaLabel="hearts-loading"
        visible={true}
      />
    </div>
  );
};
