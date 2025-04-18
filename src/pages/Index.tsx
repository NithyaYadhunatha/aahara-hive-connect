
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Truck, Users, Map, Phone, Clock, Shield, LineChart } from 'lucide-react';

const Index = () => {
  const [stats] = useState({
    mealsDelivered: 150000,
    activeVolunteers: 500,
    partnerNGOs: 50,
    citiesCovered: 25,
  });

  const features = [
    {
      icon: Phone,
      title: "AI-Powered Request System",
      description: "Easy food requests via Call/SMS with AI assistance",
    },
    {
      icon: Clock,
      title: "Real-Time Matching",
      description: "Instant matching between surplus and requests",
    },
    {
      icon: Truck,
      title: "Volunteer Network",
      description: "Dedicated volunteer-based delivery system",
    },
    {
      icon: Shield,
      title: "Transparent Coordination",
      description: "Seamless NGO and admin coordination",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 bg-gradient-to-b from-bumblebee-cream to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-bumblebee-black mb-6 animate-fade-in">
            Welcome to Aahara
          </h1>
          <p className="text-xl text-bumblebee-brown mb-8 max-w-2xl mx-auto animate-fade-in">
            A unified platform for rescuing surplus food and distributing it to those in need.
            Real-time coordination between food donors, volunteers, NGOs, and receivers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <Link
              to="/donate"
              className="bg-bumblebee-gold hover:bg-bumblebee-orange text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Donate Food
            </Link>
            <Link
              to="/request"
              className="bg-bumblebee-orange hover:bg-bumblebee-gold text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Request Food
            </Link>
            <Link
              to="/volunteer"
              className="bg-bumblebee-brown hover:bg-bumblebee-black text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Join as Volunteer
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-bumblebee-black mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <feature.icon className="w-12 h-12 text-bumblebee-gold mb-4" />
                <h3 className="text-xl font-semibold text-bumblebee-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-bumblebee-brown">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="py-16 px-6 bg-bumblebee-cream">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-bumblebee-black mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-bumblebee-orange animate-counter-up">
                {stats.mealsDelivered.toLocaleString()}
              </div>
              <p className="text-bumblebee-brown mt-2">Meals Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-bumblebee-orange animate-counter-up">
                {stats.activeVolunteers.toLocaleString()}
              </div>
              <p className="text-bumblebee-brown mt-2">Active Volunteers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-bumblebee-orange animate-counter-up">
                {stats.partnerNGOs.toLocaleString()}
              </div>
              <p className="text-bumblebee-brown mt-2">Partner NGOs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-bumblebee-orange animate-counter-up">
                {stats.citiesCovered.toLocaleString()}
              </div>
              <p className="text-bumblebee-brown mt-2">Cities Covered</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
