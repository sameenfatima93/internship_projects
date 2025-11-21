var dryDlights = {

    // 1️⃣ NUTS CATEGORY
    nuts: [
        {
            name: "Almonds",
            nameUr: "بادام",
            slug: "almonds",
            image: "images/nuts/almonds.jpg",
            descriptionUr: "تازہ اور خستہ بادام۔",
            price: 1200,
            unit: "kg",
            stock: 50,
            tags: ["nuts", "healthy"]
        },
        {
            name: "Cashews",
            nameUr: "کاجو",
            slug: "cashews",
            image: "images/nuts/cashews.jpg",
            descriptionUr: "مزیدار اور اعلیٰ کوالٹی کاجو۔",
            price: 1500,
            unit: "kg",
            stock: 40,
            tags: ["nuts", "creamy"]
        },
        {
            name: "Walnuts",
            nameUr: "اخروٹ",
            slug: "walnuts",
            image: "images/nuts/walnuts.jpg",
            descriptionUr: "تازہ خول والے اخروٹ۔",
            price: 1800,
            unit: "kg",
            stock: 30,
            tags: ["nuts", "omega3"]
        },
        {
            name: "Pistachios",
            nameUr: "پستہ",
            slug: "pistachios",
            image: "images/nuts/pistachios.jpg",
            descriptionUr: "اعلیٰ کوالٹی پستہ۔",
            price: 2500,
            unit: "kg",
            stock: 20,
            tags: ["nuts", "premium"]
        },
        {
            name: "Pine Nuts",
            nameUr: "چلغوزہ",
            slug: "pine-nuts",
            image: "images/nuts/pine-nuts.jpg",
            descriptionUr: "خالص اور دیسی چلغوزہ۔",
            price: 6000,
            unit: "kg",
            stock: 10,
            tags: ["nuts", "expensive"]
        }
    ],

    // 2️⃣ DRIED FRUITS CATEGORY
    driedFruits: [
        {
            name: "Dates",
            nameUr: "کھجور",
            slug: "dates",
            image: "images/Dried Fruits/dates.jpg",
            descriptionUr: "قدرتی میٹھی اور تازہ کھجور۔",
            price: 800,
            unit: "kg",
            stock: 45,
            tags: ["fruit", "sweet"]
        },
        {
            name: "Figs",
            nameUr: "انجیر",
            slug: "figs",
            image: "images/Dried Fruits/figs(injeer).jpg",
            descriptionUr: "خشک اور میٹھی انجیر۔",
            price: 1500,
            unit: "kg",
            stock: 25,
            tags: ["fruit", "fiber"]
        },
        {
            name: "Raisins",
            nameUr: "کشمش",
            slug: "raisins",
            image: "images/Dried Fruits/raisins(kishmish).jpg",
            descriptionUr: "قدرتی میٹھی کشمش۔",
            price: 700,
            unit: "kg",
            stock: 60,
            tags: ["fruit", "energy"]
        },
        // {
        //     name: "Apricot",
        //     nameUr: "خوبانی",
        //     slug: "apricot",
        //     image: "images/Dried Fruits/apricot.jpg",
        //     descriptionUr: "میٹھی اور نرم خشک خوبانی۔",
        //     price: 900,
        //     unit: "kg",
        //     stock: 40,
        //     tags: ["fruit", "soft"]
        // },
        {
            name: "Plum",
            nameUr: "آلو بخارا",
            slug: "plum",
            image: "images/Dried Fruits/plums(alobokhara).jpg",
            descriptionUr: "ترش میٹھی خشک آلو بخارا۔",
            price: 750,
            unit: "kg",
            stock: 35,
            tags: ["fruit", "tangy"]
        }
    ],

    // 3️⃣ SEEDS CATEGORY
    seeds: [
        {
            name: "Pumpkin Seeds",
            nameUr: "کدو کے بیج",
            slug: "pumpkin-seeds",
            image: "images/seeds/punpkin-seed.jpg",
            descriptionUr: "صحت بخش اور تازہ۔",
            price: 950,
            unit: "kg",
            stock: 20,
            tags: ["seeds", "healthy"]
        },
        {
            name: "Sunflower Seeds",
            nameUr: "سورج مکھی کے بیج",
            slug: "sunflower-seeds",
            image: "images/seeds/sunlower-seed.jpg",
            descriptionUr: "خستہ اور کرنچی بیج۔",
            price: 600,
            unit: "kg",
            stock: 35,
            tags: ["seeds"]
        },
        {
            name: "Chia Seeds",
            nameUr: "چیا سیڈز",
            slug: "chia-seeds",
            image: "images/seeds/chia-seed.jpg",
            descriptionUr: "صحت مند غذائی بیج۔",
            price: 1200,
            unit: "kg",
            stock: 30,
            tags: ["seeds", "superfood"]
        },
        {
            name: "Flax Seeds",
            nameUr: "السی",
            slug: "flax-seeds",
            image: "images/seeds/flax seed.jpg",
            descriptionUr: "اومیگا 3 سے بھرپور السی۔",
            price: 500,
            unit: "kg",
            stock: 40,
            tags: ["seeds", "omega3"]
        }
    ],

    // 4️⃣ MIX PACKS
    mixPacks: [
        {
            name: "Mixed Nuts Pack",
            slug: "mixed-pack",
            image: "images/mix/mix-nut.jpg",
            price: 2000,
            unit: "kg",
            stock: 20
        },
        {
            name: "Trail Mix",
            slug: "trail-mix",
            image: "images/mix/trail-mix.jpg",
            price: 1800,
            unit: "kg",
            stock: 15
        },
        {
            name: "Fitness Mix",
            slug: "fitness-mix",
            image: "images/mix/mix-fitness.jpg",
            price: 2200,
            unit: "kg",
            stock: 18
        }
    ],

    // 5️⃣ PREMIUM / EXOTIC CATEGORY
    premium: [
        {
            name: "Chilgoza",
            nameUr: "چلغوزہ",
            slug: "chilgoza",
            image: "images/premium-nuts/chilgoza.png",
            descriptionUr: "اعلیٰ کوالٹی چلغوزہ۔",
            price: 7000,
            unit: "kg",
            stock: 15
        },
        {
            name: "Macadamia Nuts",
            nameUr: "میکڈیمیا نٹس",
            slug: "macadamia",
            image: "images/premium-nuts/macadamia.jpg",
            descriptionUr: "اعلیٰ کوالٹی میکڈیمیا نٹس۔",
            price: 9000,
            unit: "kg",
            stock: 8
        },
        {
            name: "Brazil Nuts",
            nameUr: "برازیل نٹس",
            slug: "brazil-nuts",
            image: "images/premium-nuts/brazilnuts.jpg",
            descriptionUr: "بڑا سائز، سیلینیم سے بھرپور، لگژری کیٹیگری۔",
            price: 6500,
            unit: "kg",
            stock: 12
        },
        {
            name: "Pecans",
            nameUr: "پیکن نٹس",
            slug: "pecans",
            image: "images/premium-nuts/pecans.jpg",
            descriptionUr: "اخروٹ کی طرح مگر ذائقہ بہت پریمیم۔",
            price: 7200,
            unit: "kg",
            stock: 10
        },
        {
            name: "Hazelnuts",
            nameUr: "ہیزلنٹس",
            slug: "hazelnuts",
            image: "images/premium-nuts/hazelNuts.png",
            descriptionUr: "پریمیم گریڈ، چاکلیٹ انڈسٹری میں استعمال، زیادہ ڈیمانڈ۔",
            price: 6800,
            unit: "kg",
            stock: 18
        }
    ],

    // POWDER & ROASTED CATEGORY
    powderAndRoasted: [
        {
            name: "Almond Powder",
            slug: "almond-powder",
            image: "images/powder-dryFruits/almond-flour.png",
            price: 1600,
            unit: "kg",
            stock: 10
        },
        {
            name: "Cashew Powder",
            slug: "cashew-powder",
            image: "images/powder-dryFruits/cashew.png",
            price: 1800,
            unit: "kg",
            stock: 12
        },
        {
            name: "Walnut Powder",
            slug: "walnut-powder",
            image: "images/powder-dryFruits/walnut-powder.png",
            price: 2000,
            unit: "kg",
            stock: 18
        }
    ]
};


