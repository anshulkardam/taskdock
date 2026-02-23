import { getCookie } from "hono/cookie";
import { createMiddleware } from "hono/factory";
import { supabase } from "./supabase";

export const sessionMiddleware = createMiddleware(async (c, next) => {
  const token = getCookie(c, "sb-access-token");

  if (!token) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  const { data, error } = await supabase.auth.getUser(token);

  if (error || !data.user) {
    return c.json({ error: "Invalid session" }, 401);
  }

  c.set("user", data.user);

  await next();
});
