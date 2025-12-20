import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, ChefHat, Beer, Users } from 'lucide-react';
import Layout from '../components/Layout/Layout';
import MotionSection from '../components/UI/MotionSection';

const Careers = () => {
    const positions = [
        {
            title: "Line Cook",
            type: "Full-Time / Part-Time",
            icon: <ChefHat size={24} className="text-yellow" />,
            description: "We're looking for experienced cooks who can handle the heat. Must have a passion for food and working in a fast-paced environment."
        },
        {
            title: "Server / Bartender",
            type: "Part-Time",
            icon: <Beer size={24} className="text-yellow" />,
            description: "Do you love people and great drinks? Join our front-of-house team. Smart Serve required."
        },
        {
            title: "Dishwasher",
            type: "Part-Time",
            icon: <Users size={24} className="text-yellow" />,
            description: "The backbone of the kitchen. Great entry-level position with room for growth."
        }
    ];

    return (
        <Layout>
            <div className="page-container">
                <Helmet>
                    <title>Careers | Monty’s Joint</title>
                    <meta name="description" content="Join the team at Monty’s Joint! We're always looking for talented cooks, servers, and bartenders to join our Thunder Bay family." />
                    <link rel="canonical" href="https://montysjoint.com/careers/" />
                    <meta property="og:title" content="Careers | Monty’s Joint" />
                    <meta property="og:description" content="Join the team at Monty’s Joint! We're always looking for talented cooks, servers, and bartenders." />
                    <meta property="og:image" content="https://montysjoint.com/assets/montys-interior-gallery-6.webp" />
                    <meta property="og:url" content="https://montysjoint.com/careers" />
                    <meta property="og:type" content="website" />
                </Helmet>

                <div className="container section-padding">
                    <MotionSection className="text-center mb-16">
                        <h1 className="page-title">JOIN THE <span className="text-yellow">TEAM</span></h1>
                        <p className="page-subtitle">Big flavour, bigger opportunities. Work with us.</p>
                    </MotionSection>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <MotionSection delay={0.1} className="space-y-8">
                            <div className="bg-darker p-8 rounded-xl border border-gray-800">
                                <h2 className="text-2xl font-bold text-white mb-6">WHY WORK HERE?</h2>
                                <ul className="space-y-4 text-gray-300">
                                    <li className="flex items-start gap-3">
                                        <span className="text-yellow font-bold">✓</span>
                                        Competitive wages & tips
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-yellow font-bold">✓</span>
                                        Fun, energetic atmosphere
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-yellow font-bold">✓</span>
                                        Staff discounts on food
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-yellow font-bold">✓</span>
                                        Opportunities for growth
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-darker p-8 rounded-xl border border-gray-800">
                                <h2 className="text-2xl font-bold text-white mb-6">HOW TO APPLY</h2>
                                <p className="text-gray-300 mb-6">
                                    We're always looking for great people. Send your resume and a brief introduction to us, or stop by in person during non-peak hours (2pm - 4pm).
                                </p>
                                <div className="space-y-4">
                                    <a href="mailto:montysjoint@icloud.com" className="flex items-center gap-3 text-white hover:text-yellow transition-colors">
                                        <Mail className="text-yellow" />
                                        montysjoint@icloud.com
                                    </a>
                                    <div className="flex items-center gap-3 text-white">
                                        <MapPin className="text-yellow" />
                                        513 Victoria Ave E, Thunder Bay
                                    </div>
                                </div>
                            </div>
                        </MotionSection>

                        <div className="space-y-6">
                            <MotionSection delay={0.2}>
                                <h2 className="text-2xl font-bold text-white mb-6">CURRENT OPENINGS</h2>
                            </MotionSection>

                            {positions.map((job, index) => (
                                <MotionSection key={index} delay={0.3 + (index * 0.1)} className="bg-darker p-6 rounded-xl border border-gray-800 hover:border-yellow transition-colors group">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            {job.icon}
                                            <h3 className="text-xl font-bold text-white group-hover:text-yellow transition-colors">{job.title}</h3>
                                        </div>
                                        <span className="text-xs font-bold bg-yellow/10 text-yellow px-3 py-1 rounded-full uppercase tracking-wider">
                                            {job.type}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-4">{job.description}</p>
                                    <a href="mailto:montysjoint@icloud.com" className="text-sm font-bold text-white underline decoration-yellow hover:text-yellow">
                                        Apply Now
                                    </a>
                                </MotionSection>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Careers;
