export async function POST(request: Request) {
  console.log(await request.json());

  return new Response(
    JSON.stringify({
      status: 200,
      body: { message: 'Hello, world!' },
    })
  );
}
