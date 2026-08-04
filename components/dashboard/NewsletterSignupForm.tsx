'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTheme } from 'next-themes';

interface FormData {
  name: string;
  email: string;
}

export default function NewsletterSignupForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { theme } = useTheme();

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/dashboard/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, action: 'subscribe' }),
      });

      if (res.ok) {
        setStatus('success');
        reset();
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <input
        {...register('name', { required: 'Name required' })}
        placeholder="Your name"
        className={`w-full px-3 py-2 rounded border ${
          theme === 'dark'
            ? 'bg-slate-800 border-slate-700 text-white'
            : 'bg-white border-gray-300 text-gray-900'
        }`}
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

      <input
        {...register('email', {
          required: 'Email required',
          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
        })}
        placeholder="your@email.com"
        className={`w-full px-3 py-2 rounded border ${
          theme === 'dark'
            ? 'bg-slate-800 border-slate-700 text-white'
            : 'bg-white border-gray-300 text-gray-900'
        }`}
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700 disabled:opacity-50"
      >
        {status === 'loading' ? 'Subscribing...' : 'Subscribe to Newsletter'}
      </button>

      {status === 'success' && <p className="text-green-600 text-sm">✓ Subscribed successfully!</p>}
      {status === 'error' && <p className="text-red-600 text-sm">✗ Subscription failed</p>}
    </form>
  );
}
