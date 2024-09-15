// eslint-disable-next-line no-unused-vars
import React from 'react';

const UserProfile = () => {
  return (
    <div className="p-4 sm:p-8 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <div className="flex flex-col items-center">
        {/* Profile Image */}
        <img
          className="w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full object-cover"
          src="profile-image-url.jpg"  // Replace with actual image URL
          alt="User Profile"
        />
        {/* User Info */}
        <h1 className="mt-4 text-lg sm:text-xl md:text-2xl font-bold text-gray-800">John Doe</h1>
        <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600 text-center">
          Full Stack Developer passionate about building impactful digital solutions.
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
