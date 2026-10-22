import { useEffect, useState } from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import StudentCard from "./components/StudentCard";
import "./App.css";

// Task 3: Rest and Spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];

const obj1 = { name: "Asha", course: "React" };
const obj2 = { city: "Surat", country: "India" };
const mergedObject = { ...obj1, ...obj2 };
const copiedObject = { ...obj1 };

function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

// Task 4: Props
const students = [
  { id: 1, name: "Asha", city: "Surat", state: "Gujarat", country: "India", course: "Full Stack Development" },
  { id: 2, name: "Shriya", city: "Surat", state: "Gujarat", country: "India", course: "Full Stack Development" },
  { id: 3, name: "Ayesha", city: "Surat", state: "Rajasthan", country: "India", course: "Full Stack Development" },
  { id: 4, name: "Sumit", city: "Surat", state: "Gujarat", country: "India", course: "Full Stack Development" },
  { id: 5, name: "Mannan", city: "Surat", state: "Gujarat", country: "India", course: "Full Stack Development" },
];

function StateExamples() {
  // Task 5: useState
  const [text, setText] = useState("Hello React");
  const [number, setNumber] = useState(0);
  const [active, setActive] = useState(true);
  const [subjects, setSubjects] = useState(["HTML", "CSS"]);
  const [profile, setProfile] = useState({ name: "Asha", course: "Full Stack Development" });

  return (
    <section className="panel">
      <h2>Task 5: useState Examples</h2>

      <h3>String: {text}</h3>
      <button onClick={() => setText("React Learner")}>Update</button>
      <button onClick={() => setText("Hello React")}>Reset</button>

      <h3>Number: {number}</h3>
      <button onClick={() => setNumber(number + 1)}>Add 1</button>
      <button onClick={() => setNumber(0)}>Reset</button>

      <h3>Boolean: {String(active)}</h3>
      <button onClick={() => setActive(!active)}>Toggle</button>
      <button onClick={() => setActive(true)}>Reset</button>

      <h3>Array: {subjects.join(", ")}</h3>
      <button onClick={() => setSubjects([...subjects, "ReactS"])}>
        Add Subject
      </button>
      <button onClick={() => setSubjects(["HTML", "CSS"])}>
        Reset
      </button>

      <h3>Object: {profile.name} - {profile.course}</h3>
      <button onClick={() => setProfile({ ...profile, course: "Full Stack" })}>
        Update Object
      </button>
      <button onClick={() => setProfile({ name: "Asha", course: "BCA" })}>
        Reset Object
      </button>
    </section>
  );
}

function StudentManager() {
  const [name, setName] = useState("");

  // Local Storage se data read karo
  const [list, setList] = useState(() => {
    try {
      const saved = localStorage.getItem("students");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // List change hone par save karo
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(list));
  }, [list]);

  function addStudent(event) {
    event.preventDefault();
    if (!name.trim()) return;

    setList([
      ...list,
      { id: crypto.randomUUID(), name: name.trim() },
    ]);
    setName("");
  }

  return (
    <section className="panel">
      <h2>Task 6: Student Information Manager</h2>

      <form onSubmit={addStudent}>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter student name"
        />
        <button type="submit">Add Student</button>
      </form>

      <p>Total Students: {list.length}</p>

      {list.map((student) => (
        <div className="student-row" key={student.id}>
          <span>{student.name}</span>
          <button
            onClick={() =>
              setList(list.filter((item) => item.id !== student.id))
            }
          >
            Delete
          </button>
        </div>
      ))}
    </section>
  );
}

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <Welcome />

        <section className="panel">
          <h2>Task 3: Rest and Spread Operators</h2>
          <p>Merged Array: {JSON.stringify(mergedArray)}</p>
          <p>Merged Object: {JSON.stringify(mergedObject)}</p>
          <p>Copied Object: {JSON.stringify(copiedObject)}</p>
          <p>Rest Operator Sum: {addNumbers(10, 20, 30)}</p>
        </section>

        <section className="panel">
          <h2>Task 4: Student Cards using Props</h2>
          <div className="student-grid">
            {students.map((student) => (
              <StudentCard key={student.id} {...student} />
            ))}
          </div>
        </section>

        <StateExamples />
        <StudentManager />
      </main>

      <Footer />
    </>
  );
}

export default App;