import Modal from 'components/Modal/Modal';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCalorie, fetchCalorieForUser } from 'redux/authModal/modalThunk';
import { infoUser } from 'redux/info/info-operations';
import css from './CalculatorСaloriesForm.module.css';

function CalculatorСaloriesForm() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
 const userId = useSelector(state => state.auth?.user?.id);
 
  const [formData, setFormData] = useState({
    height: '',
    age: '',
    weight: '',
    desiredWeight: '',
    bloodType: '1',
  });
  const dispatch = useDispatch();
  const [isModalOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const toggle = () => setIsOpen(isOpen => !isOpen);
  const TODAY = new Date().toLocaleDateString('en-CA');

  useEffect(() => {
    dispatch(infoUser({ date: TODAY }))
  }, [dispatch, TODAY]);
  
  const handleSubmit = event => {
    event.preventDefault();
    const formData = { weight, height, age, desiredWeight, bloodType };
    if(isLoggedIn) {
      dispatch(fetchCalorieForUser({userId, formData})).then(() =>
              dispatch(infoUser({ date: TODAY })));
    } else {
       dispatch(fetchCalorie(formData));
    
    }
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
                  checked={formData.bloodType === '1'}
                  onChange={e =>
                    setFormData({ ...formData, bloodType: e.target.value })
                  }
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
                  checked={formData.bloodType === '2'}
                  onChange={e =>
                    setFormData({ ...formData, bloodType: e.target.value })
                  }
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
                  checked={formData.bloodType === '3'}
                  onChange={e =>
                    setFormData({ ...formData, bloodType: e.target.value })
                  }
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
                  checked={formData.bloodType === '4'}
                  onChange={e =>
                    setFormData({ ...formData, bloodType: e.target.value })
                  }
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
