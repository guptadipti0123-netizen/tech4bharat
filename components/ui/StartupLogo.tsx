import React from "react";

interface StartupLogoProps {
  name: string;
  domain?: string;
  className?: string;
  size?: number;
}

export default function StartupLogo({ name, domain = "", className = "", size = 44 }: StartupLogoProps) {
  const normalized = name.toLowerCase().replace(/[\s\-_]/g, "");

  // 1. AgroSense
  if (normalized.includes("agrosense")) {
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="48" height="48" rx="12" fill="url(#grad_agrosense)" />
        <path d="M24 10C17.5 10 13 15.5 13 22C13 29.5 19.5 35 24 38C28.5 35 35 29.5 35 22C35 15.5 30.5 10 24 10Z" fill="white" fillOpacity="0.2" />
        <path d="M24 14C19 14 16 18 16 23C16 29 21 33 24 35C27 33 32 29 32 23C32 18 29 14 24 14Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 20V28M24 24L28 20M24 26L20 22" stroke="#A7F3D0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="grad_agrosense" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#059669" /><stop offset="1" stopColor="#047857" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 2. JalShuddhi
  if (normalized.includes("jalshuddhi")) {
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="48" height="48" rx="12" fill="url(#grad_jalshuddhi)" />
        <path d="M24 11C24 11 15 22 15 28C15 32.97 19.03 37 24 37C28.97 37 33 32.97 33 28C33 22 24 11 24 11Z" fill="white" fillOpacity="0.2" />
        <path d="M24 11C24 11 15 22 15 28C15 32.97 19.03 37 24 37C28.97 37 33 32.97 33 28C33 22 24 11 24 11Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 28C20 30.2 21.8 32 24 32" stroke="#BAE6FD" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="28" cy="22" r="1.5" fill="#BAE6FD" />
        <defs>
          <linearGradient id="grad_jalshuddhi" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0284C7" /><stop offset="1" stopColor="#0369A1" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 3. CardioBeat
  if (normalized.includes("cardiobeat")) {
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="48" height="48" rx="12" fill="url(#grad_cardiobeat)" />
        <path d="M12 25H18L21 16L27 34L30 25H36" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="25" r="14" stroke="white" strokeOpacity="0.25" strokeWidth="2" strokeDasharray="3 3" />
        <defs>
          <linearGradient id="grad_cardiobeat" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4F46E5" /><stop offset="1" stopColor="#3730A3" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 4. MedLink
  if (normalized.includes("medlink")) {
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="48" height="48" rx="12" fill="url(#grad_medlink)" />
        <path d="M21 13H27V21H35V27H27V35H21V27H13V21H21V13Z" fill="white" fillOpacity="0.2" />
        <path d="M21 13H27V21H35V27H27V35H21V27H13V21H21V13Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="3" fill="#BFDBFE" />
        <defs>
          <linearGradient id="grad_medlink" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2563EB" /><stop offset="1" stopColor="#1E40AF" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 5. BharatVision AI
  if (normalized.includes("bharatvision")) {
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="48" height="48" rx="12" fill="url(#grad_bharatvision)" />
        <path d="M12 24C16 16 32 16 36 24C32 32 16 32 12 24Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="5" fill="#C7D2FE" stroke="white" strokeWidth="2" />
        <path d="M24 13V15M24 33V35M13 24H15M33 24H35" stroke="#A5B4FC" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id="grad_bharatvision" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366F1" /><stop offset="1" stopColor="#4338CA" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 6. GreenGrid
  if (normalized.includes("greengrid")) {
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="48" height="48" rx="12" fill="url(#grad_greengrid)" />
        <path d="M24 12V36M12 24H36" stroke="white" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="24" r="10" stroke="white" strokeWidth="2.5" />
        <path d="M24 16L29 24L24 32L19 24L24 16Z" fill="#5EEAD4" />
        <defs>
          <linearGradient id="grad_greengrid" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0F766E" /><stop offset="1" stopColor="#115E59" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 7. UrjaVayu
  if (normalized.includes("urjavayu")) {
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="48" height="48" rx="12" fill="url(#grad_urjavayu)" />
        <circle cx="24" cy="24" r="4" fill="white" />
        <path d="M24 20C24 14 28 12 30 12C30 16 27 20 24 20Z" fill="#FDE68A" />
        <path d="M20 26C15 28 13 25 13 23C16 22 20 23 20 26Z" fill="#FDE68A" />
        <path d="M27 27C28 33 25 35 23 35C22 32 24 28 27 27Z" fill="#FDE68A" />
        <defs>
          <linearGradient id="grad_urjavayu" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D97706" /><stop offset="1" stopColor="#B45309" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 8. EcoKooda
  if (normalized.includes("ecokooda")) {
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="48" height="48" rx="12" fill="url(#grad_ecokooda)" />
        <path d="M24 13L29 20H19L24 13Z" fill="#BEF264" />
        <path d="M33 23L36 31L26 31L33 23Z" fill="#BEF264" />
        <path d="M15 23L22 31L12 31L15 23Z" fill="#BEF264" />
        <circle cx="24" cy="25" r="4" stroke="white" strokeWidth="2" />
        <defs>
          <linearGradient id="grad_ecokooda" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#65A30D" /><stop offset="1" stopColor="#4D7C0F" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 9. PathShala / Pathshala
  if (normalized.includes("pathshala")) {
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="48" height="48" rx="12" fill="url(#grad_pathshala)" />
        <path d="M13 18L24 13L35 18L24 23L13 18Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M17 21V29C17 32 20 34 24 34C28 34 31 32 31 29V21" stroke="#DDD6FE" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M35 18V26" stroke="#FDE047" strokeWidth="2.5" strokeLinecap="round" />
        <defs>
          <linearGradient id="grad_pathshala" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7C3AED" /><stop offset="1" stopColor="#5B21B6" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 10. GramSetu
  if (normalized.includes("gramsetu")) {
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="48" height="48" rx="12" fill="url(#grad_gramsetu)" />
        <path d="M12 32C16 22 32 22 36 32" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <path d="M16 35C20 27 28 27 32 35" stroke="#BAE6FD" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="18" r="4.5" fill="#FDE047" />
        <defs>
          <linearGradient id="grad_gramsetu" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0284C7" /><stop offset="1" stopColor="#075985" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 11. SafalNaari
  if (normalized.includes("safalnaari") || normalized.includes("safalnari")) {
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="48" height="48" rx="12" fill="url(#grad_safalnaari)" />
        <path d="M24 13C20 18 16 24 16 28C16 32.4 19.6 36 24 36C28.4 36 32 32.4 32 28C32 24 28 18 24 13Z" fill="white" fillOpacity="0.2" />
        <path d="M24 12L27 19L35 21L29 26L31 34L24 30L17 34L19 26L13 21L21 19L24 12Z" fill="white" stroke="#FBCFE8" strokeWidth="1.2" strokeLinejoin="round" />
        <circle cx="24" cy="23" r="3" fill="#F43F5E" />
        <defs>
          <linearGradient id="grad_safalnaari" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#DB2777" /><stop offset="1" stopColor="#9D174D" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 12. HunarBharat
  if (normalized.includes("hunarbharat")) {
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="48" height="48" rx="12" fill="url(#grad_hunarbharat)" />
        <circle cx="24" cy="24" r="10" stroke="white" strokeWidth="2.5" />
        <path d="M24 14V17M24 31V34M14 24H17M31 24H34" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <path d="M17 17L19 19M29 29L31 31M17 31L19 29M29 17L31 19" stroke="#FECDD3" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="3.5" fill="#FDA4AF" />
        <defs>
          <linearGradient id="grad_hunarbharat" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E11D48" /><stop offset="1" stopColor="#881337" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 13. DrishtiVision
  if (normalized.includes("drishtivision") || normalized.includes("drishti")) {
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="48" height="48" rx="12" fill="url(#grad_drishti)" />
        <path d="M12 24C16 16 32 16 36 24C32 32 16 32 12 24Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="5" fill="#5EEAD4" stroke="white" strokeWidth="2" />
        <circle cx="24" cy="24" r="2" fill="#042F2E" />
        <path d="M20 13C22 11 26 11 28 13" stroke="#99F6E4" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id="grad_drishti" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0F766E" /><stop offset="1" stopColor="#042F2E" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 14. KrishiChain
  if (normalized.includes("krishichain")) {
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="48" height="48" rx="12" fill="url(#grad_krishi)" />
        <circle cx="19" cy="24" r="6" stroke="white" strokeWidth="2.5" />
        <circle cx="29" cy="24" r="6" stroke="white" strokeWidth="2.5" />
        <path d="M24 14V34" stroke="#A7F3D0" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M20 18L24 14L28 18" stroke="#A7F3D0" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id="grad_krishi" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#16A34A" /><stop offset="1" stopColor="#14532D" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 15. NirmalJal
  if (normalized.includes("nirmaljal")) {
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="48" height="48" rx="12" fill="url(#grad_nirmal)" />
        <path d="M24 12L32 24C32 28.4 28.4 32 24 32C19.6 32 16 28.4 16 24L24 12Z" fill="white" fillOpacity="0.25" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M21 24C21 25.65 22.35 27 24 27" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="36" r="1.5" fill="#BFDBFE" />
        <defs>
          <linearGradient id="grad_nirmal" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0284C7" /><stop offset="1" stopColor="#1E3A8A" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 16. SwasthyaSeva
  if (normalized.includes("swasthyaseva") || normalized.includes("swasthya")) {
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="48" height="48" rx="12" fill="url(#grad_swasthya)" />
        <path d="M24 15C21 11 15 12 14 17C13 23 20 28 24 33C28 28 35 23 34 17C33 12 27 11 24 15Z" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M22 23H26M24 21V25" stroke="#FECDD3" strokeWidth="2.5" strokeLinecap="round" />
        <defs>
          <linearGradient id="grad_swasthya" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E11D48" /><stop offset="1" stopColor="#9F1239" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // Domain-based rich vector insignia fallbacks (NEVER plain text)
  if (domain.toLowerCase().includes("agri")) {
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="48" height="48" rx="12" fill="#059669" />
        <path d="M24 14C19 14 16 18 16 23C16 29 21 33 24 35C27 33 32 29 32 23C32 18 29 14 24 14Z" stroke="white" strokeWidth="2.5" />
      </svg>
    );
  }

  if (domain.toLowerCase().includes("water")) {
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="48" height="48" rx="12" fill="#0284C7" />
        <path d="M24 12L32 24C32 28.4 28.4 32 24 32C19.6 32 16 28.4 16 24L24 12Z" stroke="white" strokeWidth="2.5" />
      </svg>
    );
  }

  // Default universal tech insignia crest
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="48" height="48" rx="12" fill="url(#grad_univ)" />
      <circle cx="24" cy="24" r="10" stroke="white" strokeWidth="2" />
      <polygon points="24,17 29,27 19,27" fill="#67E8F9" />
      <defs>
        <linearGradient id="grad_univ" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0B2A4A" /><stop offset="1" stopColor="#155E9A" />
        </linearGradient>
      </defs>
    </svg>
  );
}
