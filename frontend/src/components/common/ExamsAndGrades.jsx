import React, { useState } from 'react';
import { Calendar, BookOpen, X } from 'lucide-react';

const ExamsAndGrades = ({ students }) => {
  const [examData, setExamData] = useState([
    { id: 1, name: "Mid-term Exam", class: "Grade 10-A", subject: "Mathematics", date: "2024-04-01", status: "upcoming" },
    { id: 2, name: "Unit Test 2", class: "Grade 9-B", subject: "Physics", date: "2024-03-25", status: "completed" },
    { id: 3, name: "Final Exam", class: "Grade 11-A", subject: "Chemistry", date: "2024-05-15", status: "scheduled" }
  ]);

  const [showGradeEntry, setShowGradeEntry] = useState(false);
  const [selectedExam, setSelectedExam] = useState(null);

  return (
    <div className="space-y-6 space-x-250">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Exams & Grades</h1>
        <div className="flex space-x-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span>Schedule Exam</span>
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
            <BookOpen className="h-5 w-5" />
            <span>Enter Grades</span>
          </button>
        </div>
      </div>

      {/* Exam Schedule */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Exam Schedule</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Exam</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Class</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {examData.map((exam) => (
                  <tr key={exam.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4 text-sm font-medium text-gray-900">{exam.name}</td>
                    <td className="px-4 py-4 text-sm text-gray-900">{exam.class}</td>
                    <td className="px-4 py-4 text-sm text-gray-900">{exam.subject}</td>
                    <td className="px-4 py-4 text-sm text-gray-900">{exam.date}</td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        exam.status === 'completed' ? 'bg-green-100 text-green-800' :
                        exam.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {exam.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm font-medium">
                      <button className="text-blue-400 hover:text-blue-600 mr-3">Edit</button>
                      {exam.status === 'completed' && (
                        <button 
                          onClick={() => {setSelectedExam(exam); setShowGradeEntry(true);}}
                          className="text-green-400 hover:text-green-600"
                        >
                          Enter Grades
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Grade Entry Modal */}
      {showGradeEntry && selectedExam && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Enter Grades - {selectedExam.name}</h3>
              <button onClick={() => setShowGradeEntry(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">{selectedExam.class} - {selectedExam.subject}</p>
                <p className="text-sm text-gray-600">Exam Date: {selectedExam.date}</p>
              </div>
              <div className="space-y-3">
                {students.filter(s => s.class === selectedExam.class).map((student) => (
                  <div key={student.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">{student.name}</span>
                    <div className="flex space-x-3">
                      <input
                        type="number"
                        placeholder="Marks"
                        min="0"
                        max="100"
                        className="w-20 px-2 py-1 border border-gray-300 rounded text-center"
                      />
                      <span className="text-gray-500">/ 100</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex space-x-3">
                <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Save Grades
                </button>
                <button
                  onClick={() => setShowGradeEntry(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamsAndGrades;