import Modal from 'components/Modal/Modal';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCalorie } from 'redux/authModal/modalThunk';
import css from './CalculatorСaloriesForm.module.css';

function CalculatorСaloriesForm() {
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

  const handleChange = event => {
    setFormData(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

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
            <input className={css.inputCalculate}  required type="text" name="height" value={height} onChange={handleChange}/>
          </label>
          <label className={css.labelCalculate}>
            Age *
            <input className={css.inputCalculate} required type="text" name="age" value={age} onChange={handleChange}/>
          </label>
          <label className={css.labelCalculate}>
            Current weight *
            <input className={css.inputCalculate} required type="text" name="weight" value={weight} onChange={handleChange}/>
          </label>
        </div>
        <div className={css.wrapperRight}>
          <label className={css.labelCalculate}>
            Desired weight *
            <input className={css.inputCalculate} required type="text" name="desiredWeight" value={desiredWeight} onChange={handleChange}/>
          </label>
          <div className={css.radio}>
            <p className={css.radioTitle}>Blood type *</p>
            <label className={css.labelRadio}>
              <input
                className={css.inputRadio}
                type="radio"
                name="bloodType"
                value="1"
                checked
                onChange={handleChange}
              />
              <span className={css.inputRadioStyled}></span>1
            </label>
            <label className={css.labelRadio}>
              <input
                className={css.inputRadio}
                type="radio"
                name="bloodType"
                value="2"
                onChange={handleChange}
              />
              <span className={css.inputRadioStyled}></span>2
            </label>
            <label className={css.labelRadio}>
              <input
                className={css.inputRadio}
                type="radio"
                name="bloodType"
                value="3"
                onChange={handleChange}
              />
              <span className={css.inputRadioStyled}></span>3
            </label>
            <label className={css.labelRadio}>
              <input
                className={css.inputRadio}
                type="radio"
                name="bloodType"
                value="4"
                onChange={handleChange}
              />
              <span className={css.inputRadioStyled}></span>4
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
