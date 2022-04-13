import React from 'react'
import NoDataFound from './NoDataFound';

export default function Menu({ items }) {
    console.log(items.length);
    return (
        <div>

            <div className="section-center">
                {items.map((menu) => {
                    const { id, title, img, desc, price } = menu;
                    return (
                        <article key={id} className="menu-item">
                            <img src={img} alt={title} className="photo" />
                            <div className="item-info">
                                <header>
                                    <h4>{title}</h4>
                                    <h4 className="price">&euro;{price}</h4>
                                </header>
                                <p className="item-text">{desc}</p>
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}
