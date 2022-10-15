import React from 'react'
import { InitialState as Props } from "../App"

interface InitialProps {
    people: Props["people"]
}

const List: React.FC<InitialProps> = ({ people }) => {

    const renderList = (): JSX.Element[] => {
        return people.map(person => {
            return (
                <li className="List">
                    <div className="List-header">
                        <img className="List-img" src={person.img}/>
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} years old</p>
                    <p className="List-note">{person.note}</p>
                </li>
            )
        })
    }

    return (
        <ul className="">
            {renderList()} 
        </ul>
    )
}

export default List