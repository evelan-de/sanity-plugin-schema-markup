const vacationRental = {
  '@type': 'VacationRental',
  '@id': 'string',
  name: 'string',
  alternateName: 'string',
  description: 'string',
  logo: 'string',
  image: 'string',
  url: 'string',
  telephone: 'string',
  email: 'string',
  priceRange: 'string',
  currenciesAccepted: 'string',
  paymentAccepted: 'string',
  checkinTime: 'string',
  checkoutTime: 'string',
  petsAllowed: 'string',
  numberOfRooms: 'number',
  occupancy: {
    '@type': 'QuantitativeValue',
    maxValue: 'number',
  },
  amenityFeature: [
    {
      '@type': 'LocationFeatureSpecification',
      name: 'string',
      value: 'string',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'string',
    addressLocality: 'string',
    addressRegion: 'string',
    postalCode: 'string',
    addressCountry: 'string',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 0.0,
    longitude: 0.0,
  },
  hasMap: 'string',
  sameAs: ['string', 'string'],
};

export default vacationRental;
