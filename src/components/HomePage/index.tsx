import React, { useState } from 'react';
import { Sun, Moon, Star, Heart, Zap } from 'lucide-react';

const HomePage = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const features = [
    {
      id: 1,
      title: "响应式设计",
      description: "完美适配各种设备屏幕尺寸",
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 2,
      title: "现代化UI",
      description: "采用最新的设计趋势和交互体验",
      icon: <Star className="w-6 h-6" />
    },
    {
      id: 3,
      title: "高性能",
      description: "基于Vite构建，加载速度快",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-purple-50 text-gray-900'}`}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            简单H5页面
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${darkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-yellow-400'}`}
            aria-label={darkMode ? "切换到浅色模式" : "切换到深色模式"}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </header>

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            欢迎来到
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            这是一个现代化、响应式的H5页面示例
          </p>
          
          {/* Counter */}
          <div className="flex flex-col items-center mb-8">
            <p className="text-lg mb-4">点击次数: {count}</p>
            <button
              onClick={() => setCount(count + 1)}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              点击我 ({count})
            </button>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">核心特性</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="mr-3 text-blue-600">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-semibold">{feature.title}</h4>
                </div>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-gray-200 dark:border-gray-700">
          <p>&copy; 2024 简单H5页面. 保留所有权利.</p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;