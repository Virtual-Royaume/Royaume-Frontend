import { members } from "../members";
import { BlogPost } from "./blog.type";

export const getLastPost = (): BlogPost => posts[0];

export const getOthersPosts = (): BlogPost[] => posts.slice(1, posts.length);

export const posts: BlogPost[] = [
  {
    title: "How to choose bicycle for spring in Australia shopping centres?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo auctor massa, sit amet hendrerit felis elementum ac. Maecenas non auctor urna. Aliquam sit amet tortor vel tellus condimentum venenatis a id orci. Nullam at fermentum lorem, lobortis condimentum enim. Sed finibus, lacus id gravida finibus, augue purus hendrerit ex, ut maximus nisi dui id dolor. Quisque tellus odio, pellentesque non tincidunt sit amet, feugiat sit amet justo. Cras orci justo, luctus at consequat lobortis, ornare at mauris. Donec eget purus pulvinar, viverra sem id, porta nisl. Cras sit amet leo efficitur tortor volutpat interdum non vel nunc. Fusce porta egestas libero at auctor. Sed sed rhoncus tortor. Aliquam diam ipsum, condimentum a accumsan vel, euismod et ipsum. Sed vehicula ac turpis a mollis.",
    slug: "how-to-choose-bicycle-for-spring-in-australia-shopping-centres",
    thumbnail: "https://cdn.discordapp.com/attachments/1061688888839655506/1118964186123354174/image-attractive-960x540.png",
    author: members[Math.floor(Math.random() * members.length)],
    createdAt: new Date(2023, 6, 15)
  },
  {
    title: "Creating a RESTful API with Node.js and MongoDB",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo auctor massa, sit amet hendrerit felis elementum ac. Maecenas non auctor urna. Aliquam sit amet tortor vel tellus condimentum venenatis a id orci. Nullam at fermentum lorem, lobortis condimentum enim. Sed finibus, lacus id gravida finibus, augue purus hendrerit ex, ut maximus nisi dui id dolor. Quisque tellus odio, pellentesque non tincidunt sit amet, feugiat sit amet justo. Cras orci justo, luctus at consequat lobortis, ornare at mauris. Donec eget purus pulvinar, viverra sem id, porta nisl. Cras sit amet leo efficitur tortor volutpat interdum non vel nunc. Fusce porta egestas libero at auctor. Sed sed rhoncus tortor. Aliquam diam ipsum, condimentum a accumsan vel, euismod et ipsum. Sed vehicula ac turpis a mollis.",
    slug: "creating-a-restful-api-with-nodejs-and-mongodb",
    thumbnail: "https://cdn.discordapp.com/attachments/1061688888839655506/1118965281847529593/camera_lense_0.png",
    author: members[Math.floor(Math.random() * members.length)],
    createdAt: new Date(2023, 4, 1)
  },
  {
    title: "Creating a RESTful API with Node.js and MongoDB",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo auctor massa, sit amet hendrerit felis elementum ac. Maecenas non auctor urna. Aliquam sit amet tortor vel tellus condimentum venenatis a id orci. Nullam at fermentum lorem, lobortis condimentum enim. Sed finibus, lacus id gravida finibus, augue purus hendrerit ex, ut maximus nisi dui id dolor. Quisque tellus odio, pellentesque non tincidunt sit amet, feugiat sit amet justo. Cras orci justo, luctus at consequat lobortis, ornare at mauris. Donec eget purus pulvinar, viverra sem id, porta nisl. Cras sit amet leo efficitur tortor volutpat interdum non vel nunc. Fusce porta egestas libero at auctor. Sed sed rhoncus tortor. Aliquam diam ipsum, condimentum a accumsan vel, euismod et ipsum. Sed vehicula ac turpis a mollis.",
    slug: "creating-a-restful-api-with-nodejs-and-mongodb",
    thumbnail: "https://cdn.discordapp.com/attachments/1061688888839655506/1118965281847529593/camera_lense_0.png",
    author: members[Math.floor(Math.random() * members.length)],
    createdAt: new Date(2023, 4, 1)
  },
  {
    title: "Creating a RESTful API with Node.js and MongoDB",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo auctor massa, sit amet hendrerit felis elementum ac. Maecenas non auctor urna. Aliquam sit amet tortor vel tellus condimentum venenatis a id orci. Nullam at fermentum lorem, lobortis condimentum enim. Sed finibus, lacus id gravida finibus, augue purus hendrerit ex, ut maximus nisi dui id dolor. Quisque tellus odio, pellentesque non tincidunt sit amet, feugiat sit amet justo. Cras orci justo, luctus at consequat lobortis, ornare at mauris. Donec eget purus pulvinar, viverra sem id, porta nisl. Cras sit amet leo efficitur tortor volutpat interdum non vel nunc. Fusce porta egestas libero at auctor. Sed sed rhoncus tortor. Aliquam diam ipsum, condimentum a accumsan vel, euismod et ipsum. Sed vehicula ac turpis a mollis.",
    slug: "creating-a-restful-api-with-nodejs-and-mongodb",
    thumbnail: "https://cdn.discordapp.com/attachments/1061688888839655506/1118965281847529593/camera_lense_0.png",
    author: members[Math.floor(Math.random() * members.length)],
    createdAt: new Date(2023, 4, 1)
  },
  {
    title: "Creating a RESTful API with Node.js and MongoDB",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo auctor massa, sit amet hendrerit felis elementum ac. Maecenas non auctor urna. Aliquam sit amet tortor vel tellus condimentum venenatis a id orci. Nullam at fermentum lorem, lobortis condimentum enim. Sed finibus, lacus id gravida finibus, augue purus hendrerit ex, ut maximus nisi dui id dolor. Quisque tellus odio, pellentesque non tincidunt sit amet, feugiat sit amet justo. Cras orci justo, luctus at consequat lobortis, ornare at mauris. Donec eget purus pulvinar, viverra sem id, porta nisl. Cras sit amet leo efficitur tortor volutpat interdum non vel nunc. Fusce porta egestas libero at auctor. Sed sed rhoncus tortor. Aliquam diam ipsum, condimentum a accumsan vel, euismod et ipsum. Sed vehicula ac turpis a mollis.",
    slug: "creating-a-restful-api-with-nodejs-and-mongodb",
    thumbnail: "https://cdn.discordapp.com/attachments/1061688888839655506/1118965281847529593/camera_lense_0.png",
    author: members[Math.floor(Math.random() * members.length)],
    createdAt: new Date(2023, 4, 1)
  },
  {
    title: "Creating a RESTful API with Node.js and MongoDB",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo auctor massa, sit amet hendrerit felis elementum ac. Maecenas non auctor urna. Aliquam sit amet tortor vel tellus condimentum venenatis a id orci. Nullam at fermentum lorem, lobortis condimentum enim. Sed finibus, lacus id gravida finibus, augue purus hendrerit ex, ut maximus nisi dui id dolor. Quisque tellus odio, pellentesque non tincidunt sit amet, feugiat sit amet justo. Cras orci justo, luctus at consequat lobortis, ornare at mauris. Donec eget purus pulvinar, viverra sem id, porta nisl. Cras sit amet leo efficitur tortor volutpat interdum non vel nunc. Fusce porta egestas libero at auctor. Sed sed rhoncus tortor. Aliquam diam ipsum, condimentum a accumsan vel, euismod et ipsum. Sed vehicula ac turpis a mollis.",
    slug: "creating-a-restful-api-with-nodejs-and-mongodb",
    thumbnail: "https://cdn.discordapp.com/attachments/1061688888839655506/1118965281847529593/camera_lense_0.png",
    author: members[Math.floor(Math.random() * members.length)],
    createdAt: new Date(2023, 4, 1)
  }
];