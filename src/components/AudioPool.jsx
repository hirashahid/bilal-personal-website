const SOUNDS = [
  'coin','billyboy','dude','billyboy2',
  'home','about','work','contact',
  'gym','golgolgol','darude','bleep',
  'bruah','thats-all-folks','blablabla','yawn',
  'hasta-la-vista','so-long','rocky',
];

export default function AudioPool({ register }) {
  return (
    <div style={{ display: 'none' }}>
      {SOUNDS.map(id => (
        <audio key={id} ref={el => register(id, el)} preload="none">
          <source src={`sounds/${id}.mp3`} />
        </audio>
      ))}
    </div>
  );
}
