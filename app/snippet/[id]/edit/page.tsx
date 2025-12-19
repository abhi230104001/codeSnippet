export const dynamic = "force-dynamic";

import EditSnippetForm from "@/components/EditSnippetForm";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

type EditPageProps = {
  params: Promise<{ id: string }>;
};

const EditPageSnippet = async ({ params }: EditPageProps) => {
  const { id } = await params;        // ✅ unwrap params
  const snippetId = Number(id);

  if (Number.isNaN(snippetId)) notFound();

  const snippet = await prisma.snippet.findUnique({
    where: { id: snippetId },
  });

  if (!snippet) notFound();

  return <EditSnippetForm snippet={snippet} />;
};

export default EditPageSnippet;
