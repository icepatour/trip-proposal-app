import React, { useEffect } from 'react';

function TallyForm() {
  useEffect(() => {
    // Dynamically load the Tally script
    const loadTallyScript = () => {
      const tallyScript = document.createElement('script');
      tallyScript.src = 'https://tally.so/widgets/embed.js';
      tallyScript.onload = () => {
        if (typeof Tally !== 'undefined') {
          Tally.loadEmbeds();
        } else {
          document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((iframe) => {
            iframe.src = iframe.dataset.tallySrc;
          });
        }
      };
      tallyScript.onerror = () => console.error('Failed to load Tally script');
      document.body.appendChild(tallyScript);
    };

    loadTallyScript();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8" >
      {/* Embed Tally Form */}
      <iframe
        data-tally-src="https://tally.so/embed/wdAK1y?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="890"
        title="Booking/Proposing form"
        style={{
          border: 'none', // Replaces frameBorder="0"
          margin: '0', // Replaces marginHeight="0" and marginWidth="0"
          borderRadius: '1rem', // Optional: Adds rounded corners
          boxShadow: '9px 9px 18px #c8c8c8, -9px -9px 18px #ffffff', // Neumorphism shadow
        }}
        className="rounded-2xl shadow-neumorphism p-10"
      >
        Loading...
      </iframe>
    </div>
  );
}

export default TallyForm;