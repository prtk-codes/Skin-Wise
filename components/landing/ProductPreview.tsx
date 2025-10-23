'use client';

import { motion } from 'framer-motion';
import { Sparkles, CheckCircle, Calendar, BarChart3 } from 'lucide-react';

export default function ProductPreview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-rose-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
            Scan. Analyze. Glow.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your personalized skincare journey starts here
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white to-rose-100 rounded-3xl p-8 sm:p-12 shadow-2xl border border-rose-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">AI-Powered Analysis</h3>
                    <p className="text-gray-600 text-sm">Instant skin assessment using advanced computer vision</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Smart Recommendations</h3>
                    <p className="text-gray-600 text-sm">Personalized product suggestions based on your unique profile</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Daily Routines</h3>
                    <p className="text-gray-600 text-sm">Customized morning and evening care plans</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Track Progress</h3>
                    <p className="text-gray-600 text-sm">Visual insights into your skin improvement journey</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 rounded-2xl blur-2xl opacity-30"></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-xl">
                  <div className="aspect-[3/4] bg-gradient-to-br from-rose-100 via-pink-50 to-rose-100 rounded-xl flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-rose-200 to-pink-200 rounded-full flex items-center justify-center mb-6">
                        <Sparkles className="w-16 h-16 text-rose-500" />
                      </div>
                      <div className="space-y-3">
                        <div className="h-3 bg-rose-300 rounded-full w-3/4 mx-auto"></div>
                        <div className="h-3 bg-pink-200 rounded-full w-1/2 mx-auto"></div>
                        <div className="h-3 bg-rose-200 rounded-full w-2/3 mx-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
