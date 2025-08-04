import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaEye, FaExternalLinkAlt, FaStar } from 'react-icons/fa';

const Achievements = () => {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Certificate data with categories
  const certificates = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      organization: 'Physics Wallah',
      date: 'November 2023',
      category: 'development',
      image: '/MERN STACK.jpg', // Example image path
      description: 'Comprehensive full-stack web development certification covering React, Node.js, and modern web technologies.'
    },
    {
      id: 2,
      title: 'Web Development Fundamentals',
      organization: 'IBM Skills Build',
      date: 'July 2025',
      category: 'development',
      image: '/IBM.jpg', // Example image path
      description: 'Advanced web development certification focusing on modern development practices and technologies.'
    },
    {
      id: 3,
      title: 'Merit Performance Award',
      organization: 'Veer Bahadur Singh Purvanchal University',
      date: 'April 2022',
      category: 'community',
      image: '/merit.jpg',
      description: 'Recognition for outstanding academic performance and contribution to university activities.'
    },
    {
      id: 4,
      title: 'All India Online Aptitude Test',
      organization: 'NCAT',
      date: 'May 2025',
      category: 'competition',
      image: '/aptitude.jpg',
      description: 'National level aptitude test certification demonstrating analytical and problem-solving skills.'
    },
    {
      id: 5,
      title: 'Advance Java',
      organization: 'NS3EDU',
      date: 'April 2025',
      category: 'development',
      image: '/advance java.jpg', // Example image path
      description: 'Advanced Java programming certification covering enterprise-level development concepts.'
    },
    {
      id: 6,
      title: 'Vocational Training Core Java OOPS and DSA',
      organization: 'Kreativan Technologies',
      date: 'September 2024',
      category: 'development',
      image: '/core java.jpg', // Example image path
      description: 'Java programming certification covering core concepts and object-oriented programming.'
    },
    // {
    //   id: 7,
    //   title: 'How to Get Internship & 75% Schlorships on Three level Microsoft certification Programm',
    //   organization: 'Microsoft',
    //   date: 'March 2022',
    //   category: 'development',
    //   image: '/microsoft.jpg'
    // },
    
    // {
    //   id: 8,
    //   title: 'Participation in International Non-Violence Day and University Foundation Day Ceremony',
    //   organization: 'Veer Bahadur Singh Purvanchal University, Jaunpur',
    //   date: 'October 2023',
    //   category: 'community',
    //   image: '/ceremony.jpg'
    // },
    {
      id: 9,
      title: 'Certificate of Appreciation',
      organization: 'St. Andrews Institute of Technology & Management',
      date: 'March 2025',
      category: 'competition',
      image: '/coding context.jpg',
      description: 'National level aptitude test certification demonstrating analytical and problem-solving skills.'
    },
    {
      id: 10,
      title: 'Certificate of Appreciation',
      organization: 'St. Andrews Institute of Technology & Management',
      date: 'April 2025',
      category: 'competition',
      image: '/innoviz.jpg',
      description: 'Merit-based performance award for academic and technical excellence.'
    },
  
    {
      id: 11,
      title: 'Bapu Bazaar Samman Patra',
      organization: 'Veer Bahadur Singh Purvanchal University',
      date: 'March 2023',
      category: 'community',
      image: '/bapu bazar.jpg',
      description: 'Certificate of appreciation for innovation and technology management excellence.'
    },
    {
      id: 12,
      title: 'Java Programming',
      organization: 'Great Learning',
      date: 'December 2024',
      category: 'development',
      image: '/java programmin.jpg',
      description: 'Java programming certification covering core concepts and object-oriented programming.'
    },
    // {
    //   id: 13,
    //   title: 'High School Marksheet',
    //   organization: 'UP Board',
    //   date: 'April 2018',
    //   category: 'academic',
    //   image: '/high school.jpg'
    // },
    // {
    //   id: 14,
    //   title: 'Intermediate Marksheet',
    //   organization: 'UP Board',
    //   date: 'June 2020',
    //   category: 'academic',
    //   image: '/intermediate.jpg'
    // },

    // {
    //   id: 15,
    //   title: 'Bachelor of Computer Applications (BCA) Final Semester Result',
    //   organization: 'Veer Bahadur Singh Purvanchal University',
    //   date: 'Sepetember 2024',
    //   category: 'academic',
    //   image: '/bca final semester.jpg'
    // },
    // {
    //   id: 16,
    //   title: 'Bachelor of Computer Applications (BCA)',
    //   organization: 'Veer Bahadur Singh Purvanchal University',
    //   date: 'Sepetember 2024',
    //   category: 'academic',
    //   image: '/BCA.jpg'
    // }
  ];

  // Filter certificates based on selected category
  const filteredCertificates = filter === 'all'
    ? certificates
    : certificates.filter(cert => cert.category === filter);

  // Limit displayed certificates unless showAll is true
  const displayedCertificates = showAll
    ? filteredCertificates
    : filteredCertificates.slice(0, 6);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const openModal = (achievement) => {
    setSelectedCertificate(achievement);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
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
          {displayedCertificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="bg-blue-500/10 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300/1e293b/64748b?text=Certificate';
                  }}
                />
                
                {/* Hover overlay with View Certificate button */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.button
                    onClick={() => openModal(cert)}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-medium transition-colors transform scale-90 group-hover:scale-100"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaEye size={16} />
                    View Certificate
                  </motion.button>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-secondary mb-2 line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-blue-400 mb-1 font-medium">{cert.organization}</p>
                <p className="text-gray-400 text-sm mb-3">{cert.date}</p>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {cert.description}
                </p>
                
                {/* View Certificate Button */}
                <motion.button
                  onClick={() => openModal(cert)}
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium w-full justify-center py-2 border border-blue-400/30 rounded-lg hover:bg-blue-500/10"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaExternalLinkAlt size={12} />
                  View Full Certificate
                </motion.button>
              </div>
            </motion.div>
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

      {/* Enhanced Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg max-w-5xl max-h-[95vh] overflow-hidden relative shadow-2xl"
              initial={{ scale: 0.5, opacity: 0, rotateY: -15 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotateY: 15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold">{selectedCertificate.title}</h3>
                  <p className="text-blue-100 mt-1">
                    {selectedCertificate.organization} • {selectedCertificate.date}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <FaTimes size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 max-h-[calc(95vh-200px)] overflow-auto">
                <div className="mb-4">
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="w-full h-auto rounded-lg shadow-lg border"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/800x600/1e293b/64748b?text=Certificate+Not+Found';
                    }}
                  />
                </div>
                
                <div className="text-gray-700 dark:text-gray-300">
                  <h4 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
                    Certificate Details
                  </h4>
                  <div className="space-y-2">
                    <p><strong>Title:</strong> {selectedCertificate.title}</p>
                    <p><strong>Organization:</strong> {selectedCertificate.organization}</p>
                    <p><strong>Date:</strong> {selectedCertificate.date}</p>
                    <p><strong>Category:</strong> {selectedCertificate.category}</p>
                  </div>
                  <div className="mt-4">
                    <p><strong>Description:</strong></p>
                    <p className="mt-2">{selectedCertificate.description}</p>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="bg-gray-50 dark:bg-gray-700 p-6 flex justify-end gap-3">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => window.open(selectedCertificate.image, '_blank')}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2"
                >
                  <FaExternalLinkAlt size={16} />
                  Open in New Tab
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Achievements;
