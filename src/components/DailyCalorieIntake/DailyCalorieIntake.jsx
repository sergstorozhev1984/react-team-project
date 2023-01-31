import React from 'react';
import { useSelector } from 'react-redux';
import css from '../DailyCalorieIntake/DailyCalorieIntake.module.css';

const DailyCalorieIntake = () => {
  const products = useSelector(state => state.calorie.calorie);
  const dailyRate = useSelector(state => state.calorie.dailyRate);

  const calorieRound = Math.round(Number(dailyRate ?? 0));

  return (
    <div>
      <h1 className={css.Title}>Your recommended daily calorie intake is</h1>
      <p className={css.Norm}>
        <span className={css.Caloriez}>{calorieRound}</span>ККАЛ
      </p>
      <h2 className={css.Foods}>Foods you should not eat</h2>

      {Array.isArray(products) && products.length > 0 ? (
        products.map(product => {
          return <p>{product}</p>;
        })
      ) : (
        <div className={css.Plug}>
          <p>1. Flour products</p>
          <p>2. Milk</p>
          <p>3. Red meat</p>
          <p>4. Smoked meats</p>
        </div>
      )}
    </div>
  );
};
export default DailyCalorieIntake;
