export const runtime = "edge";

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

<script type='text/javascript' src='//pl28073517.effectivegatecpm.com/2d/f1/7b/2df17b1a5a21b171295655be0b81d13d.js'></script>

      <main className="flex justify-center mt-8 mb-8">
        <div className=" w-full mx-3 bg-black/10">
          <div
            className="p-4"
            suppressContentEditableWarning
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: `<script type="text/javascript">
	atOptions = {
		'key' : 'f6c6c8ae7e3b2025e08c13ece04a0269',
		'format' : 'iframe',
		'height' : 60,
		'width' : 468,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//www.highperformanceformat.com/f6c6c8ae7e3b2025e08c13ece04a0269/invoke.js"></script>`,
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
		'key' : 'accfb6d98cffaddfefa4294c6bcc4535',
		'format' : 'iframe',
		'height' : 50,
		'width' : 320,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//www.highperformanceformat.com/accfb6d98cffaddfefa4294c6bcc4535/invoke.js"></script>`,
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
		'key' : '319d1c82241fbbc239aadac8467dac1a',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//www.highperformanceformat.com/319d1c82241fbbc239aadac8467dac1a/invoke.js"></script>`,
                }}
              ></div>

              <div
                suppressContentEditableWarning
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                  __html: `<script type="text/javascript">
	atOptions = {
		'key' : '31c504c540b3f242141e69d6b74b88e8',
		'format' : 'iframe',
		'height' : 300,
		'width' : 160,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//www.highperformanceformat.com/31c504c540b3f242141e69d6b74b88e8/invoke.js"></script>`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
