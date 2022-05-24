import { useHistory } from "react-router";

const InstructorView = (props) => {
  const { instructor, removeCourse, id, fetchInstructor } = props;
  const history = useHistory();
  const remove = async (course) => {
    course.instructorId = null;
    console.log(course);
    await removeCourse(course);
    await fetchInstructor(id);
  };

  const gotocourse = (id) => {
    history.push(`/course/${id}`);
  };

  const editInstructor = (id) => {
    history.push(`/editinstructor/${id}`);
  };
  return (
    <div>
      <img
        src={instructor.imageUrl}
        style={{ width: "55px", height: "55px", marginTop: "20px" }}
      />
      &nbsp;&nbsp;
      <h1>{instructor.firstname}</h1>
      <button onClick={() => editInstructor(instructor.id)}>Edit</button>
      <p>{instructor.department}</p>
      {instructor.courses.length > 0 ? (
        <ul>
          {instructor.courses.map((course) => {
            return (
              <>
                <li
                  key={course.id}
                  style={{ cursor: "pointer" }}
                  onClick={() => gotocourse(course.id)}
                >
                  {course.title}
                </li>
                <button onClick={() => remove(course)}>Remove</button>
              </>
            );
          })}
        </ul>
      ) : (
        <h3>No Courses Assigned</h3>
      )}
    </div>
  );
};

export default InstructorView;
