import { FaWhatsapp } from 'react-icons/fa';
import { MapPin, Phone } from 'lucide-react';

const CardGrid = () => {
  const cards = [
    {
      img: 'https://tecdn.b-cdn.net/img/new/standard/city/042.webp',
      location: 'Registered Office',
      address: 'Kemp House, 152-160 City Road, London, EC1V 2NX, United Kingdom',
      phone: '07867 374034',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden"
        >
          <img
            className="w-full h-48 object-cover"
            src={card.img}
            alt={card.location}
            loading="lazy"
            decoding="async"
          />
          <div className="p-6">
            <h5 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <MapPin size={18} className="text-accent" />
              {card.location}
            </h5>
            <p className="text-sm text-gray-600 mb-3">{card.address}</p>
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <Phone size={14} className="text-accent" />
              <a href="tel:+4407867374034" className="hover:text-accent transition-colors">
                {card.phone}
              </a>
            </p>
            <a
              href="https://wa.me/447867374034"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium text-sm transition-colors"
            >
              <FaWhatsapp className="text-lg" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
