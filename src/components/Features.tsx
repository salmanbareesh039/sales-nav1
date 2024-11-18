import React from 'react';
import { Search, BarChart, Target, Globe, Database, MessageCircle } from 'lucide-react';
import FeatureCard from './FeatureCard';

export default function Features() {
  const features = [
    {
      icon: Search,
      title: "Advanced Search",
      description: "Find the perfect prospects with powerful filters and advanced search capabilities"
    },
    {
      icon: BarChart,
      title: "Sales Intelligence",
      description: "Get real-time insights and updates about your prospects and accounts"
    },
    {
      icon: Target,
      title: "Lead Generation",
      description: "Generate high-quality leads with targeted recommendations"
    },
    {
      icon: Globe,
      title: "Extended Network",
      description: "Reach beyond your network and connect with decision-makers"
    },
    {
      icon: Database,
      title: "CRM Integration",
      description: "Seamlessly sync with your favorite CRM platforms"
    },
    {
      icon: MessageCircle,
      title: "InMail Credits",
      description: "Direct messaging to prospects outside your network"
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-black/50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-300">
            Powerful features to help you reach your professional goals
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}