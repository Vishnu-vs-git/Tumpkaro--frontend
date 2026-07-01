interface GeneratorWorkspaceProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

const GeneratorWorkspace = ({
  left,
  right,
}: GeneratorWorkspaceProps) => {
  return (
    <div className="grid gap-8 xl:grid-cols-5">
      <div className="space-y-8 xl:col-span-2">
        {left}
      </div>

      <div className="xl:col-span-3">
        {right}
      </div>
    </div>
  );
};

export default GeneratorWorkspace;