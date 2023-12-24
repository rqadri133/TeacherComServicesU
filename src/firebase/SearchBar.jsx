import React, { Component } from 'react';

import {Button} from 'react-bootstrap';
export default class SearchBar extends Component {


  

  
  

    render() {
        const { value, handleSubmit, handleChange } = this.props;
  // this module is from React Official Documentation
  // reference from https://stackoverflow.com/questions/60570406/how-to-properly-search-in-a-list-in-reactjs
        
        
        
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                            <form className="mt-4" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="search"
                                        placeholder="Type Here to Search By Teacher Name or Language"
                                        
                                        value={value}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <Button className="button-orange" size="lg" onClick={handleSubmit}>
          Search
        </Button>
                                </div>    
                                <div>
                                    &nbsp;
                                    &nbsp;
                                    &nbsp;
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};