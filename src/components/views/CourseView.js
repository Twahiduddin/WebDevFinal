import { useHistory } from "react-router";

const CourseView = (props) => {
  const { course } = props;
  const history = useHistory();

  const gotoinstructor = (id) => {
    history.push(`/instructor/${id}`);
  };

  const editCourse = (id) => {
    history.push(`/editcourse/${id}`);
  };

  return (
    <div>
      <div>
        <h1>{course.title}</h1>
        <h3>{course.timeslot}</h3>
        <h3>{course.location}</h3>
        <button onClick={() => editCourse(course.id)}>Edit</button>
      </div>

      {course.instructor ? (
        <>
          <h3
            style={{ cursor: "pointer" }}
            onClick={() => gotoinstructor(course.instructor.id)}
          >
            {course.instructor.firstname + " " + course.instructor.lastname}
          </h3>
        </>
      ) : (
        <>
          <h3>Staff</h3>
        </>
      )}
    </div>
  );
};

export default CourseView;
