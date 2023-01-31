import React from 'react';
import css from './CalculatorСaloriesForm.module.css';

function CalculatorСaloriesForm() {
  return (
    <form className={css.formCalculate}>
      <div className={css.wrapper}>
        <div className={css.wrapperLeft}>
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
        </div>
        <div className={css.wrapperRight}>
          <label className={css.labelCalculate}>
            Desired weight *
            <input className={css.inputCalculate} type="text" name="name" />
          </label>
          <div className={css.radio}>
            <p className={css.radioTitle}>Blood type *</p>
            <label className={css.labelRadio}>
              <input
                className={css.inputRadio}
                type="radio"
                name="color"
                value="1"
                checked
              />
              <span className={css.inputRadioStyled}></span>1
            </label>
            <label className={css.labelRadio}>
              <input
                className={css.inputRadio}
                type="radio"
                name="color"
                value="2"
              />
              <span className={css.inputRadioStyled}></span>2
            </label>
            <label className={css.labelRadio}>
              <input
                className={css.inputRadio}
                type="radio"
                name="color"
                value="3"
              />
              <span className={css.inputRadioStyled}></span>3
            </label>
            <label className={css.labelRadio}>
              <input
                className={css.inputRadio}
                type="radio"
                name="color"
                value="4"
              />
              <span className={css.inputRadioStyled}></span>4
            </label>
          </div>
        </div>
      </div>
      <button className={css.btnCalculate} type="submit">
        Start losing weight
      </button>
    </form>
  );
}

export default CalculatorСaloriesForm;
