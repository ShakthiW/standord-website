import { FloatingNavbar } from "@/components/landing/navbar";

export default function Home() {
  return (
    <div className="relative">
      <h1 className="text-4xl font-bold text-center mt-20">Stanord AI Solutions</h1>

      <div className="fixed -bottom-40 left-1/2 transform -translate-x-1/2">
        <FloatingNavbar />
      </div>
    </div>
  );
}
