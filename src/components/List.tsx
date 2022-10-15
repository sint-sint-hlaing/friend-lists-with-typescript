import React from 'react'
import { InitialState as Props } from "../App";

interface IProps {
    people: Props["people"]
}

const List: React.FC<IProps> = ({ people }) => {

    const renderList = (): JSX.Element[] => {
        return people.map(person => {
            return (
                <li className="List">
                    <div className="List-header">
                        <img className="List-img" src={person.img} alt=""/>
                        <h2>{person.name}</h2>
                    </div>
                    <p className="List-age">{person.age} years old</p>
                    <p className="List-note">{person.note}</p>
                </li>
            )
        })
    }

    return (
        <ul>
            {renderList()} 
        </ul>
    )
}

export default List