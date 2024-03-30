import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "./components/Header/index";

// import About from "./components/About/index";
// import Services from "./components/Services/index";
// import Skills from "./components/Skills/index";
// import Projects from "./components/Projects/index";
// import Timeline from './components/Timeline/index';
// import Testimonials from "./components/Testimonials/index";
// import Footer from "./components/Footer/index";

import { MyContext } from './components/MyContext/index';

const App = () => {
  // Initialize userDetails state variable and setUserDetails function
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedDataValue = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
        const { data } = fetchedDataValue;
        const { user } = data;
        console.log(user, "user");
        setUserDetails(user);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []); // Empty dependency array, so the effect runs only once after component mounts

  return ( 
    <MyContext.Provider value={userDetails}>
      <Header />
    </MyContext.Provider>
  );
};

export default App;

