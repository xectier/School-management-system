import React, { useState } from 'react';

const AttendanceManagement = ({ students, selectedClass, selectedDate, setSelectedClass, setSelectedDate }) => {
  const [classStudents, setClassStudents] = useState([
    { id: 1, name: "Rupam Ray Mandal", status: "present" },
    { id: 2, name: "Avijit Kayal", status: "absent" },
    { id: 3, name: "Arpita Pal", status: "present" },
    { id: 4, name: "Aditi Pal", status: "late" }
  ]);
  
  const handleAttendanceChange = (studentId, status) => {
    setClassStudents(prev => 
      prev.map(student => 
        student.id === studentId ? { ...student, status } : student
      )
    );
  };

  const saveAttendance = () => {
    // API call to save attendance
    console.log('Saving attendance for', selectedClass, 'on', selectedDate, classStudents);
    alert('Attendance saved successfully!');
  };

  return (
    <div className="space-y-6 space-x-250">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Attendance Management</h1>
      </div>

      {/* Class and Date Selection */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Select Class</label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
            >
              <option value="Grade 8-A">Grade 8-A</option>
              <option value="Grade 9-A">Grade 9-A</option>
              <option value="Grade 10-A">Grade 10-A</option>
              <option value="Grade 11-A">Grade 11-A</option>
              <option value="Grade 12-A">Grade 12-A</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900">
              <option value="mathematics">Mathematics</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="english">English</option>
            </select>
          </div>
        </div>
      </div>

      {/* Attendance Marking */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Mark Attendance - {selectedClass}</h3>
          <div className="space-y-3">
            {classStudents.map((student) => (
              <div key={student.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-medium">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <span className="font-medium text-gray-900">{student.name}</span>
                </div>
                <div className="flex space-x-2">
                  {['present', 'absent', 'late', 'excused'].map((status) => (
                    <button
                      key={status}
                      onClick={() => handleAttendanceChange(student.id, status)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                        student.status === status
                          ? status === 'present' ? 'bg-green-100 text-green-400' :
                            status === 'absent' ? 'bg-red-100 text-red-400' :
                            status === 'late' ? 'bg-yellow-100 text-yellow-400' :
                            'bg-blue-100 text-blue-400'
                          : 'bg-gray-200 text-gray-300 hover:bg-gray-300'
                      }`}
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <button
              onClick={saveAttendance}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Save Attendance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceManagement;