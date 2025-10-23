'use client';

import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const team = [
  {
    name: 'Dr. Priya Sharma',
    role: 'Chief Dermatologist',
    color: 'from-rose-400 to-pink-400'
  },
  {
    name: 'Arjun Mehta',
    role: 'AI Engineer',
    color: 'from-pink-400 to-rose-500'
  },
  {
    name: 'Aisha Khan',
    role: 'Product Designer',
    color: 'from-rose-500 to-pink-500'
  },
  {
    name: 'Rohan Patel',
    role: 'Data Scientist',
    color: 'from-pink-500 to-rose-400'
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
            Meet the Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate experts dedicated to revolutionizing skincare
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-rose-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className={`w-24 h-24 mx-auto mb-4 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center`}>
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {member.role}
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
