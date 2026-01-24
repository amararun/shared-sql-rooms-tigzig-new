import {FC} from 'react';

interface FooterProps {
  className?: string;
}

const AppFooter: FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer
      className={`py-2 mt-auto ${className}`}
      style={{ backgroundColor: '#FAFAFA', borderTop: '1px solid #E2E8F0' }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-1">
          {/* Left section - name, designation, email, LinkedIn */}
          <div className="app-footer-left text-center md:text-left" style={{ fontSize: '15px', fontWeight: '400', color: '#334155' }}>
            <span className="footer-text" style={{ color: '#334155', fontWeight: '400' }}>Amar Harolikar</span>
            <span className="mx-1.5 footer-text" style={{ color: '#334155' }}>•</span>
            <span className="footer-text" style={{ color: '#334155', fontWeight: '400' }}>Decision Sciences & Applied AI</span>
            <span className="mx-1.5 footer-text" style={{ color: '#334155' }}>•</span>
            <span className="footer-text" style={{ color: '#334155', fontWeight: '400' }}>
              <i className="fas fa-envelope mr-1"></i>amar@harolikar.com
            </span>
            <span className="mx-1.5 footer-text" style={{ color: '#334155' }}>•</span>
            <a
              href="https://www.linkedin.com/in/amarharolikar"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#334155', fontWeight: '400' }}
              className="footer-text hover:underline"
            >
              <i className="fab fa-linkedin mr-1"></i>LinkedIn
            </a>
          </div>
          {/* Right section - GitHub, Tigzig, Privacy, Terms */}
          <div className="app-footer-right flex items-center gap-4" style={{ fontSize: '15px', fontWeight: '400', color: '#334155' }}>
            <a
              href="https://github.com/amararun"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#334155', fontWeight: '400' }}
              className="footer-text hover:underline"
            >
              <i className="fab fa-github mr-1"></i>GitHub
            </a>
            <a
              href="https://www.tigzig.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#334155', fontWeight: '400' }}
              className="footer-text hover:underline"
            >
              <i className="fas fa-globe mr-1"></i>Tigzig
            </a>
            <a
              href="https://www.tigzig.com/privacy-policy-tigzig"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#334155', fontWeight: '400' }}
              className="footer-text hover:underline"
            >
              <i className="fas fa-shield-alt mr-1"></i>Privacy
            </a>
            <a
              href="https://www.tigzig.com/terms-conditions"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#334155', fontWeight: '400' }}
              className="footer-text hover:underline"
            >
              <i className="fas fa-file-contract mr-1"></i>Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
