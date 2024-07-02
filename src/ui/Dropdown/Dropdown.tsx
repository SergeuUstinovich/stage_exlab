import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { classNames } from "../../utils/classNames";
import style from "./Dropdown.module.scss";
import { Fragment, ReactNode } from "react";
import { Link } from "react-router-dom";

export interface DropdownItem {
  id: string;
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
  style?: React.CSSProperties;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger?: ReactNode;
}

function Dropdown(props: DropdownProps) {
  const { className = "", trigger, items } = props;
  return (
    <Menu as={"div"} className={classNames(style.dropdown, {}, [className])}>
      <MenuButton className={style.btn}>{trigger}</MenuButton>
      <MenuItems className={style.menu}>
        {items.map((item) => {
          const content = ({ focus }: { focus: boolean }) => (
            <button
              type={"button"}
              onClick={item.onClick}
              disabled={item.disabled}
              className={classNames(style.item, { [style.focus]: focus })}
              style={item.style}
            >
              {item.content}
            </button>
          );
          if (item.href) {
            return (
              <MenuItem key={item.id} as={Link} to={item.href} disabled={item.disabled}>
                {content}
              </MenuItem>
            );
          }
          return (
            <MenuItem key={item.id} as={Fragment} disabled={item.disabled}>
              {content}
            </MenuItem>
          );
        })}
      </MenuItems>
    </Menu>
  );
}

export default Dropdown;
