
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors({ origin: true, credentials: true }));

const stripe = require("stripe")("sk_test_51MGmK7FbmxhaXe5kMxHkQjKHU2Ul8EoUuZYW689b8DbuKR4x6EnA518l0Z9qEVEi4VLmsI95nKWo7Itudjh02vnB0092yK7Anb");

//In cart.component.ts you indicate http://localhost:4042/checkout as url 
app.post("/checkout", async (req, res, next) => {
    try {
        //Create session 
        const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        shipping_address_collection: {
        allowed_countries: ['IT'],
        },
            shipping_options: [
            {
                shipping_rate_data: {
                type: 'fixed_amount',
                fixed_amount: {
                    amount: 0,
                    currency: 'eur',
                },
                display_name: 'Free shipping',
                // Delivers between 5-7 business days
                delivery_estimate: {
                    minimum: {
                    unit: 'business_day',
                    value: 5,
                    },
                    maximum: {
                    unit: 'business_day',
                    value: 7,
                    },
                }
                }
            },
            {
                shipping_rate_data: {
                type: 'fixed_amount',
                fixed_amount: {
                    amount: 1500,
                    currency: 'eur',
                },
                display_name: 'Next day air',
                // Delivers in exactly 1 business day
                delivery_estimate: {
                    minimum: {
                    unit: 'business_day',
                    value: 1,
                    },
                    maximum: {
                    unit: 'business_day',
                    value: 1,
                    },
                }
                }
            },
            ],
           //Product from body request are the items for every items 
           line_items:  req.body.items.map((item) => ({
            price_data: {
              currency: 'eur',
              //Product information 
              product_data: {
                name: item.name,
                images: [item.product]
              },
              //Price
              unit_amount: item.price * 100,
            },
            //Quantity
            quantity: item.quantity,
          })),
           mode: "payment",
           //Indicate the two success url 
           success_url: "http://localhost:4242/success.html",
           cancel_url: "http://localhost:4242/cancel.html",
        });
        //Send response as json with the session id created 
        res.status(200).json(session);
    } catch (error) {
        next(error);
    }
});

app.listen(4242, () => console.log('app is running on 4242'));