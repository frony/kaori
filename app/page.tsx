import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-autow-full">
      <header className="flex items-center justify-between flex-wrap bg-amber-50 pb-4 mx-20 mr-20 ">
        {/* Logo */}
        <div className="flex-shrink-0 ml-6 mr-6 md:pl-2 md:pr-6 md:pt-12">
          {/*<TribeLogo/>*/}
          <h1 className={'font-bold text-4xl text-stone-500 pl-6'}>Kawori - かおり</h1>
        </div>
      </header>

      {/* First panel */}
      <div className={'pb-0 px-20 h-full'}>
        <div className="grid grid-cols-1 md:grid-cols-2 py-0 gap-y-2 border-b-indigo-950 border-t-2">
          <div className="bg-amber-50 pb-16 pl-8 h-full px-16 pt-10">
            <Image
              src={'/img/valentines-2021.jpg'}
              alt={'Golden Gate Bridge viewed from Chrissy Fields'}
              width={4032}
              height={2268}
              className={'h-64 object-cover'}
            />
          </div>
          <div className="bg-amber-50 pl-8 pt-20 px-16 font-bold">
            <h1 className={`mb-3 text-5xl pt-2`}>Kawori's</h1>
            <h1 className={`mb-3 text-4xl`}>Live Your Potential</h1>
          </div>
        </div>
      </div>


      {/* Second panel */}
      <div className={'mx-20 px-16 h-full bg-amber-200 py-0'}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 pb-16">
          <div className={'col-span-3 md:pb-16'}>
            <h1 className={'border-b-indigo-950 border-b-2 text-4xl pt-10 pb-3'}>＝ダイエットカウンセリング＝</h1>
          </div>
          <div className="h-full col-span-2">
            <p className={'pt-1 my-3'}>体重の増減に一喜一憂するのに、疲れたあなたに。</p>
            <p className={'pt-1 my-3'}>「何をやってもなかなか体重が落ちない」、「ダイエットとリバウンドを繰り返している」、「若い時にうまくいった方法が効かなくなった」、「自分にあった方法がわからない」、「最後のダイエットにしたい」。 そんなお悩みを抱える方々のご要望にお応えして、オンラインでのマンツーマンのダイエットサポートを行なっております。</p>
            <p className={'pt-1 my-3'}>「ダイエット伴奏者、佐藤かをり」が、東洋医学の考え方に基づいて、あなたの体質を分析。あなたの体質やライフスタイルに合った「あなただけの痩せ方」を見つけるお手伝いをします。</p>
          </div>
          <div className={'p-10'}>
            <Image
              src={'/img/crissy-fields.jpg'}
              alt={'Golden Gate Bridge viewed from Chrissy Fields'}
              width={4032}
              height={2268}
              className={'h-80 w-full'}
            />
          </div>
        </div>
      </div>
      {/* Third panel */}
      <div className={'mx-20 px-16 h-full bg-amber-50 py-0'}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 pb-16">
          <div className={'col-span-3 md:pb-16'}>
            <h1 className={' border-b-indigo-950 border-b-2 text-4xl pt-10 pb-3'}>What we can do for you</h1>
          </div>
          <div className="h-full">
            <h2 className={'text-2xl'}>01</h2>
            <Image
              src={'/img/dinner.jpg'}
              alt={'Golden Gate Bridge viewed from Chrissy Fields'}
              width={4032}
              height={2268}
              className={'h-80 p-2 pl-0'}
            />
          </div>
          <div className="h-full">
            <h2 className={'text-2xl'}>02</h2>
            <Image
              src={'/img/dessert.jpg'}
              alt={'Golden Gate Bridge viewed from Chrissy Fields'}
              width={4032}
              height={2268}
              className={'h-80 p-2 pl-0 object-contain'}
            />
          </div>
          <div className="h-full">
            <h2 className={'text-2xl'}>03</h2>
            <Image
              src={'/img/green.jpg'}
              alt={'Green street'}
              width={4032}
              height={2268}
              className={'h-80 p-2 pl-0 object-cover'}
            />
          </div>
        </div>
      </div>
      {/* Fourth panel */}
      <div className={'mx-20 px-16 h-full bg-amber-200 py-0'}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 pb-16">
          <div className={'col-span-3 md:pb-16'}>
            <h1 className={' border-b-indigo-950 border-b-2 text-4xl pt-10 pb-3'}>ソーシャルメディア＆お問い合わせ</h1>
          </div>
          <div className="h-full col-span-2">
            <Image
              src={'/img/mushrooms.jpg'}
              alt={'Green street'}
              width={4032}
              height={2268}
              className={'h-80 p-2 pl-0 object-cover'}
            />
          </div>
          <div className={'p-10'}>
            <Link href={'https://www.instagram.com/kaworislyp/'}>
              <Image
                src={'/img/instagram_social_media_icon.png'}
                alt={'Green street'}
                width={60}
                height={60}
                className={'h-14 p-2 pl-0 object-cover'}
              />
            </Link>
            <Link href={'https://liff.line.me/1645278921-kWRPP32q/?accountId=330kpivn'}>
              <Image
                src={'/img/line_social_media_icon.png'}
                alt={'Green street'}
                width={60}
                height={60}
                className={'h-14 p-2 pl-0 object-cover'}
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
