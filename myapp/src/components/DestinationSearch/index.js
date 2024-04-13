import {Component} from "react"
import DestinationItem from "../DestinationItem"
import './index.css'


class DestinationSearch extends Component{
      state = {searchinput: ''}

      searchcity = (event)=> this.setState({searchinput:event.target.value})
      
    
    render(){
        const {destinationsList} = this.props
        const {searchinput} = this.state
        
        const filterdat = destinationsList.filter(e=>(e.name.toLowerCase().includes(searchinput.toLowerCase()))
            
        )
    
      
       
        return(
          <div>
              <div className="T-S-container">
            <h1>Destination Search</h1>
          
           <div>
            <input type = "search" value = {searchinput} onChange={this.searchcity}/>
           </div>
           </div>

           <ul>
            {filterdat.map(e=>( 
                 <DestinationItem destinationitem = {e} key = {e.id}/>
                 ))}
           </ul>
          </div>
        )
    }
}

export default DestinationSearch