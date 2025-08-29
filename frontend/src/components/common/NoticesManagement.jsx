import React, { useState } from 'react';
import { Bell, X, FileText } from 'lucide-react';

const NoticesManagement = ({ notices, setNotices }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newNotice, setNewNotice] = useState({
    title: '', content: '', priority: 'normal', targetAudience: 'all'
  });

  const handleAddNotice = () => {
    if (newNotice.title && newNotice.content) {
      const notice = {
        id: notices.length + 1,
        title: newNotice.title,
        content: newNotice.content,
        date: new Date().toISOString().split('T')[0],
        priority: newNotice.priority
      };
      setNotices([notice, ...notices]);
      setNewNotice({ title: '', content: '', priority: 'normal', targetAudience: 'all' });
      setShowAddForm(false);
    }
  };

  return (
    <div className="space-y-8 space-x-205">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Notices & Announcements</h1>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors flex items-center space-x-2"
        >
          <Bell className="h-5 w-5" />
          <span>Add Notice</span>
        </button>
      </div>

      {/* Add Notice Form Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-lg mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Create New Notice</h3>
              <button onClick={() => setShowAddForm(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Notice Title"
                value={newNotice.title}
                onChange={(e) => setNewNotice({...newNotice, title: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 text-gray-900"
              />
              <textarea
                placeholder="Notice Content"
                value={newNotice.content}
                onChange={(e) => setNewNotice({...newNotice, content: e.target.value})}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 text-gray-900"
              />
              <div className="grid grid-cols-1 md:grid-cols-10 lg:grid-cols-8 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                  <select
                    value={newNotice.priority}
                    onChange={(e) => setNewNotice({...newNotice, priority: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 text-gray-900"
                  >
                    <option value="normal">Normal</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
                  <select
                    value={newNotice.targetAudience}
                    onChange={(e) => setNewNotice({...newNotice, targetAudience: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 text-gray-900"
                  >
                    <option value="all">All</option>
                    <option value="students">Students</option>
                    <option value="parents">Parents</option>
                    <option value="teachers">Teachers</option>
                  </select>
                </div>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={handleAddNotice}
                  className="flex-1 bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition-colors"
                >
                  Publish Notice
                </button>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notices List */}
      <div className="space-y-4">
        {notices.map((notice) => (
          <div key={notice.id} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{notice.title}</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    notice.priority === 'urgent' ? 'bg-red-100 text-red-800' :
                    notice.priority === 'high' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {notice.priority}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">{notice.content}</p>
                <p className="text-sm text-gray-500">Published on {notice.date}</p>
              </div>
              <div className="flex space-x-2">
                <button className="text-blue-400 hover:text-blue-800">
                  <FileText className="h-5 w-5" />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticesManagement;