import {FC, useState} from 'react';
import { useDeviceDetect } from '@/hooks/use-mobile';
import { Button } from '@sqlrooms/ui';
import { Download, Info, X, Globe } from 'lucide-react';
import { isRunningAsLocalFile } from '@/utils/environment';

const AppHeader: FC = () => {
  const { isMobile } = useDeviceDetect();
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  return (
    <>
      {/* Main Header - Light background matching DUCKIT style */}
      <header
        className={`w-full border-b ${isMobile ? 'py-2 px-3' : 'py-2 px-6'}`}
        style={{
          backgroundColor: '#FFFFFF',
          borderColor: '#E5E7EB'
        }}
      >
      {isMobile ? (
        // Mobile layout - vertical stack
        <div className="flex flex-col gap-2">
          {/* App Name */}
          <span className="text-2xl font-bold" style={{color: '#0F172A'}}>
            BRIQ
          </span>
          {/* Description */}
          <p className="text-base font-semibold" style={{color: '#0F172A'}}>
            In-Browser DuckDB ● Chat and Analyze in Natural Language ● No Remote DB Required
          </p>
          {/* Built on SQL Rooms */}
          <div className="built-on-sqlrooms flex items-center gap-2">
            <span>Built on</span>
            <a
              href="https://sqlrooms.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              SQL Rooms
            </a>
          </div>
        </div>
      ) : (
        // Desktop layout - horizontal like DUCKIT
        <div className="flex items-center gap-4">
          {/* App Name - slightly larger */}
          <span className="text-3xl font-semibold" style={{color: '#000000'}}>
            BRIQ
          </span>

          {/* Divider */}
          <div className="h-8 w-px" style={{backgroundColor: '#E2E8F0'}} />

          {/* Description - medium weight, pure black */}
          <span className="text-base font-medium" style={{color: '#000000'}}>
            In-Browser DuckDB ● Chat and Analyze in Natural Language ● No Remote DB Required
          </span>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Built on SQL Rooms - no wrap */}
          <div className="built-on-sqlrooms flex items-center gap-2 flex-shrink-0 whitespace-nowrap">
            <span>Built on</span>
            <a
              href="https://sqlrooms.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              SQL Rooms
            </a>
          </div>

          {/* Divider before TIGZIG */}
          <div className="h-8 w-px ml-2" style={{backgroundColor: '#E2E8F0'}} />

          {/* TIGZIG branding - same size as BRIQ */}
          <a
            href="https://www.tigzig.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl font-semibold hover:underline flex-shrink-0"
            style={{color: '#000000'}}
          >
            TIGZIG
          </a>
        </div>
      )}
      </header>

      {/* Download Info Bar - Hidden when running as local file (single-file build) */}
      {!isRunningAsLocalFile() && (
        <div
          className={`w-full border-b ${isMobile ? 'py-2 px-3' : 'py-1 px-6'}`}
          style={{
            backgroundColor: '#F9FAFB',
            borderColor: '#E5E7EB',
            borderBottomWidth: '1px'
          }}
        >
        {isMobile ? (
          <div className="flex flex-col gap-2">
            {/* Mobile: Icon and Button on same line */}
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-blue-500" />
              
              <Button
                variant="outline"
                size="sm"
                asChild
              >
                <a
                  href="https://sql-rooms.tigzig.com/SQL-ROOMS-TIGZIG-FULL-APP.html"
                  download="SQL-ROOMS-TIGZIG-FULL-APP.html"
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download Full App (~3.5 MB)
                </a>
              </Button>

              {/* Info Icon Button */}
              <button
                onClick={() => setIsInfoModalOpen(true)}
                className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                title="More information"
              >
                <Info className="h-5 w-5" style={{color: '#0f172a'}} />
              </button>
            </div>
          </div>
        ) : (
          /* Desktop Layout */
          <div className="flex items-center gap-3">
            {/* Icon */}
            <Globe className="h-5 w-5 text-blue-500" />

            {/* Download Button */}
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <a
                href="https://sql-rooms.tigzig.com/SQL-ROOMS-TIGZIG-FULL-APP.html"
                download="SQL-ROOMS-TIGZIG-FULL-APP.html"
                className="flex items-center gap-2"
                style={{color: '#312e81'}}
              >
                <Download className="h-4 w-4" />
                Download Full App (~3.5 MB)
              </a>
            </Button>

            {/* Text */}
            <span
              className="text-sm download-info-text"
              style={{color: '#334155'}}
            >
              Single HTML file - works offline, no server needed.
            </span>
          </div>
        )}
        </div>
      )}

      {/* Mobile Info Modal */}
      {isMobile && isInfoModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-end z-50">
          <div className="bg-white w-full rounded-t-lg p-4 max-h-96 overflow-y-auto">
            {/* Close Button */}
            <div className="flex justify-between items-center mb-3 pb-3 border-b">
              <h3 className="font-semibold text-gray-900">Download Information</h3>
              <button
                onClick={() => setIsInfoModalOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Information Text */}
            <p
              className="text-sm leading-relaxed download-info-text"
              style={{color: '#4f46e5'}}
            >
              Standalone portable version - download as single HTML file. Email it, share it, double-click to run. Works like the website but without needing a server.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AppHeader;
