import React, { Component } from 'react';
import 'tachyons'; 
import App from './App';
class BodyData extends Component {
    state = {
        query: '',
        data: [],
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
        this.filterArray();
    }

    getData = () => {
        fetch(`https://joeschmoe.io/api/v1/`)
        .then(response => response.json())
        .then(responseData => {
            // console.log(responseData)
            this.setState({
                data:responseData
            })
        })
    }
    filterArray = () => {
        var searchString = this.state.query;
        var responseData = this.state.data
        if(searchString.length > 0){
            // console.log(responseData[i].name);
            responseData = responseData.filter(l => {
                console.log( l.name.toLowerCase().match(searchString));
            })
        }
    }

    componentWillMount() {
        this.getData();
    }


 render() {
        return (
            <div>

              <h4> Name  : Maneesh Singh Dhanik </h4>
           <h4> Email : manishdhanik8@gmail.com </h4>  <br />
             <br/>
                <form align="center">
                    <input type="text" id="filter" placeholder="Search for..." ref={input => this.search = input} onChange={this.handleInputChange}/>
                </form>

                  
     

                <div>
                    {
                        this.state.data.map((i) =>
                            <p>{i.name}</p>
                        )
                    }
                </div>
            
            </div>
        )
    }
}

                
export default BodyData;