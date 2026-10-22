import { useSearchParams } from 'react-router-dom';
import StudentList from '../components/StudentList';
import { initialStudents } from '../data/students';

function Students() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') || '';
  const activeOnly = searchParams.get('active') === 'true';

  const filteredStudents = initialStudents.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(search.toLowerCase());
    const matchesActive = activeOnly ? student.active : true;
    return matchesSearch && matchesActive;
  });

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchParams(params => {
      if (value) params.set('search', value);
      else params.delete('search');
      return params;
    });
  };

  const handleActiveToggle = () => {
    setSearchParams(params => {
      if (activeOnly) params.delete('active');
      else params.set('active', 'true');
      return params;
    });
  };

  return (
    <div className="students-page">
      <h2>רשימת כל התלמידות</h2>
      <div className="controls">
        <input 
          type="text" 
          placeholder="חיפוש לפי שם..." 
          value={search}
          onChange={handleSearchChange}
        />
        <button onClick={handleActiveToggle}>
          {activeOnly ? "הצג את כולם" : "הצג פעילות בלבד"}
        </button>
      </div>

      {filteredStudents.length === 0 ? (
        <p>לא נמצאו תלמידות העונות להגדרות החיפוש</p>
      ) : (
        <StudentList students={filteredStudents} />
      )}
    </div>
  );
}

export default Students;