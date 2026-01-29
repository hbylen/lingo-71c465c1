import React, { useState } from 'react';
import { Heart, Star, Users, Zap, Coffee, Moon, Sun } from 'lucide-react';

const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [counter, setCounter] = useState(0);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800'}`}>
      {/* Header */}
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary-600">现代化H5页面</h1>
        <button 
          onClick={toggleTheme}
          className={`p-2 rounded-full ${isDarkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-yellow-400'}`}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
            欢迎访问
          </h2>
          <p className={`text-lg md:text-xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            这是一个现代化的H5页面，专为移动设备优化
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={incrementCounter}
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              点击计数: {counter}
            </button>
            <button className="bg-white hover:bg-gray-100 text-primary-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-200">
              开始探索
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">特色功能</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} card-shadow hover-lift transition-all`}>
              <Heart className="text-red-500 mb-4" size={48} />
              <h4 className="text-xl font-semibold mb-2">响应式设计</h4>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                完美适配各种屏幕尺寸，提供最佳的移动体验
              </p>
            </div>
            <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} card-shadow hover-lift transition-all`}>
              <Zap className="text-yellow-500 mb-4" size={48} />
              <h4 className="text-xl font-semibold mb-2">快速加载</h4>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                优化性能，确保页面快速响应和流畅体验
              </p>
            </div>
            <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} card-shadow hover-lift transition-all`}>
              <Coffee className="text-orange-500 mb-4" size={48} />
              <h4 className="text-xl font-semibold mb-2">用户友好</h4>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                简洁直观的界面设计，易于使用和导航
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-12 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-primary-50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600">10K+</div>
              <div className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>活跃用户</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600">98%</div>
              <div className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>满意度</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600">24/7</div>
              <div className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>在线服务</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600">150+</div>
              <div className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>功能特性</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">用户评价</h3>
          <div className="space-y-6">
            <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} card-shadow`}>
              <div className="flex items-center mb-4">
                <Star className="text-yellow-400 fill-current" />
                <Star className="text-yellow-400 fill-current" />
                <Star className="text-yellow-400 fill-current" />
                <Star className="text-yellow-400 fill-current" />
                <Star className="text-yellow-400 fill-current" />
              </div>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                "这个H5页面设计得非常棒，用户体验很好，加载速度也很快！"
              </p>
              <div className="font-semibold">- 张三</div>
            </div>
            <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} card-shadow`}>
              <div className="flex items-center mb-4">
                <Star className="text-yellow-400 fill-current" />
                <Star className="text-yellow-400 fill-current" />
                <Star className="text-yellow-400 fill-current" />
                <Star className="text-yellow-400 fill-current" />
                <Star className="text-yellow-400 fill-current" />
              </div>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                "界面简洁美观，功能实用，是我见过的最好的H5页面之一。"
              </p>
              <div className="font-semibold">- 李四</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">立即开始体验</h3>
          <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            加入我们，享受现代化的H5页面带来的便捷体验
          </p>
          <button className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            立即注册
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 text-center ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-4">
            <Users className="mr-2" size={20} />
            <span>简单H5页面 © 2023</span>
          </div>
          <p className="text-sm">
            专为移动设备优化的现代化H5页面解决方案
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;