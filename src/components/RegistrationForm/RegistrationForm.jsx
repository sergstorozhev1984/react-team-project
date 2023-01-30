import { Container } from 'components/Conteiner/Container';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router';
import { registerThunk } from 'redux/auth/authThunk';
import css from './RegistrationForm.module.css';

export const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        throw new Error();
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const formData = {
      username,
      email,
      password,
    };
    dispatch(registerThunk(formData));
    //   .unwrap()
    //   .then(() => dispatch(loginThunk({ email, password })))
    //   .catch(error => console.log(error));
    reset();
    // navigate('/calculator');
  };

  const reset = () => {
    setEmail('');
    setUsername('');
    setPassword('');
  };

  return (
    <Container>
      <div className={css.BoxFormRegister}>
        <h2 className={css.TitleRegister}>REGISTER</h2>
        <form className={css.FormRegister} onSubmit={handleSubmit}>
          <label className={css.LableRegisterForm}>
            Name *
            <input
              className={css.InputRegister}
              name="username"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              type="text"
              value={username}
              required
              onChange={handleChange}
            />
          </label>
          <label className={css.LableRegisterForm}>
            E-mail *
            <input
              className={css.InputRegister}
              name="email"
              type="email"
              value={email}
              required
              onChange={handleChange}
            />
          </label>
          <label className={css.LableRegisterForm}>
            Password *
            <input
              className={css.InputRegister}
              name="password"
              type="password"
              value={password}
              required
              onChange={handleChange}
            />
          </label>

          <button className={css.BtnRegister} type="submit">
            Register
          </button>
        </form>
      </div>
    </Container>
  );
};
