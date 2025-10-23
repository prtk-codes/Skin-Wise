'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function CTA() {
  return (
    <section id="beta" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-500 via-pink-500 to-rose-400 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm text-white font-medium">Connect with SkinWise</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Join Our Community!
          </h2>

          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Be part of the skincare revolution. Connect with SkinWise and experience personalized AI-powered skincare made for Indian skin.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/90 backdrop-blur-sm border-white/50 text-gray-800 placeholder:text-gray-500 h-12"
              />
              <Button
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white h-12 px-8"
              >
                Connect Now
              </Button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              No spam, just skincare magic. Unsubscribe anytime.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80 text-sm">Beta Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">4.9★</div>
              <div className="text-white/80 text-sm">Early Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-white/80 text-sm">Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
