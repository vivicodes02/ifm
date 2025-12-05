export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-xl mb-10 opacity-90">
          Have a project in mind? Let's bring your vision to life.
        </p>
        <button className="bg-white text-purple-600 font-bold py-4 px-10 rounded-full text-lg hover:bg-gray-100 transform hover:scale-200 transition duration-300 shadow-2xl">
          Contact Us Today
        </button>

        <div className="mt-16 flex justify-center space-x-10">
          {['Email', 'Twitter', 'LinkedIn'].map((social) => (
            <div key={social} className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full mx-auto mb-3 flex items-center justify-center text-3xl">
                {social === 'Email' ? '✉' : social === 'Twitter' ? '🐦' : '💼'}
              </div>
              <p className="text-lg">{social}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}