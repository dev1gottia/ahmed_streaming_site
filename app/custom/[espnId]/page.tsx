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

<script type='text/javascript' src='//abjectjunctionlatest.com/83/c0/16/83c01600b862cfd76697f64e607767bd.js'></script>

      <main className="flex justify-center mt-8 mb-8">
        <div className=" w-full mx-3 bg-black/10">
          <div
            className="p-4"
            suppressContentEditableWarning
                suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: `<script type="text/javascript">
	atOptions = {
		'key' : 'aa077d5c69bec9a758065671dc29da86',
		'format' : 'iframe',
		'height' : 60,
		'width' : 468,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//abjectjunctionlatest.com/aa077d5c69bec9a758065671dc29da86/invoke.js"></script>`,
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
		'key' : 'ba588e392a11185b6bd780245516695f',
		'format' : 'iframe',
		'height' : 50,
		'width' : 320,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//abjectjunctionlatest.com/ba588e392a11185b6bd780245516695f/invoke.js"></script>`,
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
		'key' : 'f15a42546258a6e6a463e57e82ce2a04',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//abjectjunctionlatest.com/f15a42546258a6e6a463e57e82ce2a04/invoke.js"></script>`,
                }}
              ></div>

              <div
              suppressContentEditableWarning
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                  __html: `<script type="text/javascript">
	atOptions = {
		'key' : '34468b36353f4462a91f2bfd2c91aedd',
		'format' : 'iframe',
		'height' : 300,
		'width' : 160,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//abjectjunctionlatest.com/34468b36353f4462a91f2bfd2c91aedd/invoke.js"></script>`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
