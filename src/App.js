import "./App.css";

//Router
import { Switch, Route, Link } from "react-router-dom";
//Components
import {
  HomePageContainer,
  InstructorContainer,
  CourseContainer,
  AllInstructorsContainer,
  AllCoursesContainer,
  NewCourseContainer,
} from "./components/containers";
import NewInstructorComponent from "./components/containers/NewInstructorComponent";
import EditCourseContainer from "./components/containers/EditCourseContainer";
import EditInstructorContainer from "./components/containers/EditInstructorContainer";

// if you create separate components for adding/editing
// a student or instructor, make sure you add routes to those
// components here

const App = () => {
  return (
    <div className="App">
      <div>
        <Link to={"/instructors"}> All Instructors </Link>&nbsp;&nbsp;
        <Link to={"/courses"}> All Courses </Link>
      </div>
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/instructors" component={AllInstructorsContainer} />
        <Route exact path="/instructor/:id" component={InstructorContainer} />
        <Route exact path="/courses" component={AllCoursesContainer} />
        <Route exact path="/newcourse" component={NewCourseContainer} />
        <Route exact path="/course/:id" component={CourseContainer} />
        <Route exact path="/newinstructor" component={NewInstructorComponent} />
        <Route exact path="/editcourse/:id" component={EditCourseContainer} />
        <Route
          exact
          path="/editinstructor/:id"
          component={EditInstructorContainer}
        />
      </Switch>
    </div>
  );
};

export default App;
