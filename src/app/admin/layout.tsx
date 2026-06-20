import React from 'react';
import Link from 'next/link';
import { LayoutDashboard, FileText, Settings, LogOut, Home } from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-black/50 backdrop-blur-xl sticky top-0 h-screen hidden md:flex flex-col">
        <div className="p-6 border-b border-white/10">
          <Link href="/admin" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
              <span className="text-white font-bold">A</span>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Admin Panel
            </span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <Link
            href="/admin"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all text-gray-400 hover:text-white group"
          >
            <LayoutDashboard className="w-5 h-5 group-hover:text-blue-400" />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/admin"
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-500/10 text-blue-400 transition-all border border-blue-500/20"
          >
            <FileText className="w-5 h-5" />
            <span>Blog Posts</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all text-gray-400 hover:text-white group"
          >
            <Home className="w-5 h-5 group-hover:text-emerald-400" />
            <span>View Site</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-white/10">
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/10 transition-all text-gray-400 hover:text-red-400 group w-full text-left">
            <LogOut className="w-5 h-5 group-hover:text-red-400" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen">
        <header className="h-16 border-b border-white/10 bg-black/30 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-50">
          <h2 className="text-lg font-semibold text-white">Management Console</h2>
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-400 mr-4">
              Logged in as <span className="text-white font-medium">Admin</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border border-white/20" />
          </div>
        </header>
        <div className="flex-1 p-8 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
