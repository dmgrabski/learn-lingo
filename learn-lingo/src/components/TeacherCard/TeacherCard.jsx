import React from 'react';
import './TeacherCard.css'; // Import pliku CSS

function TeacherCard({ teacher }) {
  return (
    <div className="teacher-card">
      <img src={teacher.avatar_url} alt={`${teacher.name} ${teacher.surname}`} />
      <h2>{teacher.name} {teacher.surname}</h2>
      <p>{teacher.lesson_info}</p>
      <p>Price: ${teacher.price_per_hour}/hour</p>
      <button>❤️</button>
      <button>Read more</button>
      <button>Book trial lesson</button>
    </div>
  );
}

export default TeacherCard;
