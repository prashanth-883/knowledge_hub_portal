'use client';

const HeroSection = () => {
    return (
        <div className="bg-gray-100 py-16 px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                Hello, What Do You Want To Learn?
            </h1>

            {/* Search Bar Removed as per request */}

            <div className="flex flex-wrap justify-center gap-4 mt-8">
                <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-gray-700 transition">DSA Online</span>
                <span className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-gray-200 transition">Master DS & ML</span>
                <span className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-gray-200 transition">Full Stack Live</span>
            </div>
        </div>
    );
};

export default HeroSection;
