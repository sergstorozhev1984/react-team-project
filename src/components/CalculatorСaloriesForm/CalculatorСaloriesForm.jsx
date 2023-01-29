import React from 'react';
import css from '../RightSideBar/RightSideBar.module.css';

function CalculatorСaloriesForm() {
  return (
    <section className={css.sectionCalculate}>
    <div className={css.containerCalculate}>
      <h3 className={css.headerCalculate}>
        Calculate your daily calorie intake right now
      </h3>
      <form className={css.formCalculate}>
        <label className={css.labelCalculate}>
          Height *
          <input className={css.inputCalculate} type="text" name="name" />
        </label>
        <label className={css.labelCalculate}>
          Age *
          <input className={css.inputCalculate} type="text" name="name" />
        </label>
        <label className={css.labelCalculate}>
          Current weight *
          <input className={css.inputCalculate} type="text" name="name" />
        </label>
        <label className={css.labelCalculate}>
          Desired weight *
          <input className={css.inputCalculate} type="text" name="name" />
        </label>
      </form>
      <form className={css.formRadioCalculate}>
        Blood type *
        <div className={css.radioBtn}>
          <label className={css.labelRadioCalculate}>
            <input
              className={css.inputRadioCalculate}
              type="radio"
              name="color"
              value="1"
              checked
            />
            1
          </label>
          <label className={css.labelRadioCalculate}>
            <input
              className={css.inputRadioCalculate}
              type="radio"
              name="color"
              value="2"
            />
            2
          </label>
          <label className={css.labelRadioCalculate}>
            <input
              className={css.inputRadioCalculate}
              type="radio"
              name="color"
              value="3"
            />
            3
          </label>
          <label className={css.labelRadioCalculate}>
            <input
              className={css.inputRadioCalculate}
              type="radio"
              name="color"
              value="4"
            />
            4
          </label>
        </div>
      </form>
      <button className={css.btnCalculate} type="submit">
        Start losing weight
      </button>
    </div>
  </section>
  )
}

export default CalculatorСaloriesForm;
