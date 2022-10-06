import SplitScreen from "./SplitScreen";

const LeftHandComponent = ({name}) => (
  <h1 style={{backgroundColor: 'green'}}>{name}</h1>
);

const RightHandComponent = ({message}) => (
  <p style={{backgroundColor: 'red'}}>{message}</p>
);

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent name="Fernando"/>
      <RightHandComponent message="Hello"/>
    </SplitScreen>    
  )
}

export default App;
