import { NextRequest } from "next/server";
import { File } from "undici";

// There is no replacement for this in route handlers

// export const config = {
//   api: {
//     bodyParser: {
//       sizeLimit: "20mb",
//     },
//   },
// };

// Maybe a route segment export would be handy?
// export const maxBodySize = "20mb";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const fd = await req.formData();

  const fileEntry = fd.get("file") as unknown as File;
  console.log(fileEntry);
  const file = new File([fileEntry as any], fileEntry.name, {
    type: fileEntry.type,
    lastModified: fileEntry.lastModified,
  });

  console.log(file);

  const fileContent = await (file as any).text();
  //   console.log(fileContent);

  return new Response("ok");
}
