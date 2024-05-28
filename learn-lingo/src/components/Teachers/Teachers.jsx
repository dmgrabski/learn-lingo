import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { ref, get } from 'firebase/database';
import TeacherCard from '../TeacherCard/TeacherCard.jsx';
import './Teachers.css';

function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [filters, setFilters] = useState({ language: '', level: '', price: '' });

  useEffect(() => {
    const fetchTeachers = async () => {
      const snapshot = await get(ref(db, 'teachers'));
      const data = snapshot.val();
      setTeachers(Object.values(data));
      setFilteredTeachers(Object.values(data));
    };
    fetchTeachers();
  }, []);

  const applyFilters = () => {
    let filtered = teachers;
    if (filters.language) {
      filtered = filtered.filter(t => t.languages.includes(filters.language));
    }
    if (filters.level) {
      filtered = filtered.filter(t => t.levels.includes(filters.level));
    }
    if (filters.price) {
      filtered = filtered.filter(t => t.price_per_hour <= filters.price);
    }
    setFilteredTeachers(filtered);
  };

  return (
    <div className="container">
      <h1>Teachers</h1>
      <div className="filters">
        <label>Language:</label>
        <input type="text" onChange={(e) => setFilters({ ...filters, language: e.target.value })} />
        <label>Level:</label>
        <input type="text" onChange={(e) => setFilters({ ...filters, level: e.target.value })} />
        <label>Price:</label>
        <input type="number" onChange={(e) => setFilters({ ...filters, price: e.target.value })} />
        <button onClick={applyFilters}>Apply Filters</button>
      </div>
      <div className="teacher-cards">
        {filteredTeachers.slice(0, 4).map(teacher => (
          <TeacherCard key={teacher.name} teacher={teacher} />
        ))}
        {filteredTeachers.length > 4 && <button>Load more</button>}
      </div>
    </div>
  );
}

export default Teachers;