var category = document.getElementById("foodMenu");
var categoryList = document.getElementById("sidebarList");


category.innerHTML = `<option selected>Choose Category</option>`;

for (let cat in dryDlights) {
    category.innerHTML += `
        <option value="${cat}">${cat}</option>
    `;
}

category.addEventListener("change", function () {

    let selectedCategory = category.value;

    // Clear sidebar pehle
    categoryList.innerHTML = `
        <li style="font-weight:bold;">Food List</li>
    `;

    // Agar koi valid category select ki ho
    if (dryDlights[selectedCategory]) {

        dryDlights[selectedCategory].forEach(item => {
            categoryList.innerHTML += `
                <li>${item.name}</li>
            `;
        });

    }

});

// function changeCategary(){
//   dryDlights.innerHTML=""
//     console.log(dryDelights[Categorycategary][]);

// }



// ✅ FIXED — PROPER LOOP WITH CURLY BRACKETS
var allProducts = document.getElementById("allProducts");

for (let category in dryDlights) {

    for (let item of dryDlights[category]) {

        allProducts.innerHTML += `
        <div class="col">
            <div class="card myCard">
                <img src="${item.image}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.descriptionUr ?? "مزیدار اعلیٰ کوالٹی پراڈکٹ"}</p>
                </div>
                <div class="card-footer">
                    <small class="text-body-dark"><span style="font-weight: bold;"> Rs </span> ${item.price} /= 
                    </small>
                   <img id="cartIcon" src="icones/clear.svg" onclick="handleClick(this)"height="30px" width="30px"style="float:right;">
                     
                </div>
            </div>
        </div>`;
    }
}




let price = 500;      // per item price
let quantity = 0;
let status = 0;       // 0 = clear, 1 = check, 2 = added

function handleClick(img) {

    if (status === 0) {
        // X → ✔
        img.src = "icones/check.svg";
        status = 1;

    } else {
        // ✔ or Cart → add quantity
        quantity++;
        let total = quantity * price;

        img.src = "icones/cart.svg";
        status = 2;

        Swal.fire({
            title: 'Added to Cart!',
            html: `
                <p><b>Quantity:</b> ${quantity}</p>
                <p><b>Total Price:</b> ${total} PKR</p>
            `,
            icon: 'success',
            background: '#f4ead5ff',
            timer: 1500,
            showConfirmButton: false
        });
    }
}


// let price = 500;  // per product price
// let total = 0;
// let status = 0; // 0 = clear, 1 = check, 2 = added

// function handleClick(img) {

//     if (status === 0) {
//         // X → ✔
//         img.src = "icones/check.svg";
//         status = 1;

//     } else if (status === 1) {
//         // ✔ → add to cart + alert
//         total += price;
//         document.getElementById("totalPrice").innerText = total;

//         img.src = "icones/cart.svg";
//         status = 2;

//         // Sweet alert (auto close)
//         Swal.fire({
//             title: 'Added to Cart!',
//             text: 'Product added successfully.',
//             icon: 'success',
//             timer: 1500,
//             showConfirmButton: false
//         });

//     } else {
//         // Already in cart → price ++ + alert
//         total += price;
//         document.getElementById("totalPrice").innerText = total;

//         Swal.fire({
//             title: 'Added Again!',
//             text: 'Quantity increased.',
//             icon: 'success',
//             timer: 1200,
//             showConfirmButton: false
//         });
//     }
// }




// function changeImg(e) {
//     e.src = "icones/check.svg";
// }

