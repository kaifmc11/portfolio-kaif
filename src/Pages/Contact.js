import React from "react";
import { contactDetails } from "../Details";
import KaifResume from "../assets/KaifResume.pdf"; // Import the PDF file

function Contact() {
  const { email, phone } = contactDetails;

  const handleDownloadResume = () => {
    // Create a temporary link element to trigger the download
    const link = document.createElement('a');
    link.href = KaifResume;
    link.download = "KaifResume.pdf"; // Set the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="container mx-auto max-width section">
      <h1 className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        For any questions please drop a mail
      </h1>
      <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
        <a href={`mailto:${email}`}>{email}</a>
      </h3>
      <span className="text-center text-content text-xl font-light block">or</span>
      <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-2 md:py-6">
        <a href={`tel:${phone}`}>{phone}</a>
      </h3>
      
      {/* Resume Download Button */}
      <div className="text-center mt-8">
        <button 
          onClick={handleDownloadResume}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition duration-300 ease-in-out"
        >
          Download Resume
        </button>
      </div>
    </main>
  );
}

export default Contact;