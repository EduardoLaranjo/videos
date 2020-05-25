import axios from "axios";

const YOUTUBE_API_KEY = "AIzaSyD3JVScTuzNjAzY1XmgkpSwCLYzaOXgWyw";

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: YOUTUBE_API_KEY
  }
})

export default youtube;