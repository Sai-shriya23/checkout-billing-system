# Smart Checkout Billing System

## Overview

Smart Checkout Billing System is a ReactJS-based web application that allows users to add items with price and quantity, calculate the cart total, apply discounts, calculate GST, and generate a final bill.

## Features

* Add items with name, price, and quantity
* Calculate subtotal automatically
* Apply 10% discount for orders above ₹1000
* Apply coupon code SAVE10 for an additional discount
* Calculate GST (18%)
* Display final bill summary
* Delete items from cart
* Clear cart functionality
* Input validation

## Technology Stack

* ReactJS
* JavaScript
* HTML
* CSS
* Git
* GitHub

## Setup Instructions

1. Clone the repository:
   git clone https://github.com/Sai-shriya23/checkout-billing-system.git

2. Navigate to the project folder:
   cd checkout-billing-system

3. Install dependencies:
   npm install

4. Run the application:
   npm start

5. Open:
   http://localhost:3000

## Assumptions

* GST is fixed at 18%.
* Orders above ₹1000 receive a 10% discount.
* Coupon code SAVE10 provides an additional discount.
* Price and quantity must be positive numbers.

## AI-Assisted Development

AI Tool Used:

* ChatGPT

How It Helped:
ChatGPT assisted in designing the application structure, generating React components, implementing billing calculations, validation logic, and GitHub deployment guidance.

Challenges Faced:
The main challenges included Git installation, GitHub authentication, repository configuration, and integrating discount and GST calculations correctly. AI assistance helped resolve these issues efficiently.

## Future Enhancements

* Multiple coupon support
* Invoice PDF generation
* Database integration
* User authentication
* Billing history
