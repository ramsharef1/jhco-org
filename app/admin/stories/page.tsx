'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Story {
  id: string;
  title: string;
  content: string;
  heroImage: string;
  program: string;
  featured: boolean;
  createdAt: string;
}

export default function StoriesPage() {
  const router = useRouter();
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    heroImage: '',
    program: 'healthcare',
    featured: false,
  });

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchStories();
  }, [router]);

  const fetchStories = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('admin_token');
      const response = await fetch('/api/admin/stories', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setStories(data);
    } catch (err: any) {
      setMessage(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveStory = async () => {
    if (!formData.title || !formData.content) {
      setMessage('❌ Please fill in title and content');
      return;
    }

    setSaving(true);
    setMessage('');

    try {
      const token = localStorage.getItem('admin_token');
      const url = editingId ? `/api/admin/stories/${editingId}` : '/api/admin/stories';
      const method = editingId ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to save');
      const story = await response.json();

      if (editingId) {
        setStories(stories.map(s => (s.id === editingId ? story : s)));
        setMessage('✅ Story updated!');
        setEditingId(null);
      } else {
        setStories([story, ...stories]);
        setMessage('✅ Story created!');
      }

      setFormData({ title: '', content: '', heroImage: '', program: 'healthcare', featured: false });
    } catch (err: any) {
      setMessage(`❌ Error: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteStory = async (id: string) => {
    if (!confirm('Delete this story?')) return;

    try {
      const token = localStorage.getItem('admin_token');
      const response = await fetch(`/api/admin/stories/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) throw new Error('Failed to delete');
      setStories(stories.filter(s => s.id !== id));
      setMessage('✅ Story deleted!');
    } catch (err: any) {
      setMessage(`❌ Error: ${err.message}`);
    }
  };

  const handleEditStory = (story: Story) => {
    setFormData({
      title: story.title,
      content: story.content,
      heroImage: story.heroImage,
      program: story.program,
      featured: story.featured,
    });
    setEditingId(story.id);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#0a1428] text-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/admin/dashboard" className="hover:opacity-80">
            <h1 className="text-2xl font-bold">JHCO Admin - Stories</h1>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-[#d4af37] text-[#0a1428] px-4 py-2 rounded font-semibold hover:bg-yellow-500"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-[#0a1428] mb-8">Manage Stories</h2>

        {message && (
          <div
            className={`mb-6 p-4 rounded ${
              message.includes('✅')
                ? 'bg-green-50 border border-green-200 text-green-700'
                : 'bg-red-50 border border-red-200 text-red-700'
            }`}
          >
            {message}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-1 bg-white rounded-lg shadow p-8">
            <h3 className="text-lg font-bold text-[#0a1428] mb-6">
              {editingId ? 'Edit Story' : 'Create Story'}
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Story title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Story content"
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                <input
                  type="text"
                  value={formData.heroImage}
                  onChange={(e) => setFormData({ ...formData, heroImage: e.target.value })}
                  placeholder="https://..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Program</label>
                <select
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                >
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="food-aid">Food Aid</option>
                  <option value="emergency">Emergency</option>
                </select>
              </div>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="w-4 h-4"
                />
                <span className="ml-2 text-sm font-medium text-gray-700">Featured</span>
              </label>

              <div className="flex gap-2">
                <button
                  onClick={handleSaveStory}
                  disabled={saving}
                  className="flex-1 bg-[#0a1428] text-white py-2 rounded font-semibold hover:bg-[#d4af37] hover:text-[#0a1428] disabled:opacity-50 text-sm"
                >
                  {saving ? 'Saving...' : editingId ? 'Update' : 'Create'}
                </button>
                {editingId && (
                  <button
                    onClick={() => {
                      setEditingId(null);
                      setFormData({ title: '', content: '', heroImage: '', program: 'healthcare', featured: false });
                    }}
                    className="flex-1 bg-gray-300 text-gray-700 py-2 rounded font-semibold hover:bg-gray-400 text-sm"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Stories List */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-[#0a1428] mb-6">Stories ({stories.length})</h3>

            {loading ? (
              <div className="text-center text-gray-500">Loading...</div>
            ) : stories.length === 0 ? (
              <div className="bg-white rounded-lg p-8 text-center text-gray-500">
                No stories yet. Create one!
              </div>
            ) : (
              <div className="space-y-4">
                {stories.map((story) => (
                  <div key={story.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-bold text-[#0a1428]">{story.title}</h4>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{story.content}</p>
                      </div>
                      {story.featured && (
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2 mb-3">
                      <span className="text-xs bg-[#0a1428] text-white px-2 py-1 rounded">
                        {story.program}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(story.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEditStory(story)}
                        className="flex-1 text-blue-600 hover:text-blue-800 font-semibold text-sm py-2 bg-blue-50 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteStory(story.id)}
                        className="flex-1 text-red-600 hover:text-red-800 font-semibold text-sm py-2 bg-red-50 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
