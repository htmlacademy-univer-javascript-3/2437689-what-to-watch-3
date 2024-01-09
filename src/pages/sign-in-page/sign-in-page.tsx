import {AppRoute, AuthorizationStatus, RE_EMAIL_VALID, RE_PASSWORD_VALID} from '../../consts.ts';
import {Link, useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../components/hooks/hooks.ts';
import {FormEvent, useRef, useState} from 'react';
import {login} from '../../store/api-actions.ts';
import {getAuthStatus} from '../../store/user-reducer/selectors.ts';
import Message from '../../components/message/message.tsx';

import {AuthData} from '../../types/types.ts';

export type UserFormValues = {
  email: string;
  password: string;
}

function SignInPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [errorMessage, setError] = useState<string | null>(null);
  const authorizationStatus = useAppSelector(getAuthStatus);

  const signInValidator = (data: { email: string; password: string }) => {
    const isEmailValid = RE_EMAIL_VALID.test(data.email);
    const isPasswordValid = RE_PASSWORD_VALID.test(data.password);

    if (!isPasswordValid && !isEmailValid) {
      return 'The email and password are not correct';
    } else if (!isPasswordValid) {
      return 'The password is not correct: it must contain at least 1 number and 1 letter';
    } else if (!isEmailValid) {
      return 'The email is not correct';
    }

    return null;
  };
  const onSubmit = (authData: AuthData) => {
    dispatch(login(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      const data = {
        email: loginRef.current.value,
        password: passwordRef.current.value,
      };
      const currentError = signInValidator(data);
      setError(currentError);
      if (currentError === null) {
        onSubmit(data);
      }
    }
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Main);
    }
  };
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={AppRoute.Main} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          {errorMessage !== null && <Message message={errorMessage}/>}
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                ref={loginRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-password"
              >
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>
      <footer className="page-footer">
        <div className="logo">
          <Link to={AppRoute.Main} className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default SignInPage;
