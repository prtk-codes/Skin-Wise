'use client';

import { motion } from 'framer-motion';
import { Scan, Sun, ShieldCheck, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Scan,
    title: 'AI Skin Scan',
    description: 'Advanced AI analyzes your skin type, concerns, and unique characteristics in seconds.',
    color: 'from-rose-500 to-pink-500'
  },
  {
    icon: Sun,
    title: 'Personalized AM/PM Routines',
    description: 'Custom morning and evening skincare routines tailored to your skin needs.',
    color: 'from-pink-500 to-rose-400'
  },
  {
    icon: ShieldCheck,
    title: 'Dermatologist-Validated',
    description: 'Every recommendation is backed by dermatological science and expert validation.',
    color: 'from-rose-400 to-pink-400'
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description: 'Beautiful dashboard to monitor your skin journey and see real improvements over time.',
    color: 'from-pink-400 to-rose-500'
  }
];

export default function Solution() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
            Our Smart Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Science-powered skincare that understands your unique needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-rose-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/60 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 mx-auto transform transition-transform hover:rotate-6`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
