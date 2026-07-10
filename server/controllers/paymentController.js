import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createCheckoutSession = async (req, res) => {
   try {
        const { cartItems } = req.body;

        const lineItems = cartItems.map((item) => {
            
            return {
                price_data: {
                    currency: 'inr',
                    product_data : {
                        name: item.Product
                    },
                    unit_amount : parseInt(item.Sellingprice.replace(/,/g,"")) * 100
                },
                quantity: item.quantity
            };
        });

        const session = await stripe.checkout.sessions.create({
            payment_method_types:["card"],
            line_items:lineItems,
            mode:"payment",
            success_url:process.env.SUCCESS_URL,
            cancel_url:process.env.CANCEL_URL
        });

        res.json({url:session.url});
   } catch (error) {
        console.error("Error creating checkout session:", error);
        res.status(500).json({error:error.message});
   }
}