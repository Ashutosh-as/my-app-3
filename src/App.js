import React ,{ Component} from 'react';



 class App extends Component {
   constructor(props){
     super(props);
     this.state={
       newItems:"",
       list:[]
     }
   }
   updateInput(key,value){
     this.setState({
       [key]:value
     });
   }
   addItem(){
     const newItems={
       id: 1 +  Math.random(),
       value:this.state.newItems.slice()

     };
     const list =[...this.state.list];
     list.push(newItems);
     this.setState({
       list,
       newItems:""
     });
   }
   
   
   render() {
  return (
    <div className="App">
    <div>
    add an item...
    <br/>
    <input 
    type="text"
    placeholder="type item here...."
    value={this.state.newItems}
    onChange={ e=> this.updateInput("newItems,e.target.value")}
    />
    <button 
    onClick={() => this.addItem()}
    >
    add
    </button>
    <br/>
    <ul>
    {this.state.list.map(item  => {
      return (
         <li key={item.id}></li>
      )
    })}
    </ul>
    </div>
     
    </div>
  );
}
 }

export default App;
