import React from 'react';
import AdminRegister from '../components/form/Admin.register';
import AdminNavBar from '../components/navBar/AdminNavBar';
import UsersTable from '../components/table/UsersTable';

function AdminPage() {
  return (
    <div>
      <AdminNavBar />
      <AdminRegister />
      <UsersTable />
    </div>
  );
}

export default AdminPage;
