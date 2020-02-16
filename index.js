import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Link from "next/link";


const Home = () => (
  <div className="container">
    <Head>
      <title>Rabbani YILMAZ</title>
      <link rel="icon" href="/a1.jpg" />
    </Head>

    <Nav />

    <div className="hero">
      <h1 className="a">Rabbani YILMAZ</h1>
     
     <Link href="https://www.linkedin.com/in/yilmazrabbani/"><a className="s-l">Linkedin</a></Link>

      
    </div>
<div className="blog">
  <h2>
    <Link href="/test">
      <a>blog basligi</a>
    </Link>
  </h2>
  <div>İnternet kullanımının yoğunlaşması ile birlikte internette üretilen içerik sayısı da her geçen gün artmaktadır. İster birey olsun ister marka olsun, sosyal platformlarda içerik üretenlerin en büyük amacı o içeriğin etkileşim almasını sağlamaktır. Hangi Facebook kullanıcısı paylaştığı bir gönderinin çok fazla beğeni almasını istemez? Hangi marka paylaştığı bir ürünün geri dönüşünü arttırmak istemez? Ya da hangi blogger yazdığı bir yazının başarıya ulaşmasını ve bu sayede trafiğini arttırmasını istemez? İşte tüm bunların altında kişilerin içerik üretirkenki asıl amacı yatmaktadır: Etkileşim.</div>
  <div className="bd">14 Subat 2020</div>
</div>

  <style jsx>{`
.hero {
        width: 100%;
        color: #333;
        text-aling: center;
      }

.container {
        max-width: 650px;
        width: 100%;
        margin: 0 auto;
      }

.a {
        text-aling: center;

      
      }

.s-l:firt-child {
        margin-right: 8px;


      }
a { 
  color: 35459e;
  text-decoration: none;
}

.bd {
  text-aling: right;
  color: #cccccc;
  margin: 12px 0 48px 0;

}
    `}</style>
</div>
)

export default Home
