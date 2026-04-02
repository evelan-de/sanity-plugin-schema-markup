import { defineType, defineField } from 'sanity';
import { BedDouble } from 'lucide-react';
import LodgingBusinessListSelect from './LodgingBusinessListSelect';
import openingHoursSpecification from '../localBusiness/openingHoursSpecification';
import id from '../../common/id';
import CompanyName from '../../../components/GlobalSetting/CompanyName';
import Domain from '../../../components/GlobalSetting/Domain';
import Logo from '../../../components/GlobalSetting/Logo';
import Phone from '../../../components/GlobalSetting/Phone';
import SocialLinks from '../../../components/GlobalSetting/SocialLinks';

const lodgingBusiness = (name = 'lodgingBusiness') => {
  return defineType({
    name,
    type: 'object',
    title: 'Lodging Business',
    icon: BedDouble,
    fields: [
      defineField({
        name: 'type',
        title: 'Type',
        type: 'string',
        components: {
          input: LodgingBusinessListSelect,
        },
        initialValue: 'LodgingBusiness',
      }),
      defineField({
        name: 'name',
        title: 'Name',
        type: 'string',
        components: {
          input: CompanyName,
        },
      }),
      defineField({
        name: 'alternateName',
        title: 'Alternate Name',
        type: 'string',
      }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
      }),
      defineField({
        name: 'url',
        title: 'Url',
        type: 'url',
        components: {
          input: Domain,
        },
      }),
      defineField({
        name: 'logo',
        title: 'Logo',
        type: 'image',
        components: {
          input: Logo,
        },
      }),
      defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
      }),
      defineField({
        name: 'priceRange',
        title: 'Price Range',
        description: 'e.g. "$$" or "€€"',
        type: 'string',
      }),
      defineField({
        name: 'currenciesAccepted',
        title: 'Currencies Accepted',
        description: 'e.g. "EUR", "USD"',
        type: 'string',
      }),
      defineField({
        name: 'paymentAccepted',
        title: 'Payment Accepted',
        description: 'e.g. "Cash, Credit Card, Bank Transfer"',
        type: 'string',
      }),
      defineField({
        name: 'telephone',
        title: 'Telephone',
        type: 'string',
        components: {
          input: Phone,
        },
      }),
      defineField({
        name: 'email',
        title: 'Email',
        type: 'string',
      }),
      defineField({
        name: 'checkinTime',
        title: 'Check-in Time',
        description: 'e.g. "14:00"',
        type: 'string',
      }),
      defineField({
        name: 'checkoutTime',
        title: 'Check-out Time',
        description: 'e.g. "11:00"',
        type: 'string',
      }),
      defineField({
        name: 'petsAllowed',
        title: 'Pets Allowed',
        type: 'boolean',
        initialValue: false,
      }),
      defineField({
        name: 'numberOfRooms',
        title: 'Number of Rooms',
        type: 'number',
      }),
      defineField({
        name: 'amenityFeature',
        title: 'Amenities',
        description: 'List of amenities (e.g. "Free WiFi", "Parking", "Breakfast")',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              defineField({
                name: 'type',
                title: 'Type',
                type: 'string',
                hidden: true,
                initialValue: 'LocationFeatureSpecification',
              }),
              defineField({
                name: 'name',
                title: 'Amenity Name',
                type: 'string',
              }),
              defineField({
                name: 'value',
                title: 'Available',
                type: 'boolean',
                initialValue: true,
              }),
            ],
          },
        ],
      }),
      defineField({
        name: 'starRating',
        title: 'Star Rating',
        type: 'object',
        fields: [
          defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
            hidden: true,
            initialValue: 'Rating',
          }),
          defineField({
            name: 'ratingValue',
            title: 'Rating Value',
            description: 'e.g. "4" for a 4-star property',
            type: 'string',
          }),
        ],
      }),
      defineField({
        name: 'address',
        title: 'Address',
        type: 'object',
        fields: [
          defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
            hidden: true,
            initialValue: 'PostalAddress',
          }),
          defineField({
            name: 'streetAddress',
            title: 'Street',
            type: 'string',
          }),
          defineField({
            name: 'addressLocality',
            title: 'City',
            type: 'string',
          }),
          defineField({
            name: 'addressRegion',
            title: 'State/Province/Region',
            type: 'string',
          }),
          defineField({
            name: 'postalCode',
            title: 'Postal Code',
            type: 'string',
          }),
          defineField({
            name: 'addressCountry',
            title: 'Country',
            type: 'string',
          }),
        ],
      }),
      defineField({
        name: 'geo',
        title: 'Geo',
        type: 'object',
        fields: [
          defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
            hidden: true,
            initialValue: 'GeoCoordinates',
          }),
          defineField({
            name: 'latitude',
            title: 'Latitude',
            type: 'string',
          }),
          defineField({
            name: 'longitude',
            title: 'Longitude',
            type: 'string',
          }),
        ],
      }),
      defineField({
        name: 'hasMap',
        title: 'Include a map url',
        type: 'url',
      }),
      openingHoursSpecification,
      defineField({
        name: 'sameAs',
        title: 'Social Profiles',
        description: 'Add social profile url on each field',
        type: 'array',
        of: [{ type: 'string' }],
        components: {
          input: SocialLinks,
        },
      }),
      id,
    ],
    preview: {
      select: {
        lodgingName: 'name',
        lodgingType: 'type',
      },
      prepare(selection) {
        const { lodgingName, lodgingType } = selection;
        return {
          title: lodgingName || 'Untitled',
          subtitle: lodgingType || 'LodgingBusiness',
          media: BedDouble,
        };
      },
    },
  });
};

export default lodgingBusiness;
