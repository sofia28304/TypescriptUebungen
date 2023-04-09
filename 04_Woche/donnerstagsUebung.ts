//Aufg. 1
interface Product {
    name: string;
    productId: number;
    imageId?: number;
}
interface Image {
    imageUrl: string;
    imageData: string;
    altText: string;
}

interface Products {
    [productId: number]: Product;
  }
  
  interface Images {
    [imageId: number]: Image;
  }
  //Die Interfaces ProductS und ImageS stehen für die Dictionary-Objekte (die Umgebenden Objekte), während die Interfaces Image und Product für die Objekte auf der inneren, der tiefsten Ebene stehen. 
  
  const images: Images = {
    1: {
      imageUrl: "https://testImages.com/book",
      imageData: "This is a Book",
      altText: "Sorry could not load this book",
    },
    2: {
      imageUrl: "https://testImages.com/cd",
      imageData: "This is a CD",
      altText: "Sorry could not load this cd",
    },
    4: {
      imageUrl: "https://testImages.com/calculator",
      imageData: "This is a Calculator",
      altText: "Sorry could not laod this Calculator",
    },
  };
  
  const products: Products = {
    10: {
      name: "book",
      productId: 10,
      imageId: 1,
    },
    11: {
      name: "cd",
      productId: 11,
      imageId: 2,
    },
    12: {
      name: "laptop",
      productId: 12,
    },
    13: {
      name: "calculator",
      productId: 13,
      imageId: 4,
    },
  };

//Aufg. 2

type ProductImage = Product & Image

function generateProducts(ids: number[]): (Product | ProductImage)[] {
  const productsArr: (Product | ProductImage)[] = [];

  ids.forEach((id) => {
    const product = products[id];

    if (product) {
      const { name, productId, imageId } = product;
      const image = images[imageId];

      if (image) {
        const { imageUrl, imageData, altText } = image;
        const productImage: ProductImage = {
          name,
          productId,
          imageId,
          imageUrl,
          imageData,
          altText,
        };
        productsArr.push(productImage);
      } else {
        productsArr.push(product);
      }
    }
  });

  return productsArr;
}

//Aufg. 3
interface Order {
    orderNumber: number;
    amount: number;
    productId: number[];
}
//Falls pro Order nur eine ProduktId übermittelt werden soll, dann kann man   productIds: number; ohne die Array-Klammern schreiben.

interface Paypal {
email: string
}
interface Kreditkarte {
ccn: number
}

type CreditCardOrder = Order & Kreditkarte
type PayPalOrder = Order & Paypal

//Aufg. 4

function processCreditCardOrder(order: CreditCardOrder): void {
    console.log("Contacting Credit Card Company for Order ", order);
  }
  
  function processPaypalOrder(order: PayPalOrder): void {
    console.log("Contacting PayPal for Order ", order);
  }
  
  function isCreditCardOrder(order: CreditCardOrder | PayPalOrder): order is CreditCardOrder {
   return "ccn" in (order as CreditCardOrder);
  };

  function processOrders(
  orders: (CreditCardOrder | PayPalOrder)[],
  ccProcessor: (order: CreditCardOrder) => void,
  paypalProcessor: (order: PayPalOrder) => void
): void {
  orders.forEach((order) => {
    if (isCreditCardOrder(order)) {
      ccProcessor(order);
    } else {
      paypalProcessor(order);
    }
  });
}


export {}