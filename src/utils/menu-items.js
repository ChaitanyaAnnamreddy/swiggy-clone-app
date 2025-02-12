export const menuItems = [
  {
    statusCode: 0,
    data: {
      statusMessage: 'done successfully',
      cards: [
        {
          card: {
            card: {
              '@type':
                'type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2',
              text: 'Halli Donne Biryani',
              headerStyling: {
                textColor: 'text_Highest_Emphasis',
                textVariant: 'header_H3_Black',
              },
            },
          },
        },
        {
          card: {
            card: {
              '@type':
                'type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab',
              tabs: [
                {
                  id: 'Order Online',
                  title: 'Order Online',
                },
              ],
            },
          },
        },
        {
          card: {
            card: {
              '@type':
                'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
              info: {
                id: '113657',
                name: 'Halli Donne Biryani',
                city: 'Bangalore',
                slugs: {
                  restaurant: 'halli-jonne-biryani-koramangala',
                  city: 'bangalore',
                },
                uniqueId: 'e51e6528-4859-48c8-8fed-e84c17dc2d76',
                cloudinaryImageId: 'gsc5bv2hehh1mzqxvwb7',
                locality: '5th Block',
                areaName: 'Koramangala',
                costForTwo: '20000',
                costForTwoMessage: '₹200 for two',
                cuisines: ['South Indian'],
                avgRating: 4.1,
                feeDetails: {
                  restaurantId: '113657',
                  fees: [{}],
                },
                parentId: '92936',
                avgRatingString: '4.1',
                totalRatingsString: '1.4K+ ratings',
                sla: {
                  restaurantId: '113657',
                  deliveryTime: 34,
                  minDeliveryTime: 30,
                  maxDeliveryTime: 35,
                  lastMileTravel: 1.4,
                  serviceability: 'SERVICEABLE',
                  stressFactor: 1,
                  rainMode: 'RAIN_MODE_NONE',
                  longDistance: 'LONG_DISTANCE_NOT_LONG_DISTANCE',
                  zoneId: 1,
                  slaString: '30-35 MINS',
                  lastMileTravelString: '1.4 km',
                  iconType: 'ICON_TYPE_EMPTY',
                },
                availability: {
                  nextCloseTime: '2025-02-12 23:00:00',
                  visibility: true,
                  opened: true,
                  restaurantClosedMeta: {},
                },
                aggregatedDiscountInfo: {
                  header: '10% off',
                  shortDescriptionList: [
                    {
                      meta: '10% off | Use TRYNEW',
                      discountType: 'Percentage',
                      operationType: 'RESTAURANT',
                    },
                    {
                      discountType: 'Percentage',
                      operationType: 'RESTAURANT',
                    },
                  ],
                  descriptionList: [
                    {
                      meta: '10% off up to ₹40 | Use code TRYNEW',
                      discountType: 'Percentage',
                      operationType: 'RESTAURANT',
                    },
                    {
                      meta: '10% off upto ₹150|Use HSBCFEST Above ₹499',
                      discountType: 'Percentage',
                      operationType: 'RESTAURANT',
                    },
                  ],
                  visible: true,
                },
                badges: {},
                slugString: 'halli-jonne-biryani-koramangala',
                isOpen: true,
                labels: [
                  {
                    title: 'Timings',
                    message: 'null',
                  },
                  {
                    title: 'Address',
                    message:
                      '93, 17th H Main Rd, 5th Block, Koramangala, Bengaluru, Karnataka 560047',
                  },
                  {
                    title: 'Cuisines',
                    message: 'South Indian',
                  },
                ],
                totalRatings: 1400,
                aggregatedDiscountInfoV2: {
                  header: '10% off',
                  shortDescriptionList: [
                    {
                      meta: '10% off | Use TRYNEW',
                      discountType: 'Percentage',
                      operationType: 'RESTAURANT',
                    },
                    {
                      discountType: 'Percentage',
                      operationType: 'RESTAURANT',
                    },
                  ],
                  descriptionList: [
                    {
                      meta: '10% off up to ₹40 | Use code TRYNEW',
                      discountType: 'Percentage',
                      operationType: 'RESTAURANT',
                    },
                    {
                      meta: '10% off upto ₹150|Use HSBCFEST Above ₹499',
                      discountType: 'Percentage',
                      operationType: 'RESTAURANT',
                    },
                  ],
                  couponDetailsCta: 'View coupon details',
                },
                type: 'F',
                headerBanner: {
                  url: 'swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/113657',
                },
                ratingSlab: 'RATING_SLAB_5',
                orderabilityCommunication: {
                  title: {},
                  subTitle: {},
                  message: {},
                  customIcon: {},
                  commsStyling: {},
                },
                hasBestsellerItems: true,
                cartOrderabilityNudgeBanner: {
                  parameters: {},
                  presentation: {},
                },
                latLong: '12.934779,77.617034',
                backgroundImageOverlayInfo: {},
                featuredSectionInfo: {},
                hasBoltItems: true,
              },
              analytics: {},
            },
            relevance: {
              type: 'RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD',
              sectionId: 'POP_UP_CROUTON_MENU',
            },
          },
        },
        {
          card: {
            card: {
              '@type':
                'type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget',
              layout: {
                rows: 1,
                columns: 4,
                horizontalScrollEnabled: true,
                itemSpacing: 12,
                lineSpacing: 10,
                widgetPadding: {},
                containerStyle: {
                  containerPadding: {
                    left: 10,
                    right: 10,
                    bottom: 16,
                  },
                },
                scrollBar: {},
              },
              id: 'offerCollectionWidget_UX4',
              gridElements: {
                infoWithStyle: {
                  '@type':
                    'type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle',
                  offers: [
                    {
                      info: {
                        header: '10% OFF UPTO ₹40',
                        offerTagColor: '#E46D47',
                        offerIds: ['c9a182a2-e1a7-451d-b62c-cf01d30ad214'],
                        expiryTime: '1970-01-01T00:00:00Z',
                        couponCode: 'USE TRYNEW',
                        description: 'ABOVE ₹159',
                        offerType: 'offers',
                        restId: '113657',
                        offerLogo: 'offers/generic',
                        descriptionTextColor: '#7302060C',
                        primaryDescription: 'USE TRYNEW',
                      },
                      cta: {
                        type: 'OFFER_HALF_CARD',
                      },
                    },
                    {
                      info: {
                        header: '10% OFF UPTO ₹150',
                        offerTagColor: '#E46D47',
                        logoBottom:
                          'MARKETING_BANNERS/IMAGES/OFFERS/2025/1/31/c1779f43-0cfd-4cc3-ab65-323a857b3327_HSBC.png',
                        offerIds: ['48e163e2-2bb4-43a2-afde-a1fbb5e280c0'],
                        expiryTime: '1970-01-01T00:00:00Z',
                        couponCode: 'USE HSBCFEST',
                        description: 'ABOVE ₹499',
                        offerType: 'offers',
                        restId: '113657',
                        offerLogo:
                          'MARKETING_BANNERS/IMAGES/OFFERS/2025/1/31/c1779f43-0cfd-4cc3-ab65-323a857b3327_HSBC.png',
                        descriptionTextColor: '#7302060C',
                        primaryDescription: 'USE HSBCFEST',
                      },
                      cta: {
                        type: 'OFFER_HALF_CARD',
                      },
                    },
                    {
                      info: {
                        header: '30% OFF UPTO ₹150',
                        offerTagColor: '#E46D47',
                        logoBottom:
                          'MARKETING_BANNERS/IMAGES/OFFERS/2025/1/31/c9e54b4a-4849-437d-a251-fd411db19028_AxisMenuLogo.png',
                        offerIds: ['4aec9661-3b16-47f4-8bce-36f6d95283f1'],
                        expiryTime: '1970-01-01T00:00:00Z',
                        couponCode: 'USE AXIS30',
                        description: 'ABOVE ₹200',
                        offerType: 'offers',
                        restId: '113657',
                        offerLogo:
                          'MARKETING_BANNERS/IMAGES/OFFERS/2025/1/31/c9e54b4a-4849-437d-a251-fd411db19028_AxisMenuLogo.png',
                        descriptionTextColor: '#7302060C',
                        primaryDescription: 'USE AXIS30',
                      },
                      cta: {
                        type: 'OFFER_HALF_CARD',
                      },
                    },
                    {
                      info: {
                        header: 'FLAT ₹120 OFF',
                        offerTagColor: '#E46D47',
                        logoBottom:
                          'MARKETING_BANNERS/IMAGES/OFFERS/2025/1/31/6e5b2c02-ce42-45ab-81ed-1f7aa4bbc705_AxisMenuLogo.png',
                        offerIds: ['b0f7bf15-fe48-4854-8c9a-0203f68daa8e'],
                        expiryTime: '1970-01-01T00:00:00Z',
                        couponCode: 'USE AXIS120',
                        description: 'ABOVE ₹500',
                        offerType: 'offers',
                        restId: '113657',
                        offerLogo:
                          'MARKETING_BANNERS/IMAGES/OFFERS/2025/1/31/6e5b2c02-ce42-45ab-81ed-1f7aa4bbc705_AxisMenuLogo.png',
                        descriptionTextColor: '#7302060C',
                        primaryDescription: 'USE AXIS120',
                      },
                      cta: {
                        type: 'OFFER_HALF_CARD',
                      },
                    },
                  ],
                  habitMilestoneInfo: {
                    callout: {},
                  },
                  loyaltyDiscoverPresentationInfo: {
                    logoCtx: {},
                  },
                },
              },
            },
          },
        },
        {
          groupedCard: {
            cardGroupMap: {
              REGULAR: {
                cards: [
                  {
                    card: {
                      card: {
                        '@type':
                          'type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge',
                        badges: {},
                        vegOnlyDetails: {
                          imageId: 'AutoVegOnly_qkjowj',
                          title: 'Showing only vegetarian options.',
                          description:
                            'Tap on the VEG ONLY button to turn off the setting',
                        },
                        topRatedFilter: {
                          attributes: {
                            displayText: 'Ratings 4.0+',
                          },
                        },
                        kidsCategoryFilter: {
                          attributes: {
                            displayText: 'Kids Favourites',
                            tooltip: {
                              enabled: true,
                              displayText:
                                'Kids Favourites Filter applied. Remove this filter to see the full Menu.',
                            },
                          },
                        },
                        vegFilter: {
                          attributes: {
                            displayText: 'VEG',
                          },
                        },
                        nonvegFilter: {
                          attributes: {
                            displayText: 'NONVEG',
                          },
                        },
                        bolt: {
                          attributes: {
                            displayText: '10 Mins Delivery',
                            displayImage: 'bolt/bolt_filter_image_final.png',
                            unselectedDisplayImage:
                              'bolt/bolt_filter_image_final.png',
                          },
                        },
                      },
                      relevance: {
                        type: 'RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED',
                        sectionId: 'MENU_FILTER_TOGGLE',
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        '@type':
                          'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                        title: 'Recommended',
                        itemCards: [
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '41083512',
                                name: 'Kabab Biryani',
                                category: 'Biryani',
                                description:
                                  '| Serve 1 | Aromatic basmati rice and soft juicy kebabs marinated with spices cooked in blend of herbs. | Boneless |',
                                imageId: 'eu40jal33c8qls10t7mu',
                                inStock: 1,
                                price: 21900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {
                                  text: 'Bestseller',
                                  textColor: '#ffffff',
                                  topBackgroundColor: '#d53d4c',
                                  bottomBackgroundColor: '#b02331',
                                },
                                showImage: true,
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: '3.5',
                                    ratingCount: '213 ratings',
                                    ratingCountV2: '213',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '31155521',
                                name: 'Mutton Jonne Biryani',
                                category: 'Biryani',
                                description:
                                  'Flavourful seasoned basmati rice & spiced tender lamb, a south karnataka speciality served with raita & sherva. Full mutton biryani + sherva+raitha',
                                imageId: 'tgklaqbzr7t70p9xkwv6',
                                inStock: 1,
                                price: 33900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {
                                  text: 'Bestseller',
                                  textColor: '#ffffff',
                                  topBackgroundColor: '#d53d4c',
                                  bottomBackgroundColor: '#b02331',
                                },
                                showImage: true,
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: '3.2',
                                    ratingCount: '143 ratings',
                                    ratingCountV2: '143',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '31155520',
                                name: 'Chicken Jonne Biryani',
                                category: 'Biryani',
                                description:
                                  '| Serve 1 | Full chicken biryani + sherva + raitha | Bone and Boneless |',
                                imageId: 'x4szw5yy5y1qkjiizcpi',
                                inStock: 1,
                                price: 19900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                showImage: true,
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: '4.3',
                                    ratingCount: '380 ratings',
                                    ratingCountV2: '380',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '31155522',
                                name: 'Biryani Rice',
                                category: 'Biryani',
                                description:
                                  '| Serve 1 | Full biryani rice + sherva + raitha',
                                imageId: 'lhi4tx28u32tvgxplibw',
                                inStock: 1,
                                isVeg: 1,
                                price: 14500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'VEG',
                                },
                                ribbon: {
                                  text: 'Bestseller',
                                  textColor: '#ffffff',
                                  topBackgroundColor: '#d53d4c',
                                  bottomBackgroundColor: '#b02331',
                                },
                                showImage: true,
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: '3.9',
                                    ratingCount: '168 ratings',
                                    ratingCountV2: '168',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '41083506',
                                name: 'Chicken Meals',
                                category: 'Meals',
                                description:
                                  '| Serve 1 | Chicken Biryani + Chicken Fry (2Pcs) + Chilli Chicken 2 Pcs) Option:- 1 Ragi Ball/1 Chapathi/ 1 Parotta+Sherva+ Raitha',
                                imageId: 'tdsor1ij4vz11g0hxeqo',
                                inStock: 1,
                                price: 25900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: '77892509',
                                    groupName: 'Option',
                                    choices: [
                                      {
                                        id: '62847167',
                                        name: 'Chapathi',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: '62847168',
                                        name: 'Parotta',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: '62847169',
                                        name: 'Ragi Ball',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 1,
                                    maxFreeAddons: -1,
                                    minAddons: 1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {
                                  text: 'Bestseller',
                                  textColor: '#ffffff',
                                  topBackgroundColor: '#d53d4c',
                                  bottomBackgroundColor: '#b02331',
                                },
                                showImage: true,
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: '4.1',
                                    ratingCount: '313 ratings',
                                    ratingCountV2: '313',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '41083379',
                                name: 'Mutton Meals',
                                category: 'Meals',
                                description:
                                  'Mutton Biryani 1Pc + Mutton Keema Balls 2Pcs + Mutton Botti fry half plate,+option:- Ragi Ball [1] Chapati[1] Parotta [1]+Raita+Sherva',
                                imageId: 'ygpuqectemr4ykhwqtgw',
                                inStock: 1,
                                price: 36900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: '77892513',
                                    groupName: 'Option',
                                    choices: [
                                      {
                                        id: '62847167',
                                        name: 'Chapathi',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: '62847168',
                                        name: 'Parotta',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: '62847169',
                                        name: 'Ragi Ball',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 1,
                                    maxFreeAddons: -1,
                                    minAddons: 1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                showImage: true,
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: '3.5',
                                    ratingCount: '149 ratings',
                                    ratingCountV2: '149',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '41141415',
                                name: 'Mutton Chops',
                                category: 'Starters',
                                description: 'Full Plate',
                                imageId: 'so44v3ap5ajr1eex5p4b',
                                inStock: 1,
                                price: 28900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                showImage: true,
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: '3.2',
                                    ratingCount: '30 ratings',
                                    ratingCountV2: '30',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '31155523',
                                name: 'Chicken Fry',
                                category: 'Starters',
                                description: '| Serve 1 | Full plate',
                                imageId: 'p08lzvdv22udmeb2zcqv',
                                inStock: 1,
                                price: 18900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {
                                  text: 'Bestseller',
                                  textColor: '#ffffff',
                                  topBackgroundColor: '#d53d4c',
                                  bottomBackgroundColor: '#b02331',
                                },
                                showImage: true,
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: '4.4',
                                    ratingCount: '55 ratings',
                                    ratingCountV2: '55',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '41141412',
                                name: 'Mutton Pepper Dry',
                                category: 'Starters',
                                description: 'Full Plate',
                                imageId: 'q9thldbtnc58grd28tku',
                                inStock: 1,
                                price: 29900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                showImage: true,
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: '2.4',
                                    ratingCount: '7 ratings',
                                    ratingCountV2: '7',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '31155525',
                                name: 'Mutton Keema Unde Gojju',
                                category: 'Starters',
                                description: 'Mutton Keema Unde Gojju 4 nos',
                                imageId: 'ynb55aoctyldybjat8ua',
                                inStock: 1,
                                price: 24900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                showImage: true,
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: '3.8',
                                    ratingCount: '36 ratings',
                                    ratingCountV2: '36',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '31155526',
                                name: 'Mutton Boti Gojju',
                                category: 'Starters',
                                description:
                                  '| Serve 1 | Full plate | Semi-gravy | With-bone |',
                                imageId: 'iwuajwfwmhsm8ax0z5z5',
                                inStock: 1,
                                price: 23900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                showImage: true,
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: '2.9',
                                    ratingCount: '68 ratings',
                                    ratingCountV2: '68',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '41083507',
                                name: 'Chilli Chicken',
                                category: 'Starters',
                                description: 'Full plate',
                                imageId: 'fx9xgxg8qdlakovyor0o',
                                inStock: 1,
                                price: 19900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                showImage: true,
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: '4.3',
                                    ratingCount: '54 ratings',
                                    ratingCountV2: '54',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        type: 'CATEGORY_TYPE_RECOMMENDED',
                        subtitleSuffix: {},
                        categoryId: '-1',
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        '@type':
                          'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                        title: 'Biryani',
                        itemCards: [
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '41083512',
                                name: 'Kabab Biryani',
                                category: 'Biryani',
                                description:
                                  '| Serve 1 | Aromatic basmati rice and soft juicy kebabs marinated with spices cooked in blend of herbs. | Boneless |',
                                imageId: 'eu40jal33c8qls10t7mu',
                                inStock: 1,
                                price: 21900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {
                                  text: 'Bestseller',
                                  textColor: '#ffffff',
                                  topBackgroundColor: '#d53d4c',
                                  bottomBackgroundColor: '#b02331',
                                },
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: '3.5',
                                    ratingCount: '213 ratings',
                                    ratingCountV2: '213',
                                  },
                                },
                                isBolt: true,
                                boltImageId: 'bolt/bolt-tag/bolt_menu_tag.png',
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '31155521',
                                name: 'Mutton Jonne Biryani',
                                category: 'Biryani',
                                description:
                                  'Flavourful seasoned basmati rice & spiced tender lamb, a south karnataka speciality served with raita & sherva. Full mutton biryani + sherva+raitha',
                                imageId: 'tgklaqbzr7t70p9xkwv6',
                                inStock: 1,
                                price: 33900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {
                                  text: 'Bestseller',
                                  textColor: '#ffffff',
                                  topBackgroundColor: '#d53d4c',
                                  bottomBackgroundColor: '#b02331',
                                },
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: '3.2',
                                    ratingCount: '143 ratings',
                                    ratingCountV2: '143',
                                  },
                                },
                                isBolt: true,
                                boltImageId: 'bolt/bolt-tag/bolt_menu_tag.png',
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '31155520',
                                name: 'Chicken Jonne Biryani',
                                category: 'Biryani',
                                description:
                                  '| Serve 1 | Full chicken biryani + sherva + raitha | Bone and Boneless |',
                                imageId: 'x4szw5yy5y1qkjiizcpi',
                                inStock: 1,
                                price: 19900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: '4.3',
                                    ratingCount: '380 ratings',
                                    ratingCountV2: '380',
                                  },
                                },
                                isBolt: true,
                                boltImageId: 'bolt/bolt-tag/bolt_menu_tag.png',
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '88191229',
                                name: 'Nati Koli Biryani',
                                category: 'Biryani',
                                imageId:
                                  'FOOD_CATALOG/IMAGES/CMS/2024/9/13/c2dbfc05-71b8-43bc-9e25-51a6f496d1c5_4649a3e4-461b-477c-bf23-d22dc399d1f8.jpeg',
                                inStock: 1,
                                price: 22000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {
                                  text: 'Bestseller',
                                  textColor: '#ffffff',
                                  topBackgroundColor: '#d53d4c',
                                  bottomBackgroundColor: '#b02331',
                                },
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: '3.1',
                                    ratingCount: '3 ratings',
                                    ratingCountV2: '3',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '72396666',
                                name: 'Chicken Combo Special 2 [Two]',
                                category: 'Biryani',
                                description:
                                  'Full biryani combo topped with 3 chicken pieces and 3 chicken fry pieces.comes with thick raitha and sherva',
                                imageId: 'oilga8fypwecpxuzlj69',
                                inStock: 1,
                                price: 24900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: '4.5',
                                    ratingCount: '7 ratings',
                                    ratingCountV2: '7',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '31155522',
                                name: 'Biryani Rice',
                                category: 'Biryani',
                                description:
                                  '| Serve 1 | Full biryani rice + sherva + raitha',
                                imageId: 'lhi4tx28u32tvgxplibw',
                                inStock: 1,
                                isVeg: 1,
                                price: 14500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'VEG',
                                },
                                ribbon: {
                                  text: 'Bestseller',
                                  textColor: '#ffffff',
                                  topBackgroundColor: '#d53d4c',
                                  bottomBackgroundColor: '#b02331',
                                },
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: '3.9',
                                    ratingCount: '168 ratings',
                                    ratingCountV2: '168',
                                  },
                                },
                                isBolt: true,
                                boltImageId: 'bolt/bolt-tag/bolt_menu_tag.png',
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '60266960',
                                name: 'Boneless Mutton Biryani',
                                category: 'Biryani',
                                description:
                                  'Boneless Mutton Biryani 4 Pcs + Mutton Sherva + Raitha',
                                imageId:
                                  'FOOD_CATALOG/IMAGES/CMS/2024/9/13/96a1acf0-6675-4474-bbba-6024cf6a8458_2bad05b1-f0a9-47bb-9cb4-71bf9f9412b0.jpeg',
                                inStock: 1,
                                price: 36900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '72396658',
                                name: 'Egg Biryani',
                                category: 'Biryani',
                                description:
                                  'Full Egg Biryani comes with 2 Eggs + Sherva + Raitha',
                                imageId:
                                  'FOOD_CATALOG/IMAGES/CMS/2024/9/13/76f02fbf-4aff-488c-8347-63e4498bf23a_3a541d4e-38ba-40a6-94ef-d2d0d7a248e6.jpeg',
                                inStock: 1,
                                price: 16900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: '4.1',
                                    ratingCount: '22 ratings',
                                    ratingCountV2: '22',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '72396662',
                                name: 'Chilli Chicken Biryani Combo',
                                category: 'Biryani',
                                description:
                                  'Very Spicy | | Serve 1 | Chilli Chicken Biryani Combo Spicy( full )',
                                imageId: 'beiswr1si7gi67zphh8m',
                                inStock: 1,
                                price: 23500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                  spiceLevel: 'VERYSPICY',
                                },
                                ribbon: {},
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: '4.2',
                                    ratingCount: '23 ratings',
                                    ratingCountV2: '23',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '72396665',
                                name: 'Chicken Combo Special 1 [One]',
                                category: 'Biryani',
                                description:
                                  'Full biryani combo topped with 3 chicken pieces and 3 chicken kabab pieces.comes with thick raitha and sherva',
                                imageId: 'tx5q9gbpudf5b69sj9fb',
                                inStock: 1,
                                price: 24900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: '3.2',
                                    ratingCount: '8 ratings',
                                    ratingCountV2: '8',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '88191239',
                                name: 'Nati Koli Chicken Fry Biryani',
                                category: 'Biryani',
                                inStock: 1,
                                price: 24900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '72396660',
                                name: 'Chicken Fry Biryani',
                                category: 'Biryani',
                                description:
                                  'Full chicken fry biryani topped 4 pieces.comes with thick raitha and sherva',
                                imageId:
                                  'FOOD_CATALOG/IMAGES/CMS/2024/9/13/60f54a44-8807-4d53-a69f-fad0ed748fb6_8c834952-b2af-46e0-8e1d-21e39093cc0e.jpeg',
                                inStock: 1,
                                price: 21500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: '4.8',
                                    ratingCount: '43 ratings',
                                    ratingCountV2: '43',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '60266958',
                                name: 'Chicken Pepper Dry Biryani',
                                category: 'Biryani',
                                description:
                                  '| Serve 1 | Full Chicken Pepper Dry Biryani with curry leaves + garlic+ onion | Bone and Boneless |',
                                imageId: 'fxyuz8vh6n5xwjcvgtwx',
                                inStock: 1,
                                price: 23500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: '3.8',
                                    ratingCount: '14 ratings',
                                    ratingCountV2: '14',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '72396667',
                                name: 'Chicken Combo Special 3 [Three]',
                                category: 'Biryani',
                                description:
                                  'Full biryani combo topped with 3 chicken fry pieces and 3 chicken kabab pieces.comes with thick raitha and sherva',
                                imageId: 'rukesemqda5muvluhcvf',
                                inStock: 1,
                                price: 24900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: '3.8',
                                    ratingCount: '9 ratings',
                                    ratingCountV2: '9',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '88191233',
                                name: 'Nati Koli Biryani Rice',
                                category: 'Biryani',
                                imageId:
                                  'FOOD_CATALOG/IMAGES/CMS/2024/9/13/9edf4696-8b69-486e-bd80-babe631bd8ce_aaccb71f-4fc5-423a-8f82-948fa098b422.jpeg',
                                inStock: 1,
                                price: 14900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '88191242',
                                name: 'Nati Koli Pepper Dry Biryani',
                                category: 'Biryani',
                                imageId:
                                  'FOOD_CATALOG/IMAGES/CMS/2024/9/13/ff2727e5-d7bc-4caa-a697-219b32dac1d7_8e6c46cd-bc72-43bb-9b81-fe56faac8583.jpeg',
                                inStock: 1,
                                price: 24900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image: 'eu40jal33c8qls10t7mu',
                        categoryId: '15414913',
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        '@type':
                          'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                        title: 'Starters',
                        itemCards: [
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '72396677',
                                name: 'Chicken Kebab',
                                category: 'Starters',
                                description:
                                  '| Serve 1 | A flavorsome juicy chicken kebab with onions drizzled with lime | Boneless |',
                                imageId: 'xynfz11upyxqkmyxkioi',
                                inStock: 1,
                                price: 19900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {
                                  text: 'Bestseller',
                                  textColor: '#ffffff',
                                  topBackgroundColor: '#d53d4c',
                                  bottomBackgroundColor: '#b02331',
                                },
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: '4.3',
                                    ratingCount: '30 ratings',
                                    ratingCountV2: '30',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '41141415',
                                name: 'Mutton Chops',
                                category: 'Starters',
                                description: 'Full Plate',
                                imageId: 'so44v3ap5ajr1eex5p4b',
                                inStock: 1,
                                price: 28900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: '3.2',
                                    ratingCount: '30 ratings',
                                    ratingCountV2: '30',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '31155523',
                                name: 'Chicken Fry',
                                category: 'Starters',
                                description: '| Serve 1 | Full plate',
                                imageId: 'p08lzvdv22udmeb2zcqv',
                                inStock: 1,
                                price: 18900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {
                                  text: 'Bestseller',
                                  textColor: '#ffffff',
                                  topBackgroundColor: '#d53d4c',
                                  bottomBackgroundColor: '#b02331',
                                },
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: '4.4',
                                    ratingCount: '55 ratings',
                                    ratingCountV2: '55',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '41141412',
                                name: 'Mutton Pepper Dry',
                                category: 'Starters',
                                description: 'Full Plate',
                                imageId: 'q9thldbtnc58grd28tku',
                                inStock: 1,
                                price: 29900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: '2.4',
                                    ratingCount: '7 ratings',
                                    ratingCountV2: '7',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '31155525',
                                name: 'Mutton Keema Unde Gojju',
                                category: 'Starters',
                                description: 'Mutton Keema Unde Gojju 4 nos',
                                imageId: 'ynb55aoctyldybjat8ua',
                                inStock: 1,
                                price: 24900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: '3.8',
                                    ratingCount: '36 ratings',
                                    ratingCountV2: '36',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '72396678',
                                name: 'Chicken Pepper Dry',
                                category: 'Starters',
                                description:
                                  '| Serve 1 | Full plate | Boneless |',
                                imageId: 'uoit2kwflksaixt4pzte',
                                inStock: 1,
                                price: 21000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: '4.6',
                                    ratingCount: '20 ratings',
                                    ratingCountV2: '20',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '31155526',
                                name: 'Mutton Boti Gojju',
                                category: 'Starters',
                                description:
                                  '| Serve 1 | Full plate | Semi-gravy | With-bone |',
                                imageId: 'iwuajwfwmhsm8ax0z5z5',
                                inStock: 1,
                                price: 23900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: '2.9',
                                    ratingCount: '68 ratings',
                                    ratingCountV2: '68',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '41083507',
                                name: 'Chilli Chicken',
                                category: 'Starters',
                                description: 'Full plate',
                                imageId: 'fx9xgxg8qdlakovyor0o',
                                inStock: 1,
                                price: 19900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: '4.3',
                                    ratingCount: '54 ratings',
                                    ratingCountV2: '54',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '60266992',
                                name: 'Mutton Egg Pepper Botti Dry',
                                category: 'Starters',
                                description:
                                  'Full plate Mutton Boti Egg Pepper Dry',
                                imageId:
                                  'FOOD_CATALOG/IMAGES/CMS/2024/9/13/9cf44d36-75ab-48ff-9da5-b8a2958da1e0_0f544214-3a59-4863-aeda-3561ecac4a04.jpeg',
                                inStock: 1,
                                price: 23900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '72396679',
                                name: 'Boneless Chicken Kebab',
                                category: 'Starters',
                                description:
                                  'Full Plate Boneless Chicken Kebab',
                                inStock: 1,
                                price: 22900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: '3.7',
                                    ratingCount: '4 ratings',
                                    ratingCountV2: '4',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '72396676',
                                name: 'Boiled Egg',
                                category: 'Starters',
                                inStock: 1,
                                price: 2000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: '4.9',
                                    ratingCount: '5 ratings',
                                    ratingCountV2: '5',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '72396680',
                                name: 'Chicken Boneless Kebab',
                                category: 'Starters',
                                inStock: 1,
                                price: 22900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image: 'xynfz11upyxqkmyxkioi',
                        categoryId: '15414916',
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        '@type':
                          'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                        title: 'Meals',
                        itemCards: [
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '41083506',
                                name: 'Chicken Meals',
                                category: 'Meals',
                                description:
                                  '| Serve 1 | Chicken Biryani + Chicken Fry (2Pcs) + Chilli Chicken 2 Pcs) Option:- 1 Ragi Ball/1 Chapathi/ 1 Parotta+Sherva+ Raitha',
                                imageId: 'tdsor1ij4vz11g0hxeqo',
                                inStock: 1,
                                price: 25900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: '77892509',
                                    groupName: 'Option',
                                    choices: [
                                      {
                                        id: '62847167',
                                        name: 'Chapathi',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: '62847168',
                                        name: 'Parotta',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: '62847169',
                                        name: 'Ragi Ball',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 1,
                                    maxFreeAddons: -1,
                                    minAddons: 1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {
                                  text: 'Bestseller',
                                  textColor: '#ffffff',
                                  topBackgroundColor: '#d53d4c',
                                  bottomBackgroundColor: '#b02331',
                                },
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: '4.1',
                                    ratingCount: '313 ratings',
                                    ratingCountV2: '313',
                                  },
                                },
                                isBolt: true,
                                boltImageId: 'bolt/bolt-tag/bolt_menu_tag.png',
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '41083379',
                                name: 'Mutton Meals',
                                category: 'Meals',
                                description:
                                  'Mutton Biryani 1Pc + Mutton Keema Balls 2Pcs + Mutton Botti fry half plate,+option:- Ragi Ball [1] Chapati[1] Parotta [1]+Raita+Sherva',
                                imageId: 'ygpuqectemr4ykhwqtgw',
                                inStock: 1,
                                price: 36900,
                                variants: {},
                                variantsV2: {},
                                addons: [
                                  {
                                    groupId: '77892513',
                                    groupName: 'Option',
                                    choices: [
                                      {
                                        id: '62847167',
                                        name: 'Chapathi',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: '62847168',
                                        name: 'Parotta',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        id: '62847169',
                                        name: 'Ragi Ball',
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                    maxAddons: 1,
                                    maxFreeAddons: -1,
                                    minAddons: 1,
                                  },
                                ],
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: '3.5',
                                    ratingCount: '149 ratings',
                                    ratingCountV2: '149',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image: 'tdsor1ij4vz11g0hxeqo',
                        categoryId: '15414914',
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        '@type':
                          'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                        title: 'Nati Koli Starters',
                        itemCards: [
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '88191253',
                                name: 'Nati Koli Chicken Fry',
                                category: 'Nati Koli Starters',
                                inStock: 1,
                                price: 22900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: '1.7',
                                    ratingCount: '5 ratings',
                                    ratingCountV2: '5',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '88191266',
                                name: 'Nati Koli Kurma',
                                category: 'Nati Koli Starters',
                                inStock: 1,
                                price: 22500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {
                                  text: 'Bestseller',
                                  textColor: '#ffffff',
                                  topBackgroundColor: '#d53d4c',
                                  bottomBackgroundColor: '#b02331',
                                },
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '88191259',
                                name: 'Nati Koli Pepper Dry',
                                category: 'Nati Koli Starters',
                                inStock: 1,
                                price: 23900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        categoryId: '21194130',
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        '@type':
                          'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                        title: "Nati Combo's",
                        itemCards: [
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '88191154',
                                name: 'Nati Combo 1',
                                category: "Nati Combo's",
                                description:
                                  'Full Nati Koli Biryani 2Pcs+Nati Koli Chicken Fry 2Pcs+Curry+Raitha',
                                imageId:
                                  'FOOD_CATALOG/IMAGES/CMS/2024/9/13/b54f301e-325f-445a-8ca4-932685120fd4_18c8430c-9738-44e3-b4e9-919331feb5c3.jpeg',
                                inStock: 1,
                                price: 26500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: '3.2',
                                    ratingCount: '3 ratings',
                                    ratingCountV2: '3',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '88191171',
                                name: 'Nati Combo 2',
                                category: "Nati Combo's",
                                description:
                                  'Full Nati Koli Biryani 2Pcs + Nati Koli Pepper Dry 2Pcs+Curry+Raitha',
                                imageId:
                                  'FOOD_CATALOG/IMAGES/CMS/2024/9/13/ea294078-5d04-4c88-858a-486939cea499_7cad47f5-392f-4be5-ac1c-aa2c0fbc80e9.jpeg',
                                inStock: 1,
                                price: 26500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '88191184',
                                name: 'Nati Combo 3',
                                category: "Nati Combo's",
                                description:
                                  'Full Nati Koli Pepper Dry 2 Pcs+Nati Koli Chicken Fry 2Pcs+Curry+Raitha',
                                imageId:
                                  'FOOD_CATALOG/IMAGES/CMS/2024/9/13/42db8482-e242-4f2d-b74f-b4f7a2e38cd9_332cfb09-d7c6-4adc-8ee8-78b655f95fa2.jpeg',
                                inStock: 1,
                                price: 26500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '88191192',
                                name: 'Nati Combo 4',
                                category: "Nati Combo's",
                                description:
                                  'Full Nati Koli Fry Biryani 2Pcs+Nati Koli Kurma 2Pcs+Curry+Raitha',
                                imageId:
                                  'FOOD_CATALOG/IMAGES/CMS/2024/9/13/670a589e-695b-41c4-9208-34fb2d6ca3a5_4ce210b7-2916-45a1-b594-805e4c6cf692.jpeg',
                                inStock: 1,
                                price: 26500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '88191208',
                                name: 'Nati Combo 5',
                                category: "Nati Combo's",
                                description:
                                  'Biryani Rice + Ragi Ball 1Pc+Nati Koli Kurma 3Pcs+Curry+Raitha',
                                imageId:
                                  'FOOD_CATALOG/IMAGES/CMS/2024/9/13/e78050dd-021e-42e6-aa1b-4f7c98bf536a_a884af1d-b85f-41ae-8004-1e2a90f5e6c2.jpeg',
                                inStock: 1,
                                price: 26500,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: '2.3',
                                    ratingCount: '5 ratings',
                                    ratingCountV2: '5',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image:
                          'FOOD_CATALOG/IMAGES/CMS/2024/9/13/b54f301e-325f-445a-8ca4-932685120fd4_18c8430c-9738-44e3-b4e9-919331feb5c3.jpeg',
                        categoryId: '21194122',
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        '@type':
                          'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                        title: 'Nati Koli Meals',
                        itemCards: [
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '88191223',
                                name: 'Nati Koli Chicken Meals',
                                category: 'Nati Koli Meals',
                                description:
                                  'Nati Koli Biryani 1Pc+Nati Koli Fry 2 Pcs+ Nati Koli Kurma 2 Pcs + Option :- Ragi Ball 1/Chapathi 1/ Parotta 1 , Curry 2 Cups + Raitha 1 Cup',
                                imageId:
                                  'FOOD_CATALOG/IMAGES/CMS/2024/8/24/5384ff06-57a8-4fa0-8997-f7821be6ab98_01305494-f405-41db-8714-c208f098b820.JPG',
                                inStock: 1,
                                price: 30900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {
                                  text: 'Bestseller',
                                  textColor: '#ffffff',
                                  topBackgroundColor: '#d53d4c',
                                  bottomBackgroundColor: '#b02331',
                                },
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: '4.5',
                                    ratingCount: '8 ratings',
                                    ratingCountV2: '8',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image:
                          'FOOD_CATALOG/IMAGES/CMS/2024/8/24/5384ff06-57a8-4fa0-8997-f7821be6ab98_01305494-f405-41db-8714-c208f098b820.JPG',
                        categoryId: '21194126',
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        '@type':
                          'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                        title: "Combo's",
                        itemCards: [
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '72396675',
                                name: '2 Ragi Ball With Chicken Curry',
                                category: "Combo's",
                                description:
                                  '| Serve 1 | 2 Ragi Ball with Chicken Curry one plate + mutton sherva',
                                inStock: 1,
                                price: 22900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {
                                  text: 'Bestseller',
                                  textColor: '#ffffff',
                                  topBackgroundColor: '#d53d4c',
                                  bottomBackgroundColor: '#b02331',
                                },
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                isBestseller: true,
                                ratings: {
                                  aggregatedRating: {
                                    rating: '4.5',
                                    ratingCount: '17 ratings',
                                    ratingCountV2: '17',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '72396674',
                                name: '2 Parotta With Chicken Curry',
                                category: "Combo's",
                                description:
                                  'Big 2 Parotta with Chicken Curry one plate + Mutton Sherva',
                                imageId:
                                  'FOOD_CATALOG/IMAGES/CMS/2024/9/13/3dfbdd6d-730c-430e-99e3-fe8e013ff197_a3bd7411-7ef2-472e-aed1-aa7d0258d87e.jpeg',
                                inStock: 1,
                                price: 22900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image:
                          'FOOD_CATALOG/IMAGES/CMS/2024/9/13/3dfbdd6d-730c-430e-99e3-fe8e013ff197_a3bd7411-7ef2-472e-aed1-aa7d0258d87e.jpeg',
                        categoryId: '15414915',
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        '@type':
                          'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
                        title: 'Tuesday Wednesday & Friday Offer',
                        itemCards: [
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '100605534',
                                name: 'Hoskote Mutton Biryani',
                                category: 'Tuesday Wednesday & Friday Offer',
                                imageId: '3a9ae9448a52ec60d76354ad8f0101db',
                                inStock: 1,
                                price: 36900,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {
                                    rating: '3.3',
                                    ratingCount: '4 ratings',
                                    ratingCountV2: '4',
                                  },
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                          {
                            card: {
                              '@type':
                                'type.googleapis.com/swiggy.presentation.food.v2.Dish',
                              info: {
                                id: '100605533',
                                name: 'Hoskote Biryani Rice',
                                category: 'Tuesday Wednesday & Friday Offer',
                                imageId: 'e9a18735acf055874f88a9e846198357',
                                inStock: 1,
                                price: 20000,
                                variants: {},
                                variantsV2: {},
                                itemAttribute: {
                                  vegClassifier: 'NONVEG',
                                },
                                ribbon: {},
                                type: 'ITEM',
                                itemBadge: {},
                                badgesV2: {},
                                ratings: {
                                  aggregatedRating: {},
                                },
                              },
                              analytics: {},
                              hideRestaurantDetails: true,
                            },
                          },
                        ],
                        subtitleSuffix: {},
                        image: '3a9ae9448a52ec60d76354ad8f0101db',
                        categoryId: '26859391',
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        '@type':
                          'type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo',
                        type: 'FSSAI',
                        imageId: 'fssai_final_edss9i',
                        text: ['License No. 21219194000279'],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        '@type':
                          'type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress',
                        name: 'Halli Donne Biryani',
                        area: 'Koramangala',
                        completeAddress:
                          '93, 17th H Main Rd, 5th Block, Koramangala, Bengaluru, Karnataka 560047',
                      },
                    },
                  },
                ],
              },
            },
          },
        },
      ],
      firstOffsetRequest: true,
      isQCLink: false,
    },
    tid: '5b719739-0a5b-48f0-a543-b94800501bd9',
    sid: 'iwi6c770-8dbf-4931-a37f-30cb58f4905e',
    deviceId: '8a368716-80c2-9d22-f5a0-f61c54b1db97',
    csrfToken: 'YwpdyYXUGNPk-0337wIiGQKV3xnpQFLqOu6lhg0I',
  },
]
