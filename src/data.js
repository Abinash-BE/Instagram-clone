// 📦 Posts
export const POSTS = [
  {
    id: 1,
    user: {
      id: 101,
      username: "johndoe",
      profile_picture: "https://i.pravatar.cc/150?img=1",
    },
    image: "https://picsum.photos/500/300?random=1",
    caption: "Just enjoying the little things!",
    likes: 150,
    comments: [
      { user: "alice_wonder", comment: "Looks amazing!" },
      { user: "beachlover", comment: "Wish I was there!" },
    ],
    timestamp: "2025-06-15T10:30:00Z",
  },
  {
    id: 2,
    user: {
      id: 102,
      username: "sarah_smith",
      profile_picture: "https://i.pravatar.cc/150?img=2",
    },
    image: "https://picsum.photos/500/300?random=2",
    caption: "Smiles make the best accessories!",
    likes: 200,
    comments: [{ user: "foodie123", comment: "Yummy! Recipe please?" }],
    timestamp: "2025-06-16T14:45:00Z",
  },
  {
    id: 3,
    user: {
      id: 103,
      username: "carla_jones",
      profile_picture: "https://i.pravatar.cc/150?img=3",
    },
    image: "https://picsum.photos/500/300?random=3",
    caption: "Moments over things!",
    likes: 128,
    comments: [{ user: "dancer", comment: "Enjoy the vibes!" }],
    timestamp: "2025-06-16T14:45:00Z",
  },
];

// 👤 Profile
export const PROFILE = {
  id: 101,
  username: "bruce_wayne",
  bio: "Just a billionaire with a secret identity.",
  profile_picture: "/assets/1662496028662.jpg",
};

// 💡 Suggestions
export const SUGGESTIONS = [
  { id: 201, username: "travel_guru", profile_picture: "https://i.pravatar.cc/150?img=4" },
  { id: 202, username: "foodie_lover", profile_picture: "https://i.pravatar.cc/150?img=5" },
  { id: 203, username: "fitness_freak", profile_picture: "https://i.pravatar.cc/150?img=6" },
  { id: 204, username: "poet_at_heart", profile_picture: "https://i.pravatar.cc/150?img=7" },
  { id: 205, username: "jessica_jones", profile_picture: "https://i.pravatar.cc/150?img=28" },
];

// 📚 Stories
export const STORIES = [
  {
    id: 1,
    user: {
      id: 101,
      username: "alice_wonder",
      profile_picture: "https://i.pravatar.cc/150?img=9",
    },
    image: "/assets/900w-reevoVHJFrc.webp",
  },
  {
    id: 2,
    user: {
      id: 102,
      username: "beachlover",
      profile_picture: "https://i.pravatar.cc/150?img=10",
    },
    image: "/assets/preview.webp",
  },
  {
    id: 3,
    user: {
      id: 103,
      username: "developer",
      profile_picture: "https://i.pravatar.cc/150?img=11",
    },
    image: "/assets/538a5e5c074b261fcb164e014259b77a.jpg",
  },
  {
    id: 4,
    user: {
      id: 104,
      username: "dancer",
      profile_picture: "https://i.pravatar.cc/150?img=12",
    },
    image: "/assets/900w-NyD4ltz9FMU.webp",
  },
  {
    id: 5,
    user: {
      id: 105,
      username: "travel_guru",
      profile_picture: "https://i.pravatar.cc/150?img=13",
    },
    image: "/assets/e3d7f935ef63d708a87b50ed548e634e.jpg",
  },
  {
    id: 6,
    user: {
      id: 106,
      username: "kevin_hart",
      profile_picture: "https://i.pravatar.cc/150?img=14",
    },
    image: "/assets/1a3bbe156954bb7a293243287eb4ef20.jpg",
  },
  {
    id: 7,
    user: {
      id: 107,
      username: "Loofy",
      profile_picture: "https://i.pravatar.cc/150?img=15",
    },
    image: "/assets/Sunset-Instagram-story-idea-1.jpg",
  },
];
