FROM hayd/alpine-deno:1.3.1

EXPOSE 9000

WORKDIR /app

USER deno

COPY deps.ts /app
RUN deno cache deps.ts

ADD . /app
RUN deno cache main.ts

CMD ["run", "--allow-net", "main.ts"]