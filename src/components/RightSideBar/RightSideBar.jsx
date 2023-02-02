import React from 'react';
import { useSelector } from 'react-redux';
import css from './RightSideBar.module.css';

export const RightSideBar = () => {
  const kcalLeft = useSelector(state => state?.infoUser?.daySummary?.kcalLeft);

  const kcalConsumed = useSelector(
    state => state?.infoUser?.daySummary?.kcalConsumed
  );

  const dailyRate = useSelector(
    state => state?.infoUser?.daySummary?.dailyRate
  );

  const percentsOfDailyRate = useSelector(
    state =>
      state?.infoUser?.daySummary?.percentsOfDailyRate);

  return (
    <div className={css.containerTitle}>
      <div className={css.summaryRightSideBar}>
        <h3 className={css.headerRightSideBar}>Summary for 20/06/2020</h3>
        <ul className={css.listRightSideBar}>
          <li className={css.itemRihgtSideBar}>
            Left <span className={css.spanRightSideBar}>{kcalLeft} kcal</span>
          </li>
          <li className={css.itemRihgtSideBar}>
            Consumed{' '}
            <span className={css.spanRightSideBar}>{kcalConsumed} kcal</span>
          </li>
          <li className={css.itemRihgtSideBar}>
            Daily rate{' '}
            <span className={css.spanRightSideBar}>{dailyRate} kcal</span>
          </li>
          <li className={css.itemRihgtSideBar}>
            n% of normal <span className={css.spanRightSideBar}>{percentsOfDailyRate} kcal</span>
          </li>
        </ul>
      </div>
      <div className={css.recomendRightSideBar}>
        <h3 className={css.headerRightSideBar}>Food not recommended</h3>
        <p className={css.titleRightSideBar}>
          Your diet will be displayed here
        </p>
        {/* <ul className={css.listRightSideBar}>
            <li className={css.itemRihgtSideBar}>Flour products</li>
            <li className={css.itemRihgtSideBar}>Milk</li>
            <li className={css.itemRihgtSideBar}>Read meat</li>
            <li className={css.itemRihgtSideBar}>Smoked meats</li>
          </ul> */}
      </div>
    </div>
  );
};
