import { Container } from 'components/Conteiner/Container';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/authThunk';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
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
      email,
      password,
    };
    dispatch(loginThunk(formData));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <div className={css.BoxFormLogin}>
        <h2 className={css.TitleLogin}>Login</h2>
        <form className={css.FormLogin} onSubmit={handleSubmit}>
          <label className={css.LableLoginForm}>
            E-mail *
            <input
              className={css.InputLogin}
              name="email"
              type="email"
              value={email}
              required
              onChange={handleChange}
            />
          </label>
          <label className={css.LableLoginForm}>
            Password *
            <input
              className={css.InputLogin}
              name="password"
              type="password"
              value={password}
              required
              onChange={handleChange}
            />
          </label>

          <button className={css.BtnLogin} type="submit">
            Login
          </button>
        </form>
      </div>
    </Container>
  );
};
