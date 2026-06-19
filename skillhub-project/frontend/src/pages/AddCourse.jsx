import { useState } from "react";
import API from "../api/courseApi";
import { toast } from "react-toastify";

function AddCourse() {
  const [course, setCourse] = useState({
    title: "",
    category: "Frontend",
    students: ""
  });

  async function handleSubmit(e) {
    e.preventDefault();
    if (!course.title || !course.category || !course.students) {
      toast.error("All Fields Required");
      return;
    }

    try {
      await API.post("/courses", course);
      toast.success("Course Added Successfully");
      setCourse({ title: "", category: "Frontend", students: "" });
    } catch (error) {
      toast.error("Failed To Add Course");
    }
  }

  return (
    <div className="page-container">
      <h1>Add Course</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Course Title"
          value={course.title}
          onChange={(e) => setCourse({ ...course, title: e.target.value })}
        />
        <br />
        <br />
        <select
          value={course.category}
          onChange={(e) => setCourse({ ...course, category: e.target.value })}
        >
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Database">Database</option>
          <option value="Cloud">Cloud</option>
        </select>
        <br />
        <br />
        <input
          type="number"
          placeholder="Students Count"
          value={course.students}
          onChange={(e) => setCourse({ ...course, students: e.target.value })}
        />
        <br />
        <br />
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
}

export default AddCourse;
