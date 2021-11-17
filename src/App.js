import { Container, Row } from 'react-bootstrap';
import Navigationbar from './Component/Navigationbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Component/Home';
import Characters from './Component/Characters';
import { useState, useEffect } from 'react'
import Loader from './Component/Loader';

function App() {
  const [isPending, setIsPending] = useState(true);
  const [content, setContent] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setContent(true); 
      
      setIsPending(false);
      }, 2000);
  },[])

  return (
    <Router>
      <Container className="ps-md-5 bg-light app-height">
        <Row className="justify-content-center ps-5">
            <Navigationbar />
            <Switch>
              <Route exact path="/">
              {content && <Home />}
              {isPending && <Loader/>} 
              </Route>
              <Route path="/Characters">
                <Characters />
              </Route>
            </Switch>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
