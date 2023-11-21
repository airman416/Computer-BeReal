import { IncomingForm, File } from 'formidable';

interface FormData {
  fields: any;
  files: {
    image: File;
  };
}

export async function getImage(formData: FormData): Promise<File> {
  const data = await new Promise<File>((resolve, reject) => {
    const form = new IncomingForm({ keepExtensions: true });
    form.parse(formData, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });

  return data.files.image;
}
