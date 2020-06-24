import React from 'react';
import { applyMiddleware, compose, createStore } from 'redux'
import {Provider} from "react-redux";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import { RootReducer } from "./context/RootReducer";
import thunk from "redux-thunk";
import { menuAsyncLoader } from "./context/menu/MenuState";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import OrderStory from "./pages/OrdersStory";
import {Footer} from "./components/Fotter";
import {orderStoryAsyncLoader} from "./context/orderStory/OrderStoryState";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunk)));

function App() {
    menuAsyncLoader()
    orderStoryAsyncLoader()
    return (
      <Provider store={store}>
          <BrowserRouter>
              <div className="container pt-4">
                  <Navbar/>
                  <Switch>
                      <Route path={'/'} exact component={Home} />
                      <Route path={'/menu'} component={Menu} />
                      <Route path={'/cart'} component={Cart} />
                      <Route path={'/orderStory'} component={OrderStory} />
                  </Switch>
                  <Footer/>
              </div>
          </BrowserRouter>
      </Provider>
  );
}

export default App;

