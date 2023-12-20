import { Hono } from "hono";

const app = new Hono();

app.get("/", async (c) => {
  return c.render("Test");
});

export default app;
