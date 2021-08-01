import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from './Component/Common/Header'
import Home from './Component/Home'
import About from './Component/About'
import Post from './Component/Post'
import Comments from './Component/Comments'
import Photo from './Component/Photo'
import User from './Component/User/User'
import SingleUser from './Component/User/SingleUser'


function App() {
  return (
    <BrowserRouter>
      
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/post" component={Post} />
        <Route path="/comments" component={Comments} />
        <Route path="/photo" component={Photo} />
        <Route exact path="/user" component={User} />
        <Route path="/user/:id" component={SingleUser} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
