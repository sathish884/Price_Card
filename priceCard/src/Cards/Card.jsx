import React from 'react';
import './Card.css';

function Card(props) {

    const iconStyle = {
        fontSize: "18px",
        color: "Blue",
        marginRight: "5px",
    }

    return (
        <div className="row">
            {props.cards.map((items, index) => (
                <div className="col p-3">
                    <div className="card" style={{ width: "20rem" }}>
                        <div className="card-header text-white text-center">
                            <p>{items.name}</p>
                            <h3>{items.rate}</h3>
                        </div>
                        <div className="card-body">
                            <hr />
                            <p className="card-text"><i className={items.icon1} style={iconStyle}></i>{items.userCount}</p>
                            <p className="card-text"><i className={items.icon1} style={iconStyle}></i>{items.storage}</p>
                            <p className="card-text"><i className={items.icon1} style={iconStyle}></i>{items.access}</p>
                            <p className="card-text"><i className={items.icon1} style={iconStyle}></i>{items.publicProjects}</p>
                            <p className={items.icon2 && items.name === 'FREE' ? 'light' : 'card-text'}><i className={items.name === 'PLUS' || items.name === 'PRO' ? items.icon1 : items.icon2} style={iconStyle}></i>{items.support}</p>
                            <p className={items.icon2 && items.name === 'FREE' ? 'light' : 'card-text'}><i className={items.name === 'PLUS' || items.name === 'PRO' ? items.icon1 : items.icon2} style={iconStyle}></i>{items.privateProjects}</p>
                            <p className={items.icon2 && items.name === 'FREE' ? 'light' : 'card-text'}><i className={items.name === 'PLUS' || items.name === 'PRO' ? items.icon1 : items.icon2} style={iconStyle}></i>{items.domain}</p>
                            <p className={items.icon2 && (items.name === 'FREE' || items.name === 'PLUS') ? 'light' : 'card-text'}><i className={items.name === 'PRO' ? items.icon1 : items.icon2} style={iconStyle}></i>{items.reports}</p>
                            <button className="btn btn-primary">Button</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card