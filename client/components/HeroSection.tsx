'use client';

const HeroSection = () => {
    return (
        <div className="relative bg-gradient-to-br from-gray-900 via-indigo-950 to-blue-900 py-20 px-6 overflow-hidden">
            <div className="absolute inset-0 opacity-20"
                style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #4f46e5 0%, transparent 50%), radial-gradient(circle at 80% 20%, #0ea5e9 0%, transparent 50%)' }} />
            <div className="relative max-w-4xl mx-auto text-center">
                <span className="inline-block bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
                    Knowledge Hub
                </span>
                <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight">
                    Hello, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">What Do You Want To Learn?</span>
                </h1>
                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    
                </p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                    <span className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md shadow-indigo-200/20 cursor-pointer hover:bg-indigo-700 transition">DSA Online</span>
                    <span className="bg-white/10 border border-white/20 text-white px-5 py-2 rounded-full text-sm font-semibold backdrop-blur-sm cursor-pointer hover:bg-white/20 transition">Master DS & ML</span>
                    <span className="bg-white/10 border border-white/20 text-white px-5 py-2 rounded-full text-sm font-semibold backdrop-blur-sm cursor-pointer hover:bg-white/20 transition">Full Stack Live</span>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
