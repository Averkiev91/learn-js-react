import classNames from 'classnames';
import { NavLink } from 'react-router';
import { navTab, navTabActive, navTabInactive } from './navigationtab.module.css';

const NavigationTab = ({ path, title }) => {
  return (
    <div>
      <NavLink
        to={path}
        className={({ isActive }) => classNames(navTab, isActive ? navTabActive : navTabInactive)}
      >
        {title}
      </NavLink>
    </div>
  );
};

export default NavigationTab;
