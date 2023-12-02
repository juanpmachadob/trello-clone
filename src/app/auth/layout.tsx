import Image from "next/image";
import { redirect } from "next/navigation";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { auth } from "@/auth";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (session?.user) {
    redirect("/boards");
  }

  return (
    <main className="relative flex min-h-screen justify-center bg-white sm:bg-background">
      <div className="z-10 flex max-w-96 flex-col items-center justify-center self-start rounded-md bg-white p-8 sm:my-12 sm:shadow-md">
        <Image
          src="/assets/logos/trello-color.svg"
          alt="Trello logo"
          width={120}
          height={50}
        />

        {children}

        <hr className="my-4 w-full border-background-alternative" />
        <footer className="flex flex-col items-center gap-2 text-center">
          <p className="text-balance text-xs">
            This entire project is a simple clone of Trello, made for
            educational purposes only.
          </p>
          <p className="text-xs text-text-alternative">
            You can{" "}
            <a
              href="https://github.com/juanpmachadob/trello-clone/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              see the code
            </a>{" "}
            and more of my work on my social networks:
          </p>
          <span className="flex gap-2">
            <a
              href="https://www.linkedin.com/in/juanpmachadob/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn profile"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://github.com/juanpmachadob/"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub profile"
            >
              <FaGithub size={18} />
            </a>
          </span>
        </footer>
      </div>
      <Image
        src="/assets/images/auth-figure-left.svg"
        alt="Left illustration"
        width={360}
        height={360}
        className="fixed bottom-0 left-0 hidden md:block"
      />
      <Image
        src="/assets/images/auth-figure-right.svg"
        alt="Right illustration"
        width={360}
        height={360}
        className="fixed bottom-0 right-0 hidden md:block"
      />
    </main>
  );
}
