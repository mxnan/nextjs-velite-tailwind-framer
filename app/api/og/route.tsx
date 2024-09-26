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
            background:
              "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(4,4,4,1) 23%, rgba(143,140,140,1) 100%)",
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
            <span
              style={{
                borderRadius: "5px",
                padding: "2px 2px ",
                background: "white",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7c0788"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="24"
                height="24"
              >
                <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
                <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
                <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
              </svg>
            </span>
            <span
              style={{
                marginLeft: 10,
                fontSize: 24,
                color: "#ebe8e8",
                fontWeight: 700,
              }}
            >
              mxnan.com
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "40px",
              width: "90%",
              borderRadius: "20px",
              textAlign: "center",
              background:
                "radial-gradient(circle, rgba(143,140,140,0.1) 0%, rgba(4,4,4,0.1) 77%, rgba(0,0,0,0.1) 100%)",
            }}
          >
            <h1
              style={{
                marginBottom: "10px",
                lineHeight: 1.2,
                fontWeight: 700,
                fontSize: "70px",
                color: "transparent",
                position: "relative",
                display: "block",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "radial-gradient(circle, rgba(58,180,125,1) 0%, rgba(209,198,34,1) 50%, rgba(57,95,158,1) 100%)",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {title}
              </span>

              {title}
            </h1>
            <h1
              style={{
                fontSize: "40px",
                marginBottom: "20px",
                lineHeight: 1.2,
                fontWeight: 700,
                color: "transparent",
                position: "relative",
                display: "block",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(209,34,34,1) 50%, rgba(158,116,57,1) 100%)",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                UI components. Simplified.{" "}
              </span>
              UI components. Simplified.
            </h1>
            <p
              style={{
                fontSize: "20px",
                lineHeight: 1.6,
                color: "white",
                maxWidth: "80%",
              }}
            >
              A website to show all my custom UI components, some blogs to share
              my ideas and personal portfolio for showcasing and social contacts
              . Request a component , if you need one ?
            </p>
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
