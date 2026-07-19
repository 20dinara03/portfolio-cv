import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-slate-500 sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. Frontend Developer
          (React / TypeScript).
        </p>
        <p className="text-center sm:text-right">
          Lead Frontend @{" "}
          <a
            href={profile.company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-cyan-300"
          >
            {profile.company.name}
          </a>
          {" · "}
          MSc (completed) @{" "}
          <a
            href={profile.university}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-cyan-300"
          >
            FIT VUT
          </a>
        </p>
      </div>
    </footer>
  );
}
