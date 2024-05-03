import React from 'react'
import { ChildComp } from '../App'

function Card(props) {
    console.log(props.cards);
    return (
        <div>
            <div className="row">
                {props.cards.map((items, index) => {
                    console.log("ggggg", items);
                    <div className="col p-3">
                        <div className="card" style={{ width: "18rem" }}>
                            <div className="card-header">{items.name}</div>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                })}

            </div>

            <ChildComp />

        </div>
    )
}

export default Card