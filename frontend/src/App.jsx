import React, { useState } from 'react';
import { Users, BookOpen, Calendar, IndianRupee, Bell, Settings, LogOut, Menu, X, GraduationCap, UserCheck, FileText, BarChart3, MessageSquare } from 'lucide-react';

// Import all your individual components
import Dashboard from './components/common/Dashboard';
import LoginForm from './components/common/LoginForm';
import NoticesManagement from './components/common/NoticesManagement';
import ExamsAndGrades from './components/common/ExamsAndGrades';
import FeeManagement from './components/common/FeeManagement';
import StudentsManagement from './components/admin/StudentsManagement';
import TeachersManagement from './components/admin/TeachersManagement';
import Reports from './components/admin/Reports';
import AttendanceManagement from './components/teacher/AttendanceManagement';

// Mock data for demonstration
const mockUser = {
  id: 1,
  name: "Rupam Ray Mandal",
  role: "admin",
  email: "admin@school.com",
  avatar: "/api/placeholder/40/40"
};

const mockStudents = [
  { id: 1, name: "Rupam Ray Mandal", class: "Grade 10-A", attendance: "92%", status: "active" },
  { id: 2, name: "Avijit Kayal", class: "Grade 9-B", attendance: "88%", status: "active" },
  { id: 3, name: "Arpita Pal", class: "Grade 11-A", attendance: "95%", status: "active" },
  { id: 4, name: "Aditi Pal", class: "Grade 8-C", attendance: "85%", status: "active" }
];

const mockTeachers = [
  { id: 1, name: "Arpita Chaudhury", subject: "Mathematics", classes: "Grade 10-A, 11-B", status: "active" },
  { id: 2, name: "Somraj Maji", subject: "Physics", classes: "Grade 11-A, 12-A", status: "active" },
  { id: 3, name: "Hira Lal Singh", subject: "English", classes: "Grade 9-A, 10-B", status: "active" }
];

const mockNotices = [
  { id: 1, title: "Annual Sports Day", content: "Sports day will be held on March 15th", date: "2024-03-01", priority: "high" },
  { id: 2, title: "Parent-Teacher Meeting", content: "PTM scheduled for March 20th", date: "2024-03-05", priority: "normal" },
  { id: 3, title: "Mid-term Exams", content: "Mid-term exams start from April 1st", date: "2024-03-10", priority: "urgent" }
];

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUser);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [students, setStudents] = useState(mockStudents);
  const [teachers, setTeachers] = useState(mockTeachers);
  const [notices, setNotices] = useState(mockNotices);
  const [selectedClass, setSelectedClass] = useState('Grade 10-A');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Sidebar navigation items based on user role
  const getNavigationItems = () => {
    const commonItems = [
      { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
      { id: 'notices', label: 'Notices', icon: Bell }
    ];

    const roleSpecificItems = {
      admin: [
        { id: 'students', label: 'Students', icon: Users },
        { id: 'teachers', label: 'Teachers', icon: GraduationCap },
        { id: 'attendance', label: 'Attendance', icon: UserCheck },
        { id: 'exams', label: 'Exams & Grades', icon: BookOpen },
        { id: 'fees', label: 'Fee Management', icon: IndianRupee },
        { id: 'reports', label: 'Reports', icon: FileText },
        { id: 'settings', label: 'Settings', icon: Settings }
      ],
      teacher: [
        { id: 'my-classes', label: 'My Classes', icon: Users },
        { id: 'attendance', label: 'Mark Attendance', icon: UserCheck },
        { id: 'grades', label: 'Enter Grades', icon: BookOpen },
        { id: 'assignments', label: 'Assignments', icon: FileText },
        { id: 'messages', label: 'Messages', icon: MessageSquare }
      ],
      student: [
        { id: 'timetable', label: 'Timetable', icon: Calendar },
        { id: 'grades', label: 'My Grades', icon: BookOpen },
        { id: 'assignments', label: 'Assignments', icon: FileText },
        { id: 'fees', label: 'Fee Status', icon: IndianRupee }
      ],
      parent: [
        { id: 'child-progress', label: 'Child Progress', icon: BarChart3 },
        { id: 'attendance', label: 'Attendance', icon: UserCheck },
        { id: 'fees', label: 'Fee Payments', icon: IndianRupee },
        { id: 'messages', label: 'Messages', icon: MessageSquare }
      ]
    };

    return [...commonItems, ...(roleSpecificItems[currentUser.role] || [])];
  };

  const handleLogin = (user) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setActiveTab('dashboard');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard notices={notices} setActiveTab={setActiveTab} />;
      case 'students': return <StudentsManagement students={students} setStudents={setStudents} />;
      case 'teachers': return <TeachersManagement teachers={teachers} setTeachers={setTeachers} />;
      case 'attendance': return <AttendanceManagement students={students} selectedClass={selectedClass} selectedDate={selectedDate} setSelectedClass={setSelectedClass} setSelectedDate={setSelectedDate} />;
      case 'exams': return <ExamsAndGrades students={students} />;
      case 'fees': return <FeeManagement students={students}/>;
      case 'notices': return <NoticesManagement notices={notices} setNotices={setNotices} />;
      case 'reports': return <Reports />;
      default: return <Dashboard notices={notices} setActiveTab={setActiveTab} />;
    }
  };

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />;
  }

  const navigationItems = getNavigationItems();

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className={`bg-white shadow-lg transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-16'} flex flex-col`}>
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-gray-900">SchoolMS</span>
              </div>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    activeTab === item.id
                      ? 'bg-blue-100 text-blue-500'
                      : 'text-gray-00 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {sidebarOpen && <span>{item.label}</span>}
                </button>
              );
            })}
          </div>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200">
          <div className={`flex items-center ${sidebarOpen ? 'space-x-3' : 'justify-center'}`}>
            <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-medium">
                {currentUser.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            {sidebarOpen && (
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{currentUser.name}</p>
                <p className="text-xs text-gray-500 capitalize">{currentUser.role}</p>
              </div>
            )}
            <button
              onClick={handleLogout}
              className="p-2 text-gray-500 hover:text-red-600 transition-colors"
              title="Logout"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full lg:w-auto">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h2 className="text-xl font-semibold text-gray-900 capitalize">
                {activeTab.replace('-', ' ')}
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-500 hover:text-gray-700 transition-colors">
                <Bell className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
                <Settings className="h-6 w-6" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6 overflow-y-auto w-full">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;