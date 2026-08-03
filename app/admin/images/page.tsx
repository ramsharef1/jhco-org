'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Image {
  id: string;
  filename: string;
  url: string;
  program: string;
  category: string;
  source: string;
  hasWatermark: boolean;
  createdAt: string;
}

export default function ImagesPage() {
  const router = useRouter();
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');

  const [formData, setFormData] = useState({
    program: 'general',
    category: 'gallery',
    source: 'jhco.org.jo',
    watermark: true,
  });

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchImages();
  }, [router]);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('admin_token');
      const response = await fetch('/api/admin/images', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) throw new Error('Failed to fetch images');
      const data = await response.json();
      setImages(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleUpload(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleUpload(e.target.files[0]);
    }
  };

  const handleUpload = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file');
      return;
    }

    setUploading(true);
    setError('');

    try {
      const data = new FormData();
      data.append('file', file);
      data.append('program', formData.program);
      data.append('category', formData.category);
      data.append('source', formData.source);
      data.append('watermark', formData.watermark.toString());

      const token = localStorage.getItem('admin_token');
      const response = await fetch('/api/admin/images/upload', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: data,
      });

      if (!response.ok) throw new Error('Upload failed');

      const result = await response.json();
      setImages([result.image, ...images]);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    router.push('/admin/login');
  };

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#0a1428] text-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/admin/dashboard" className="hover:opacity-80">
            <h1 className="text-2xl font-bold">JHCO Admin - Images</h1>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-[#d4af37] text-[#0a1428] px-4 py-2 rounded font-semibold hover:bg-yellow-500"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Upload Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#0a1428] mb-6">Upload Images</h2>

          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
              dragActive
                ? 'border-[#d4af37] bg-yellow-50'
                : 'border-gray-300 bg-white hover:border-[#d4af37]'
            }`}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleFileInput}
              className="hidden"
              id="fileInput"
            />
            <label htmlFor="fileInput" className="cursor-pointer">
              <div className="text-4xl mb-4">📸</div>
              <p className="text-lg font-semibold text-gray-700 mb-2">
                Drag images here or click to browse
              </p>
              <p className="text-gray-500">Supports JPG, PNG, WebP</p>
            </label>
          </div>

          {error && (
            <div className="mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          {/* Upload Options */}
          <div className="mt-6 bg-white rounded-lg shadow p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Program</label>
                <select
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="general">General</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="food-aid">Food Aid</option>
                  <option value="emergency">Emergency</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="hero">Hero</option>
                  <option value="featured">Featured</option>
                  <option value="gallery">Gallery</option>
                  <option value="team">Team</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Source</label>
                <select
                  value={formData.source}
                  onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="jhco.org.jo">JHCO Website</option>
                  <option value="facebook">Facebook</option>
                  <option value="instagram">Instagram</option>
                  <option value="official">Official Media</option>
                </select>
              </div>

              <div>
                <label className="flex items-center mt-8">
                  <input
                    type="checkbox"
                    checked={formData.watermark}
                    onChange={(e) => setFormData({ ...formData, watermark: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700">Add Watermark</span>
                </label>
              </div>
            </div>
          </div>

          {uploading && (
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded text-center">
              <p className="text-blue-700">Uploading image...</p>
            </div>
          )}
        </div>

        {/* Filter Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Filter by Category</h3>
          <div className="flex gap-2">
            {['all', 'hero', 'featured', 'gallery', 'team'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded font-medium transition-colors ${
                  filter === cat
                    ? 'bg-[#0a1428] text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:border-[#d4af37]'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Images Gallery */}
        <div>
          <h2 className="text-2xl font-bold text-[#0a1428] mb-6">
            Images ({filteredImages.length})
          </h2>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Loading images...</p>
            </div>
          ) : filteredImages.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg">
              <p className="text-gray-500">No images yet. Upload one to get started!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image) => (
                <div key={image.id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gray-200 overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.filename}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-500 mb-2">{image.filename}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs bg-[#0a1428] text-white px-2 py-1 rounded">
                        {image.program}
                      </span>
                      <span className="text-xs bg-[#d4af37] text-[#0a1428] px-2 py-1 rounded">
                        {image.category}
                      </span>
                      {image.hasWatermark && (
                        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">
                          Watermarked
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-400">
                      {new Date(image.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
