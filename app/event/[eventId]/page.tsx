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
      <main className="flex justify-center mt-8 mb-8">
        <div className=" w-full mx-3 bg-black/10">
          <div
            className="p-4"
            suppressContentEditableWarning
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: `<script type="text/javascript">
	atOptions = {
		'key' : 'eecaaf2b8534d5a3b40aa04ac1624d3a',
		'format' : 'iframe',
		'height' : 60,
		'width' : 468,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//www.highperformanceformat.com/eecaaf2b8534d5a3b40aa04ac1624d3a/invoke.js"></script>`,
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
		'key' : '20175f8616ffc5042dc689baba189be3',
		'format' : 'iframe',
		'height' : 50,
		'width' : 320,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//www.highperformanceformat.com/20175f8616ffc5042dc689baba189be3/invoke.js"></script>`,
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
		'key' : '6859076cadfc4f71877d7c5d26914750',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//www.highperformanceformat.com/6859076cadfc4f71877d7c5d26914750/invoke.js"></script>`,
                }}
              ></div>

              <div
                suppressContentEditableWarning
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                  __html: `<script type="text/javascript">
	atOptions = {
		'key' : 'f951c6462948a45d39580bf56b3852f4',
		'format' : 'iframe',
		'height' : 300,
		'width' : 160,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//www.highperformanceformat.com/f951c6462948a45d39580bf56b3852f4/invoke.js"></script>`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
