import React,{useState} from 'react';
import './App.css';
import List from './components/List'
import AddToList from './components/AddToList'

export interface InitialState  {
  people : {
    name : string
    age : number
    img : string
    note ?: string
  } []
}

function App() {
  const [people,setPeople] = useState<InitialState["people"]>([
    {
      name: "John",
      age: 25,
      img: "https://img.freepik.com/free-photo/portrait-smiling-handsome-asian-man_1150-35750.jpg?size=338&ext=jpg&ga=GA1.2.1501776959.1661607449",
      note: "Childhood friend",
    },
    {
      name: "Emily",
      age: 22,
      img: "https://img.freepik.com/free-photo/beautiful-model-girl-with-perfect-fresh-clean-skin-youth-skin-care-concept-isolated-pastel-brown-background_658552-32.jpg?size=626&ext=jpg&ga=GA1.2.1501776959.1661607449",
      note: "Roommate"
    }
  ]);
  return (
    <div className="App">
      <h1 className="App-header">Friend lists</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
