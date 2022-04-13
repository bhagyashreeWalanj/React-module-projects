import React, { useState, useEffect } from 'react'
import Menu from './Menu';
import Categories from './Categories';
//import items from '../mocks/data';
import '../App.css';
import { getAllMenus } from '../api/authProvider';
import NoDataFound from './NoDataFound';

export default function Menus() {
    const [menuItems, setMenuItems] = useState([]);
    const [allMenus, setAllMenus] = useState([])
    const [categories, setCategories] = useState([])

    const getMenuItems = () => {
        getAllMenus()
            .then((response) => {
                setMenuItems(response.data);
                setAllMenus(response.data);
                const categories = ['all', ...new Set(response.data.map(item => item.category))];
                setCategories(categories);
            })
            .catch(err => {
                setMenuItems([]);
            });
    };

    useEffect(() => {
        getMenuItems()
    }, []);


    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(allMenus);
            return;
        }
        const newItems = allMenus.filter((item) => item.category === category);
        setMenuItems(newItems);
    }

    return (
        <main>
            <section className="menu section">
                {(menuItems.length <= 0) ? <NoDataFound /> :
                    <>
                        <div className="title">
                            <h2>Our Menu</h2>
                            <div className="underline"></div>
                        </div>
                        <Categories filterItems={filterItems} categories={categories} />
                        <Menu items={menuItems} />
                    </>
                }
            </section>
        </main>
    )
}
