import React from 'react';

interface EmailLinkProps {
  prefix?: string;
  className?: string;
}

export function EmailLink({ prefix = "prasmisteel", className = "" }: EmailLinkProps) {
  const domain = "gmail.com";
  // Simple obfuscation by splitting/concatenating at runtime
  const email = `${prefix}@${domain}`;
  
  return (
    <a 
      href={`mailto:${email}`} 
      className={className}
      onContextMenu={(e) => e.preventDefault()} // Discourage right-click copy
    >
      {email}
    </a>
  );
}
