import StudentList from '../components/StudentList';
import { initialStudents } from '../data/students';

function ExcellentStudents() {
  const excellentStudents = initialStudents.filter(s => s.grade >= 90);

  return (
    <div className="excellent-page">
      <h2>תלמידות מצטיינות</h2>
      {excellentStudents.length === 0 ? (
        <p>אין תלמידות מצטיינות כרגע</p>
      ) : (
        <StudentList students={excellentStudents} />
      )}
    </div>
  );
}

export default ExcellentStudents;