import axios from 'axios';

const API_URL = 'https://olive-peafowl-546702.hostingersite.com/wp-json/wp/v2/posts';

export const getProjects = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (err) {
    console.error('Error fetching projects:', err);
    return [];
  }
};
