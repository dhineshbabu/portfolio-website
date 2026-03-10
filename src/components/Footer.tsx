export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 text-center">
      <p className="text-slate-500 text-sm">
        Built with{" "}
        <span className="text-accent-cyan">Next.js</span> &amp;{" "}
        <span className="text-accent-blue">Tailwind CSS</span>
        {" "}— Dhineshbabu Muthuraj &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
