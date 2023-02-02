import Modal from 'components/Modal/Modal';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCalorie } from 'redux/authModal/modalThunk';
import css from './CalculatorСaloriesForm.module.css';
function CalculatorСaloriesForm() {
  const [selectedOption, setSelectedOption] = useState('1');
  const [formData, setFormData] = useState({
    height: '',
    age: '',
    weight: '',
    desiredWeight: '',
    bloodType: '',
  });
  const dispatch = useDispatch();
  const [isModalOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const toggle = () => setIsOpen(isOpen => !isOpen);
  const handleSubmit = event => {
    event.preventDefault();
    const formData = { weight, height, age, desiredWeight, bloodType };
    dispatch(fetchCalorie(formData));
    setFormData({
      weight: '',
      height: '',
      age: '',
      desiredWeight: '',
      bloodType: '',
    });
  };
  const { weight, height, age, desiredWeight, bloodType } = formData;
  return (
    <>
      <form className={css.formCalculate} onSubmit={handleSubmit}>
        <div className={css.wrapper}>
          <div className={css.wrapperLeft}>
            <label className={css.labelCalculate}>
              Height *
              <input
                className={css.inputCalculate}
                required
                type="text"
                name="height"
                value={height}
                onChange={e =>
                  setFormData({ ...formData, height: e.target.value })
                }
              />
            </label>
            <label className={css.labelCalculate}>
              Age *
              <input
                className={css.inputCalculate}
                required
                type="text"
                name="age"
                value={age}
                onChange={e =>
                  setFormData({ ...formData, age: e.target.value })
                }
              />
            </label>
            <label className={css.labelCalculate}>
              Current weight *
              <input
                className={css.inputCalculate}
                required
                type="text"
                name="weight"
                value={weight}
                onChange={e =>
                  setFormData({ ...formData, weight: e.target.value })
                }
              />
            </label>
          </div>
          <div className={css.wrapperRight}>
            <label className={css.labelCalculate}>
              Desired weight *
              <input
                className={css.inputCalculate}
                required
                type="text"
                name="desiredWeight"
                value={desiredWeight}
                onChange={e =>
                  setFormData({ ...formData, desiredWeight: e.target.value })
                }
              />
            </label>
            <div className={css.radio}>
              <p className={css.radioTitle}>Blood type *</p>
              <label className={css.labelRadio}>
                1
                <input
                  className={css.inputRadio}
                  type="radio"
                  name="bloodType"
                  value="1"
                  checked={selectedOption === '1'}
                  onChange={e => setSelectedOption(e.target.value)}
                />
                <span className={css.inputRadioStyled}></span>
              </label>
              <label className={css.labelRadio}>
                2
                <input
                  className={css.inputRadio}
                  type="radio"
                  name="bloodType"
                  value="2"
                  checked={selectedOption === '2'}
                  onChange={e => setSelectedOption(e.target.value)}
                />
                <span className={css.inputRadioStyled}></span>
              </label>
              <label className={css.labelRadio}>
                3
                <input
                  className={css.inputRadio}
                  type="radio"
                  name="bloodType"
                  value="3"
                  checked={selectedOption === '3'}
                  onChange={e => setSelectedOption(e.target.value)}
                />
                <span className={css.inputRadioStyled}></span>
              </label>
              <label className={css.labelRadio}>
                4
                <input
                  className={css.inputRadio}
                  type="radio"
                  name="bloodType"
                  value="4"
                  checked={selectedOption === '4'}
                  onChange={e => setSelectedOption(e.target.value)}
                />
                <span className={css.inputRadioStyled}></span>
              </label>
            </div>
          </div>
        </div>
        <button className={css.btnCalculate} onClick={openModal} type="submit">
          Start losing weight
        </button>
      </form>
      {isModalOpen && <Modal closeModal={toggle} />}
    </>
  );
}
export default CalculatorСaloriesForm;
