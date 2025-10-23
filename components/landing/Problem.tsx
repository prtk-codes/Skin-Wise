'use client';

import { motion } from 'framer-motion';
import { AlertCircle, TrendingUp, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const problems = [
  {
    icon: AlertCircle,
    title: 'Confusing Online Advice',
    description: 'Endless conflicting information leaves you more confused than when you started.',
    color: 'from-rose-500 to-pink-500'
  },
  {
    icon: TrendingUp,
    title: 'Influencer-Driven, Not Science-Backed',
    description: 'Trendy products without scientific validation often lead to disappointing results.',
    color: 'from-pink-500 to-rose-400'
  },
  {
    icon: MapPin,
    title: 'Limited Access to Dermatologists',
    description: 'Quality skincare expertise is hard to find, especially in smaller cities across India.',
    color: 'from-rose-400 to-pink-400'
  }
];

export default function Problem() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
            The Skincare Struggle
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Finding the right skincare routine shouldn't be this complicated
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-rose-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className={`w-14 h-14 bg-gradient-to-br ${problem.color} rounded-xl flex items-center justify-center mb-6`}>
                    <problem.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {problem.description}
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
