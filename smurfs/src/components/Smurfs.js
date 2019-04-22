import React from 'react'
import { connect } from 'react-redux'
import { getSmurf } from '../actions'

class Smurfs extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
            {this.props.smurfs.map((smurf) =>
                <div>
                    <p>{smurf.name}</p>
                    <p>{smurf.age}</p>
                    <p>{smurf.height}</p>
                </div>
            )}
        </div> 
        )
    }
}


// const Smurfs = (props) => {
//     return (
//         <div>
//                 {this.props.smurfs.map((smurf) =>
//                     <div>
//                         <p>{smurf.name}</p>
//                         <p>{smurf.age}</p>
//                         <p>{smurf.height}</p>
//                     </div>
//                 )}
//             </div>
//     )}


    const mapStateToProps = state => {
        return {
            smurfs: state.smurfs,
            fetchingSmurfs: state.fetchingSmurfs
        }
    }


    export default connect(mapStateToProps, { getSmurf })(Smurfs)