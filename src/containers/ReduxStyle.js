import React, { Component } from 'react';
// we need some glue! this component (now container) needs to know about our redux state
import { connect } from 'react-redux';

class ReduxStyle extends Component{
	render(){
		var studentArray = [];
		this.props.students.map((student, index)=>{
			studentArray.push(<ul className="spinMe" key={student.name} >{student.name} - {student.seat}</ul>)
		});
		this.props.students2.map((student, index)=>{
			studentArray.push(<ul className="spinMe" key={student.name} >{student.name} - {student.seat}</ul>)
		});
		return(
			<div>
				{studentArray}
			</div>
		)

	}
}

function mapStateToProps(state){
	return{
		// from our master reducer, we have a state Object
		// inside our state object, we have a property: students
		// we need to set up the state of that object to the props of that Object
		students: state.students,
		students2: state.students2
	}
}

export default connect(mapStateToProps)(ReduxStyle);