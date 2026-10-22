import { Link } from 'react-router-dom';

function StudentCard({ student }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p>ציון: {student.grade}</p>
      <p>נוכחות: {student.attendance} שיעורים</p>
      <p>סטטוס: {student.active ? "פעילה" : "לא פעילה"}</p>
      
      {student.grade >= 90 && <p className="badge status-excellent">מצטיינת</p>}
      {student.grade < 60 && <p className="badge status-warning">נדרש שיפור</p>}
      
      <Link to={`/students/${student.id}`} className="details-link">לצפייה בפרטים</Link>
    </div>
  );
}

export default StudentCard;