import { FC, useEffect, useState } from 'react';

const Cookie: FC = () => {

  const [cookieAccepted, setCookieAccepted] = useState<boolean>();
  useEffect(() => {
    if (document.cookie.includes('cookie-accept=true')) {
      setCookieAccepted(true);
      console.log('Cookie accepted');
    } else {
      setCookieAccepted(false);
      console.log('Cookie not accepted');
    }
  }, []);

  const handleAccept = () => {
    document.cookie = 'cookie-accept=true; SameSite=Strict; Secure';
    setCookieAccepted(true);
  }

  const handleDeny = () => {
    window.history.back();
  }

  if (cookieAccepted === undefined || cookieAccepted) {
    return null;
  }

  return (
    <div role="alert" className="alert alert-warning cookie">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="stroke-current h-6 w-6 shrink-0">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span>This site keeps cookies for functional only.</span>
      <div className='flex gap-2'>
        <button onClick={handleDeny} className="btn btn-sm btn-error">Deny</button>
        <button onClick={handleAccept} className="btn btn-sm btn-primary">Accept</button>
      </div>
    </div>
  );
};

export default Cookie;