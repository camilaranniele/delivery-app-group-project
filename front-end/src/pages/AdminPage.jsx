import { Box, VStack } from '@chakra-ui/react';
import React from 'react';
import AdminRegister from '../components/form/Admin.register';
import AdminNavBar from '../components/navBar/AdminNavBar';
import UsersTable from '../components/table/UsersTable';

function AdminPage() {
  return (
    <Box>
      <AdminNavBar />
      <VStack>
        <AdminRegister />
        <UsersTable />
      </VStack>
    </Box>

  );
}

export default AdminPage;
