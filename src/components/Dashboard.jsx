import { useState } from 'react';
import Header from './Header';
import StudentList from './StudentList';
import Statistics from './Statistics';

const initialStudents = [
  { id: 1, name: "אברהם לוי", grade: 95, attendance: 30, active: true },
  { id: 2, name: "משה כהן", grade: 58, attendance: 20, active: true },
  { id: 3, name: "יצחק ישראל", grade: 82, attendance: 25, active: false },
  { id: 4, name: "דוד פרידמן", grade: 91, attendance: 28, active: true },
  { id: 5, name: "יעקב שטיין", grade: 50, attendance: 15, active: false }
];

function Dashboard() {
  const [students] = useState(initialStudents);
  const [filterActiveOnly, setFilterActiveOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showStats, setShowStats] = useState(true);

  const filteredStudents = students.filter(student => {
    const matchesActive = filterActiveOnly ? student.active : true;
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesActive && matchesSearch;
  });

  return (
    <div className="dashboard">
      <Header />
      
      <button onClick={() => setShowStats(!showStats)}>
        {showStats ? "הסתר סטטיסטיקה" : "הצג סטטיסטיקה"}
      </button>

      {showStats && <Statistics students={students} />}

      <div className="controls">
        <input 
          type="text" 
          placeholder="חפש לפי שם..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => setFilterActiveOnly(false)}>הצג את כולם</button>
        <button onClick={() => setFilterActiveOnly(true)}>הצג פעילים בלבד</button>
      </div>

      <StudentList students={filteredStudents} />
    </div>
  );
}

export default Dashboard;