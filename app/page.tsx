"use client";

export default function Page() {
  return (
    <form action="/api" method="POST">
      <label>
        <input type="file" name="file" />
        <input type="submit" />
      </label>
    </form>
  );
}
