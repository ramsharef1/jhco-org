'use client';

import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { useForm } from 'react-hook-form';

interface VolunteerFormData {
  name: string;
  email: string;
  program: string;
  message?: string;
}

export default function VolunteerCTA() {
  const { theme } = useTheme();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<VolunteerFormData>();

  const onSubmit = async (data: VolunteerFormData) => {
    try {
      setError(null);
      const response = await fetch('/api/dashboard/signups', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    }
  };

  return (
    <div className="bg-gradient-to-r from-amber-600 to-amber-500 rounded-lg p-8 text-white">
      <h2 className="text-2xl font-bold mb-2">Make a Difference</h2>
      <p className="text-amber-100 mb-6">Join our volunteer community and help us build healthier communities</p>

      {submitted && (
        <div className="mb-6 p-4 bg-green-500/20 border border-green-400 rounded-lg text-green-100">
          Thank you for your interest! We'll be in touch soon.
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-500/20 border border-red-400 rounded-lg text-red-100">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register('name', { required: true })}
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-amber-100 border border-white/20 focus:outline-none focus:border-white/50"
            required
          />
        </div>

        <div>
          <input
            {...register('email', { required: true, type: 'email' })}
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-amber-100 border border-white/20 focus:outline-none focus:border-white/50"
            required
          />
        </div>

        <div>
          <select
            {...register('program', { required: true })}
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-amber-100 border border-white/20 focus:outline-none focus:border-white/50"
            required
          >
            <option value="">Select a Program</option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="food-aid">Food Aid</option>
            <option value="livelihoods">Livelihoods</option>
            <option value="emergency">Emergency Relief</option>
          </select>
        </div>

        <div>
          <textarea
            {...register('message')}
            placeholder="Tell us about your interests (optional)"
            rows={3}
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-amber-100 border border-white/20 focus:outline-none focus:border-white/50"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-white text-amber-600 font-bold rounded-lg hover:bg-amber-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Get Involved Today'}
        </button>
      </form>

      <p className="text-sm text-amber-100 mt-4">
        We respect your privacy. Your information will only be used to contact you about volunteer opportunities.
      </p>
    </div>
  );
}
