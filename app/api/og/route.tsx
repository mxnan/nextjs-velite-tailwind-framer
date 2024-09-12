import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";

export const runtime = "edge";

const anybodyBold = fetch(
  new URL("../../Anybody-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
  try {
    const fontBold = await anybodyBold;

    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title");

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            letterSpacing: "-.02em",
            fontWeight: 700,
            background: "white",
          }}
        >
          <div
            style={{
              left: 42,
              top: 42,
              position: "absolute",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
              <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
              <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
            </svg>

            <span
              style={{
                marginLeft: 8,
                fontSize: 28,
              }}
            >
              mxnan.com
            </span>
          </div>
          <div
            style={{
              left: 42,
              bottom: 42,
              position: "absolute",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>

            <span
              style={{
                marginLeft: 8,
                fontSize: 28,
              }}
            >
              @mxnan
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              padding: "20px 20px",
              margin: "0px 200px 200px 0px",
              fontSize: 54,
              fontWeight: "900",
              width: "auto",
              maxWidth: 900,
              textAlign: "center",
              backgroundColor: "#14213d",
              color: "white",
              lineHeight: 1.4,
              borderRadius: 30,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="68"
              height="68"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
             
            >
              <path d="m6 17 5-5-5-5" />
              <path d="m13 17 5-5-5-5" />
            </svg>
            {title}
          </div>
          <div
            style={{
              display: "flex",
              position: "absolute",
              top: "55%",
              flexWrap: "wrap",
              padding: "20px 20px",
              margin: "0px 0px 0px 0px",
              fontSize: 36,
              fontWeight: "700",
              width: "auto",
              maxWidth: 1000,
              textAlign: "start",
              backgroundColor: "#90e0ef",
              color: "black",
              lineHeight: 1.2,
              borderRadius: 30,
            }}
          >
            Easing dev experience
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Anybody",
            data: fontBold,
            style: "normal",
            weight: 700,
          },
        ],
      }
    );
  } catch (error) {
    return new Response("Failed to generate the image", { status: 500 });
  }
}
