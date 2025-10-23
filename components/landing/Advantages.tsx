'use client';

import { motion } from 'framer-motion';
import { Database, ShieldCheck, MapPin, RefreshCw } from 'lucide-react';

const advantages = [
  {
    icon: Database,
    text: 'Trained on Indian skin datasets for accurate analysis across diverse skin tones'
  },
  {
    icon: ShieldCheck,
    text: 'AI + dermatologist validation ensures science-backed recommendations'
  },
  {
    icon: MapPin,
    text: 'Localized recommendations by climate & region across India'
  },
  {
    icon: RefreshCw,
    text: 'Continuous model retraining for improved accuracy and results'
  }
];

export default function Advantages() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
            Why SkinWise?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our secret sauce: AI built specifically for Indian skin
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-br from-rose-50 to-pink-50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <advantage.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed pt-2">
                  {advantage.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
