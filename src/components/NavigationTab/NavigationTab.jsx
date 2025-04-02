import classNames from 'classnames';
import { NavLink } from 'react-router';
import { button, buttonActive, buttonInactive } from './navigationtab.module.css';

const NavigationTab = ({ path, title }) => {
  return (
    <div>
      <NavLink
        to={path}
        className={({ isActive }) => classNames(button, isActive ? buttonActive : buttonInactive)}
      >
        {title}
      </NavLink>
    </div>
  );
};

export default NavigationTab;
