import { Layout, Code, Server, ShoppingBag, Database, Palette } from 'lucide-react';
import { motion } from 'motion/react';
import { ServiceCard } from '../types';

export default function Services() {
  const services: ServiceCard[] = [
    {
      id: 'web-design',
      title: 'Website Design',
      description:
        'Creating visually stunning, user-friendly, and high-converting websites tailored to your brand identity.',
      tags: ['RESPONSIVE', 'MODERN UI', 'UX RESEARCH'],
      iconName: 'layout',
    },
    {
      id: 'frontend-dev',
      title: 'Frontend Development',
      description:
        'Pixel-perfect implementation using React.js and modern SCSS for robust, scalable web applications.',
      tags: ['REACT.JS', 'TAILWIND', 'PERFORMANCE'],
      iconName: 'code',
    },
    {
      id: 'backend-solutions',
      title: 'Backend Solutions',
      description:
        'Secure and scalable server-side logic using Node.js, .NET, and Python for complex business needs.',
      tags: ['NODE.JS', '.NET', 'APIS'],
      iconName: 'server',
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce',
      description:
        'Full-scale online stores built on Shopify or custom WordPress solutions to drive your sales.',
      tags: ['SHOPIFY', 'WORDPRESS', 'PAYMENT INTEGRATION'],
      iconName: 'shopping-bag',
    },
    {
      id: 'database-mgmt',
      title: 'Database Management',
      description:
        'Efficient data architecture using MySQL, MongoDB, and PostgreSQL for reliable data handling.',
      tags: ['SQL', 'NOSQL', 'OPTIMIZATION'],
      iconName: 'database',
    },
    {
      id: 'uiux-branding',
      title: 'UI/UX & Branding',
      description:
        'Crafting unique identities with Figma, Photoshop, and Illustrator for posters and digital assets.',
      tags: ['FIGMA', 'BRANDING', 'VISUAL DESIGN'],
      iconName: 'palette',
    },
  ];

  const getIcon = (name: ServiceCard['iconName']) => {
    switch (name) {
      case 'layout':
        return <Layout className="w-6 h-6 text-blue-600" />;
      case 'code':
        return <Code className="w-6 h-6 text-blue-600" />;
      case 'server':
        return <Server className="w-6 h-6 text-blue-600" />;
      case 'shopping-bag':
        return <ShoppingBag className="w-6 h-6 text-blue-600" />;
      case 'database':
        return <Database className="w-6 h-6 text-blue-600" />;
      case 'palette':
        return <Palette className="w-6 h-6 text-blue-600" />;
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Our IT <span className="text-blue-600">Services &amp; Tools</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded" />
          <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed pt-2">
            Comprehensive solutions designed to define your business vision and drive growth.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-100 shadow-sm hover:shadow-xl hover:shadow-blue-600/5 transition-all duration-300 flex flex-col justify-between items-start text-left"
            >
              <div className="space-y-5">
                {/* Icon frame */}
                <div className="bg-blue-50 group-hover:bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center transition-colors shadow-sm">
                  {getIcon(service.iconName)}
                </div>

                {/* Content */}
                <h3 className="font-display font-extrabold text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-50 w-full">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-blue-50/75 text-[10px] font-bold text-blue-600 px-2.5 py-1 rounded-md tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
