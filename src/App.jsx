import { useState } from 'react';
import Nav from './components/Nav';
import AudioPool from './components/AudioPool';
import { useAudio } from './hooks/useAudio';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';

const PAGE_COMPONENTS = {
  home:    HomePage,
  about:   AboutPage,
  work:    WorkPage,
  contact: ContactPage,
};

const DEFAULT_GIFS = {
  home:    '/img/hello.gif',
  about:   '/img/me.gif',
  work:    '/img/muscles.gif',
  contact: '/img/wink.gif',
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [hoverGif,    setHoverGif]    = useState(null);
  const { register, play, playAlways, pauseAll } = useAudio();

  const PageComponent = PAGE_COMPONENTS[currentPage];
  const mediaGif = hoverGif || DEFAULT_GIFS[currentPage];

  return (
    <div id={`page-${currentPage}`} style={{ height: '100%' }}>
      <AudioPool register={register} />

      <Nav
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        play={playAlways}
        pauseAll={pauseAll}
        setHoverGif={setHoverGif}
      />

      <div id="content">
        <div id="text">
          <PageComponent
            play={play}
            pauseAll={pauseAll}
            setHoverGif={setHoverGif}
            onNavigate={setCurrentPage}
          />
        </div>

        <div
          id="media"
          style={{ backgroundImage: `url(${mediaGif})` }}
        />
      </div>
    </div>
  );
}
