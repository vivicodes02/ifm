export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-gray-900 mb-4">About Us</h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We create digital experiences that inspire, innovate, and deliver results.
          </p>
          
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
              alt="Team"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div>
            <h3 className="text-4xl font-bold text-gray-800 mb-6">
              Crafting Beautiful Digital Solutions
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              We are a team of passionate designers and developers dedicated to pushing the boundaries of web design using modern tools like React, Tailwind, and cutting-edge animations.
            </p>
            <ul className="space-y-4">
              {['10+ Years Experience', '200+ Projects Delivered', 'Award-Winning Designs'].map((item) => (
                <li key={item} className="flex items-center text-lg text-gray-700">
                  <span className="text-purple-600 text-2xl mr-3">➤</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </section>
  );
}