import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { loginSchema, registerSchema } from "@/types/schemas";
import { deleteCookie, setCookie } from "hono/cookie";
import { supabase } from "@/lib/supabase";
const app = new Hono()
  .post("/login", zValidator("json", loginSchema), async (c) => {
    const { email, password } = c.req.valid("json");

    console.log({ email, password });
    return c.json({ email, password });
  })
  .post("/register", zValidator("json", registerSchema), async (c) => {
    const { email, name, password } = c.req.valid("json");
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });

    if (error) {
      console.error(error);
      return c.json({ success: false, error: error.message }, 400);
    }

    // don’t treat missing session as error – it’s normal for email confirmation
    return c.json({ success: true, data }, 200);

    // setCookie(c, "access-token", data.session.access_token, {
    //   httpOnly: true,
    //   secure: true,
    //   path: "/",
    // });

    // setCookie(c, "refresh-token", data.session.refresh_token, {
    //   httpOnly: true,
    //   secure: true,
    //   path: "/",
    // });

    //return c.json({ success: true, data });
  });
// .post("/logout" , (c) => {
//   deleteCookie(c, "")

//   return true
// })

export default app;
