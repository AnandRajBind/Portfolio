import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Achievements = () => {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  // Certificate data with categories
  const certificates = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      organization: 'Physics Wallah',
      date: 'November 2023',
      category: 'development',
      image: '/MERN STACK.jpg' // Example image path
    },
    {
      id: 2,
      title: 'Web Development Fundamentals',
      organization: 'IBM Skills Build',
      date: 'July 2025',
      category: 'development',
      image: '/IBM.jpg' // Example image path
    },
    {
      id: 3,
      title: 'Advance Java',
      organization: 'NS3EDU',
      date: 'Apriil 2025',
      category: 'development',
      image: '/advance java.jpg' // Example image path
    },
    {
      id: 4,
      title: 'Voational Training Core Java OOPS and DSA',
      organization: 'Kreativan Technologies',
      date: 'September 2024',
      category: 'development',
      image: '/core java.jpg' // Example image path
    },
    {
      id: 5,
      title: 'How to Get Internship & 75% Schlorships on Three level Microsoft certification Programm',
      organization: 'Microsoft',
      date: 'March 2022',
      category: 'development',
      image: '/microsoft.jpg'
    },
    {
      id: 6,
      title: 'All India Online Aptitude Test',
      organization: 'NCAT',
      date: 'May 2025',
      category: 'academic',
      image: '/aptitude.jpg'
    },
    {
      id: 7,
      title: 'Participation in International Non-Violence Day and University Foundation Day Ceremony',
      organization: 'Veer Bahadur Singh Purvanchal University, Jaunpur',
      date: 'October 2023',
      category: 'cultural',
      image: '/ceremony.jpg'
    },
    {
      id: 8,
      title: 'Certificate of Appreciation',
      organization: 'St. Andrews Institute of Technology & Management',
      date: 'March 2025',
      category: 'academic',
      image: '/coding context.jpg'
    },
    {
      id: 9,
      title: 'Certificate of Appreciation',
      organization: 'St. Andrews Institute of Technology & Management',
      date: 'April 2025',
      category: 'academic',
      image: '/innoviz.jpg'
    },
    {
      id: 10,
      title: 'Merit Performance Award',
      organization: 'Veer Bahadur Singh Purvanchal University',
      date: 'April 2022',
      category: 'community',
      image: '/merit.jpg'
    },
    {
      id: 11,
      title: 'Bapu Bazaar Samman Patra',
      organization: 'Veer Bahadur Singh Purvanchal University',
      date: 'March 2023',
      category: 'community',
      image: '/bapu bazar.jpg'
    },
    {
      id: 12,
      title: 'Java Programming',
      organization: 'Great Learning',
      date: 'December 2024',
      category: 'development',
      image: '/java programmin.jpg'
    }
  ];

  // Filter certificates based on selected category
  const filteredCertificates = filter === 'all'
    ? certificates
    : certificates.filter(cert => cert.category === filter);

  // Limit displayed certificates unless showAll is true
  const displayedCertificates = showAll
    ? filteredCertificates
    : filteredCertificates.slice(0, 4);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div name='achievements' className='w-full section-min-height bg-primary text-lightText py-16 md:py-24'>
      <div className='max-w-[1200px] mx-auto px-4'>
        {/* Header with star icon */}
        <div className='flex flex-col items-center mb-8'>
          <FaStar className='text-amber-400 text-3xl mb-4' />
          <h2 className='text-center text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent'>
            Achievements
          </h2>
          <p className='text-center text-gray-400 mt-4 max-w-2xl'>
            A showcase of certifications and recognition earned through continuous learning
          </p>
        </div>

        {/* Filter buttons */}
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full transition-colors ${filter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-tertiary hover:bg-blue-600/30'
              }`}
          >
            All Certificates
          </button>
          <button
            onClick={() => setFilter('development')}
            className={`px-6 py-2 rounded-full transition-colors ${filter === 'development'
                ? 'bg-blue-600 text-white'
                : 'bg-tertiary hover:bg-blue-600/30'
              }`}
          >
            Development
          </button>
          <button
            onClick={() => setFilter('academic')}
            className={`px-6 py-2 rounded-full transition-colors ${filter === 'academic'
                ? 'bg-blue-600 text-white'
                : 'bg-tertiary hover:bg-blue-600/30'
              }`}
          >
            Academic
          </button>
          <button
            onClick={() => setFilter('competition')}
            className={`px-6 py-2 rounded-full transition-colors ${filter === 'competition'
                ? 'bg-blue-600 text-white'
                : 'bg-tertiary hover:bg-blue-600/30'
              }`}
          >
            Competition
          </button>
          <button
            onClick={() => setFilter('community')}
            className={`px-6 py-2 rounded-full transition-colors ${filter === 'community'
                ? 'bg-blue-600 text-white'
                : 'bg-tertiary hover:bg-blue-600/30'
              }`}
          >
            Community
          </button>
        </div>

        {/* Certificates grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {displayedCertificates.map((cert) => (
            <div
              key={cert.id}
              className='bg-tertiary rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] border border-gray-800'
            >
              <div className='h-48 overflow-hidden relative'>
                <img
                  src={cert.image}
                  alt={cert.title}
                  className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end'>
                  <div className='p-4 w-full'>
                    <h3 className='text-xl font-bold text-white'>{cert.title}</h3>
                    <p className='text-sm text-gray-300'>{cert.organization} • {cert.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show/Hide certificates button */}
        {filteredCertificates.length > 4 && (
          <div className='mt-12 flex justify-center'>
            <button
              onClick={toggleShowAll}
              className='flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full transition-colors'
            >
              {showAll ? 'Show Less' : 'View All Certificates'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transition-transform ${showAll ? 'rotate-180' : ''}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Achievements;
