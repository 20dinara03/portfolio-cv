import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. {profile.professionalTitle}.
        </p>
        <p className="text-center sm:text-right">
          <a
            href={profile.company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-foreground"
          >
            {profile.company.name}
          </a>
          {" · "}
          <a
            href={profile.university}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-foreground"
          >
            FIT VUT
          </a>
        </p>
      </div>
    </footer>
  );
}
