import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { editCourseThunk, fetchCourseThunk } from "../../store/thunks";
import EditCourseView from "../views/EditCourseView";

class EditCourseContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.course.id,
      title: this.props.course.title,
      timeslot: this.props.course.timeslot,
      location: this.props.course.location,
      instructorId: this.props.course.instructorId,
      redirect: false,
      redirectId: null,
    };
  }

  componentDidMount() {
    //getting course ID from url
    this.props.fetchCourse(this.props.match.params.id);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    let course = {
      id: this.state.id,
      title: this.state.title,
      timeslot: this.state.timeslot,
      location: this.state.location,
      instructorId: this.state.instructorId,
    };

    let newCourse = await this.props.editCourse(course);

    this.setState({
      title: this.state.title,
      timeslot: this.state.timeslot,
      location: this.state.location,
      instructorId: null,
      redirect: true,
      redirectId: course.id,
    });
  };

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  render() {
    //go to single course view of newly created course
    if (this.state.redirect) {
      return <Redirect to={`/course/${this.state.redirectId}`} />;
    }
    return (
      <EditCourseView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        course={this.state}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    course: state.course,
  };
};

const mapDispatch = (dispatch) => {
  return {
    editCourse: (course) => dispatch(editCourseThunk(course)),
    fetchCourse: (id) => dispatch(fetchCourseThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(EditCourseContainer);
