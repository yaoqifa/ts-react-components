import React, { useContext, useState, FunctionComponentElement } from 'react';
import classNames from 'classnames'
import { MenuContext } from './menu'
import { MenuItemProps } from './menuItem';

export interface SubMenuProps {
  index?: number;
  className?: string;
  title?: string;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { index, className, title, children } = props

  const [ menuOpen, setMenuOpen ] = useState(false)

  const context = useContext(MenuContext)

  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index
  })
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setMenuOpen(!menuOpen)
  }
  const renderChildren = () => {
    const subMenuClasses = classNames('qf-submenu', {
      'menu-opened': menuOpen
    })
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>

      const { displayName } = childElement.type
      if (displayName === 'menuItem') {
        return childElement
      } else {
        console.error('Warning: SubMenu has a child which is not a MenuItem component')
      }
    })
    return (
      <ul className={subMenuClasses}>
        {childrenComponent}
      </ul>
    )
  }
  return (
    <li key={index} className={classes}>
      <div className="submenu-title" onClick={handleClick}>
        {title}
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'subMenu'

export default SubMenu