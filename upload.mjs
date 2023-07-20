import { createReadStream } from "node:fs";
import { fetch, FormData } from "undici";
import { blob } from "node:stream/consumers";

(async () => {
  const fileBlob = await blob(createReadStream("schema.json"));

  const formdata = new FormData();
  formdata.append("file", fileBlob, { filename: "schema.json" });
  formdata.append("file", fileBlob, { filename: "schema.json" });
  formdata.append("file", fileBlob, { filename: "schema.json" });

  const response = await fetch(
    // "http://localhost:3000/api",
    "https://my-app-ashen-six.vercel.app/api",
    {
      method: "POST",
      body: formdata,
    }
  );

  console.log(response);
})();
