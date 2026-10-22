import { useState, useEffect } from 'react';
import Statistics from '../components/Statistics';
import StudentList from '../components/StudentList';
import { initialStudents } from '../data/students';

function Dashboard() {
  const [students] = useState(initialStudents);
  const [loading] = useState(false);
  const [error] = useState(null);

  useEffect(() => {
    console.log("Dashboard component mounted");
    // מערך התלויות הריק מבטיח שהקוד בתוך useEffect יורץ פעם אחת בלבד בעת טעינת הרכיב (Mount).
  }, []);

  if (loading) return <div>טעינה...</div>;
  if (error) return <div>שגיאה בטעינת הנתונים</div>;

  return (
    <div className="dashboard">
      <h2>דשבורד ראשי</h2>
      <Statistics students={students} />
      {students.length === 0 ? (
        <p>אין תלמידות במערכת</p>
      ) : (
        <StudentList students={students.slice(0, 3)} />
      )}
    </div>
  );
}

export default Dashboard;