import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the feedback to a server
    console.log('Feedback submitted:', feedback);
    alert('Thank you for your feedback!');
    setFeedback('');
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Feedback</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Help Us Improve
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We value your input. Let us know how we can make our website better.
          </p>
        </div>
        <div className="mt-10 max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
                Your Feedback
              </label>
              <div className="mt-1">
                <textarea
                  id="feedback"
                  name="feedback"
                  rows={4}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>
            <div>
              <Button type="submit" variant="default" className="w-full">
                Submit Feedback
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;