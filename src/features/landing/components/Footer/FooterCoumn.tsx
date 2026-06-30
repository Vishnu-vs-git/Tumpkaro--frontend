import type { FooterColumn as FooterColumnType } from "./footer.types";

interface FooterColumnProps {
  column: FooterColumnType;
}

const FooterColumn = ({ column }: FooterColumnProps) => {
  return (
    <div>
      <h3 className="mb-6 text-lg font-semibold text-white">
        {column.title}
      </h3>

      <ul className="space-y-4">
        {column.links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-slate-400 transition hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;