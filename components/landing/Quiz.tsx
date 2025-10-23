'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    value: string;
    points: { [key: string]: number };
  }[];
}

interface SkinTypeResult {
  type: string;
  title: string;
  description: string;
  characteristics: string[];
  recommendations: string[];
  products: {
    category: string;
    suggestion: string;
  }[];
  color: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "How does your skin feel after cleansing?",
    options: [
      { text: "Tight and uncomfortable", value: "dry", points: { dry: 3, normal: 0, oily: 0, combination: 1 } },
      { text: "Comfortable and balanced", value: "normal", points: { dry: 0, normal: 3, oily: 0, combination: 1 } },
      { text: "Shiny, especially on T-zone", value: "oily", points: { dry: 0, normal: 0, oily: 3, combination: 2 } },
      { text: "Tight on cheeks, oily on forehead/nose", value: "combination", points: { dry: 1, normal: 0, oily: 1, combination: 3 } }
    ]
  },
  {
    id: 2,
    question: "How often do you notice visible pores?",
    options: [
      { text: "Barely visible or not at all", value: "dry", points: { dry: 3, normal: 1, oily: 0, combination: 1 } },
      { text: "Visible but not prominent", value: "normal", points: { dry: 0, normal: 3, oily: 1, combination: 1 } },
      { text: "Large and clearly visible", value: "oily", points: { dry: 0, normal: 0, oily: 3, combination: 2 } },
      { text: "Large on T-zone, smaller on cheeks", value: "combination", points: { dry: 0, normal: 0, oily: 1, combination: 3 } }
    ]
  },
  {
    id: 3,
    question: "By midday, how does your skin look?",
    options: [
      { text: "Flaky or feels tight", value: "dry", points: { dry: 3, normal: 0, oily: 0, combination: 1 } },
      { text: "Still fresh and balanced", value: "normal", points: { dry: 0, normal: 3, oily: 0, combination: 1 } },
      { text: "Shiny and oily all over", value: "oily", points: { dry: 0, normal: 0, oily: 3, combination: 1 } },
      { text: "Oily T-zone, dry or normal cheeks", value: "combination", points: { dry: 0, normal: 0, oily: 1, combination: 3 } }
    ]
  },
  {
    id: 4,
    question: "How does your skin react to new products?",
    options: [
      { text: "Often gets irritated or red", value: "sensitive", points: { dry: 2, normal: 0, oily: 0, combination: 1 } },
      { text: "Generally tolerates well", value: "normal", points: { dry: 0, normal: 3, oily: 1, combination: 1 } },
      { text: "Sometimes breaks out", value: "oily", points: { dry: 0, normal: 0, oily: 3, combination: 2 } },
      { text: "Depends on the area applied", value: "combination", points: { dry: 1, normal: 0, oily: 1, combination: 3 } }
    ]
  },
  {
    id: 5,
    question: "How does your skin feel in different seasons?",
    options: [
      { text: "Always dry, worse in winter", value: "dry", points: { dry: 3, normal: 0, oily: 0, combination: 1 } },
      { text: "Pretty consistent year-round", value: "normal", points: { dry: 0, normal: 3, oily: 1, combination: 0 } },
      { text: "Always oily, worse in summer", value: "oily", points: { dry: 0, normal: 0, oily: 3, combination: 1 } },
      { text: "Changes with seasons", value: "combination", points: { dry: 1, normal: 1, oily: 1, combination: 3 } }
    ]
  }
];

