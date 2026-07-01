interface CharacterCounterProps {
  current: number;
  max: number;
}

const CharacterCounter = ({
  current,
  max,
}: CharacterCounterProps) => {
  return (
    <span
      className={`text-sm ${
        current > max * 0.9
          ? "text-red-400"
          : "text-slate-400"
      }`}
    >
      {current}/{max}
    </span>
  );
};

export default CharacterCounter;