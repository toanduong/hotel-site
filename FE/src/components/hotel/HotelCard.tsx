import Image from 'next/image';
import { Hotel } from '@/common-logic/types';
import { formatPrice } from '@/common-logic/utils/price.utils';
import Card from '../common/Card';

interface HotelCardProps {
    hotel: Hotel;
    onClick?: () => void;
}

export default function HotelCard({ hotel, onClick }: HotelCardProps) {
    return (
        <Card hover onClick={onClick} className="group">
            {/* Hotel Image */}
            <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                    src={hotel.images[0]} // Sử dụng URL ảnh gốc
                    alt={hotel.name}
                    // Các class này thay thế cho 'fill': 
                    // Đặt ảnh chiếm 100% width/height của thẻ cha, và position absolute
                    className="object-cover absolute inset-0 w-full h-full group-hover:scale-110 transition-transform duration-300"
                />

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                    <span className="text-yellow-500">⭐</span>
                    <span className="font-semibold text-sm">{hotel.rating}</span>
                    <span className="text-gray-500 text-xs">({hotel.reviewCount})</span>
                </div>
            </div>

            {/* Hotel Info */}
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-primary-500 transition-colors">
                    {hotel.name}
                </h3>

                <div className="flex items-center text-gray-600 text-sm mb-3">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{hotel.location.city}, {hotel.location.country}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {hotel.description}
                </p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.slice(0, 3).map((amenity) => (
                        <span
                            key={amenity.id}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                        >
                            {amenity.name}
                        </span>
                    ))}
                    {hotel.amenities.length > 3 && (
                        <span className="text-xs text-gray-500">
                            +{hotel.amenities.length - 3} more
                        </span>
                    )}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                        <p className="text-xs text-gray-500">Starting from</p>
                        <p className="text-xl font-bold text-primary-500">
                            {formatPrice(hotel.priceRange.min)}
                        </p>
                        <p className="text-xs text-gray-500">per night</p>
                    </div>
                    <button className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors text-sm font-medium">
                        View Details
                    </button>
                </div>
            </div>
        </Card>
    );
}
