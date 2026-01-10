import { openAiClient } from "@/lib/openAI";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const response = await openAiClient.responses.create({
      model: "gpt-4.1-mini",
      input: message,
      max_output_tokens: 200,
    });

    return Response.json({
      reply: response.output_text,
    });
  } catch (e: any) {
    return Response.json(
      { error: e.message ?? "Error interno" },
      { status: 500 }
    );
  }
}
