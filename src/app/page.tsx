import prisma from "@/db/client";
import styles from "./page.module.css";
import { revalidatePath } from "next/cache";
import Button from "@/components/button/Button";


export default async function Home() {

  const files = await prisma.file_record.findMany();

  async function saveFile(formData: FormData) {
    'use server'
    const file = formData.get('file') as File;
    if(!file) throw new Error('No file provided');
    const data = await file.arrayBuffer();
    await prisma.file_record.create({
      data: {
        name: file.name,
        binary: Buffer.from(data),
        size: file.size,
      }
    })
    revalidatePath('/');
  }

  async function deleteFileById(fileId: string) { 
    'use server'
    await prisma.file_record.delete({
      where: { id: fileId }
    });
    revalidatePath('/');
  }

  return (
    <>
      <form className={styles.form} action={saveFile}>
        <input name="file" type="file" />
        <Button type="submit" text="Save" />
      </form>
      <section className={styles.fileSection}>
        <h2>Files</h2>
        {files.length === 0 ? <p>No files uploaded yet</p>:
          <ul className={styles.list}>
            {files.map((file) => (
              <li key={file.id} className={styles.listItem}>
                <span>{file.name} ({file.size} bytes)</span> 
                <a className={styles.link} href={`/api/files/${file.id}`} download>Download</a>
                <Button type="button" text="Delete" clickHandler={deleteFileById} clickHandlerCallbackParameter={file.id}/>
              </li>
            ))}
          </ul>
        }
      </section>
    </>
  );
}
