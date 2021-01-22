import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Navbar';
import Book from './Book';

var books=   [
  {
    "web": "1611334042-469",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "My Hero Academia, Vol. 2 (2)",
    "manga-href": "https://www.amazon.com/My-Hero-Academia-Vol-2/dp/1421582708/ref=zg_bs_7421474011_37?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "My Hero Academia, Vol. 2 (2)",
    "author": "Kouhei Horikoshi",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51PhW2p60OL._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334007-459",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "My Hero Academia, Vol. 11 (11)",
    "manga-href": "https://www.amazon.com/My-Hero-Academia-Vol-11/dp/1421595834/ref=zg_bs_7421474011_47?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "My Hero Academia, Vol. 11 (11)",
    "author": "Kohei Horikoshi",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51pWCnnQfDL._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334058-473",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "My Hero Academia, Vol. 9 (9)",
    "manga-href": "https://www.amazon.com/My-Hero-Academia-Vol-9/dp/1421593408/ref=zg_bs_7421474011_33?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "My Hero Academia, Vol. 9 (9)",
    "author": "Kohei Horikoshi",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51pXw+clEgL._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334045-470",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "Demon Slayer: Kimetsu no Yaiba, Vol. 18 (18)",
    "manga-href": "https://www.amazon.com/Demon-Slayer-Kimetsu-Yaiba-Vol/dp/1974717607/ref=zg_bs_7421474011_36?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "Demon Slayer: Kimetsu no Yaiba, Vol. 18 (18)",
    "author": "Koyoharu Gotouge",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51hlARUNzsL._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334126-493",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "My Hero Academia, Vol. 22 (22)",
    "manga-href": "https://www.amazon.com/My-Hero-Academia-Vol-22/dp/1974709655/ref=zg_bs_7421474011_13?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "My Hero Academia, Vol. 22 (22)",
    "author": "Kohei Horikoshi",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51Mg22QipVL._SX321_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334099-485",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "Spy x Family, Vol. 3 (3)",
    "manga-href": "https://www.amazon.com/Spy-Family-Vol-Tatsuya-Endo/dp/1974718166/ref=zg_bs_7421474011_21?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "Spy x Family, Vol. 3 (3)",
    "author": "Tatsuya Endo",
    "img": "https://images-na.ssl-images-amazon.com/images/I/41SkXE9ZhmL._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334004-458",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "Demon Slayer: Kimetsu no Yaiba, Vol. 15 (15)",
    "manga-href": "https://www.amazon.com/Demon-Slayer-Kimetsu-Yaiba-Vol/dp/1974714780/ref=zg_bs_7421474011_48?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "Demon Slayer: Kimetsu no Yaiba, Vol. 15 (15)",
    "author": "Koyoharu Gotouge",
    "img": "https://images-na.ssl-images-amazon.com/images/I/61OQ8pCxhML._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334120-491",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "My Hero Academia, Vol. 21 (21)",
    "manga-href": "https://www.amazon.com/My-Hero-Academia-Vol-21/dp/1974709507/ref=zg_bs_7421474011_15?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "My Hero Academia, Vol. 21 (21)",
    "author": "Kohei Horikoshi",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51Nj+Tb26BL._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334082-480",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "My Hero Academia, Vol. 27 (27)",
    "manga-href": "https://www.amazon.com/My-Hero-Academia-Vol-27/dp/1974721019/ref=zg_bs_7421474011_26?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "My Hero Academia, Vol. 27 (27)",
    "author": "Kohei Horikoshi",
    "img": "https://images-na.ssl-images-amazon.com/images/I/511tdGW0wJL._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334018-462",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "Demon Slayer: Kimetsu no Yaiba, Vol. 5 (5)",
    "manga-href": "https://www.amazon.com/Demon-Slayer-Kimetsu-Yaiba-Vol/dp/1974700569/ref=zg_bs_7421474011_44?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "Demon Slayer: Kimetsu no Yaiba, Vol. 5 (5)",
    "author": "Koyoharu Gotouge",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51uGMF6EqUL._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334011-460",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "Demon Slayer: Kimetsu no Yaiba, Vol. 17 (17)",
    "manga-href": "https://www.amazon.com/Demon-Slayer-Kimetsu-Yaiba-Vol/dp/1974710610/ref=zg_bs_7421474011_46?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "Demon Slayer: Kimetsu no Yaiba, Vol. 17 (17)",
    "author": "Koyoharu Gotouge",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51pq2qj24ML._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334106-487",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "My Hero Academia, Vol. 7 (7)",
    "manga-href": "https://www.amazon.com/My-Hero-Academia-Vol-7/dp/1421590409/ref=zg_bs_7421474011_19?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "My Hero Academia, Vol. 7 (7)",
    "author": "Kohei Horikoshi",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51uOO4GLL1L._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334065-475",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "Naruto: 3-in-1 Edition, Vol. 1 (Uzumaki Naruto…",
    "manga-href": "https://www.amazon.com/Naruto-3-1-Uzumaki-Client/dp/1421539896/ref=zg_bs_7421474011_31?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "Naruto: 3-in-1 Edition, Vol. 1 (Uzumaki Naruto / The Worst Client / Dreams)",
    "author": "Masashi Kishimoto",
    "img": "https://images-na.ssl-images-amazon.com/images/I/61ExB5eOiBL._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334036-467",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "Demon Slayer: Kimetsu no Yaiba, Vol. 14 (14)",
    "manga-href": "https://www.amazon.com/Demon-Slayer-Kimetsu-Yaiba-Vol/dp/1974711145/ref=zg_bs_7421474011_39?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "Demon Slayer: Kimetsu no Yaiba, Vol. 14 (14)",
    "author": "Koyoharu Gotouge",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51Y5UXaQ9CL._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334039-468",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "Demon Slayer: Kimetsu no Yaiba, Vol. 13 (13)",
    "manga-href": "https://www.amazon.com/Demon-Slayer-Kimetsu-Yaiba-Vol/dp/1974711137/ref=zg_bs_7421474011_38?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "Demon Slayer: Kimetsu no Yaiba, Vol. 13 (13)",
    "author": "Koyoharu Gotouge",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51oR3tFexZL._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334129-494",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "My Hero Academia, Vol. 23 (23)",
    "manga-href": "https://www.amazon.com/My-Hero-Academia-Vol-23/dp/1974709663/ref=zg_bs_7421474011_12?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "My Hero Academia, Vol. 23 (23)",
    "author": "Kohei Horikoshi",
    "img": "https://images-na.ssl-images-amazon.com/images/I/515wxMx+bzL._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334102-486",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "Dragon Ball Super, Vol. 11 (11)",
    "manga-href": "https://www.amazon.com/Dragon-Ball-Super-Vol-11/dp/1974717615/ref=zg_bs_7421474011_20?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "Dragon Ball Super, Vol. 11 (11)",
    "author": "Akira Toriyama",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51CM09-01nL._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334032-466",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "One-Punch Man, Vol. 1 (1)",
    "manga-href": "https://www.amazon.com/One-Punch-Man-Vol-1-ONE/dp/1421585642/ref=zg_bs_7421474011_40?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "One-Punch Man, Vol. 1 (1)",
    "author": "ONE",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51tpho9reUL._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334136-496",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "My Hero Academia, Vol. 3 (3)",
    "manga-href": "https://www.amazon.com/My-Hero-Academia-Vol-3/dp/1421585103/ref=zg_bs_7421474011_10?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "My Hero Academia, Vol. 3 (3)",
    "author": "Kohei Horikoshi",
    "img": "https://images-na.ssl-images-amazon.com/images/I/517R-jU0LPL._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334021-463",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "Demon Slayer: Kimetsu no Yaiba, Vol. 16 (16)",
    "manga-href": "https://www.amazon.com/Demon-Slayer-Kimetsu-Yaiba-Vol/dp/1974714772/ref=zg_bs_7421474011_43?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "Demon Slayer: Kimetsu no Yaiba, Vol. 16 (16)",
    "author": "Koyoharu Gotouge",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51IdN56qpBL._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334075-478",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "Demon Slayer: Kimetsu no Yaiba, Vol. 1 (1)",
    "manga-href": "https://www.amazon.com/Demon-Slayer-Kimetsu-Yaiba-Vol/dp/1974700526/ref=zg_bs_7421474011_28?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "Demon Slayer: Kimetsu no Yaiba, Vol. 1 (1)",
    "author": "Koyoharu Gotouge",
    "img": "https://images-na.ssl-images-amazon.com/images/I/61RLgk2k-1L._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334151-500",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "My Hero Academia, Vol. 5 (5)",
    "manga-href": "https://www.amazon.com/My-Hero-Academia-Vol-5/dp/1421587025/ref=zg_bs_7421474011_6?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "My Hero Academia, Vol. 5 (5)",
    "author": "Kohei Horikoshi",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51QGDuqbn8L._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334085-481",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "Demon Slayer: Kimetsu no Yaiba, Vol. 3 (3)",
    "manga-href": "https://www.amazon.com/Demon-Slayer-Kimetsu-Yaiba-Vol/dp/1974700542/ref=zg_bs_7421474011_25?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "Demon Slayer: Kimetsu no Yaiba, Vol. 3 (3)",
    "author": "Koyoharu Gotouge",
    "img": "https://images-na.ssl-images-amazon.com/images/I/613f4GbE5lL._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334028-465",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "Demon Slayer: Kimetsu no Yaiba, Vol. 6 (6)",
    "manga-href": "https://www.amazon.com/Demon-Slayer-Kimetsu-Yaiba-Vol/dp/1974700577/ref=zg_bs_7421474011_41?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "Demon Slayer: Kimetsu no Yaiba, Vol. 6 (6)",
    "author": "Koyoharu Gotouge",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51FBR3on9+L._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334089-482",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "My Hero Academia, Vol. 8 (8)",
    "manga-href": "https://www.amazon.com/My-Hero-Academia-Vol-8/dp/1421591677/ref=zg_bs_7421474011_24?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "My Hero Academia, Vol. 8 (8)",
    "author": "Kohei Horikoshi",
    "img": "https://images-na.ssl-images-amazon.com/images/I/61cornb3zjL._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334062-474",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "Dragon Ball Super, Vol. 10 (10)",
    "manga-href": "https://www.amazon.com/Dragon-Ball-Super-Vol-10/dp/1974715264/ref=zg_bs_7421474011_32?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "Dragon Ball Super, Vol. 10 (10)",
    "author": "Akira Toriyama",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51KeBfwaenL._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334109-488",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "My Hero Academia, Vol. 6 (6)",
    "manga-href": "https://www.amazon.com/My-Hero-Academia-Vol-6/dp/1421588668/ref=zg_bs_7421474011_18?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "My Hero Academia, Vol. 6 (6)",
    "author": "Kohei Horikoshi",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51DZ8XLknAL._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334168-505",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "My Hero Academia, Vol. 26 (26)",
    "manga-href": "https://www.amazon.com/My-Hero-Academia-Vol-26/dp/1974719774/ref=zg_bs_7421474011_1?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "My Hero Academia, Vol. 26 (26)",
    "author": "Kohei Horikoshi",
    "img": "https://images-na.ssl-images-amazon.com/images/I/516skvTDyGL._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334095-484",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "Vagabond, Vol. 1 (VIZBIG Edition)",
    "manga-href": "https://www.amazon.com/Vagabond-Vol-VIZBIG-Takehiko-Inoue/dp/1421520540/ref=zg_bs_7421474011_22?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "Vagabond, Vol. 1 (VIZBIG Edition)",
    "author": "Takehiko Inoue",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51zxhFjkk3L._SX334_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334072-477",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "Naruto, Vol. 1: Uzumaki Naruto",
    "manga-href": "https://www.amazon.com/Naruto-Vol-1-Uzumaki/dp/1569319006/ref=zg_bs_7421474011_29?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "Naruto, Vol. 1: Uzumaki Naruto",
    "author": "Masashi Kishimoto",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51BucomQlHL._SX333_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611333996-456",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "My Hero Academia, Vol. 19 (19)",
    "manga-href": "https://www.amazon.com/My-Hero-Academia-Vol-19/dp/1974704602/ref=zg_bs_7421474011_50?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "My Hero Academia, Vol. 19 (19)",
    "author": "Kohei Horikoshi",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51HkFJKrBtL._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334068-476",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "Demon Slayer: Kimetsu no Yaiba, Vol. 19 (19)",
    "manga-href": "https://www.amazon.com/Demon-Slayer-Kimetsu-Yaiba-Vol/dp/1974718115/ref=zg_bs_7421474011_30?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "Demon Slayer: Kimetsu no Yaiba, Vol. 19 (19)",
    "author": "Koyoharu Gotouge",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51gllM1HO9L._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334112-489",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "Demon Slayer: Kimetsu no Yaiba, Vol. 20 (20)",
    "manga-href": "https://www.amazon.com/Demon-Slayer-Kimetsu-Yaiba-Vol/dp/1974720977/ref=zg_bs_7421474011_17?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "Demon Slayer: Kimetsu no Yaiba, Vol. 20 (20)",
    "author": "Koyoharu Gotouge",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51X2W7A1NRL._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334158-502",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "My Hero Academia, Vol. 25 (25)",
    "manga-href": "https://www.amazon.com/My-Hero-Academia-Vol-25/dp/1974717623/ref=zg_bs_7421474011_4?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "My Hero Academia, Vol. 25 (25)",
    "author": "Kohei Horikoshi",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51T-zPY12iL._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334115-490",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "My Hero Academia, Vol. 1 (1)",
    "manga-href": "https://www.amazon.com/My-Hero-Academia-Vol-1/dp/1421582694/ref=zg_bs_7421474011_16?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "My Hero Academia, Vol. 1 (1)",
    "author": "Kohei Horikoshi",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51PyGPC5fXL._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334132-495",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "My Hero Academia, Vol. 24 (24)",
    "manga-href": "https://www.amazon.com/My-Hero-Academia-Vol-24/dp/197471120X/ref=zg_bs_7421474011_11?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "My Hero Academia, Vol. 24 (24)",
    "author": "Kohei Horikoshi",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51Lh46YM2oL._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334144-498",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "My Hero Academia, Vol. 4 (4)",
    "manga-href": "https://www.amazon.com/My-Hero-Academia-Vol-4/dp/1421585111/ref=zg_bs_7421474011_8?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "My Hero Academia, Vol. 4 (4)",
    "author": "Kohei Horikoshi",
    "img": "https://images-na.ssl-images-amazon.com/images/I/61XzldAOheL._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334050-471",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "My Hero Academia, Vol. 10 (10)",
    "manga-href": "https://www.amazon.com/My-Hero-Academia-Vol-10/dp/1421594374/ref=zg_bs_7421474011_35?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "My Hero Academia, Vol. 10 (10)",
    "author": "Kohei Horikoshi",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51fqLc-7D7L._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334092-483",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "Spy x Family, Vol. 2 (2)",
    "manga-href": "https://www.amazon.com/Spy-Family-Vol-Tatsuya-Endo/dp/1974717240/ref=zg_bs_7421474011_23?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "Spy x Family, Vol. 2 (2)",
    "author": "Tatsuya Endo",
    "img": "https://images-na.ssl-images-amazon.com/images/I/41Vpj9KnOaL._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611333999-457",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "My Hero Academia, Vol. 20 (20)",
    "manga-href": "https://www.amazon.com/My-Hero-Academia-Vol-20/dp/1974707733/ref=zg_bs_7421474011_49?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "My Hero Academia, Vol. 20 (20)",
    "author": "Kohei Horikoshi",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51m5sx51vcL._SX331_BO1,204,203,200_.jpg"
  },
  {
    "web": "1611334054-472",
    "web-scraper-start-url": "https://www.amazon.com/Best-Sellers-Books-Action-Adventure-Manga/zgbs/books/7421474011/ref=zg_bs_nav_b_2_4366",
    "manga": "Splatoon, Vol. 11 (11)",
    "manga-href": "https://www.amazon.com/Splatoon-Vol-11-Sankichi-Hinodeya/dp/1974719812/ref=zg_bs_7421474011_34?_encoding=UTF8&psc=1&refRID=BQSKWJA2B1WBG7XA628Z",
    "title": "Splatoon, Vol. 11 (11)",
    "author": "Sankichi Hinodeya",
    "img": "https://images-na.ssl-images-amazon.com/images/I/518yfZ9RXQL._SX331_BO1,204,203,200_.jpg"
  }
 ];

function BookList() {
  return (
    <section>
    <NavBar/>
    <div id="container">
      {books.map((book) =>{
        return <Book key={book.web} {...book}></Book>;
      })}
      </div>
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById('root'));
