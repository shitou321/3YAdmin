import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import MenuToRouter from '@/menuMapToRouter';

const { SubMenu } = Menu;
const { Item } = Menu;

const renderMenuItem =
    ({ name, title, icon }) => {
        let link=MenuToRouter[name];
        return <Item
            key={name}
        >
            { link? <Link to={link}><span>{title}</span></Link> : <span>{title}</span>}
        </Item>;
    }

const renderSubMenu =
    ({ name, title, icon, link, children }) =>
        <SubMenu
            key={name}
            title={
                <span>
                    {icon && <Icon type="user" />}
                    <span>{title}</span>
                </span>
            }

        >
            {children && children.map(
                item => item.children && item.children.length ?
                    renderSubMenu(item) : renderMenuItem(item)
            )}
        </SubMenu>;

export default ({ menus, ...props }) => <Menu {...props}>
    {menus && menus.map(
        item => item.children && item.children.length ?
            renderSubMenu(item) : renderMenuItem(item)
    )}
</Menu>;