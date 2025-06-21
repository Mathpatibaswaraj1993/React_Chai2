import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Layout from "./Layout";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import Github from "./components/Github/Github";

function App() {
  return (
    <>
      {/* 🌐 Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-orange-600">MySite</h1>

            <div className="flex space-x-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-md font-medium transition duration-200"
              >
                Home
              </Link>
              {/* <Link
                to="/header"
                className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-md font-medium transition duration-200"
              >
                Header
              </Link>
              <Link
                to="/footer"
                className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-md font-medium transition duration-200"
              >
                Footer
              </Link> */}
              <Link
                to="/about"
                className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-md font-medium transition duration-200"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-md font-medium transition duration-200"
              >
                Contact
              </Link>
              <Link
                to="/github"
                className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-md font-medium transition duration-200"
              >
                Github
              </Link>
              {/* <Link
              to="/layout"
              className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-md font-medium transition duration-200"
            >
              Layout
            </Link> */}
            </div>
          </div>
        </div>
      </nav>

      {/* 🧭 Route Content */}
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:userid" element={<User />} />
          <Route path="/github" element={<Github />} />
          <Route path="/layout" element={<Layout />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
