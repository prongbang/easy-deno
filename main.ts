import { todoRouter } from "./api/todo/router.ts";
import { Application } from "./deps.ts";

const port = 9000;
const app = new Application();

app.use(todoRouter.allowedMethods());
app.use(todoRouter.routes());

app.addEventListener("listen", () => {
  console.log(`Listening on: http://localhost:${port}`);
});

await app.listen({ port });
