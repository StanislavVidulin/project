import { HomeWrapper, Video } from "./styles";
import MyVideo from "../../assets/video.mp4";

function Home() {
  return (
    <HomeWrapper>
      <Video
        controls
        width="640"
        height="400"
        poster="poster.jpg"
        src={MyVideo}
        autoPlay
      ></Video>
    </HomeWrapper>
  );
}

export default Home;
