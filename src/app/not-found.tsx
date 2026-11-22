import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-ink pt-24 text-white">
      <div className="absolute inset-0 bg-grid" />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <p className="text-[8rem] font-extrabold leading-none text-brand sm:text-[12rem]">404</p>
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl">This page didn&apos;t make it to the venue.</h1>
        <p className="mt-4 text-white/60">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <div className="mt-10 flex justify-center">
          <Button href="/">Back to home</Button>
        </div>
      </div>
    </section>
  );
}
