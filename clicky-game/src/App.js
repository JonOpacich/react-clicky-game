import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

const removeFriend = () => {

}

class App extends React.Component {
 state = {
   friends : friends
 }
 removeFriend = (friendId) => {
   console.log("removing friend ", friendId);

   const newFriendsList = this.state.friends.filter(
     (friend) => {
       if (friend.id === friendId) return false;
       else return true;
     }
   )
   console.log(newFriendsList);
   this.setState({friends:newFriendsList});
 }
render = () => (
 <Wrapper>
   <h1 className="title">Friends List</h1>
   {
     this.state.friends.map(friend => {
       return <FriendCard
         removeFriend={this.removeFriend}
         name={friend.name}
         image={friend.image}
         occupation={(friend.occupation)}
         location={(friend.location)}
         key={friend.id}
         id={friend.id}
       />
     })
   }
 </Wrapper>
);
}

export default App;