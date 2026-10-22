function Statistics({ students }) {
  const totalStudents = students.length;
  const activeStudents = students.filter(s => s.active).length;
  const averageGrade = totalStudents > 0 
    ? (students.reduce((acc, s) => acc + s.grade, 0) / totalStudents).toFixed(1) 
    : 0;

  return (
    <div className="statistics">
      <h2>נתונים סטטיסטיים</h2>
      <div className="stats-grid">
        <div>סה"כ תלמידות: {totalStudents}</div>
        <div>תלמידות פעילות: {activeStudents}</div>
        <div>ממוצע ציונים: {averageGrade}</div>
      </div>
    </div>
  );
}

export default Statistics;