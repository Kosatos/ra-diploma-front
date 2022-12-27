import React from 'react';

import { MenuItem } from './MenuItem';
import { IMenuItem } from '../../models';

interface MenuProps {
  items: IMenuItem[];
  classes: string;
}
export const Menu: React.FC<MenuProps> = ({ items, classes }) => {
  return (
    <ul className={classes}>
      {items.length !== 0 &&
        items.map((item, i) => <MenuItem key={i} item={item} />)}
    </ul>
  );
};
