import React from 'react';
import GobalStyle from './style';
import { Provider } from 'react-redux'
import Header from './common/header';
import { IconFontGobalStyle } from './common/statics/iconfont/iconfont';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <GobalStyle/>
      <IconFontGobalStyle/>
      <Header/>
    </Provider>
  );
}

export default App;
