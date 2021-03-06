import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';


import Homepage from './pages/homepage/homepage-componet'
import ShopPage from'./pages/Shop/shop-component';
import Header from './components/header/header-component'
import SignInSignOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out'
import {auth, createUserProfileDocument} from "./firebase/firebase-util";

class App extends React.Component{
  constructor(){
      super();
      this.state = {
          currentUser:null
      }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {

     this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth=>{
         if (userAuth) {
             const userRef = await createUserProfileDocument(userAuth);

             userRef.onSnapshot(snapshot => {
                 this.setState({
                         currentUser:{
                             id:snapshot.id,
                             ... snapshot.data()}
                 });
                 console.log(this.state)
             })
         } else {
             this.setState({currentUser:userAuth});
         }
         // this.setState({currentUser:user});
         //  console.log(user)
      })
  }

  componentWillUnmount() {
      this.unsubscribeFromAuth();
  }



    render() {
      return (
          <div>
              <Header currentUser={this.state.currentUser}/>
              <Switch>
                  <Route exact path='/' component={Homepage} />
                  <Route path='/shop' component={ShopPage}/>
                  <Route path='/signIn' component={SignInSignOut}/>


              </Switch>




          </div>

      );
  }


}

export default App;
