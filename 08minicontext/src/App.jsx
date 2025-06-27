import UserContextProvider from "./Context/UserContextProvider"
import Login from "./components/Login";
import Profile from "./components/Profile";
function App() {

  return (
    <>
      <UserContextProvider>
        <h1 className="text-center">React With Chai and share is important</h1>
        <Login />
        <Profile/>     
      </UserContextProvider>
    </>
  );
}

export default App
