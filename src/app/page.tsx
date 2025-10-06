export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 sm:p-20 flex flex-col gap-20">

      {/* Hero Section */}
      <section className="text-center flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-bold">Feynman Robotics</h1>
        <p className="text-xl max-w-xl">
          AI-driven lab automation. A seven-axis robotic arm that transforms
          repetitive lab tasks into autonomous precision work.
        </p>
        <div className="flex gap-4 mt-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Request Demo
          </button>
          <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
            Learn More
          </button>
        </div>
      </section>

      {/* Features / Innovation */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 border rounded-lg shadow">
          <h2 className="font-bold text-2xl mb-2">Autonomous</h2>
          <p>Executes lab protocols with zero manual setup.</p>
        </div>
        <div className="p-6 border rounded-lg shadow">
          <h2 className="font-bold text-2xl mb-2">Affordable</h2>
          <p>Accessible robotics without industrial-scale costs.</p>
        </div>
        <div className="p-6 border rounded-lg shadow">
          <h2 className="font-bold text-2xl mb-2">Precise</h2>
          <p>Matches or exceeds human handling tolerance.</p>
        </div>
      </section>

      {/* Vision */}
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
        <p>
          We aim to build a modular humanoid robotics ecosystem. Multi-limbed lab
          assistants that interact with scientists seamlessly using AI, natural
          language, and intuitive visual interfaces.
        </p>
      </section>

      {/* Footer / CTA */}
      <footer className="text-center mt-auto">
        <p>© 2025 Feynman Robotics. All rights reserved.</p>
      </footer>
    </div>
  );
}
