import { useState } from 'react';
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true);
  const resumeUrl = "https://drive.google.com/file/d/1t1jlmSJmndlF5dbNP49923NtAy5JAwb8/view?usp=drivesdk";
  const downloadUrl = "https://drive.google.com/file/d/1t1jlmSJmndlF5dbNP49923NtAy5JAwb8/view?usp=drivesdk";
  
  return (
    <div name="resume" className="w-full section-min-height bg-primary text-lightText section-padding">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-secondary">Resume</p>
          <p className="py-4">View or download my professional resume</p>
        </div>

        <div className="flex flex-col items-center mb-6">
          <div className="flex space-x-4 mb-6">
            <a 
              href={downloadUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center bg-secondary text-primary px-4 py-2 rounded-md hover:bg-opacity-80 transition-all"
            >
              <FaDownload className="mr-2" /> Download Resume
            </a>
            <a 
              href={downloadUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center bg-tertiary text-lightText px-4 py-2 rounded-md hover:bg-opacity-80 transition-all"
            >
              <FaExternalLinkAlt className="mr-2" /> Open in New Tab
            </a>
          </div>
        </div>

        <div className="w-full bg-tertiary rounded-lg shadow-md overflow-hidden">
          {isLoading && (
            <div className="flex justify-center items-center h-[600px]">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-secondary"></div>
            </div>
          )}
          <iframe
            src={resumeUrl}
            className="w-full h-[600px] border-0"
            onLoad={() => setIsLoading(false)}
            title="Anand Raj Bind Resume"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Resume;
