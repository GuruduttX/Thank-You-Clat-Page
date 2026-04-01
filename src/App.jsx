import { useEffect } from 'react'

function App() {
  const targetUrl = "https://clatcoachingdelhi.com/";

  // Automatically redirect after 5 seconds
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = targetUrl;
    }, 10000);

    // Cleanup the timer if the component unmounts early
    return () => clearTimeout(redirectTimer);
  }, []);

  // Handle manual button click
  const handleRedirect = () => {
    window.location.href = targetUrl;
  };
  return (
    <>
      <div className="bg-slate-100 min-h-screen flex items-center justify-center p-4">
        {/* Central Content Card */}
        <div className="bg-white p-10 rounded-xl shadow-2xl max-w-lg w-full text-center space-y-8">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div class='bg-green-100 rounded-full w-[80px] h-[80px] flex items-center justify-center'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-15 w-15 text-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Thank You!
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed px-4">
              Your enquiry has been successfully submitted. Our team will
              contact you shortly to assist you further.
            </p>
          </div>

          {/* Automatic Redirect Information (highlighted block) */}
          <div className="bg-sky-50 p-6 rounded-lg text-sm text-sky-800 font-medium">
            <p>
              You will be automatically redirected to our homepage in a few
              seconds...
            </p>
          </div>

          {/* Action Button */}
          <div>
            <button className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-16 rounded-xl text-lg shadow-md transition-colors duration-200" onClick={handleRedirect}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Return to Homepage Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
