import { NavLink, Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <ul>
        <NavLink
          className={({ isActive }) => (isActive ? 'isActive' : '')}
          to="about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'isActive' : '')}
          to="login"
        >
          Login
        </NavLink>
      </ul>
    </>
  );
};
