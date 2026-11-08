import { Calendar, Layers, Sparkles, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            About <span className="text-blue-600">SAINI COLLECTION</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded" />
          <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed pt-2">
            Empowering businesses through cutting-edge technology and creative digital craftsmanship
            since our inception. We bridge the gap between complex ideas and seamless user
            experiences.
          </p>
        </div>

        {/* Journey and Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Column 1: Our Journey (White Card) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-gray-100 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-50 text-blue-600 w-10 h-10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-2xl text-blue-600">Our Journey</h3>
              </div>

              <p className="font-sans text-gray-600 leading-relaxed text-base sm:text-lg">
                Saini Collection is a premier digital engineering partner built on a foundation of decades of expertise. Led by
                a senior technologist with deep enterprise architecture expertise, we transform bold visions into
                high-performance digital solutions. Every project we undertake reflects our unwavering commitment to
                institutional-grade quality and agile delivery.
              </p>
            </div>

            {/* Stats row inside Journey */}
            <div className="grid grid-cols-2 gap-6 pt-10 border-t border-gray-100 mt-10">
              <div className="space-y-1">
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-blue-600">
                  Senior
                </div>
                <div className="font-sans font-bold text-xs uppercase tracking-wider text-gray-400">
                  Technical Leadership
                </div>
              </div>
              <div className="space-y-1">
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-blue-600">
                  2
                </div>
                <div className="font-sans font-bold text-xs uppercase tracking-wider text-gray-400">
                  Live Projects
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Our Mission (Blue Card) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="bg-blue-600 rounded-2xl p-6 sm:p-10 text-white shadow-xl shadow-blue-600/10 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-white/10 text-white w-10 h-10 rounded-lg flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white">Our Mission</h3>
              </div>

              <p className="font-sans text-blue-50 leading-relaxed text-base sm:text-lg">
                "Our mission is to provide superior, world-class website design and digital solutions
                that empower businesses. We focus on clear communication, affordable pricing, and
                delivering high-quality work every single time."
              </p>
            </div>

            {/* Sub-features or tags for Our Mission */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10 border-t border-white/10 mt-10">
              <div className="flex items-start space-x-3">
                <div className="bg-white/10 text-white p-2 rounded-lg mt-0.5">
                  <Sparkles className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="font-display font-bold text-base text-white">Expert Engineers</div>
                  <div className="font-sans text-xs text-blue-100 mt-0.5">
                    Focused execution and agility
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-white/10 text-white p-2 rounded-lg mt-0.5">
                  <Award className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="font-display font-bold text-base text-white">Quality First</div>
                  <div className="font-sans text-xs text-blue-100 mt-0.5">
                    No compromises on standards
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
