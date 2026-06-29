interface TrustedStatProps {
  value: string;
  label: string;
}

const TrustedStat = ({
  value,
  label,
}: TrustedStatProps) => {
  return (
    <div className="text-center">
      <h3 className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent">
        {value}
      </h3>

      <p className="mt-2 text-slate-400">
        {label}
      </p>
    </div>
  );
};

export default TrustedStat;