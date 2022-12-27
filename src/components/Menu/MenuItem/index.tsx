import React from 'react';
import { NavLink } from 'react-router-dom';
import { IMenuItem } from '../../../models';

interface MenuItemProps {
  item: IMenuItem;
}

export const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <li className="nav-item">
      <NavLink className="nav-link" to={item.url}>
        {item.title}
      </NavLink>
    </li>
  );
};
