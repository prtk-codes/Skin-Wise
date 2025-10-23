'use client';

import { motion } from 'framer-motion';
import { Sparkles, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-rose-50 via-pink-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-rose-200">
              <Sparkles className="w-4 h-4 text-rose-500" />
              <span className="text-sm text-gray-700">AI-Powered Skincare</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Where Science Meets{' '}
              <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-rose-400 bg-clip-text text-transparent">
                Beauty
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              AI-powered personalized skincare for India's diverse skin tones. Get science-backed recommendations tailored just for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection('beta')}
                className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-lg px-8"
              >
                Connect with Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('about')}
                className="border-rose-300 text-rose-600 hover:bg-rose-50 text-lg px-8"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-rose-100 to-pink-100 rounded-3xl p-8 border border-rose-200 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-pink-300 rounded-lg"></div>
                      <span className="font-semibold text-gray-800">SkinWise</span>
                    </div>
                    <Smartphone className="w-5 h-5 text-gray-400" />
                  </div>

                  <div className="space-y-4">
                    <div className="aspect-square bg-gradient-to-br from-rose-200 to-pink-200 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 mx-auto bg-white/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <Sparkles className="w-16 h-16 text-rose-400" />
                        </div>
                        <p className="mt-4 text-sm text-gray-700 font-medium">AI Skin Scan</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div className="flex-1 h-2 bg-rose-400 rounded-full"></div>
                      <div className="flex-1 h-2 bg-pink-300 rounded-full"></div>
                      <div className="flex-1 h-2 bg-rose-200 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
