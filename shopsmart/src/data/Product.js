 const products = [
  {
    id: 1,
    name: "Organic Tomato",
    category: "Vegetables",
    price: 40,
    rating: 4.5,
    freshness: "New Harvest",
    image: "https://eu-images.contentstack.com/v3/assets/blt17bf506a5fa8d55b/blta3e1f0971597aa46/673d2190fe45d2a696b021b6/tomato-crop-report-feature.png?width=1280&auto=webp&quality=80&format=jpg&disable=upscale"
  },
  {
    id: 2,
    name: "Fresh Carrot",
    category: "Vegetables",
    price: 35,
    rating: 4.3,
    freshness: "Farm Fresh",
    image: "https://farmher.com/wp-content/uploads/2024/04/carrots_adobe-stock.webp"
  },
  {
    id: 3,
    name: "Organic Spinach",
    category: "Leafy Greens",
    price: 25,
    rating: 4.6,
    freshness: "Fresh Today",
    image: "https://media.istockphoto.com/id/655979026/photo/fresh-harvested-organic-spinach.jpg?s=612x612&w=0&k=20&c=qoMmnp5ICdqWKPYQKo189yG4Ckayy6Rqx4gg0-yMmfI="
  },
  {
    id: 4,
    name: "Green Capsicum",
    category: "Vegetables",
    price: 50,
    rating: 4.2,
    freshness: "New Harvest",
    image: "https://m.media-amazon.com/images/I/61TPd3H3nfL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 5,
    name: "Organic Potato",
    category: "Vegetables",
    price: 30,
    rating: 4.1,
    freshness: "Farm Fresh",
    image: "https://www.greendna.in/cdn/shop/files/potato5_780x.jpg?v=1705148641"
  },
  {
    id: 6,
    name: "Fresh Onion",
    category: "Vegetables",
    price: 28,
    rating: 4.0,
    freshness: "Daily Pick",
    image: "https://img.freepik.com/free-photo/side-view-basket-full-red-onions-wooden-background_141793-5655.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    id: 7,
    name: "Organic Cucumber",
    category: "Vegetables",
    price: 45,
    rating: 4.4,
    freshness: "Fresh Today",
    image: "https://media.istockphoto.com/id/492532141/photo/fresh-cucumber-on-the-wooden-table.jpg?s=612x612&w=0&k=20&c=cM2n_EqaUQS8ciL39mek3kPVt-qxBi-_OJpNx3XoKac="
  },
  {
    id: 8,
    name: "Fresh Broccoli",
    category: "Vegetables",
    price: 60,
    rating: 4.5,
    freshness: "New Harvest",
    image: "https://athenslab.gr/images/blog/blog/diagnostiki-athinon-mprokolo-main-1024x683.jpg"
  },
  {
    id: 9,
    name: "Organic Apple",
    category: "Fruits",
    price: 120,
    rating: 4.7,
    freshness: "Seasonal",
    image: "https://images.indianexpress.com/2023/05/Apples.jpg"
  },
  {
    id: 10,
    name: "Fresh Banana",
    category: "Fruits",
    price: 60,
    rating: 4.3,
    freshness: "Daily Pick",
    image: "https://media.istockphoto.com/id/509533014/photo/raw-organic-bunch-of-bananas.jpg?s=612x612&w=0&k=20&c=eZg53yOtUf-H2vXQovAyAP2FbhWIgfO0KLEX_nYoXxQ="
  },
  {
    id: 11,
    name: "Organic Orange",
    category: "Fruits",
    price: 80,
    rating: 4.4,
    freshness: "Seasonal",
    image: "https://t3.ftcdn.net/jpg/17/11/26/78/360_F_1711267883_6TAnqe7A5PlNxNSwWnbWnQ5RFz8hgc8j.jpg"
  },
  {
    id: 12,
    name: "Fresh Grapes",
    category: "Fruits",
    price: 95,
    rating: 4.5,
    freshness: "New Harvest",
    image: "https://images2.minutemediacdn.com/image/upload/c_crop,w_2120,h_1192,x_0,y_153/v1729082677/images/voltaxMediaLibrary/mmsport/mentalfloss/01jaanqnfxc3788tktey.jpg"
  },
  {
    id: 13,
    name: "Organic Mango",
    category: "Fruits",
    price: 150,
    rating: 4.8,
    freshness: "Seasonal",
    image: "https://thumbs.dreamstime.com/b/fresh-ripe-mango-wooden-plank-green-orchard-garden-fresh-organic-mango-fruit-garden-concept-ripe-mango-sits-418828257.jpg"
  },
  {
    id: 14,
    name: "Fresh Lettuce",
    category: "Leafy Greens",
    price: 35,
    rating: 4.2,
    freshness: "Fresh Today",
    image: "https://www.thespruce.com/thmb/sc3Fa6ZFN9MbYznpvFCZlVkSkcM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-grow-fresh-delicious-lettuce-1403404-3-0c9662567b52457a9f55828604f36b74.jpg"
  },
  {
    id: 15,
    name: "Organic Coriander",
    category: "Leafy Greens",
    price: 20,
    rating: 4.1,
    freshness: "Daily Pick",
    image: "https://media.istockphoto.com/id/1133790325/photo/fresh-coriander-cilantro-leaves-on-basket.jpg?s=612x612&w=0&k=20&c=9wiu9r3LdvFeGfv9GApYCGmt_mRpnzHQFJmSXFgjbgo="
  },
  {
    id: 16,
    name: "Fresh Mint Leaves",
    category: "Leafy Greens",
    price: 22,
    rating: 4.3,
    freshness: "Fresh Today",
    image: "https://static.toiimg.com/thumb/msid-114254616,width-1070,height-580,imgsize-1664658,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
  },
  {
    id: 17,
    name: "Organic Beetroot",
    category: "Vegetables",
    price: 55,
    rating: 4.4,
    freshness: "New Harvest",
    image: "https://t3.ftcdn.net/jpg/01/40/18/68/360_F_140186844_NJlRTaznWxy4OHLZOZsjp0yAYnMrkV7x.jpg"
  },
  {
    id: 18,
    name: "Fresh Cauliflower",
    category: "Vegetables",
    price: 70,
    rating: 4.2,
    freshness: "Farm Fresh",
    image: "https://t3.ftcdn.net/jpg/18/31/28/58/360_F_1831285860_JrTXWWQulJrs7KzRG3Dk6Cn1kYDCQgDr.jpg"
  },
  {
    id: 19,
    name: "Organic Pumpkin",
    category: "Vegetables",
    price: 90,
    rating: 4.3,
    freshness: "Seasonal",
    image: "https://cdn.pixabay.com/photo/2020/10/09/20/30/pumpkins-5641482_640.jpg"
  },
  {
    id: 20,
    name: "Fresh Green Beans",
    category: "Vegetables",
    price: 48,
    rating: 4.4,
    freshness: "New Harvest",
    image: "https://homesteadandchill.com/wp-content/uploads/2024/07/how-ways-to-preserve-green-beans-freeze-can-dry-pickle-feature-1-1140x813.jpg"
  }
];
 
export default products;