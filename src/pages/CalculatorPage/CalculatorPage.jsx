import { Container } from 'components/Container/Container';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';
import React from 'react';
import CalculatorСaloriesForm from '../../components/CalculatorСaloriesForm/CalculatorСaloriesForm';
import css from './/CalculatorPage.module.css';

function CalculatorPage() {
  

  return (
    <Container className={css.main}>
      <div className={css.calculatopPageWrappew}>
      <section className={css.section}>
        <h1 className={css.headerCalculate}>
          Calculate your daily calorie intake right now
        </h1>
        <CalculatorСaloriesForm />
      </section>
      <section className={css.sectionSummary}>
        <RightSideBar />
      </section>
      </div>
    </Container>
  );
}

export default CalculatorPage;
