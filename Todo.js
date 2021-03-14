import React,{Component} from 'react';

class Todo extends Component{

    constructor(props){
        super(props);
        this.state = {
            items : [],
            txtContent : ""
        };
    }

    txtChange = (e)=>{
        this.setState({txtContent: e.target.value})
    }

    addItem = (e) =>{
        let currentText = this.state.txtContent;
        let currentItems = this.state.items;
        currentItems.push(currentText);
        this.setState({items:currentItems});
    }

    removeItem = (i)=>{
        if(!window.confirm("Are you sure you want to delete this.?")){
            return;
        }
        let currentItems =this.state.items;
        currentItems.splice(i,1);
        this.setState({items:currentItems});
    }



    render(){
        return(
            <div className = "" >
                <input type="text" onChange = {this.txtChange}/>
                <button onClick={this.addItem}>Add</button>
                <ul>
                    {this.state.items.map((itm,k)=>{
                        return(
                            <li>{itm}<button onClick={()=>{this.removeItem(k)}}>Delete</button></li>
                        )
                    })}
                </ul>

                
            </div>
        )
    }
}
export default Todo;
