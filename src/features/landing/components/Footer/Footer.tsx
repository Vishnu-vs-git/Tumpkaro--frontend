
import {
  FaLinkedin,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";



import { footerColumns } from "./footer.data";
import { Container } from "../../../../shared/components/ui/container";
import Logo from "../../../../shared/components/common/Logo";
import FooterColumn from "./FooterCoumn";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-20">
      <Container>
        <div className="grid gap-16 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo />

            <p className="mt-6 max-w-sm text-slate-400 leading-7">
              Generate professional YouTube thumbnails with AI.
              Create stunning visuals in seconds.
            </p>

            <div className="mt-8 flex gap-4">
              <FaGithub className="cursor-pointer text-slate-400 transition hover:text-white" />
              <FaLinkedin className="cursor-pointer text-slate-400 transition hover:text-white" />
              <FaXTwitter className="cursor-pointer text-slate-400 transition hover:text-white" />
            </div>
          </div>

          {/* Columns */}
          <div className="lg:col-span-3 grid gap-10 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <FooterColumn
                key={column.title}
                column={column}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-slate-500">
          © {new Date().getFullYear()} ThumbKaro AI.
          All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;