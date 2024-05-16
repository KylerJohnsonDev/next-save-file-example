import prisma from "@/db/client";

export async function GET (req: Request, { params }: { params: { fileId: string } }) {
  const { fileId } = params;
  const file = await prisma.file_record.findUnique({
    where: { id: fileId }
  });
  if(!file) {
    return { status: 404, body: 'File not found' };
  }
  return new Response(file.binary, {
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': `attachment; filename="${file.name}"`
    }
  }) 
}