import Link from 'next/link';
import { usePathname } from "next/navigation";
import classNames from 'classnames';
import { navTab, navTabActive, navTabInactive } from './navigationtab.module.css';

const NavigationTab = ({ path, title }) => {
  const pathname = usePathname();
  const isActive = pathname === path;
  
  return (
    <div>
      <Link
        href={path}
        className={classNames(navTab, isActive ? navTabActive : navTabInactive)}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavigationTab;
