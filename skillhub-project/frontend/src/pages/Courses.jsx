import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import API from "../api/courseApi";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    getCourses();
  }, [category]);

  async function getCourses() {
    try {
      const url = category ? `/courses?category=${encodeURIComponent(category)}` : "/courses";
      const response = await API.get(url);
      setCourses(response.data);
    } catch (error) {
      console.error(error);
      setCourses([]);
    }
  }

  return (
    <div className="page-container">
      <h1>{category ? `${category} Courses` : "Available Courses"}</h1>
      <h3>Total Courses : {courses.length}</h3>
      {courses.map((course) => (
        <div key={course._id} className="course-item">
          📘 {course.title} ({course.category} - {course.students} Students)
        </div>
      ))}
    </div>
  );
}

export default Courses;
