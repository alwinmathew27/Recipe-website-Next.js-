const About = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-5xl font-bold mb-4">About Us</h1>
                    <p className="text-xl opacity-90">Passionate about creating exceptional experiences since 2020</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-amber-500">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Mission</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We strive to deliver innovative solutions that transform the way people interact with technology. 
                            Our commitment is to create products that are not only functional but also intuitive and delightful to use. 
                            Every project we undertake is driven by our passion for excellence and dedication to our clients' success.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-orange-500">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Vision</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            To be a leading force in digital innovation, recognized for our creativity, technical expertise, 
                            and unwavering commitment to quality. We envision a future where technology seamlessly enhances 
                            everyday life, and we're dedicated to making that vision a reality through our work.
                        </p>
                    </div>
                </div>

                {/* Story Section */}
                <div className="bg-white p-10 rounded-lg shadow-md mb-16">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-4">
                        Founded in 2020, we started as a small team of passionate developers and designers who believed 
                        in the power of technology to make a difference. What began in a small co-working space has grown 
                        into a dynamic company serving clients across multiple industries.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed mb-4">
                        Over the years, we've had the privilege of working with startups, established businesses, and 
                        everything in between. Each project has taught us valuable lessons and helped us refine our approach 
                        to problem-solving and innovation.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Today, we're proud to be a trusted partner for businesses looking to leverage technology for growth. 
                        Our team has expanded, but our core values remain the same: integrity, innovation, and a relentless 
                        focus on delivering results.
                    </p>
                </div>

                {/* Values Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Core Values</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-4">🎯</div>
                            <h3 className="text-xl font-bold mb-3 text-gray-800">Excellence</h3>
                            <p className="text-gray-600">
                                We pursue excellence in everything we do, from code quality to customer service, 
                                ensuring every detail meets our high standards.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-4">💡</div>
                            <h3 className="text-xl font-bold mb-3 text-gray-800">Innovation</h3>
                            <p className="text-gray-600">
                                We embrace new technologies and creative approaches, constantly pushing boundaries 
                                to deliver cutting-edge solutions.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-4">🤝</div>
                            <h3 className="text-xl font-bold mb-3 text-gray-800">Integrity</h3>
                            <p className="text-gray-600">
                                We build lasting relationships based on trust, transparency, and honest communication 
                                with our clients and team members.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-10 rounded-lg shadow-xl">
                    <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
                    <p className="text-lg text-center max-w-3xl mx-auto leading-relaxed">
                        We're a diverse team of designers, developers, strategists, and innovators united by a common goal: 
                        creating exceptional digital experiences. Our collaborative approach ensures that every perspective 
                        is valued and every solution is thoroughly crafted.
                    </p>
                    <div className="text-center mt-8">
                        <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition-colors">
                            Join Our Team
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About