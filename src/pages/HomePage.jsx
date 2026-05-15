import HoverSpan from '../components/HoverSpan';

export default function HomePage({ play, pauseAll, setHoverGif }) {
  const hs = (gif, sound, text) => (
    <HoverSpan gif={gif} sound={sound} play={play} pauseAll={pauseAll} setHoverGif={setHoverGif}>
      {text}
    </HoverSpan>
  );

  return (
    <>
      <div className="pagetitle">home</div>
      <h1>Hi, good to see you!</h1>

      <p className="intro">
        Soooo, basically, I'm a {hs('dude', null, 'dude')} who loves anything
        chocolate-related. And... I do stuff on the interwebz, such as{' '}
        {hs('coding', null, 'front-end development')}, interaction and user experience design.
      </p>

      <p>
        People tell me that my {hs('dance-moves', null, 'dance moves')} are weird, but I'm not
        so sure about that. Even if that's the truth, I guess I'm just a guy who sometimes manages
        to make {hs('wrong-choices', null, 'wrong choices')}. But then again: who doesn't, right?
        Truthfully, I just think that{' '}
        {hs('trying-new-shit', null, 'learning new things')} is essential, because trying and
        failing is (almost always) a guarenteed learning experience. That being said, I like setting
        the bar high, and taking {hs('risky', null, 'risks')}.
      </p>

      <p>
        Anyway... as of the first of December 2019, I'm a frontend developer at ANWB. Crazy huh?{' '}
        {hs('crazy', null, 'Me at ANWB?!')}
      </p>

      <p>
        Enough <a href="#" onClick={e => { e.preventDefault(); }}>about me</a>. What's your
        favourite <del>food</del>, I mean <del>tv show</del>, I mean{' '}
        {hs(null, 'darude', 'song')}? Let's <a href="#">work</a> that out, shall we?
      </p>
    </>
  );
}
