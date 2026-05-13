import { Routes, Route } from 'react-router-dom';
import Admin from './pages/admin/Admin';
import React from 'react';
import { settingsService } from './services/settingsService';

export default function AdminApp() {
  React.useEffect(() => {
    // Initial fetch of settings from Supabase
    settingsService.fetchSettings().catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Admin />} />
        <Route path="*" element={<Admin />} />
      </Routes>
    </div>
  );
}
