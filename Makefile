build:
	docker build -t prongbang/easy-deno .

run:
	docker run -it --init -p 9000:9000 prongbang/easy-deno

dev:
	deno run --allow-net --allow-env main.ts

load-test:
	wrk -t12 -c400 -d30s http://localhost:9000/todo