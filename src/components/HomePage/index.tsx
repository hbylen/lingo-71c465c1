import React, { useState } from 'react';
import { Sun, Moon, Star, Heart, Zap, Shield } from 'lucide-react';

const HomePage: React.FC = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const features = [
    { icon: <Zap className="w-6 h-6" />, title: '高性能', description: '优化的代码结构，确保流畅体验' },
    { icon: <Shield className="w-6 h-6" />, title: '安全性', description: '内置多重安全防护机制' },
    { icon: <Heart className="w-6 h-6" />, title: '用户友好', description: '直观的界面设计，易于使用' },
  ];

  const testimonials = [
    { name: '张三', role: '产品经理', content: '这个页面设计非常现代化，用户体验极佳！' },
    { name: '李四', role: '开发者', content: '代码质量很高，很容易维护和扩展。' },
    { name: '王五', role: '设计师', content: '视觉效果出众，细节处理得很到位。' },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-purple-50 text-gray-900'}`}>
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Star className="w-8 h-8 text-primary-500" />
          <h1 className="text-2xl font-bold">Simple H5 Page</h1>
        </div>
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-white shadow'}`}
          aria-label={darkMode ? "切换到浅色模式" : "切换到深色模式"}
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
          现代化H5页面
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          使用React、TypeScript和Tailwind CSS构建的响应式页面，专为现代Web体验设计。
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            onClick={() => setCount(count + 1)}
          >
            点击计数 ({count})
          </button>
          <button className="px-6 py-3 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-medium rounded-lg transition-all duration-300">
            了解更多
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12">
        <h3 className="text-3xl font-bold text-center mb-12">核心特性</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="text-primary-500 mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-3xl font-bold text-primary-500">99%</div>
            <div>用户满意度</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-500">10K+</div>
            <div>活跃用户</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-500">24/7</div>
            <div>技术支持</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-500">5★</div>
            <div>平均评分</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-12">
        <h3 className="text-3xl font-bold text-center mb-12">用户评价</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
            >
              <p className="mb-4 italic">"{testimonial.content}"</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h3 className="text-3xl font-bold mb-6">准备开始了吗？</h3>
        <p className="mb-8 max-w-2xl mx-auto">
          加入数千名已经使用我们产品的满意用户，立即提升您的Web体验。
        </p>
        <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-bold rounded-lg text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
          立即免费试用
        </button>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-4 text-center">
          <p>© 2023 Simple H5 Page. 保留所有权利。</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;