import React, { useState } from 'react';
 
const AzureSidebar = ({ filters, onFilterChange }) => {
  const [openSections, setOpenSections] = useState({
    Products: true,
    Roles: true,
    Level: true,
    Types: true,
  });
 
  const products = ['.NET', 'Azure','Copilot','Excel','Microsoft Power Platform'];
  const roles = ['Administrator','AI Engineer','Data Analyst', 'DevOps Engineer', 'Developer','Solution Architect'];
  const levels = ['Beginner', 'Intermediate', 'Advanced'];
  const types = ['Learning Path', 'Modules'];
 
  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
 
  const clearAllFilters = () => {
    const cleared = {
      Products: [],
      Roles: [],
      Level: '',
      Types: [],
    };
    onFilterChange(cleared);
  };
 
  const handleCheckboxChange = (e, category) => {
    const { value, checked } = e.target;
    const updated = checked
      ? [...filters[category], value]
      : filters[category].filter((item) => item !== value);
 
    onFilterChange({ ...filters, [category]: updated });
  };
 
  const handleRadioChange = (e) => {
    onFilterChange({ ...filters, Level: e.target.value });
  };
 
  return (
    <div className="w-72 p-6 bg-white shadow-md font-sans text-sm space-y-6">
      {/* Filter Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">Filter</h2>
        <button onClick={clearAllFilters} className="text-blue-600 hover:underline text-sm">
          Clear All
        </button>
      </div>
      <div className="border-b border-black mb-6" />
 
      {/* Products Filter */}
      <div>
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Products</h3>
          <button onClick={() => toggleSection('Products')} className="text-blue-600 text-xl">
            {openSections.Products ? '-' : '+'}
          </button>
        </div>
        {openSections.Products && (
          <div className="mt-2 space-y-1">
            {products.map((product) => (
              <label key={product} className="flex items-center">
                <input
                  type="checkbox"
                  value={product}
                  checked={filters.Products.includes(product)}
                  onChange={(e) => handleCheckboxChange(e, 'Products')}
                  className="mr-2"
                />
                {product}
              </label>
            ))}
          </div>
        )}
      </div>
 
      {/* Roles Filter */}
      <div>
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Roles</h3>
          <button onClick={() => toggleSection('Roles')} className="text-blue-600 text-xl">
            {openSections.Roles ? '-' : '+'}
          </button>
        </div>
        {openSections.Roles && (
          <div className="mt-2 space-y-1">
            {roles.map((role) => (
              <label key={role} className="flex items-center">
                <input
                  type="checkbox"
                  value={role}
                  checked={filters.Roles.includes(role)}
                  onChange={(e) => handleCheckboxChange(e, 'Roles')}
                  className="mr-2"
                />
                {role}
              </label>
            ))}
          </div>
        )}
      </div>
 
      {/* Level Filter */}
      <div>
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Level</h3>
          <button onClick={() => toggleSection('Level')} className="text-blue-600 text-xl">
            {openSections.Level ? '-' : '+'}
          </button>
        </div>
        {openSections.Level && (
          <div className="mt-2 space-y-1">
            {levels.map((level) => (
              <label key={level} className="flex items-center">
                <input
                  type="radio"
                  name="level"
                  value={level}
                  checked={filters.Level === level}
                  onChange={handleRadioChange}
                  className="mr-2"
                />
                {level}
              </label>
            ))}
          </div>
        )}
      </div>
 
      {/* Types Filter */}
      <div>
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Types</h3>
          <button onClick={() => toggleSection('Types')} className="text-blue-600 text-xl">
            {openSections.Types ? '-' : '+'}
          </button>
        </div>
        {openSections.Types && (
          <div className="mt-2 space-y-1">
            {types.map((type) => (
              <label key={type} className="flex items-center">
                <input
                  type="checkbox"
                  value={type}
                  checked={filters.Types.includes(type)}
                  onChange={(e) => handleCheckboxChange(e, 'Types')}
                  className="mr-2"
                />
                {type}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
 
export default AzureSidebar;