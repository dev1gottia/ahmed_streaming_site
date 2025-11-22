import { redirect } from "next/navigation";

export const runtime = "edge";

type Props = {
  params: Promise<{ eventId: string }>;
};

export default async function Page({ params }: Props) {
  const { eventId } = await params;

  // Permanent redirect (308)
  redirect(`https://ab.livecr.online/event/${eventId}`);
}
