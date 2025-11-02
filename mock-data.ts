export interface User {
  id: number;
  name: string;
  email: string;
  imageUrl: string;
  interests: string[];
}

export const users: User[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice.j@example.com',
    imageUrl: 'https://i.pravatar.cc/150?u=alice',
    interests: ['Reading', 'Hiking', 'Photography'],
  },
  {
    id: 2,
    name: 'Bob Williams',
    email: 'bob.w@example.com',
    imageUrl: 'https://i.pravatar.cc/150?u=bob',
    interests: ['Gaming', 'Cooking', 'Jazz Music'],
  },
  {
    id: 3,
    name: 'Charlie Brown',
    email: 'charlie.b@example.com',
    imageUrl: 'https://i.pravatar.cc/150?u=charlie',
    interests: ['Drawing', 'Skateboarding', 'Comics'],
  },
  {
    id: 4,
    name: 'Diana Miller',
    email: 'diana.m@example.com',
    imageUrl: 'https://i.pravatar.cc/150?u=diana',
    interests: ['Yoga', 'Traveling', 'Blogging'],
  },
  {
    id: 5,
    name: 'Ethan Davis',
    email: 'ethan.d@example.com',
    imageUrl: 'https://i.pravatar.cc/150?u=ethan',
    interests: ['Coding', 'Sci-Fi Movies', 'Chess'],
  },
    {
    id: 6,
    name: 'Fiona Garcia',
    email: 'fiona.g@example.com',
    imageUrl: 'https://i.pravatar.cc/150?u=fiona',
    interests: ['Gardening', 'Pottery', 'Classical Music'],
  },
];