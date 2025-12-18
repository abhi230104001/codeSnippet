export const dynamic = "force-dynamic";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const snippets = await prisma.snippet.findMany();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="font-bold text-4xl mb-6">Home</h1>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold">Snippets</h1>

        <Link href={"/snippet/new"}>
          <Button>New</Button>
        </Link>
      </div>

      <div className="space-y-4">
        {snippets.map((snippet: (typeof snippets)[number]) => (
          <div
            key={snippet.id}
            className="border rounded-lg p-4 flex items-center justify-between hover:bg-muted/30 transition"
          >
            <h1 className="text-lg font-medium">{snippet.title}</h1>

            <Link href={`/snippet/${snippet.id}`}>
              <Button variant="link" className="text-blue-600">
                View
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
