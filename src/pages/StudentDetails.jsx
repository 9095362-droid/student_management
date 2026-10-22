import { useParams, useNavigate } from 'react-router-dom';
import { initialStudents } from '../data/students';

function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const student = initialStudents.find(s => s.id === parseInt(id));

  if (!student) {
    return (
      <div className="not-found-student">
        <p>תלמידה לא נמצאה</p>
        <button onClick={() => navigate('/students')}>חזרה לרשימה</button>
      </div>
    );
  }

  return (
    <div className="student-details">
      <h2>פרטי תלמידה</h2>
      <p><strong>שם:</strong> {student.name}</p>
      <p><strong>ציון:</strong> {student.grade}</p>
      <p><strong>נוכחות:</strong> {student.attendance} שיעורים</p>
      <p><strong>סטטוס:</strong> {student.active ? "פעילה" : "לא פעילה"}</p>

      {student.grade >= 90 && <p className="badge status-excellent">מצטיינת</p>}
      {student.grade < 60 && <p className="badge status-warning">נדרש שיפור</p>}

      <div className="details-buttons">
        <button onClick={() => navigate('/students')}>חזרה לרשימה</button>
        <button onClick={() => navigate('/')}>חזרה לדשבורד</button>
      </div>
    </div>
  );
}

export default StudentDetails;