import React from 'react'
import { connect } from 'react-redux'
import { addSmurf } from '../actions'
import { throws } from 'assert';

class SmurfList extends React.Component {
    state = {
        name: '',
        age: '',
        height: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    addSmurf = e => {
        e.preventDefault();
        this.props.addSmurf(this.state)
        this.setState({
            name:'',
            age: '',
            height: ''
        })

    }

    render() {
        return(
            <div>
            <form onSubmit={this.addSmurf}>
                <input
                    type='text'
                    onChange={this.handleChange}
                    placeholder='name'
                    value={this.state.name}
                    name='name'
                >
                </input>

                <input 
                    type='text'
                    onChange={this.handleChange}
                    placeholder='age'
                    value={this.state.age}
                    name='age'>

                </input>

                <input
                    type='text'
                    onChange={this.handleChange}
                    placeholder='height'
                    value={this.state.height} 
                    name='height'   >
                </input>
                <button type='submit'>Add Smurf</button>
            </form>
            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return{
    smurfs: state.smurfs
    }
}



export default connect(mapStateToProps, {addSmurf})(SmurfList)

