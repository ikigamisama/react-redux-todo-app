import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';

import Bootstrap from './components/Bootstrap';
import MaterialUI from './components/MateriaiUI';
import Semantic from './components/Semantic';
import Antd from './components/Antd';

import FloatingButtonChoice from './components/FloatingButtonChoice';

import './App.scss';

function App() {

  const [ numFrameworkStyle, setNumFrameworkStyle ] = useState(1);
  const [ isAppearChoiceFrameworkStyle, setIsAppearChoiceFrameworkStyle ] = useState(false);

  const chooseFrameworkStyle = () => {
    switch(numFrameworkStyle){
        case 1:
          return (<Antd />)
        case 2:
          return (<Bootstrap />)
        case 3:
          return (<MaterialUI />)
        case 4:
          return (<Semantic />)
        default:
          return false;
    }
  }

  const clickAppearFrameworkChoose = (isAppear) => {
    setIsAppearChoiceFrameworkStyle(isAppear);
  }

  const onSelectFrameworkChoose = (item) => {
    setNumFrameworkStyle(item);

  }
  return (
    <Provider store={store}>
      <div className="main">
        {chooseFrameworkStyle()}
      </div>
      <FloatingButtonChoice 
        show={isAppearChoiceFrameworkStyle} 
        onClick={clickAppearFrameworkChoose}
        currentFrameworkNum={numFrameworkStyle} 
        onChooseFramework={onSelectFrameworkChoose}/>
    </Provider>
  );
}

export default App;
