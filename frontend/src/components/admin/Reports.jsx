import React, { useState } from 'react';
import { FileText, UserCheck, BookOpen, IndianRupee } from 'lucide-react';

const Reports = () => {
  const [reportType, setReportType] = useState('attendance');
  const [reportParams, setReportParams] = useState({
    class: '',
    startDate: '',
    endDate: '',
    format: 'pdf'
  });

  const generateReport = () => {
    console.log('Generating report:', reportType, reportParams);
    alert(`Generating ${reportType} report...`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Generate Report</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
              <select
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
              >
                <option value="attendance">Attendance Report</option>
                <option value="grades">Grade Report</option>
                <option value="fees">Fee Collection Report</option>
                <option value="student-progress">Student Progress Report</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
              <select
                value={reportParams.class}
                onChange={(e) => setReportParams({...reportParams, class: e.target.value})}
                className="w-full px-3 py-2 border border-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
              >
                <option value="">All Classes</option>
                <option value="Grade 8-A">Grade 8-A</option>
                <option value="Grade 9-A">Grade 9-A</option>
                <option value="Grade 10-A">Grade 10-A</option>
                <option value="Grade 11-A">Grade 11-A</option>
                <option value="Grade 12-A">Grade 12-A</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
              <input
                type="date"
                value={reportParams.startDate}
                onChange={(e) => setReportParams({...reportParams, startDate: e.target.value})}
                className="w-full px-3 py-2 border border-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
              <input
                type="date"
                value={reportParams.endDate}
                onChange={(e) => setReportParams({...reportParams, endDate: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={generateReport}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <FileText className="h-5 w-5" />
            <span>Generate Report</span>
          </button>
        </div>
      </div>

      {/* Sample Reports Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <UserCheck className="h-8 w-8 text-blue-600" />
            <h3 className="text-lg font-semibold">Attendance Report</h3>
          </div>
          <p className="text-gray-600 mb-4">View attendance statistics by class, date range, and individual students.</p>
          <button className="w-full bg-blue-50 text-blue-400 py-2 rounded-lg hover:bg-blue-100 transition-colors">
            View Sample
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <BookOpen className="h-8 w-8 text-green-600" />
            <h3 className="text-lg font-semibold">Grade Report</h3>
          </div>
          <p className="text-gray-600 mb-4">Generate progress cards and grade analysis for students and classes.</p>
          <button className="w-full bg-green-50 text-green-400 py-2 rounded-lg hover:bg-green-100 transition-colors">
            View Sample
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center space-x- mb-4">
            <IndianRupee className="h-8 w-8 text-purple-600" />
            <h3 className="text-lg font-semibold">Fee Collection</h3>
          </div>
          <p className="text-gray-600 mb-9.5">Track fee payments, pending amounts, and collection statistics.</p>
          <button className="w-full bg-purple-50 text-purple-400 py-2 rounded-lg hover:bg-purple-100 transition-colors">
            View Sample
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;