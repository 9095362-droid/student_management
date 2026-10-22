import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <h2>404 - העמוד לא נמצא</h2>
      <p>הנתיב שאליו ניגשת אינו קיים במערכת.</p>
      <Link to="/">חזרה לדשבורד הראשי</Link>
    </div>
  );
}

export default NotFound;