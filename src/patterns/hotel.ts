const hotel = {
  '@type': 'Hotel',
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
  starRating: {
    '@type': 'Rating',
    ratingValue: 'string',
  },
  numberOfRooms: 'number',
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
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['string', 'string'],
      opens: 'string',
      closes: 'string',
    },
  ],
  sameAs: ['string', 'string'],
};

export default hotel;
