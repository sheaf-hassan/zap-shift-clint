import React from 'react';
import useRole from '../../../hooks/useRole';
import Loading from '../../../components/Loading/Loading';
import AdminDashboardHome from './AdminDashboardHome';
import RiderDashboardHome from './RiderDashboardHome';
import UserDashboardHome from './UserDashboardHome';

const DashboardHome = () => {
    const { role, roleLading } = useRole()
    if (roleLading) {
        return <Loading></Loading>
    }
    if(role === 'admin'){
        return <AdminDashboardHome></AdminDashboardHome>
    }
    else if(role === 'rider'){
        return <RiderDashboardHome></RiderDashboardHome>
    }
    else{
        return <UserDashboardHome></UserDashboardHome>
    }

    
};

export default DashboardHome;