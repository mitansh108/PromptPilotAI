import { UserProfile } from '@clerk/nextjs';
import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center text-white px-4 py-12">
      <UserProfile />
    </div>
  );
}
