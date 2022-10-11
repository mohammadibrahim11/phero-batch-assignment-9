import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
// import Topics from '../../DataLoader/DataLoader';

export const TopicsContext = createContext([]);

const Root = () => {
    const {topics} = useLoaderData();
    console.log(topics);

    return (
       <TopicsContext.Provider value={topics}>
          <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
       </TopicsContext.Provider>
          
    
    );
};

export default Root;