import React, { useState, useEffect } from 'react';
import { Button, Pagination, FormControl, InputGroup, Dropdown, DropdownButton, Badge, Spinner } from 'react-bootstrap'; // Import needed components

const Circular = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('desc');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isCardView, setIsCardView] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);  // Loading state for async data fetching
  const [theme, setTheme] = useState('light'); // For dark/light theme toggle
  const [sortedCirculars, setSortedCirculars] = useState([]);

  const circulars = [
    { date: '2024-12-01', title: 'Circular 1', description: 'Important update about upcoming events.', category: 'events' },
    { date: '2024-11-15', title: 'Circular 2', description: 'Announcement regarding new policies.', category: 'announcements' },
    { date: '2024-11-10', title: 'Circular 3', description: 'Details about the ongoing competitions.', category: 'events' },
    { date: '2024-10-25', title: 'Circular 4', description: 'New deadline for event registration.', category: 'deadlines' },
    { date: '2024-10-20', title: 'Circular 5', description: 'Important policy update regarding safety.', category: 'announcements' },
  ];

  const itemsPerPage = 3;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCirculars = circulars.slice(indexOfFirstItem, indexOfLastItem);

  const filteredCirculars = currentCirculars.filter(
    circular => 
      (circular.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      circular.description.toLowerCase().includes(searchTerm.toLowerCase())) && 
      (selectedCategory ? circular.category === selectedCategory : true)
  );

  // Sorting Functionality
  const sortCirculars = (order) => {
    const sorted = [...circulars].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return order === 'asc' ? dateA - dateB : dateB - dateA;
    });
    setSortedCirculars(sorted);
    setSortOrder(order);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [currentPage]);

  return (
    <div className={`container mt-5 ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
      <h1 className="text-center mb-4">
        Latest Circulars{' '}
        {circulars.filter(circular => new Date(circular.date) > new Date('2024-12-01')).length > 0 && (
          <Badge bg="danger">
            {circulars.filter(circular => new Date(circular.date) > new Date('2024-12-01')).length} New
          </Badge>
        )}
      </h1>

      {/* Search Input with Debouncing */}
      <InputGroup className="mb-4">
        <FormControl 
          type="text" 
          placeholder="Search Circulars" 
          value={searchTerm} 
          onChange={handleSearchChange} 
        />
      </InputGroup>

      {/* Filter Dropdown */}
      <DropdownButton id="category-dropdown" title="Select Category" className="mb-4">
        <Dropdown.Item onClick={() => handleCategoryChange('')}>All Categories</Dropdown.Item>
        <Dropdown.Item onClick={() => handleCategoryChange('events')}>Events</Dropdown.Item>
        <Dropdown.Item onClick={() => handleCategoryChange('deadlines')}>Deadlines</Dropdown.Item>
        <Dropdown.Item onClick={() => handleCategoryChange('announcements')}>Announcements</Dropdown.Item>
      </DropdownButton>

      {/* Sort Dropdown */}
      <DropdownButton id="sort-dropdown" title={`Sort By Date: ${sortOrder.toUpperCase()}`} className="mb-4">
        <Dropdown.Item onClick={() => sortCirculars('asc')}>Ascending</Dropdown.Item>
        <Dropdown.Item onClick={() => sortCirculars('desc')}>Descending</Dropdown.Item>
      </DropdownButton>

      {/* Toggle View Button */}
      <Button onClick={() => setIsCardView(!isCardView)} variant="outline-primary" className="mb-4 hover-effect">
        Toggle View
      </Button>

      {/* Theme Toggle */}
      <Button onClick={toggleTheme} variant="outline-secondary" className="mb-4 hover-effect">
        Toggle Theme
      </Button>

      {/* Circular View */}
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : isCardView ? (
        <div className="row">
          {filteredCirculars.map((circular, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-3 hover-card">
                <div className="card-body">
                  <h5 className="card-title">{circular.title}</h5>
                  <p className="card-text">{circular.description}</p>
                  <p className="text-muted">{circular.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {filteredCirculars.map((circular, index) => (
              <tr key={index} className="hover-row">
                <td>{circular.date}</td>
                <td>{circular.title}</td>
                <td>{circular.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Pagination */}
      <Pagination>
        <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
        {[...Array(Math.ceil(circulars.length / itemsPerPage))].map((_, index) => (
          <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(circulars.length / itemsPerPage)} />
      </Pagination>
    </div>
  );
};

export default Circular;
