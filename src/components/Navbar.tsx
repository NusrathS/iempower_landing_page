import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import '../App.css';

// Define the submenu items for "Modules"
const modulesSubmenu = [
  { id: 'submenu11', label: 'Submenu 11' },
  { id: 'submenu12', label: 'Submenu 12' },
  { id: 'submenu13', label: 'Submenu 13' }
];

// Define the submenu items for "Experience"
const experienceSubmenu = [
  { id: 'submenu21', label: 'Submenu 21' },
  { id: 'submenu22', label: 'Submenu 22' },
  { id: 'submenu23', label: 'Submenu 23' }
];

const Navbar: React.FC = () => {
  // State hooks to manage dropdown visibility for 'Modules' and 'Experience'
  const [dd_modules_selectedvalue, setModulesDropdownOpen] = useState(false);
  const [dd_Experience_selectedvalue, setExperienceDropdownOpen] = useState(false);
  
  // Event handler for 'Modules' dropdown toggle
  const toggleModulesDropdown = () => {
    setModulesDropdownOpen(!dd_modules_selectedvalue);  // Toggle state
  };

  // Event handler for 'Experience' dropdown toggle
  const toggleExperienceDropdown = () => {
    setExperienceDropdownOpen(!dd_Experience_selectedvalue);  // Toggle state
  };

  // Event handler for 'Modules' dropdown selection
  const handleModulesSelection = (submenu: string) => {
    console.log(`${submenu} selected from Modules`);
    navigateTo(`/modules/${submenu}`);
  };

  // Event handler for 'Experience' dropdown selection
  const handleExperienceSelection = (submenu: string) => {
    console.log(`${submenu} selected from Experience`);
    navigateTo(`/experience/${submenu}`);
  };

  // Function for navigating to a new page
  const navigateTo = (url: string) => {
    window.location.href = url;
  };

  // Render the navbar
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/Dlogo.png" alt="iEmpower Logo" />
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item" onClick={toggleModulesDropdown}>
          Modules
          {dd_modules_selectedvalue && (
            <ul className="dropdown-menu">
              {modulesSubmenu.map((item) => (
                <li key={item.id} onClick={() => handleModulesSelection(item.id)}>
                  {item.label}
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className="navbar-item" onClick={toggleExperienceDropdown}>
          Experience
          {dd_Experience_selectedvalue && (
            <ul className="dropdown-menu">
              {experienceSubmenu.map((item) => (
                <li key={item.id} onClick={() => handleExperienceSelection(item.id)}>
                  {item.label}
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className="navbar-item" onClick={() => navigateTo('/pricing')}>Pricing</li>
        <li className="navbar-item" onClick={() => navigateTo('/blogs')}>Blogs</li>
        <li className="navbar-item" onClick={() => navigateTo('/contact')}>Contact Us</li>
      </ul>
      <button className="sign-in-btn" onClick={() => navigateTo('/login')}>Sign In</button>
    </nav>
  );
};

export default Navbar;
