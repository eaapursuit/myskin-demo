import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';

const EmailSignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      const { data, error } = await supabase
        .from('email_signups')
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone_number: formData.phoneNumber || null
          }
        ]);

      if (error) {
        if (error.code === '23505') {
          setMessage('This email is already registered with us!');
        } else {
          throw error;
        }
      } else {
        setMessage('Thanks for joining our community! We\'ll be in touch soon.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: ''
        });
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=" pt-30 md:pt-34 pb-0 px-4 md:px-6 min-h-screen flex flex-col justify-start">
      <div className="max-w-2xl mx-auto w-full">
        <div className="text-center mb-6 md:mb-12">
          <div className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-2 bg-[#FCE4D8] text-[#472816] text-[10px] sm:text-sm font-medium rounded-full shadow-sm mb-4 sm:mb-6">
            Join the Waitlist
          </div>
          <p className="text-[#F8F6F6] opacity-90 text-sm sm:text-lg leading-relaxed">
            Be the first to know when our app is available for beta testing.
          </p>
        </div>

        <div className="bg-[#0A0A06] p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border border-[#A68671]/20">
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="firstName" className="block text-[#F8F6F6] font-medium mb-2 text-xs sm:text-sm">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-[#F8F6F6] text-[#0A0A06] rounded-lg border border-[#A68671]/20 focus:outline-none focus:ring-2 focus:ring-[#A68671] focus:border-transparent placeholder-[#472816]/60 text-xs sm:text-sm"
                  placeholder="Enter your first name"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-[#F8F6F6] font-medium mb-2 text-xs sm:text-sm">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-[#F8F6F6] text-[#0A0A06] rounded-lg border border-[#A68671]/20 focus:outline-none focus:ring-2 focus:ring-[#A68671] focus:border-transparent placeholder-[#472816]/60 text-xs sm:text-sm"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-[#F8F6F6] font-medium mb-2 text-xs sm:text-sm">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-[#F8F6F6] text-[#0A0A06] rounded-lg border border-[#A68671]/20 focus:outline-none focus:ring-2 focus:ring-[#A68671] focus:border-transparent placeholder-[#472816]/60 text-xs sm:text-sm"
                placeholder="Enter your email address"
              />
            </div>

            {message && (
              <div className={`p-4 rounded-lg text-center font-medium text-xs sm:text-sm ${
                message.includes('Thanks') 
                  ? 'bg-[#B2B379]/20 text-[#B2B379]' 
                  : 'bg-red-500/20 text-red-300'
              }`}>
                {message}
              </div>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-[#A68671] text-[#F8F6F6] py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold text-sm sm:text-lg hover:bg-[#8B6B5C] focus:outline-none focus:ring-2 focus:ring-[#A68671] focus:ring-offset-2 focus:ring-offset-[#0A0A06] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-[#F8F6F6]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Joining...
                </span>
              ) : (
                'Join the Waitlist'
              )}
            </button>

            <p className="text-[#F8F6F6]/60 text-xs sm:text-sm text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSignUp;