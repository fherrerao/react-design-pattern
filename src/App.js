import SplitScreen from "./SplitScreen";
import SmallPersonListItem from "./people/SmallPersonListItem";
import LargePersonListItem from "./people/LargePersonListItem";
import RegularList from "./RegularList";
import SmallProductListItem from "./products/SmallProductListItem";
import LargeProductListItem from "./products/LargeProductListItem";
import NumberedList from "./NumberedList";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";

//First design pattern, (Styled Component)
const LeftHandComponent = ({name}) => (
  <h1 style={{backgroundColor: 'green'}}>{name}</h1>
);

const RightHandComponent = ({message}) => (
  <p style={{backgroundColor: 'red'}}>{message}</p>
);
/*#################################################################*/ 
//SECOND DESIGN PATTERN (LISTS)

const people = [
  {
    name : 'John',
    age  : 20,
    hairColor: 'brown',
    hobbies: ['football', 'basketball', 'tennis']
  },
  {
    name : 'Jane',
    age  : 21,
    hairColor: 'blonde',
    hobbies: ['football', 'tennis']
  },
  {
    name : 'Jack',
    age  : 22,
    hairColor: 'brown',
    hobbies: ['football', 'basketball']
  },  
];

const products = [
  {
    name : 'iPhone',
    price: 1000,
    description: 'A smartphone',
    rating: 4.5,    
  },
  {
    name : 'iPad',
    price: 800,
    description: 'A tablet',
    rating: 4.5,
  },
  {
    name : 'MacBook',
    price: 2000,
    description: 'A laptop',
    rating: 4.5,
  },
];

function App() {
  return (
    <>
      <HashRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={
            <SplitScreen leftWeight={1} rightWeight={3}>
            <LeftHandComponent name="Fernando"/>
            <RightHandComponent message="Hello"/>
          </SplitScreen>
          }/>

          <Route path="/list" element={
            <>
              <RegularList
                items={people}
                resourceName="person"
                itemComponent={SmallPersonListItem}
              />
              <NumberedList
                items={people}
                resourceName="person"
                itemComponent={LargePersonListItem}
              />
              <RegularList
                items={products}
                resourceName="product"
                itemComponent={SmallProductListItem}
              />
              <NumberedList
                items={products}
                resourceName="product"
                itemComponent={LargeProductListItem}
              />
            </>
          }/>   
        </Routes>
      </HashRouter>     
    </>
  )
}

export default App;
