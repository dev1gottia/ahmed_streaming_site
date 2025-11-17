export const runtime = 'edge'
/* eslint-disable @typescript-eslint/no-explicit-any */
type Props = {
  params: Promise<{ espnId: string }>;
};

export default async function Home({ params }: Props) {
  const espnId = (await params).espnId;

  const API = "https://api.v3.quest/api/v1/all-events"

  const res = await fetch(API, {
    next: { revalidate: 60 },
  });

  const data = await res.json();

  const event = data.find((eventOj: any) => eventOj.espnEventId == espnId);


  return (
    <>
      <main className="flex justify-center mt-8 mb-8">
        <div className=" w-full mx-3 bg-black/10">
          <div
            className="p-4"
            suppressContentEditableWarning
                suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: `<script type="text/javascript">
	atOptions = {
		'key' : 'a3c2f6dfedb2213507e6e5868ba3319e',
		'format' : 'iframe',
		'height' : 60,
		'width' : 468,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//reclinecostumepessimistic.com/a3c2f6dfedb2213507e6e5868ba3319e/invoke.js"></script>`,
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
                  src={event?.iframes[0]?.frame || "https://example.com"}
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
		'key' : 'de63190bc629c9a4985c13f3a4e62fe0',
		'format' : 'iframe',
		'height' : 50,
		'width' : 320,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//reclinecostumepessimistic.com/de63190bc629c9a4985c13f3a4e62fe0/invoke.js"></script>`,
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
		'key' : '2ee592e2e15c7ddc5730211be4fbf271',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//reclinecostumepessimistic.com/2ee592e2e15c7ddc5730211be4fbf271/invoke.js"></script>`,
                }}
              ></div>

              <div
              suppressContentEditableWarning
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                  __html: `<script type="text/javascript">
	atOptions = {
		'key' : 'b9928ba8381ad5121e08b17f5835c429',
		'format' : 'iframe',
		'height' : 300,
		'width' : 160,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//reclinecostumepessimistic.com/b9928ba8381ad5121e08b17f5835c429/invoke.js"></script>`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
