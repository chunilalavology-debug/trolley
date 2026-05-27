export function SendMessageTab() {
  return (
    <a
      href="#contact"
      className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 rounded-l-lg bg-teal px-2 py-6 text-sm font-medium text-white shadow-lg transition-colors hover:bg-teal-dark md:block"
      style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      aria-label="Send a message"
    >
      Send a message
    </a>
  );
}
