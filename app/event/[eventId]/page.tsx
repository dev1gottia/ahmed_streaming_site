export const runtime = "edge";

import Script from "next/script";


type Props = {
  params: Promise<{ eventId: string }>;
};

export default async function Home({ params }: Props) {
  const eventId = (await params).eventId;

  const EVENT_API = "https://api.v3.quest/api/v1/event" + `/${eventId}` || "";

  const res = await fetch(EVENT_API, {
    next: { revalidate: 60 },
  });

  const data = await res.json();

  return (
    <>

<Script src='//inclinedallusionnearby.com/a0/21/81/a021811a4378572c98fba32597aa0f23.js' strategy="afterInteractive"></Script>

      <main className="flex justify-center mt-8 mb-8">
        <div className=" w-full mx-3 bg-black/10">
          <div
            className="p-4"
            suppressContentEditableWarning
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: `<script type="text/javascript">
	atOptions = {
		'key' : '53b287cb80d56771a860f84a392b474a',
		'format' : 'iframe',
		'height' : 90,
		'width' : 728,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//inclinedallusionnearby.com/53b287cb80d56771a860f84a392b474a/invoke.js"></script>`,
            }}
          ></div>

          <div className="grid grid-cols-12 max-lg:grid-cols-1 gap-6 p-6">
            <div className="col-span-8 max-lg:order-2">
              <div
                className="relative bg-black overflow-hidden shadow-2xl"
                id="stream-list"
              >
                <iframe
                  id="player"
                  src={data?.iframes[0]?.frame || "https://example.com"}
                  allowFullScreen
                  className="aspect-video w-full"
                ></iframe>
              </div>

              <div
                className="mt-6"
                suppressContentEditableWarning
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                  __html: `<script type="text/javascript">
	atOptions = {
		'key' : 'efd1cc29051ff0b795c8a4d089b1a4d2',
		'format' : 'iframe',
		'height' : 50,
		'width' : 320,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//inclinedallusionnearby.com/efd1cc29051ff0b795c8a4d089b1a4d2/invoke.js"></script>`,
                }}
              ></div>
            </div>

            <div className="col-span-4 max-lg:order-1">
              <div
                className="mb-6"
                suppressContentEditableWarning
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                  __html: `<script type="text/javascript">
	atOptions = {
		'key' : '96a4536e93a6baa5450e450515cd32bb',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//inclinedallusionnearby.com/96a4536e93a6baa5450e450515cd32bb/invoke.js"></script>`,
                }}
              ></div>

              <div
                suppressContentEditableWarning
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                  __html: `<script type="text/javascript">
	atOptions = {
		'key' : '432b7a65cedb894df8619ddde6ceb08d',
		'format' : 'iframe',
		'height' : 300,
		'width' : 160,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//inclinedallusionnearby.com/432b7a65cedb894df8619ddde6ceb08d/invoke.js"></script>`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
