import { OrderStatus } from "~/constants/order";
import { CartItem } from "~/models/CartItem";
import { Order } from "~/models/Order";
import { AvailableProduct, Product } from "~/models/Product";

export const products: Product[] = [
  {
    id: 1,
    name: "Iphone 14 Pro",
    currency: "USD",
    image:
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
    price: 1099,
  },
  {
    id: 2,
    name: "Samsung S22 Ultra",
    price: 1199,
    currency: "USD",
    image:
      "https://images.samsung.com/levant/smartphones/galaxy-s22-ultra/buy/S22_Ultra_ProductKV_Black_MO.jpg",
  },
  {
    id: 3,
    name: "Google Pixel 6 Pro",
    price: 699,
    currency: "USD",
    image: "https://m.media-amazon.com/images/I/71ee+5V4ZRL._SL1500_.jpg",
  },
  {
    id: 4,
    name: "Xiaomi Redmi Note 10 Pro",
    price: 279,
    currency: "USD",
    image:
      "https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/0/_/0_59_12_2.jpg",
  },
  {
    id: 5,
    name: "OnePlus 9 Pro",
    price: 1069,
    currency: "USD",
    image: "https://m.media-amazon.com/images/I/71E+AgYDKtL._SL1500_.jpg",
  },
  {
    id: 6,
    name: "Vivo X80 Pro",
    price: 969,
    currency: "USD",
    image: "https://i.ebayimg.com/images/g/d~gAAOSwk9pidfQD/s-l500.jpg",
  },
  {
    id: 7,
    name: "Samsung Galaxy Z Flip 4",
    image:
      "https://specs-tech.com/wp-content/uploads/2021/10/Samsung-Galaxy-Z-Flip-4-2.jpg",
    price: 999,
    currency: "USD",
  },
  {
    id: 8,
    name: "Oppo Find X5 Pro",
    price: 888,
    currency: "USD",
    image:
      "https://dlcdnwebimgs.asus.com/gain/cf4f48f6-b62f-4a29-aa0e-623a24d9b532/",
  },
];

export const availableProducts: AvailableProduct[] = products.map(
  (product, index) => ({ ...product, count: index + 1 })
);

export const cart: CartItem[] = [
  {
    product: {
      id: 3,
      name: "Google Pixel 6 Pro",
      price: 699,
      currency: "USD",
      image: "https://m.media-amazon.com/images/I/71ee+5V4ZRL._SL1500_.jpg",
    },
    count: 2,
  },
  {
    product: {
      id: 4,
      name: "Xiaomi Redmi Note 10 Pro",
      price: 279,
      currency: "USD",
      image:
        "https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/0/_/0_59_12_2.jpg",
    },
    count: 5,
  },
];

export const orders: Order[] = [
  {
    id: "1",
    address: {
      address: "some address",
      firstName: "Name",
      lastName: "Surname",
      comment: "",
    },
    items: [
      { productId: 1, count: 2 },
      { productId: 2, count: 5 },
    ],
    statusHistory: [
      { status: OrderStatus.Open, timestamp: Date.now(), comment: "New order" },
    ],
  },
  {
    id: "2",
    address: {
      address: "another address",
      firstName: "John",
      lastName: "Doe",
      comment: "Ship fast!",
    },
    items: [{ productId: 3, count: 3 }],
    statusHistory: [
      {
        status: OrderStatus.Sent,
        timestamp: Date.now(),
        comment: "Fancy order",
      },
    ],
  },
];
