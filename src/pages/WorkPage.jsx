import HoverSpan from '../components/HoverSpan';

export default function WorkPage({ play, pauseAll, setHoverGif }) {
  const hs = (gif, sound, text) => (
    <HoverSpan gif={gif ? `/img/${gif}.gif` : null} sound={sound} play={play} pauseAll={pauseAll} setHoverGif={setHoverGif}>
      {text}
    </HoverSpan>
  );

  return (
    <>
      <div className="pagetitle">work</div>
      <h1>Show off... <em>sort of</em></h1>

      <p>
        My latest three jobs are totally different from one another. The experience which comes with
        it is quite handy. ANWB is, by a long mile,{' '}
        {hs('thebest', null, 'the best employer')} I have worked for.{' '}
        <a href="https://www.urbandictionary.com/define.php?term=No%20cap" target="_blank" rel="noopener noreferrer">
          No cap
        </a>.
      </p>

      <h2>ANWB <span>(2019 - now)</span></h2>
      <p>
        At ANWB, I update, upgrade, refactor, optimize and add new features to the{' '}
        <a href="https://www.anwb.nl/verkeer/routeplanner" target="_blank" rel="noopener noreferrer">
          routeplanner
        </a>.
      </p>

      <h2>gracious <span>(2018 - 2019)</span></h2>
      <p>
        At this full service agency, I have worked on numerous headless projects such as
        budgetplant, eCurring, and Sauna &amp; Wellness cadeaukaart. I've also done some work for
        KARWEI, Warmteservice, BBP Media, and KoopJeDeal.
      </p>

      <h2>Incentro <span>(2017 - 2018)</span></h2>
      <p>
        As a consultant (through Incentro), I have worked for big clients such as Wolters Kluwer
        and Coop Supermarkt.
      </p>

      <p>
        Check out{' '}
        <a href="https://www.linkedin.com/in/bilalhvssain/" target="_blank" rel="noopener noreferrer">
          my LinkedIn profile
        </a>{' '}
        for more information.
      </p>

      <br /><br /><br />

      <p>
        And that's actually{' '}
        {hs('thats-all-folks', 'thats-all-folks', 'all I have to say')}... really.
      </p>

      {/* Easter egg */}
      {Array.from({ length: 50 }).map((_, i) => <br key={i} />)}

      <p>
        Nosey little {hs(null, 'bleep', 'fucker')}, aren't you?
      </p>
    </>
  );
}