const skinTypeResults: { [key: string]: SkinTypeResult } = {
  dry: {
    type: "dry",
    title: "Dry Skin",
    description: "Your skin tends to feel tight, may have flaky patches, and needs extra hydration. It often has smaller pores and may be more prone to showing fine lines.",
    characteristics: [
      "Feels tight after cleansing",
      "Flaky or rough texture",
      "Minimal visible pores",
      "Prone to irritation"
    ],
    recommendations: [
      "Use gentle, cream-based cleansers",
      "Apply rich, hydrating moisturizers",
      "Look for ingredients like hyaluronic acid, ceramides, and glycerin",
      "Avoid alcohol-based products"
    ],
    products: [
      { category: "Cleanser", suggestion: "Cream-based or oil-based gentle cleanser" },
      { category: "Moisturizer", suggestion: "Rich, deeply hydrating cream with ceramides" },
      { category: "Serum", suggestion: "Hyaluronic acid serum for intense hydration" },
      { category: "Night Care", suggestion: "Nourishing night cream with peptides" }
    ],
    color: "from-blue-400 to-cyan-400"
  },
  normal: {
    type: "normal",
    title: "Normal Skin",
    description: "Lucky you! Your skin is well-balanced, not too oily or dry. It has a smooth texture, small pores, and generally doesn't experience many concerns.",
    characteristics: [
      "Balanced moisture levels",
      "Smooth, even texture",
      "Few blemishes or concerns",
      "Small, barely visible pores"
    ],
    recommendations: [
      "Maintain your routine with gentle cleansers",
      "Use lightweight moisturizers",
      "Focus on prevention with antioxidants and SPF",
      "Adapt to seasonal changes as needed"
    ],
    products: [
      { category: "Cleanser", suggestion: "Gentle foaming or gel cleanser" },
      { category: "Moisturizer", suggestion: "Lightweight, balanced moisturizer" },
      { category: "Serum", suggestion: "Vitamin C serum for brightness and protection" },
      { category: "SPF", suggestion: "Broad-spectrum sunscreen SPF 30+" }
    ],
    color: "from-green-400 to-emerald-400"
  },
  oily: {
    type: "oily",
    title: "Oily Skin",
    description: "Your skin produces excess sebum, leading to shine, larger pores, and potential breakouts. The good news? Oily skin tends to age more slowly!",
    characteristics: [
      "Shiny appearance, especially T-zone",
      "Enlarged, visible pores",
      "Prone to breakouts and blackheads",
      "Makeup tends to slide off"
    ],
    recommendations: [
      "Use gel or foaming cleansers",
      "Look for oil-free, non-comedogenic products",
      "Incorporate salicylic acid or niacinamide",
      "Don't skip moisturizer - use lightweight, gel-based ones"
    ],
    products: [
      { category: "Cleanser", suggestion: "Foaming cleanser with salicylic acid" },
      { category: "Toner", suggestion: "Niacinamide toner to control oil production" },
      { category: "Moisturizer", suggestion: "Oil-free, gel-based lightweight moisturizer" },
      { category: "Treatment", suggestion: "Clay mask (1-2x weekly) for deep cleansing" }
    ],
    color: "from-amber-400 to-orange-400"
  },
  combination: {
    type: "combination",
    title: "Combination Skin",
    description: "You have the best (and worst) of both worlds - oily T-zone with normal or dry cheeks. This means you need a balanced, zone-specific approach.",
    characteristics: [
      "Oily forehead, nose, and chin",
      "Normal to dry cheeks",
      "Larger pores in T-zone",
      "May have different concerns in different areas"
    ],
    recommendations: [
      "Use gentle, balanced cleansers",
      "Apply different products to different zones",
      "Lightweight moisturizer on T-zone, richer on cheeks",
      "Consider multi-masking approach"
    ],
    products: [
      { category: "Cleanser", suggestion: "Gentle gel cleanser that doesn't strip" },
      { category: "Toner", suggestion: "Balancing toner with niacinamide" },
      { category: "Moisturizer", suggestion: "Dual approach: gel for T-zone, cream for cheeks" },
      { category: "Treatment", suggestion: "Targeted serums for different zones" }
    ],
    color: "from-rose-400 to-pink-400"
  }
};

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [scores, setScores] = useState<{ [key: string]: number }>({ dry: 0, normal: 0, oily: 0, combination: 0 });
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<SkinTypeResult | null>(null);

  const handleAnswer = (questionId: number, option: Question['options'][0]) => {
    setAnswers({ ...answers, [questionId]: option.value });

    const newScores = { ...scores };
    Object.keys(option.points).forEach(key => {
      newScores[key] = (newScores[key] || 0) + option.points[key];
    });
    setScores(newScores);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResult = () => {
    const maxScore = Math.max(...Object.values(scores));
    const skinType = Object.keys(scores).find(key => scores[key] === maxScore) || 'normal';
    setResult(skinTypeResults[skinType]);
    setShowResult(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setScores({ dry: 0, normal: 0, oily: 0, combination: 0 });
    setShowResult(false);
    setResult(null);
  };

  const progress = ((Object.keys(answers).length) / questions.length) * 100;

  if (showResult && result) {
    return (
      <section id="quiz" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-rose-200 shadow-2xl overflow-hidden">
              <div className={`h-3 bg-gradient-to-r ${result.color}`}></div>
              <CardContent className="p-8 sm:p-12">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full mb-4">
                    <Sparkles className="w-10 h-10 text-rose-500" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-800">
                    Your Skin Type: <span className={`bg-gradient-to-r ${result.color} bg-clip-text text-transparent`}>{result.title}</span>
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                    {result.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                      Key Characteristics
                    </h3>
                    <ul className="space-y-2">
                      {result.characteristics.map((char, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{char}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                      <Sparkles className="w-5 h-5 text-rose-500 mr-2" />
                      Care Recommendations
                    </h3>
                    <ul className="space-y-2">
                      {result.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
                    Recommended Products for You
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {result.products.map((product, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                        <Badge className={`bg-gradient-to-r ${result.color} text-white border-0 mb-2`}>
                          {product.category}
                        </Badge>
                        <p className="text-gray-700 text-sm">{product.suggestion}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    onClick={resetQuiz}
                    variant="outline"
                    className="border-rose-300 text-rose-600 hover:bg-rose-50"
                  >
                    Take Quiz Again
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
            Discover Your Skin Type
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take our quick quiz to get personalized product recommendations
          </p>
        </motion.div>

        <Card className="border-rose-200 shadow-xl">
          <CardContent className="p-8 sm:p-12">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm font-semibold text-rose-600">
                  {Math.round(progress)}% Complete
                </span>
              </div>
              <div className="w-full h-2 bg-rose-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-rose-500 to-pink-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                  {questions[currentQuestion].question}
                </h3>

                <div className="space-y-3 mb-8">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswer(questions[currentQuestion].id, option)}
                      className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                        answers[questions[currentQuestion].id] === option.value
                          ? 'border-rose-500 bg-rose-50'
                          : 'border-gray-200 hover:border-rose-300 hover:bg-rose-50/50'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">{option.text}</span>
                        {answers[questions[currentQuestion].id] === option.value && (
                          <CheckCircle2 className="w-5 h-5 text-rose-500" />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between items-center">
              <Button
                onClick={handleBack}
                variant="outline"
                disabled={currentQuestion === 0}
                className="border-gray-300"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back
              </Button>

              <Button
                onClick={handleNext}
                disabled={!answers[questions[currentQuestion].id]}
                className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600"
              >
                {currentQuestion === questions.length - 1 ? 'See Results' : 'Next'}
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
