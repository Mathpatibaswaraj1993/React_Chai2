import UserContextProvider from "./Context/UserContextProvider"

function App() {

  return (
    <>
      <UserContextProvider>
        <h1>React With Chai and share is important</h1>
      </UserContextProvider>
    </>
  );
}

export default App
