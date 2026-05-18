import HoverSpan from '../components/HoverSpan';

export default function AboutPage({ play, pauseAll, setHoverGif }) {
  const hs = (gif, sound, text) => (
    <HoverSpan gif={gif ? `/img/${gif}.gif` : null} sound={sound} play={play} pauseAll={pauseAll} setHoverGif={setHoverGif}>
      {text}
    </HoverSpan>
  );

  return (
    <>
      <div className="pagetitle">about</div>
      <h1>Get to know me... <em>kind of</em></h1>

      <p className="intro">
        If you haven't noticed already, I like chocolate. And food. Other than that, I also like
        spending time on the internetz, watching movies, tv shows,{' '}
        {hs('football', null, 'football')} and cricket matches. I occasionally follow the{' '}
        {hs('nba', null, 'NBA')}. Nowadays, trust me or not, I'm trying to think about going to the{' '}
        {hs('gym', 'gym', 'gym')}.
      </p>

      <p>
        Naturally, people tend to go by first appearances, and I have a somewhat{' '}
        <del>resting bitch face</del>{' '}
        {hs('face', null, 'neutral face expression')}, but don't let that fool you. I'd like to
        think that I'm pretty chill. No stress. Hard-working but still helpful to others. Love to
        crack a dumb joke. So if you're into {hs('prank', null, 'silly pranks')} and jokes as much
        as I am, then you're my buddy, friend.
      </p>

      <h2>Recent things</h2>
      <p>
        I work at{' '}
        <a href="https://www.anwb.nl/" target="_blank" rel="noopener noreferrer">ANWB</a>, a
        travelers' association in the Netherlands, supporting all modes of travel. To be more
        precise: I'm working on the awesome{' '}
        <a href="https://www.anwb.nl/verkeer/routeplanner" target="_blank" rel="noopener noreferrer">
          routeplanner
        </a>. My goal is to make it even more awesome with my teammates!
      </p>

      <h2>Gooooaaaal</h2>
      <p>
        Talking about goals... Have you seen me score{' '}
        {hs('goal', 'golgolgol', 'THIS GOAL?!?!')} See, I have goals. I score goals. I'm a
        goalscorer. Wait no longer!{' '}
        <a href="#">HIRE ME TO SCORE GOALS</a>.
      </p>

      <h2>Food</h2>
      <p>
        Last but not least: {hs('food', null, 'FOOD')}. Let's talk about food now, because
        that's where my passion lies. Italian, Indonesian, Chinese and of course the food I grew
        up with: the spicy Pakistani food, {hs(null, 'bruah', 'brrrruuaah')}. I like making and
        sharing food. But I'm best when I have to <strong>eat</strong> it, though.
      </p>
    </>
  );
}
