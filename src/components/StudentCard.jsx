function StudentCard({ name, city, state, country, course }) {
  return (
    <div className="student-card">
      <h3>{name}</h3>
      <p>City: {city}</p>
      <p>State: {state}</p>
      <p>Country: {country}</p>
      <p>Course: {course}</p>
    </div>
  );
}

export default StudentCard;