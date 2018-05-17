import React from "react"; 
import { connect } from 'react-redux'; 

export class App extends React.Component {
    render() {
        return (
            <div>
                <header role="banner">
                    <h1>Welcome</h1>
                    <p>{this.props.data}</p>
                </header>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.data
}); 

export default connect(mapStateToProps)(App); 




