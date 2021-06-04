import { useState } from 'react';
import Bottom from 'components/Bottom';
import Top from 'components/Top';
import GlobalStyles from './components/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <h1>최상단 화면</h1>
        <Top />
        <Bottom />
      </div>
    </>
  )
}

export default App;
