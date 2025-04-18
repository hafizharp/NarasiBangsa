import React from 'react';

const Nasional = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Berita Nasional</h1>
        <p className="text-lg text-gray-600">Berita terkini seputar nasional</p>
        
        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* News Card */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-md"></div>
              <h3 className="text-xl font-semibold">Judul Berita Nasional</h3>
              <p className="text-gray-600">Deskripsi singkat berita nasional...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nasional;