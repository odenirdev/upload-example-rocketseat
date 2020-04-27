import React from 'react';
import GlobalStyle from './styles/global';
import {Container, Content} from './styles';
import Upload from './components/Upload/index';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Container>
        <Content>
          <Upload />
        </Content>
      </Container>
    </div>
  );
}

export default App;
