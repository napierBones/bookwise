import config from "@/lib/config";
import ImageKit from "imagekit";
import { NextResponse } from "next/server";

const imagekit = new ImageKit({
  publicKey: config.env.imagekit.publicKey!,
  privateKey: config.env.imagekit.privateKey!,
  urlEndpoint: config.env.imagekit.urlEndpoint!,
});

// export async function GET() {
//   return NextResponse.json(imagekit.getAuthenticationParameters());
// }

export async function GET() {
  const response = NextResponse.json(imagekit.getAuthenticationParameters());
  response.headers.set("Access-Control-Allow-Origin", "*");
  return response;
}
