export const dynamic = "force-dynamic";

import EditSnippetForm from "@/components/EditSnippetForm";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

type EditPageProps = {
  params: { id: string };
};

const EditPageSnippet = async ({ params }: EditPageProps) => {
  const id = Number(params.id);

  const snippet = await prisma.snippet.findUnique({
    where: { id },
  });

  if (!snippet) notFound();

  return <EditSnippetForm snippet={snippet} />;
};

export default EditPageSnippet;
