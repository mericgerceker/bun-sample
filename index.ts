const server = Bun.serve({
    port: process.env.PORT || 4000,
    fetch: (req) => {
        const url = new URL(req.url);
        console.log(`Request to ${url.pathname}`);

        if (url.pathname === '/hello') return new Response('Hello, World!');
        else if (url.pathname === '/ll') return new Response('Hello, Lunch&Learn!');
        return new Response('Not Found', { status: 404 });
    }
})

console.log(`Server is running on port ${server.port}`)