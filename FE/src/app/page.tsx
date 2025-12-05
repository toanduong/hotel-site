'use client';

import HeroSlider from '@/components/common/HeroSlider';
import HotelCarousel from '@/components/hotel/HotelCarousel';
import HotelsByCity from '@/components/hotel/HotelsByCity';
import { dummyHotels } from '@/common-logic/data/dummyHotels';

export default function HomePage() {
    // Get first 6 hotels for trending section
    const trendingHotels = dummyHotels.slice(0, 6);

    // Group hotels by city
    const hotelsByCity = dummyHotels.reduce((acc, hotel) => {
        const city = hotel.location.city;
        if (!acc[city]) {
            acc[city] = [];
        }
        acc[city].push(hotel);
        return acc;
    }, {} as { [key: string]: typeof dummyHotels });

    return (
        <main className="min-h-screen">
            {/* Hero Section with Image Slider */}
            <HeroSlider />

            {/* Trending Hotels Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                Trending Hotels
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Most popular destinations chosen by travelers
                            </p>
                        </div>
                        <button className="hidden md:block text-primary-500 font-semibold hover:text-primary-600 transition-colors">
                            View All →
                        </button>
                    </div>

                    <HotelCarousel hotels={trendingHotels} />

                    <div className="mt-8 text-center md:hidden">
                        <button className="text-primary-500 font-semibold hover:text-primary-600 transition-colors">
                            View All Hotels →
                        </button>
                    </div>
                </div>
            </section>

            {/* Hotels by City Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                            Explore by City
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Discover hotels in popular Vietnamese destinations
                        </p>
                    </div>

                    <HotelsByCity hotelsByCity={hotelsByCity} />
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                        Why Choose Us
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-800 p-8 rounded-lg shadow-md text-center border border-gray-700 hover:border-primary-500 transition-colors">
                            <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🏨</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-white">Best Hotels</h3>
                            <p className="text-gray-300">
                                Handpicked selection of top-rated hotels
                            </p>
                        </div>

                        <div className="bg-gray-800 p-8 rounded-lg shadow-md text-center border border-gray-700 hover:border-primary-500 transition-colors">
                            <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">💰</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-white">Best Prices</h3>
                            <p className="text-gray-300">
                                Guaranteed lowest prices for your bookings
                            </p>
                        </div>

                        <div className="bg-gray-800 p-8 rounded-lg shadow-md text-center border border-gray-700 hover:border-primary-500 transition-colors">
                            <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">⭐</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-white">24/7 Support</h3>
                            <p className="text-gray-300">
                                Round-the-clock customer support for you
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Living Stories Collective */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            The Living Stories Collective
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Discover moments and memories from travelers around the world
                        </p>
                    </div>

                    {/* Album Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {/* Large Image 1 */}
                        <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-lg">
                            <img
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=800&fit=crop"
                                alt="Beach Resort"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="font-semibold text-xl">Tropical Paradise</h3>
                                    <p className="text-sm text-gray-200">Maldives Beach Resort</p>
                                </div>
                            </div>
                        </div>

                        {/* Small Image 1 */}
                        <div className="relative group overflow-hidden rounded-lg aspect-square">
                            <img
                                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=400&fit=crop"
                                alt="City Hotel"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-2 left-2 text-white">
                                    <h3 className="font-semibold text-sm">Urban Escape</h3>
                                </div>
                            </div>
                        </div>

                        {/* Small Image 2 */}
                        <div className="relative group overflow-hidden rounded-lg aspect-square">
                            <img
                                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=400&fit=crop"
                                alt="Boutique Hotel"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-2 left-2 text-white">
                                    <h3 className="font-semibold text-sm">Boutique Stay</h3>
                                </div>
                            </div>
                        </div>

                        {/* Small Image 3 */}
                        <div className="relative group overflow-hidden rounded-lg aspect-square">
                            <img
                                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=400&fit=crop"
                                alt="Mountain Lodge"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-2 left-2 text-white">
                                    <h3 className="font-semibold text-sm">Mountain View</h3>
                                </div>
                            </div>
                        </div>

                        {/* Small Image 4 */}
                        <div className="relative group overflow-hidden rounded-lg aspect-square">
                            <img
                                src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=400&fit=crop"
                                alt="Garden Hotel"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-2 left-2 text-white">
                                    <h3 className="font-semibold text-sm">Garden Oasis</h3>
                                </div>
                            </div>
                        </div>

                        {/* Large Image 2 */}
                        <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-lg">
                            <img
                                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=800&fit=crop"
                                alt="Luxury Resort"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="font-semibold text-xl">Luxury Experience</h3>
                                    <p className="text-sm text-gray-200">5-Star Resort & Spa</p>
                                </div>
                            </div>
                        </div>

                        {/* Small Image 5 */}
                        <div className="relative group overflow-hidden rounded-lg aspect-square">
                            <img
                                src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=400&fit=crop"
                                alt="Rooftop View"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-2 left-2 text-white">
                                    <h3 className="font-semibold text-sm">Skyline Views</h3>
                                </div>
                            </div>
                        </div>

                        {/* Small Image 6 */}
                        <div className="relative group overflow-hidden rounded-lg aspect-square">
                            <img
                                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=400&fit=crop"
                                alt="Cozy Room"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-2 left-2 text-white">
                                    <h3 className="font-semibold text-sm">Cozy Comfort</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* View More Button */}
                    <div className="text-center mt-12">
                        <button className="bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-600 transition-colors shadow-md">
                            View All Stories
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
