export default function HoverSpan({ gif, sound, children, play, pauseAll, setHoverGif, defaultGif }) {
  const handleEnter = () => {
    if (gif) setHoverGif(gif);
    if (sound) play(sound);
  };

  const handleLeave = () => {
    setHoverGif(null);
    pauseAll();
  };

  return (
    <span
      className="hover-span"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {children}
    </span>
  );
}
