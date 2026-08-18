import React from "react";

interface StartupLogoProps {
  name: string;
  domain: string;
  className?: string;
  size?: number;
}

export default function StartupLogo({ name, domain, className = "", size = 44 }: StartupLogoProps) {
  // Return custom SVG logo based on startup name
  switch (name.toLowerCase().trim()) {
    case "agrosense":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <rect width="48" height="48" rx="12" fill="url(#grad_agrosense)" />
          <path
            d="M24 10C17.5 10 13 15.5 13 22C13 29.5 19.5 35 24 38C28.5 35 35 29.5 35 22C35 15.5 30.5 10 24 10Z"
            fill="white"
            fillOpacity="0.2"
          />
          <path
            d="M24 14C19 14 16 18 16 23C16 29 21 33 24 35C27 33 32 29 32 23C32 18 29 14 24 14Z"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 20V28M24 24L28 20M24 26L20 22"
            stroke="#A7F3D0"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="grad_agrosense" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#059669" />
              <stop offset="1" stopColor="#047857" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "jalshuddhi":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <rect width="48" height="48" rx="12" fill="url(#grad_jalshuddhi)" />
          <path
            d="M24 11C24 11 15 22 15 28C15 32.97 19.03 37 24 37C28.97 37 33 32.97 33 28C33 22 24 11 24 11Z"
            fill="white"
            fillOpacity="0.2"
          />
          <path
            d="M24 11C24 11 15 22 15 28C15 32.97 19.03 37 24 37C28.97 37 33 32.97 33 28C33 22 24 11 24 11Z"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 28C20 30.2 21.8 32 24 32"
            stroke="#BAE6FD"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="28" cy="22" r="1.5" fill="#BAE6FD" />
          <defs>
            <linearGradient id="grad_jalshuddhi" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0284C7" />
              <stop offset="1" stopColor="#0369A1" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "cardiobeat":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <rect width="48" height="48" rx="12" fill="url(#grad_cardiobeat)" />
          <path
            d="M12 25H18L21 16L27 34L30 25H36"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="24" cy="25" r="14" stroke="white" strokeOpacity="0.25" strokeWidth="2" strokeDasharray="3 3" />
          <defs>
            <linearGradient id="grad_cardiobeat" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4F46E5" />
              <stop offset="1" stopColor="#3730A3" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "medlink":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <rect width="48" height="48" rx="12" fill="url(#grad_medlink)" />
          <path
            d="M21 13H27V21H35V27H27V35H21V27H13V21H21V13Z"
            fill="white"
            fillOpacity="0.2"
          />
          <path
            d="M21 13H27V21H35V27H27V35H21V27H13V21H21V13Z"
            stroke="white"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <circle cx="24" cy="24" r="3" fill="#BFDBFE" />
          <defs>
            <linearGradient id="grad_medlink" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2563EB" />
              <stop offset="1" stopColor="#1E40AF" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "bharatvision ai":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <rect width="48" height="48" rx="12" fill="url(#grad_bharatvision)" />
          <path
            d="M12 24C16 16 32 16 36 24C32 32 16 32 12 24Z"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="24" cy="24" r="5" fill="#C7D2FE" stroke="white" strokeWidth="2" />
          <path d="M24 13V15M24 33V35M13 24H15M33 24H35" stroke="#A5B4FC" strokeWidth="2" strokeLinecap="round" />
          <defs>
            <linearGradient id="grad_bharatvision" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6366F1" />
              <stop offset="1" stopColor="#4338CA" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "greengrid":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <rect width="48" height="48" rx="12" fill="url(#grad_greengrid)" />
          <path
            d="M24 12V36M12 24H36"
            stroke="white"
            strokeOpacity="0.3"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="24" cy="24" r="10" stroke="white" strokeWidth="2.5" />
          <path
            d="M24 16L29 24L24 32L19 24L24 16Z"
            fill="#5EEAD4"
          />
          <defs>
            <linearGradient id="grad_greengrid" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0F766E" />
              <stop offset="1" stopColor="#115E59" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "urjavayu":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <rect width="48" height="48" rx="12" fill="url(#grad_urjavayu)" />
          <circle cx="24" cy="24" r="4" fill="white" />
          <path
            d="M24 20C24 14 28 12 30 12C30 16 27 20 24 20Z"
            fill="#FDE68A"
          />
          <path
            d="M20 26C15 28 13 25 13 23C16 22 20 23 20 26Z"
            fill="#FDE68A"
          />
          <path
            d="M27 27C28 33 25 35 23 35C22 32 24 28 27 27Z"
            fill="#FDE68A"
          />
          <defs>
            <linearGradient id="grad_urjavayu" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D97706" />
              <stop offset="1" stopColor="#B45309" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "ecokooda":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <rect width="48" height="48" rx="12" fill="url(#grad_ecokooda)" />
          <path
            d="M24 13L29 20H19L24 13Z"
            fill="#BEF264"
          />
          <path
            d="M33 23L36 31L26 31L33 23Z"
            fill="#BEF264"
          />
          <path
            d="M15 23L22 31L12 31L15 23Z"
            fill="#BEF264"
          />
          <circle cx="24" cy="25" r="4" stroke="white" strokeWidth="2" />
          <defs>
            <linearGradient id="grad_ecokooda" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#65A30D" />
              <stop offset="1" stopColor="#4D7C0F" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "pathshala":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <rect width="48" height="48" rx="12" fill="url(#grad_pathshala)" />
          <path
            d="M13 18L24 13L35 18L24 23L13 18Z"
            fill="white"
            stroke="white"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M17 21V29C17 32 20 34 24 34C28 34 31 32 31 29V21"
            stroke="#DDD6FE"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path d="M35 18V26" stroke="#FDE047" strokeWidth="2.5" strokeLinecap="round" />
          <defs>
            <linearGradient id="grad_pathshala" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7C3AED" />
              <stop offset="1" stopColor="#5B21B6" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "gramvikas":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <rect width="48" height="48" rx="12" fill="url(#grad_gramvikas)" />
          <path
            d="M14 34V22L24 14L34 22V34H14Z"
            stroke="white"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <circle cx="24" cy="20" r="3" fill="#BAE6FD" />
          <path d="M21 34V26H27V34" fill="#38BDF8" />
          <defs>
            <linearGradient id="grad_gramvikas" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0284C7" />
              <stop offset="1" stopColor="#0C4A6E" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "shakticraft":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <rect width="48" height="48" rx="12" fill="url(#grad_shakticraft)" />
          <path
            d="M24 12L28 20L36 24L28 28L24 36L20 28L12 24L20 20L24 12Z"
            fill="white"
            stroke="#FBCFE8"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="24" cy="24" r="3.5" fill="#F472B6" />
          <defs>
            <linearGradient id="grad_shakticraft" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#DB2777" />
              <stop offset="1" stopColor="#9D174D" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "kaushalbharat":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <rect width="48" height="48" rx="12" fill="url(#grad_kaushalbharat)" />
          <circle cx="24" cy="24" r="10" stroke="white" strokeWidth="2.5" />
          <path
            d="M24 14V17M24 31V34M14 24H17M31 24H34"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M17 17L19 19M29 29L31 31M17 31L19 29M29 17L31 19"
            stroke="#FECDD3"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="24" cy="24" r="3.5" fill="#FDA4AF" />
          <defs>
            <linearGradient id="grad_kaushalbharat" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E11D48" />
              <stop offset="1" stopColor="#881337" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "sevasetu":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <rect width="48" height="48" rx="12" fill="url(#grad_sevasetu)" />
          <path
            d="M13 30C18 20 30 20 35 30"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M17 34C21 27 27 27 31 34"
            stroke="#99F6E4"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="24" cy="16" r="3" fill="white" />
          <defs>
            <linearGradient id="grad_sevasetu" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0F766E" />
              <stop offset="1" stopColor="#134E4A" />
            </linearGradient>
          </defs>
        </svg>
      );

    default:
      // Elegant Monogram badge for any other startup
      const initials = name
        .split(" ")
        .map((w) => w[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();
      return (
        <div
          style={{ width: size, height: size }}
          className="flex items-center justify-center rounded-xl bg-gradient-to-br from-[#155E9A] to-[#0B2A4A] text-white font-black text-sm shadow-md"
        >
          {initials}
        </div>
      );
  }
}
