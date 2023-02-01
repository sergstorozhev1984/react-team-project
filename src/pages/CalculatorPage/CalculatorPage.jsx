import { RightSideBar } from 'components/RightSideBar/RightSideBar';
import React from 'react';
import CalculatorСaloriesForm from '../../components/CalculatorСaloriesForm/CalculatorСaloriesForm';
import css from './/CalculatorPage.module.css';

function CalculatorPage() {
  

  return (
    <main className={css.main}>
      <section className={css.section}>
        <h1 className={css.headerCalculate}>
          Calculate your daily calorie intake right now
        </h1>
        <CalculatorСaloriesForm />
      </section>
      <section className={css.sectionSummary}>
        <RightSideBar />
      </section>
    </main>
  );
}

export default CalculatorPage;
