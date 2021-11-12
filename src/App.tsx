import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className={"flex-container"}>
            <div className={'flex-item absolute1'}>static</div>
            <div className={'flex-item absolute2'}>relative</div>
            {/*<div className={'flex-item absolute'}>absolute</div>*/}
            {/*<div className={'flex-item fixed'}>fixed</div>*/}
            {/*<div className={'flex-item sticky'}>sticky</div>*/}
        </div>
    </div>
  );
}

export default App;
