
function Logo() {
  return (
    <a
      href="#home"
      className="group inline-flex items-center gap-2.5 transition-opacity hover:opacity-70"
    >
      <svg
        viewBox="0 0 29 4"
        width="29"
        height="4"
        aria-hidden="true"
        className="shrink-0"
      >
        <path d="M 1 2 L 28 2" fill="transparent" stroke="currentColor" strokeMiterlimit="10" />
      </svg>
      <span
        className="text-sm font-semibold uppercase text-foreground"
        style={{
          fontFamily: 'var(--font-inter-tight), sans-serif',
          fontSize: '14px',
          lineHeight: '125%',
        }}
      >
        Eugene Xue
      </span>
    </a>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container py-20">
        <div className="mx-auto max-w-4xl space-y-10 text-center">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="flex items-center justify-start gap-2 text-foreground opacity-40">
              <div className="flex items-center gap-1.5">
                <span
                  className="text-sm font-light"
                  style={{ letterSpacing: '-0.04em', lineHeight: '105%' }}
                >
                  ©
                </span>
                <span
                  className="text-sm font-light"
                  style={{ letterSpacing: '-0.04em', lineHeight: '105%' }}
                >
                  Eugene Xue
                </span>
              </div>
              <span
                className="text-sm font-light"
                style={{ letterSpacing: '-0.04em', lineHeight: '105%' }}
              >
                {new Date().getFullYear()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
