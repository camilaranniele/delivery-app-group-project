import React from 'react';
import AdminRegister from '../components/form/Admin.register';
import AdminNavBar from '../components/navBar/AdminNavBar';

function AdminPage() {
  return (
    <div>
      <AdminNavBar />
      <AdminRegister />
    </div>
  );
}

export default AdminPage;
