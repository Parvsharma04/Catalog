export async function GET(req: Request){
  return new Response(JSON.stringify({
    message: "route works"  
  }), {
    status : 200,
    headers : { 'Content-Type' : "application/json"}
  })
}
