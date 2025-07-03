import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">AI Agent UI Library</h1>

      <div className="space-x-4">
        <Button variant="default">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button disabled>Disabled</Button>
      </div>

      <p className="mt-10 text-gray-500 text-sm">
        This page is a live preview of reusable components.
      </p>
    </main>
  );
}
