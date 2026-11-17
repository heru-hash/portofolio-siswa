import React, { useState } from 'react';
import { FileImage } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  fallbackTitle?: string;
  className?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  fallbackTitle,
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0] p-6 text-center ${className}`}
      >
        <FileImage className="w-8 h-8 mb-3 text-[#64748B]" strokeWidth={1.5} />
        <p className="text-sm font-medium text-[#334155] max-w-xs">
          {fallbackTitle || alt}
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
