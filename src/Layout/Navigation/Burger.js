import React from 'react';

const Burger = ({isOpen, setOpen}) => {
    return (
        <div className={isOpen ? "burger burger--open" : "burger burger--closed"} onClick={() => setOpen(!isOpen)}>
            <div className="burger__line burger__line-top" />
            <div className="burger__line burger__line-mid" />
            <div className="burger__line burger__line-bottom" />
        </div>

    )
}

export default Burger;