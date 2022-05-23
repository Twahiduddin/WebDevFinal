import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllInstructorsView = (props) => {
  if (!props.allInstructors.length) {
    return (
      <>
        <div>There are no instructors.</div>{" "}
        <Link to={`/newinstructor`}>
          <button>Add New Instructor</button>
        </Link>
      </>
    );
  }

  return (
    <div>
      {props.allInstructors.map((instructor) => {
        let name = instructor.firstname + " " + instructor.lastname;
        return (
          <>
            <div key={instructor.id} style={{ border: "1px solid grey" }}>
              <img
                src={instructor.imageUrl}
                style={{ width: "55px", height: "55px", marginTop: "20px" }}
              />
              &nbsp;&nbsp;
              <Link to={`/instructor/${instructor.id}`}>
                <h1>{name}</h1>
              </Link>
              <br />
              <p>{instructor.department}</p>
              <button onClick={() => props.deleteInstructor(instructor.id)}>
                Delete
              </button>
            </div>
          </>
        );
      })}
      <br />
      <br />
      <Link to={`/newinstructor`}>
        <button>Add New Instructor</button>
      </Link>
    </div>
  );
};

AllInstructorsView.propTypes = {
  allInstructors: PropTypes.array.isRequired,
};

export default AllInstructorsView;
