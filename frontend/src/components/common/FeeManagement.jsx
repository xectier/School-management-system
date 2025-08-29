import React, { useState } from 'react';
import { IndianRupee, X } from 'lucide-react';

const FeeManagement = () => {
  const [feeData, setFeeData] = useState([
    { id: 1, student: "Rupam Ray Mandal", class: "Grade 10-A", amount: 15000, status: "paid", dueDate: "2024-03-15" },
    { id: 2, student: "Avijit Kayal", class: "Grade 9-B", amount: 15000, status: "pending", dueDate: "2024-03-20" },
    { id: 3, student: "Arpita Pal", class: "Grade 11-A", amount: 18000, status: "overdue", dueDate: "2024-02-28" },
    { id: 4, student: "Aditi Pal", class: "Grade 8-C", amount: 12000, status: "paid", dueDate: "2024-03-10" }
  ]);

  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [selectedFee, setSelectedFee] = useState(null);

  const handlePayment = (fee) => {
    setSelectedFee(fee);
    setShowPaymentForm(true);
  };

  const processPayment = () => {
    // Update fee status
    setFeeData(prev =>
      prev.map(fee =>
        fee.id === selectedFee.id ? { ...fee, status: 'paid' } : fee
      )
    );
    setShowPaymentForm(false);
    setSelectedFee(null);
    alert('Payment processed successfully!');
  };

  return (
    <div className="space-y-6 space-x-250">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Fee Management</h1>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2">
          <IndianRupee className="h-5 w-5" />
          <span>Generate Fee Report</span>
        </button>
      </div>

      {/* Fee Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Collection</p>
              <p className="text-2xl font-bold text-green-600">₹45,000</p>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
              <IndianRupee className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending Fees</p>
              <p className="text-2xl font-bold text-yellow-600">₹15,000</p>
            </div>
            <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <IndianRupee className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Overdue Fees</p>
              <p className="text-2xl font-bold text-red-600">₹18,000</p>
            </div>
            <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center">
              <IndianRupee className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Payment Form Modal */}
      {showPaymentForm && selectedFee && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Process Payment</h3>
              <button onClick={() => setShowPaymentForm(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
                <p className="font-medium">{selectedFee.student}</p>
                <p className="text-sm text-gray-600">{selectedFee.class}</p>
                <p className="text-lg font-bold text-purple-600">₹{selectedFee.amount}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-gray-900">
                  <option value="upi">UPI Payment</option>
                  <option value="card">Credit/Debit Card</option>
                  <option value="netbanking">Net Banking</option>
                  <option value="cash">Cash</option>
                </select>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={processPayment}
                  className="flex-1 bg-purple-400 text-white py-2 rounded-lg hover:bg-purple-600 transition-colors"
                >
                  Process Payment
                </button>
                <button
                  onClick={() => setShowPaymentForm(false)}
                  className="flex-1 bg-gray-300 text-gray-400 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fee Records Table */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {feeData.map((fee) => (
                <tr key={fee.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{fee.student}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{fee.class}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">₹{fee.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{fee.dueDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      fee.status === 'paid' ? 'bg-green-100 text-green-800' :
                      fee.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {fee.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {fee.status !== 'paid' && (
                      <button
                        onClick={() => handlePayment(fee)}
                        className="text-purple-400 hover:text-purple-600 mr-3"
                      >
                        Process Payment
                      </button>
                    )}
                    <button className="text-blue-400 hover:text-blue-600">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeeManagement;