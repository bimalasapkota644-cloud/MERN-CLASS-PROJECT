// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import Category from "./models/category.model";
// import Product from "./models/product.model";

// dotenv.config();

// const DB_URI = process.env.DB_URI!;

// const seedData = async () => {
//   await mongoose.connect(DB_URI);
//   console.log("✅ Connected to MongoDB");

//   // Clear existing data
//   await Category.deleteMany({});
//   await Product.deleteMany({});
//   console.log("🗑️  Cleared existing data");

//   // ── 1. Insert Categories ──────────────────────────────────────────────────
//   const categories = await Category.insertMany([
//     { name: "Laptops", description: "All types of laptops and notebooks" },
//     { name: "Smartphones", description: "Mobile phones and accessories" },
//     { name: "Accessories", description: "Computer and phone accessories" },
//     { name: "Monitors", description: "Desktop displays and monitors" },
//     { name: "Audio", description: "Headphones, speakers and earbuds" },
//   ]);
//   console.log(`📁 Inserted ${categories.length} categories`);

//   const [laptops, smartphones, accessories, monitors, audio] = categories;

//   // ── 2. Insert Products ────────────────────────────────────────────────────
//   const products = await Product.insertMany([
//     {
//       name: "Lenovo ThinkBook 16 Gen 7",
//       description:
//         "16\" WUXGA IPS display, AMD Ryzen 7 7745HX, 16GB DDR5 RAM, 512GB NVMe SSD, Radeon 780M Graphics. Perfect for professionals and students.",
//       price: 129999,
//       stock: 15,
//       isFeatured: true,
//       category: laptops._id,
//       coverImage: {
//         path: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
//         public_id: "seed_laptop_1",
//       },
//       images: [
//         {
//           path: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600",
//           public_id: "seed_laptop_1_img1",
//         },
//       ],
//     },
//     {
//       name: "HP Pavilion 15",
//       description:
//         "15.6\" FHD IPS display, Intel Core i5-1335U, 8GB RAM, 512GB SSD, Intel Iris Xe Graphics. Slim and lightweight design for everyday use.",
//       price: 89999,
//       stock: 20,
//       isFeatured: true,
//       category: laptops._id,
//       coverImage: {
//         path: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600",
//         public_id: "seed_laptop_2",
//       },
//       images: [],
//     },
//     {
//       name: "Samsung Galaxy S24",
//       description:
//         "6.2\" Dynamic AMOLED 2X, Exynos 2400, 8GB RAM, 256GB storage, 50MP triple camera system, 5000mAh battery with fast charging.",
//       price: 109999,
//       stock: 30,
//       isFeatured: true,
//       category: smartphones._id,
//       coverImage: {
//         path: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600",
//         public_id: "seed_phone_1",
//       },
//       images: [
//         {
//           path: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600",
//           public_id: "seed_phone_1_img1",
//         },
//       ],
//     },
//     {
//       name: "OnePlus 12R",
//       description:
//         "6.78\" ProXDR LTPO AMOLED, Snapdragon 8 Gen 2, 16GB RAM, 256GB storage, 50MP Hasselblad camera, 100W SUPERVOOC fast charging.",
//       price: 79999,
//       stock: 25,
//       isFeatured: false,
//       category: smartphones._id,
//       coverImage: {
//         path: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
//         public_id: "seed_phone_2",
//       },
//       images: [],
//     },
//     {
//       name: "Logitech MX Master 3S",
//       description:
//         "Advanced wireless mouse with 8K DPI sensor, ergonomic design, silent clicks, USB-C quick charging. Works on any surface including glass.",
//       price: 12999,
//       stock: 50,
//       isFeatured: false,
//       category: accessories._id,
//       coverImage: {
//         path: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600",
//         public_id: "seed_acc_1",
//       },
//       images: [],
//     },
//     {
//       name: "Mechanical Keyboard - Keychron K2",
//       description:
//         "75% compact wireless mechanical keyboard, Bluetooth 5.1 + USB-C wired, RGB backlight, hot-swappable switches, compatible with Mac & Windows.",
//       price: 9999,
//       stock: 40,
//       isFeatured: false,
//       category: accessories._id,
//       coverImage: {
//         path: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600",
//         public_id: "seed_acc_2",
//       },
//       images: [],
//     },
//     {
//       name: "Dell UltraSharp 27\" 4K Monitor",
//       description:
//         "27\" IPS 4K UHD (3840x2160) display, 99% sRGB color accuracy, USB-C 90W power delivery, Height/Tilt/Swivel/Pivot adjustable stand.",
//       price: 69999,
//       stock: 10,
//       isFeatured: true,
//       category: monitors._id,
//       coverImage: {
//         path: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600",
//         public_id: "seed_monitor_1",
//       },
//       images: [],
//     },
//     {
//       name: "LG 24\" Full HD IPS Monitor",
//       description:
//         "24\" FHD IPS display, AMD FreeSync, 75Hz refresh rate, sRGB 99% color gamut, HDMI + VGA ports, slim bezel design. Ideal for home office.",
//       price: 29999,
//       stock: 18,
//       isFeatured: false,
//       category: monitors._id,
//       coverImage: {
//         path: "https://images.unsplash.com/photo-1593640408182-31c228c8b5d5?w=600",
//         public_id: "seed_monitor_2",
//       },
//       images: [],
//     },
//     {
//       name: "Sony WH-1000XM5 Headphones",
//       description:
//         "Industry-leading noise cancellation with 8 microphones, 30-hour battery life, speak-to-chat, 360 Reality Audio, quick charge (3 min = 3 hours).",
//       price: 39999,
//       stock: 22,
//       isFeatured: true,
//       category: audio._id,
//       coverImage: {
//         path: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
//         public_id: "seed_audio_1",
//       },
//       images: [],
//     },
//     {
//       name: "JBL Charge 5 Bluetooth Speaker",
//       description:
//         "Powerful JBL Pro Sound with bold bass, IP67 waterproof & dustproof, 20-hour playtime, built-in powerbank, PartyBoost to connect multiple speakers.",
//       price: 19999,
//       stock: 35,
//       isFeatured: false,
//       category: audio._id,
//       coverImage: {
//         path: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600",
//         public_id: "seed_audio_2",
//       },
//       images: [],
//     },
//   ]);

//   console.log(`📦 Inserted ${products.length} products`);
//   console.log("🌱 Seeding complete!");
//   process.exit(0);
// };

// seedData().catch((err) => {
//   console.error("❌ Seeding failed:", err.message);
//   process.exit(1);
// });

import mongoose from "mongoose";
import dotenv from "dotenv";
import Category from "./models/category.model";
import Product from "./models/product.model";

dotenv.config();

const DB_URI = process.env.DB_URI as string;

const seedDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("✅ MongoDB Connected");

    // ❗ Clear old data
    await Product.deleteMany();
    await Category.deleteMany();

    console.log("🧹 Old data cleared");

    // 📦 Create Categories
    const categories = await Category.insertMany([
      { name: "Laptops" },
      { name: "Smartphones" },
      { name: "Accessories" },
      { name: "Monitors" },
      { name: "Audio" },
    ]);

    console.log("📂 Categories inserted");

    // 🔎 Find category IDs
    const laptops = categories.find((c) => c.name === "Laptops");
    const smartphones = categories.find((c) => c.name === "Smartphones");
    const accessories = categories.find((c) => c.name === "Accessories");
    const monitors = categories.find((c) => c.name === "Monitors");
    const audio = categories.find((c) => c.name === "Audio");

    // 🛒 Products
    const products = [
      {
        name: "Lenovo ThinkBook 16 Gen 7",
        description:
          '16" WUXGA IPS display, AMD Ryzen 7 7745HX, 16GB DDR5 RAM, 512GB NVMe SSD, Radeon 780M Graphics.',
        price: 129999,
        stock: 15,
        isFeatured: true,
        category: laptops?._id,
        coverImage: {
          path: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
          public_id: "seed_laptop_1",
        },
        images: [
          {
            path: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600",
            public_id: "seed_laptop_1_img1",
          },
        ],
      },
      {
        name: "HP Pavilion 15",
        description:
          '15.6" FHD IPS display, Intel Core i5-1335U, 8GB RAM, 512GB SSD.',
        price: 89999,
        stock: 20,
        isFeatured: true,
        category: laptops?._id,
        coverImage: {
          path: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600",
          public_id: "seed_laptop_2",
        },
        images: [],
      },
      {
        name: "Samsung Galaxy S24",
        description:
          '6.2" AMOLED, Exynos 2400, 8GB RAM, 256GB storage, 50MP camera.',
        price: 109999,
        stock: 30,
        isFeatured: true,
        category: smartphones?._id,
        coverImage: {
          path: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600",
          public_id: "seed_phone_1",
        },
        images: [],
      },
      {
        name: "OnePlus 12R",
        description: "Snapdragon 8 Gen 2, 16GB RAM, 100W fast charging.",
        price: 79999,
        stock: 25,
        isFeatured: false,
        category: smartphones?._id,
        coverImage: {
          path: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
          public_id: "seed_phone_2",
        },
        images: [],
      },
      {
        name: "Logitech MX Master 3S",
        description: "Advanced wireless mouse with ergonomic design.",
        price: 12999,
        stock: 50,
        isFeatured: false,
        category: accessories?._id,
        coverImage: {
          path: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600",
          public_id: "seed_acc_1",
        },
        images: [],
      },
      {
        name: "Keychron K2 Keyboard",
        description:
          "Wireless mechanical keyboard, RGB, hot-swappable switches.",
        price: 9999,
        stock: 40,
        isFeatured: false,
        category: accessories?._id,
        coverImage: {
          path: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600",
          public_id: "seed_acc_2",
        },
        images: [],
      },
      {
        name: "Dell UltraSharp 27 4K",
        description: '27" 4K UHD IPS, USB-C 90W power delivery.',
        price: 69999,
        stock: 10,
        isFeatured: true,
        category: monitors?._id,
        coverImage: {
          path: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600",
          public_id: "seed_monitor_1",
        },
        images: [],
      },
      {
        name: "LG 24 FHD Monitor",
        description: '24" IPS, 75Hz, AMD FreeSync.',
        price: 29999,
        stock: 18,
        isFeatured: false,
        category: monitors?._id,
        coverImage: {
          path: "https://images.unsplash.com/photo-1593640408182-31c228c8b5d5?w=600",
          public_id: "seed_monitor_2",
        },
        images: [],
      },
      {
        name: "Sony WH-1000XM5",
        description: "Noise cancelling headphones, 30hr battery.",
        price: 39999,
        stock: 22,
        isFeatured: true,
        category: audio?._id,
        coverImage: {
          path: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
          public_id: "seed_audio_1",
        },
        images: [],
      },
      {
        name: "JBL Charge 5",
        description: "Bluetooth speaker, waterproof, 20hr battery.",
        price: 19999,
        stock: 35,
        isFeatured: false,
        category: audio?._id,
        coverImage: {
          path: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600",
          public_id: "seed_audio_2",
        },
        images: [],
      },
    ];

    await Product.insertMany(products);
    console.log("DB NAME:", mongoose.connection.name);

    console.log("🛍️ Products inserted successfully");
    console.log("🌱 Database seeded successfully!");

    process.exit();
  } catch (error) {
    console.error("❌ Seeding error:", error);
    process.exit(1);
  }
};

seedDatabase();
