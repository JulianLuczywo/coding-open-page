import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col max-w-6xl gap-4 mx-auto min-h-screen px-4 py-10">
      <div className="flex flex-col ">
        <h1 className="text-4xl font-bold">Stats</h1>
        <p className="text-md">
          Started my coding journey some time ago and I haven&apos;t really
          tracked it much, so I felt like creating a page where I can track my
          progress and see it visually, and also write about my learnings. The
          data from here would be from after August of 2025. Don&apos;t have
          much data from previous months, but I plan to keep it going now.
        </p>
      </div>
      <div className="flex flex-row gap-4">
        <Card>
          <CardHeader>Coding Tracker</CardHeader>
          <CardContent>Daily Tracker Component</CardContent>
        </Card>
      </div>
    </div>
  );
}
