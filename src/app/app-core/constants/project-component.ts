import {ProjectComponent} from '../models/project-component.model'

export const PROJECT_COMPONENTS: ProjectComponent[] = [
    {
        id: '1',
        title: 'Fish Processing',
        description:
            "From Catch to Table: Expert Tips and Techniques for Maximizing Freshness, Quality, and Flavor in Your Fish Processing, Whether You're a Commercial Fisherman, Home Cook, or Seafood Enthusiast",
        image: 'https://drive.google.com/uc?export=download&id=1Uz6R862hWGtPtTqM7gIt80IlWqJ_LhEA',
        detail: {
            // videoTeaser:
            //     'https://drive.google.com/uc?export=download&id=1Uz6R862hWGtPtTqM7gIt80IlWqJ_LhEA',
            items: [
                {
                    title: 'Pond Preparation',
                    images: [
                        'https://drive.google.com/uc?export=download&id=1g1mJxHfJ2_DQoseZe6pj6P9mqN4xOX4N',
                        'https://drive.google.com/uc?export=download&id=1g1mJxHfJ2_DQoseZe6pj6P9mqN4xOX4N',
                    ],
                    description:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsa repellat sunt molestias rem odio repudiandae possimus totam iusto laudantium nostrum cumque suscipit assumenda, aliquam perferendis vero velit recusandae! Excepturi!',
                },
            ],
        },
    },
    {
        id: '2',
        title: 'Fish Farming',
        description:
            "From Seed to Harvest: Discover the Latest Trends and Best Practices in Aquaculture to Produce High-Quality Fish in a Sustainable, Profitable, and Environmentally Responsible Manner, Whether You're a Commercial Fish Farmer, Researcher, or Aquaculture Enthusiast.",
        image: 'https://drive.google.com/uc?export=download&id=1TCw5hRntiE0pKVKu17nawBx6mbEuxCDu',
    },
    {
        id: '3',
        title: 'Museum',
        description:
            'Step into a World of Wonder and Discovery: Experience the Fascinating Intersection of History, Science, and Art Through Our Interactive Exhibits, Collections, and Programs, Designed to Educate, Engage, and Inspire Visitors of All Ages and Backgrounds.',
        image: 'https://drive.google.com/uc?export=download&id=1g1mJxHfJ2_DQoseZe6pj6P9mqN4xOX4N',
    },
    {
        id: '4',
        title: 'La Guerta ',
        description:
            'Experience the Rich Bounty of Nature at La Guerta: A Sustainable Farming Destination Where You Can Connect with the Land, Learn about Organic and Regenerative Agriculture, and Savor the Fresh, Flavorful Produce Grown Right Here on Our Farm. Join Us on a Journey from Seed to Harvest, and Discover the Joy and Nourishment of Farm-to-Plate Living.',
        image: 'https://drive.google.com/uc?export=download&id=1JjYJ8YFqOSoEzdVB0piYzc0HTBB6OzqG',
    },
]
