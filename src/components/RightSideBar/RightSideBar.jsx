import React from 'react';
import { useSelector } from 'react-redux';

import css from './RightSideBar.module.css';

export const RightSideBar = ({ startDate }) => {
  const kcalLeft = useSelector(
    state => state?.infoUser?.daySummary?.kcalLeft || state?.infoUser?.kcalLeft
  );

  const kcalConsumed = useSelector(
    state =>
      state?.infoUser?.daySummary?.kcalConsumed || state?.infoUser?.kcalConsumed
  );

  const dailyRate = useSelector(
    state => state?.infoUser?.daySummary?.dailyRate
  );

  const percentsOfDailyRate = useSelector(
    state =>
      state?.infoUser?.daySummary?.percentsOfDailyRate ||
      state?.infoUser?.percentsOfDailyRate
  );

  return (
    <div className={css.containerTitle}>
      <div className={css.summaryRightSideBar}>
        <h3 className={css.headerRightSideBar}>Summary for {startDate || new Date().toLocaleDateString('en-CA')}</h3>
        <ul className={css.listRightSideBar}>
          <li className={css.itemRihgtSideBar}>
            Left{' '}
            <span className={css.spanRightSideBar}>
              {Math.round(kcalLeft) || '0'} kcal
            </span>
          </li>
          <li className={css.itemRihgtSideBar}>
            Consumed{' '}
            <span className={css.spanRightSideBar}>
              {Math.round(kcalConsumed) || '0'} kcal
            </span>
          </li>
          <li className={css.itemRihgtSideBar}>
            Daily rate{' '}
            <span className={css.spanRightSideBar}>
              {Math.round(dailyRate) || '0'} kcal
            </span>
          </li>
          <li className={css.itemRihgtSideBar}>
            <span className={css.spanRightSideBar}>
              {Math.round(percentsOfDailyRate) || '0'}% of normal
            </span>
            <span className={css.spanRightSideBar}>
              {Math.round(kcalLeft) || '0'} kcal
            </span>
          </li>
        </ul>
      </div>
      <div className={css.recomendRightSideBar}>
        <h3 className={css.headerRightSideBar}>Food not recommended</h3>
        <ul className={css.notAllowedProductsList}>
          <p className={css.titleRightSideBar}>
            Your diet will be displayed here
          </p>
        </ul>
      </div>
    </div>
  );
};