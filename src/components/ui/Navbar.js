import React from 'react'

export const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <div className="container">
                <span className="navbar-brand"> 
                    CalendarApp 
                </span>
                <button 
                    className="btn btn-outline-danger" 
                >
                    <i className="bi bi-box-arrow-left mx-2"></i>
                    Salir
                </button>

            </div>
        </div>
    )
}
