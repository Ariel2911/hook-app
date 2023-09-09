import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { AboutPage } from './AboutPage';
import { Navigate } from 'react-router-dom';

export const MainApp = () => {
  return (
    <>
      <h2>MainApp</h2>
      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />

        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
    </>
  );
};
