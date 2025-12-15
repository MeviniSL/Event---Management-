import React, { useState, useRef } from 'react';
import { FaCamera, FaEdit, FaCheck, FaTimes, FaUser, FaImage, FaBuilding } from 'react-icons/fa';

const ProfileDetails = () => {
  // State for user data - all fields are editable
  const [userData, setUserData] = useState({
    societyName: '',
    orgName: '',
    description: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  // State for editing mode
  const [isEditingSociety, setIsEditingSociety] = useState(false);
  const [isEditingOrg, setIsEditingOrg] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  
  // Temporary state for editing
  const [tempSociety, setTempSociety] = useState('');
  const [tempOrg, setTempOrg] = useState('');
  const [tempDescription, setTempDescription] = useState('');
  
  // State for profile and cover images
  const [profilePicture, setProfilePicture] = useState(null);
  const [coverPicture, setCoverPicture] = useState(null);
  
  // Refs for file inputs
  const profileInputRef = useRef(null);
  const coverInputRef = useRef(null);
  
  // Handle input changes for password fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle profile picture change
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfilePicture(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  // Handle cover picture change
  const handleCoverPictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCoverPicture(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  // Trigger profile picture input click
  const triggerProfileInput = () => {
    profileInputRef.current.click();
  };
  
  // Trigger cover picture input click
  const triggerCoverInput = () => {
    coverInputRef.current.click();
  };
  
  // Handle society name edit
  const handleEditSociety = () => {
    setIsEditingSociety(true);
    setTempSociety(userData.societyName);
  };
  
  // Handle society name save
  const handleSaveSociety = () => {
    setUserData(prev => ({
      ...prev,
      societyName: tempSociety
    }));
    setIsEditingSociety(false);
  };
  
  // Handle society name cancel
  const handleCancelSociety = () => {
    setTempSociety(userData.societyName);
    setIsEditingSociety(false);
  };
  
  // Handle org name edit
  const handleEditOrg = () => {
    setIsEditingOrg(true);
    setTempOrg(userData.orgName);
  };
  
  // Handle org name save
  const handleSaveOrg = () => {
    setUserData(prev => ({
      ...prev,
      orgName: tempOrg
    }));
    setIsEditingOrg(false);
  };
  
  // Handle org name cancel
  const handleCancelOrg = () => {
    setTempOrg(userData.orgName);
    setIsEditingOrg(false);
  };
  
  // Handle description edit
  const handleEditDescription = () => {
    setIsEditingDescription(true);
    setTempDescription(userData.description);
  };
  
  // Handle description save
  const handleSaveDescription = () => {
    setUserData(prev => ({
      ...prev,
      description: tempDescription
    }));
    setIsEditingDescription(false);
  };
  
  // Handle description cancel
  const handleCancelDescription = () => {
    setTempDescription(userData.description);
    setIsEditingDescription(false);
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!userData.societyName || !userData.orgName) {
      alert("Please fill in Society Name and Organization Name!");
      return;
    }
    
    // Validate passwords
    if (userData.newPassword && userData.newPassword !== userData.confirmPassword) {
      alert("New passwords don't match!");
      return;
    }
    
    // In a real app, you would send this data to your backend
    console.log('Profile data to save:', userData);
    alert('Profile updated successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Cover Picture Section */}
        <div className="relative h-48 bg-gray-200">
          {coverPicture ? (
            <img 
              src={coverPicture} 
              alt="Cover" 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
              <FaImage className="text-gray-400 text-4xl" />
            </div>
          )}
          
          <button 
            onClick={triggerCoverInput}
            className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 font-medium py-2 px-4 rounded-lg shadow transition-all duration-200 flex items-center gap-2"
          >
            <FaCamera className="h-4 w-4" />
            {coverPicture ? 'Change Cover' : 'Add Cover'}
          </button>
          <input 
            type="file" 
            ref={coverInputRef}
            onChange={handleCoverPictureChange}
            accept="image/*"
            className="hidden"
          />
          
          {/* Profile Picture Overlay */}
          <div className="absolute -bottom-16 left-8">
            <div className="relative">
              {profilePicture ? (
                <img 
                  src={profilePicture} 
                  alt="Profile" 
                  className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg"
                />
              ) : (
                <div className="w-32 h-32 rounded-full border-4 border-white bg-gradient-to-br from-blue-200 to-purple-200 shadow-lg flex items-center justify-center">
                  <FaUser className="text-gray-500 text-3xl" />
                </div>
              )}
              <button 
                onClick={triggerProfileInput}
                className="absolute bottom-2 right-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 shadow-lg transition-all duration-200"
              >
                <FaCamera className="h-4 w-4" />
              </button>
              <input 
                type="file" 
                ref={profileInputRef}
                onChange={handleProfilePictureChange}
                accept="image/*"
                className="hidden"
              />
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="pt-20 pb-8 px-8">
          {/* Society and Org Name */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Society Name */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Society Name
                  </label>
                  {!isEditingSociety ? (
                    <button 
                      onClick={handleEditSociety}
                      className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                    >
                      <FaEdit className="h-3 w-3" />
                      Edit
                    </button>
                  ) : null}
                </div>
                
                {isEditingSociety ? (
                  <div>
                    <input 
                      type="text"
                      value={tempSociety}
                      onChange={(e) => setTempSociety(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="Enter society name"
                    />
                    <div className="flex justify-end gap-2 mt-2">
                      <button 
                        onClick={handleCancelSociety}
                        className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded transition-colors duration-200 flex items-center gap-1"
                      >
                        <FaTimes className="h-3 w-3" />
                        Cancel
                      </button>
                      <button 
                        onClick={handleSaveSociety}
                        className="px-3 py-1 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors duration-200 flex items-center gap-1"
                      >
                        <FaCheck className="h-3 w-3" />
                        Save
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-lg font-semibold text-gray-900 bg-gray-50 p-3 rounded-lg border border-gray-200 min-h-[52px] flex items-center">
                    {userData.societyName || (
                      <span className="text-gray-400 flex items-center gap-2">
                        <FaBuilding className="h-4 w-4" />
                        No society name set
                      </span>
                    )}
                  </div>
                )}
              </div>
              
              {/* Organization Name */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Organization Name
                  </label>
                  {!isEditingOrg ? (
                    <button 
                      onClick={handleEditOrg}
                      className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                    >
                      <FaEdit className="h-3 w-3" />
                      Edit
                    </button>
                  ) : null}
                </div>
                
                {isEditingOrg ? (
                  <div>
                    <input 
                      type="text"
                      value={tempOrg}
                      onChange={(e) => setTempOrg(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="Enter organization name"
                    />
                    <div className="flex justify-end gap-2 mt-2">
                      <button 
                        onClick={handleCancelOrg}
                        className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded transition-colors duration-200 flex items-center gap-1"
                      >
                        <FaTimes className="h-3 w-3" />
                        Cancel
                      </button>
                      <button 
                        onClick={handleSaveOrg}
                        className="px-3 py-1 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors duration-200 flex items-center gap-1"
                      >
                        <FaCheck className="h-3 w-3" />
                        Save
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-lg font-semibold text-gray-900 bg-gray-50 p-3 rounded-lg border border-gray-200 min-h-[52px] flex items-center">
                    {userData.orgName || (
                      <span className="text-gray-400 flex items-center gap-2">
                        <FaBuilding className="h-4 w-4" />
                        No organization name set
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Description Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              {!isEditingDescription ? (
                <button 
                  onClick={handleEditDescription}
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                >
                  <FaEdit className="h-4 w-4" />
                  Edit
                </button>
              ) : null}
            </div>
            
            {isEditingDescription ? (
              <div>
                <textarea 
                  value={tempDescription}
                  onChange={(e) => setTempDescription(e.target.value)}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="Add a description about your organization..."
                />
                <div className="flex justify-end gap-2 mt-3">
                  <button 
                    onClick={handleCancelDescription}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200 flex items-center gap-1"
                  >
                    <FaTimes className="h-4 w-4" />
                    Cancel
                  </button>
                  <button 
                    onClick={handleSaveDescription}
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 flex items-center gap-1"
                  >
                    <FaCheck className="h-4 w-4" />
                    Save
                  </button>
                </div>
              </div>
            ) : (
              <div className="px-4 py-3 border border-gray-300 rounded-lg bg-white min-h-[120px]">
                <p className="text-gray-700">
                  {userData.description || 'No description added. Click Edit to add a description.'}
                </p>
              </div>
            )}
          </div>
          
          {/* Password Change Section */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Password Change</h3>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Current Password
                </label>
                <input 
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  value={userData.currentPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="Enter current password"
                />
              </div>
              
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <input 
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={userData.newPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="Enter new password"
                />
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm New Password
                </label>
                <input 
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={userData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="Confirm new password"
                />
              </div>
            </div>
          </div>
          
          {/* Save Button */}
          <div className="mt-8 flex justify-end">
            <button 
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <FaCheck className="h-5 w-5" />
              Save All Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;