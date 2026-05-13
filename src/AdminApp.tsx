import { Routes, Route } from 'react-router-dom';
import Admin from './pages/admin/Admin';
import React from 'react';

export default function AdminApp() {
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
