import { FaWhatsapp } from 'react-icons/fa';

const CardGrid = () => {
  const cards = [
    {
      img: 'https://tecdn.b-cdn.net/img/new/standard/city/042.webp',
      location: 'Registered Office',
      address: 'Kemp House, 152–160 City Road, London, EC1V 2NX, United Kingdom',
      phone: '07345 019824',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col self-start rounded-lg text-gray-900 shadow-lg sm:shrink-0 sm:grow sm:basis-0 w-full sm:w-1/2 lg:w-1/3 overflow-hidden"
        >
          <img
            className="w-full h-48 object-cover"
            src={card.img}
            alt={card.location}
          />
          <div className="p-6">
            <h5 className="mb-4 text-xl font-semibold leading-tight">
              {card.location}
            </h5>
            <p className="mb-4 text-base text-gray-600">{card.address}</p>
            <p className="text-base text-gray-600">
              <strong>Phone:</strong>{' '}
              <a href="tel:+4407345019824" className="hover:text-accent-dark">
                {card.phone}
              </a>
            </p>
            <a
              href="https://wa.me/447345019824"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
            >
              <FaWhatsapp className="text-xl" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
