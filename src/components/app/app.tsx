import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../images/logo.svg';
import './app.scss';

const App: FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t('App.edit0')} <code>src/components/app/app.tsx</code> {t('App.edit1')}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('App.learnReact')}
        </a>
      </header>
    </div>
  );
};

export default App;
