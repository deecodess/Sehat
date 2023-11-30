import React from 'react';
import './Dashboard.css'; // Import your CSS file
import image from './../assets/pdf_b.png';

const Dashboard = () => {
  const pdfs = [
    {
      name: 'Report 1',
      src: '/path-to-your-file1.pdf',
      date: '2023-10-20',
      icon: image,
    },
    {
      name: 'Report 2',
      src: '/path-to-your-file2.pdf',
      date: '2023-10-20',
      icon: image,
    },
    {
      name: 'Report 3',
      src: '/path-to-your-file3.pdf',
      date: '2023-10-20',
      icon: image,
    },
    {
      name: 'Report 4',
      src: '/path-to-your-file3.pdf',
      date: '2023-10-20',
      icon: image,
    },
    {
      name: 'Report 5',
      src: '/path-to-your-file3.pdf',
      date: '2023-10-20',
      icon: image,
    },
    {
      name: 'Report 6',
      src: '/path-to-your-file3.pdf',
      date: '2023-10-20',
      icon: image,
    },
    {
      name: 'Report 7',
      src: '/path-to-your-file3.pdf',
      date: '2023-10-20',
      icon: image,
    },
    {
      name: 'Report 8',
      src: '/path-to-your-file3.pdf',
      date: '2023-10-20',
      icon: image,
    },
    // ... Other PDF items
  ];

  const handleDownload = reportSrc => {
    // Implement your download logic here
    console.log (`Downloading ${reportSrc}`);
    // You can use libraries or native JavaScript to handle downloads
  };

  return (
    <div className="dashboard-container">
      <h1>Sehat Dashboard</h1>
      <ul className="report-list">
        {pdfs.map ((pdf, index) => (
          <li key={index} className="report-item">
            <img src={pdf.icon} alt={pdf.name} className="report-icon" />
            <span className="report-name">{pdf.name}</span>
            <span className="report-date">{pdf.date}</span>
            <button
              className="download-button"
              onClick={() => handleDownload (pdf.src)}
            >
              Download
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
