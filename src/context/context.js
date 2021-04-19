import React from 'react';

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [isOpen, setIsOpen] = React.useState(false);
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

    const closeOverlay = () => {
      setIsOpen(false)
    }


    return  <AppContext.Provider value =
              {{isOpen, 
              toggleSidebar,
              closeOverlay}}>
                {children}
            </AppContext.Provider>
};






export {AppContext, AppProvider};