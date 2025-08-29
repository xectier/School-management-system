import React from 'react';
import { Users, GraduationCap, UserCheck, IndianRupee, Bell, FileText } from 'lucide-react';

const Dashboard = ({ notices, setActiveTab }) => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      <div className="text-sm text-gray-500">
        Welcome back, Rupam Ray Mandal
      </div>
    </div>

    {/* Stats Cards */}
    <div className="grid grid-cols-1 md:grid-cols-10 lg:grid-cols-8 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Students</p>
            <p className="text-3xl font-bold text-blue-600">1,248</p>
          </div>
          <Users className="h-12 w-12 text-blue-500" />
        </div>
        <p className="text-sm text-green-600 mt-2">↗ +12 this month</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Teachers</p>
            <p className="text-3xl font-bold text-green-600">86</p>
          </div>
          <GraduationCap className="h-12 w-12 text-green-500" />
        </div>
        <p className="text-sm text-gray-500 mt-2">Active staff members</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Attendance Today</p>
            <p className="text-3xl font-bold text-yellow-600">94.5%</p>
          </div>
          <UserCheck className="h-12 w-12 text-yellow-500" />
        </div>
        <p className="text-sm text-green-600 mt-2">↗ +2.1% from yesterday</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Fee Collection</p>
            <p className="text-3xl font-bold text-purple-600">₹2.4M</p>
          </div>
          <IndianRupee className="h-12 w-12 text-purple-500" />
        </div>
        <p className="text-sm text-green-600 mt-2">↗ ₹240K this month</p>
      </div>
    </div>

    {/* Recent Activity */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Notices</h3>
        <div className="space-y-3">
          {notices.slice(0, 3).map(notice => (
            <div key={notice.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className={`w-2 h-2 rounded-full mt-2 ${
                notice.priority === 'urgent' ? 'bg-red-500' : 
                notice.priority === 'high' ? 'bg-yellow-500' : 'bg-green-500'
              }`}></div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{notice.title}</p>
                <p className="text-sm text-gray-600">{notice.content}</p>
                <p className="text-xs text-gray-500 mt-1">{notice.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <button 
            onClick={() => setActiveTab('students')}
            className="flex items-center space-x-2 p-3 bg-blue-50 text-blue-400 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <Users className="h-5 w-5" />
            <span>Add Student</span>
          </button>
          <button 
            onClick={() => setActiveTab('teachers')}
            className="flex items-center space-x-2 p-3 bg-green-50 text-green-400 rounded-lg hover:bg-green-100 transition-colors"
          >
            <GraduationCap className="h-5 w-5" />
            <span>Add Teacher</span>
          </button>
          <button 
            onClick={() => setActiveTab('notices')}
            className="flex items-center space-x-2 p-3 bg-yellow-50 text-yellow-400 rounded-lg hover:bg-yellow-100 transition-colors"
          >
            <Bell className="h-5 w-5" />
            <span>Post Notice</span>
          </button>
          <button 
            onClick={() => setActiveTab('reports')}
            className="flex items-center space-x-2 p-3 bg-purple-50 text-purple-400 rounded-lg hover:bg-purple-100 transition-colors"
          >
            <FileText className="h-5 w-5" />
            <span>Generate Report</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;