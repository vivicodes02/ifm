export default function Dashboard() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      
      <div className="max-w-7xl mx-auto px-6 text-center py-20">

        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
          Welcome to the<br />
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Future of Web
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Build stunning, fast, and modern websites with React & Tailwind CSS.
        </p>

        <button className="btn-primary text-lg hover:text-blue-500">
          Get Started Now
        </button>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {['Lightning Fast', 'Fully Responsive', 'Modern Design','Agatha'].map((feature, i) => (
            <div
              key={i}
              className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl">
                ✓
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800">{feature}</h3>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}