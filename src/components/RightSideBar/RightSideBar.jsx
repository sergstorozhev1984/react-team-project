import React from 'react';
import css from './RightSideBar.module.css';

export const RightSideBar = () => {
  return (
    <section className={css.sectionRightSideBar}>
      <div className={css.containerRightSideBar}>
        <div className={css.navRightSideBar}>
          <a className={css.navLinkRightSideBar} href="/">
            Nic
          </a>
          <a className={css.navLinkRightSideBar} href="/">
            Exit
          </a>
        </div>

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

        <div className={css.containerTitle}>
          <div className={css.summaryRightSideBar}>
            <h3 className={css.headerRightSideBar}>Summary for 20/06/2020</h3>
            <ul className={css.listRightSideBar}>
              <li className={css.itemRihgtSideBar}>
                Left: <span className={css.spanRightSideBar}>000 kcal</span>
              </li>
              <li className={css.itemRihgtSideBar}>
                Consumed: <span className={css.spanRightSideBar}>000 kcal</span>
              </li>
              <li className={css.itemRihgtSideBar}>
                Daily rate:{' '}
                <span className={css.spanRightSideBar}>000 kcal</span>
              </li>
              <li className={css.itemRihgtSideBar}>
                n% of normal:{' '}
                <span className={css.spanRightSideBar}>000 %</span>
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
      </div>
    </section>
  );
};
