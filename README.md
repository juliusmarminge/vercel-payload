Vercel doesn't seem to accept a big payload.

Run `node upload.mjs`, you'll get back `413 Request Entity Too Large`.

Update the URL in the upload script to the localhost one, start the dev server (`pnpm dev`) then run the script again. Works fine.
