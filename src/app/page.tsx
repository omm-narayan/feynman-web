export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-white text-black flex flex-col items-center justify-center p-8 gap-6">
      
      {/* Company Name */}
      <h1 className="text-6xl font-extrabold text-center">
        Feynman Robotics
      </h1>

      {/* Abstract / Description */}
      <p className="text-lg sm:text-xl max-w-2xl text-center leading-relaxed">
        Feynman Robotics is developing an AI-driven, seven-axis robotic arm designed
        specifically for laboratory environments. Unlike conventional industrial
        robots optimized for factories, our robotic arm autonomously executes lab
        procedures with precision, reducing repetitive manual work. We are building
        a seamless, intelligent, and affordable “lab technician” in robotic form.
      </p>

      {/* Founder Credit */}
      <p className="text-sm mt-4 text-center italic">
        Founded by Omm Narayan Sethi
      </p>

    </div>
  );
}
