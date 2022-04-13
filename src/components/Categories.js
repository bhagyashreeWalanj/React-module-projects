import React from 'react'

export default function Categories({ categories, filterItems }) {
    return (
        <div className="btn-container">
            {categories.map((category, index) => {
                return (
                    <button
                        type="button"
                        className={`filter-btn ${(category === 'all') ? 'active' : ''} focus:bg-[#c59d5f] focus:text-white`}
                        key={index}
                        onClick={() => filterItems(category)}>
                        {category}
                    </button>
                )
            })}
        </div>
    )
}
