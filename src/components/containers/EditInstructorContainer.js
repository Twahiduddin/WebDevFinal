import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { editInstructorThunk, fetchInstructorThunk } from "../../store/thunks";
import EditInstructorView from "../views/EditInstructorView";

class EditInstructorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.instructor.id,
      firstname: this.props.instructor.firstname,
      lastname: this.props.instructor.lastname,
      department: this.props.instructor.department,
      imageUrl: this.props.instructor.imageUrl,
    };
  }

  componentDidMount() {
    //getting course ID from url
    this.props.fetchInstrutor(this.props.match.params.id);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    let instructor = {
      id: this.state.id,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      department: this.state.department,
      imageUrl: this.state.imageUrl,
    };

    let newInstructor = await this.props.editInstrutor(instructor);

    this.setState({
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      department: this.state.department,
      imageUrl: this.state.imageUrl,
      redirect: true,
      redirectId: instructor.id,
    });
  };

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  render() {
    //go to single course view of newly created course
    if (this.state.redirect) {
      return <Redirect to={`/instructor/${this.state.redirectId}`} />;
    }
    return (
      <EditInstructorView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        instructor={this.state}
      />
    );
  }
}

const mapState = (state) => {
  return {
    instructor: state.instructor,
  };
};

const mapDispatch = (dispatch) => {
  return {
    editInstrutor: (instructor) => dispatch(editInstructorThunk(instructor)),
    fetchInstrutor: (id) => dispatch(fetchInstructorThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(EditInstructorComponent);
