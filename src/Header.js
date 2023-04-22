import React,{Component} from 'react';


class Header extends Component{
    constructor(){
        super()
        this.state={
            updateData:''

        }
    }

    handleChange =(event) => {
        // console.log(event.target.value);
        this.props.userInput(event.target.value);
    }
   

    render(){
        return(
            <>
            <header>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                      <div className="navbar-header">
                        <a className="navbar-brand" href="#">Search Application</a>
                      </div>
                      <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                      </ul>
                      <form className="navbar-form navbar-left" action="#">
                        <div className="form-group">
                          <input type="text" className="form-control inputSize" placeholder="Search Here" name="search" onChange={this.handleChange}/>
                        </div>&nbsp;&nbsp;
                      </form>
                    </div>
                  </nav>
            </header>
            </>
          )
    }
    

}

export default Header;