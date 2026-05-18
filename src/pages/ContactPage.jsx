import HoverSpan from '../components/HoverSpan';

export default function ContactPage({ play, pauseAll, setHoverGif }) {
  const hs = (gif, sound, text) => (
    <HoverSpan gif={gif ? `/img/${gif}.gif` : null} sound={sound} play={play} pauseAll={pauseAll} setHoverGif={setHoverGif}>
      {text}
    </HoverSpan>
  );

  return (
    <>
      <div className="pagetitle">contact</div>
      <h1>Contact me... <em>to a certain degree</em></h1>

      <p className="intro">Hi! Or... bye?</p>

      <p>
        Go to my{' '}
        <a href="https://www.linkedin.com/in/bilalhvssain/" target="_blank" rel="noopener noreferrer">
          LinkedIn page
        </a>. Add me, send me a message and I'll give you my e-mail address.
        <br /><br /><br />
        But don't contact me needlessly, yeah?
        <br /><br />
        Because I'm eating.
      </p>

      <br /><br /><br />

      <p>
        {hs('hasta-la-vista', 'hasta-la-vista', 'See ya!')}
      </p>
    </>
  );
}
