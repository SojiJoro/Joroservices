const CardGrid = () => {
  const cards = [
    {
      img: 'https://tecdn.b-cdn.net/img/new/standard/city/042.webp',
      location: 'Registered Office',
      address: 'Kemp House, 152–160 City Road, London, EC1V 2NX, United Kingdom',
      phone: '+44 (0)20 7946 0958',
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
              <strong>Phone:</strong> {card.phone}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
