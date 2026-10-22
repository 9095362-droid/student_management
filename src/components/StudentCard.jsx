function StudentCard({ student }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p>ציון: {student.grade}</p>
      <p>נוכחות: {student.attendance} שיעורים</p>
      <p>סטטוס: {student.active ? "פעיל" : "לא פעיל"}</p>
      
      {student.grade >= 90 && <p className="badge status-excellent">מצטיין</p>}
      {student.grade < 60 && <p className="badge status-warning">נדרש שיפור</p>}
    </div>
  );
}

export default StudentCard;