const productPromise = fetch('https://dummyjson.com/products')

productPromise
  .then(res => res.json())
  .then(data => {
    data.products.forEach(item => {

      console.log("TITLE:", item.title);

      if (item.reviews) {
        item.reviews.forEach(review => {
          console.log("EMAIL:", review.reviewerEmail);
        });
      }

    });
  });


  console.log("********************")

const productPromiseOne = fetch('https://dummyjson.com/products')

productPromiseOne
  .then(res => res.json())
  .then(data => {
    data.products.forEach(item => {
        item.reviews.forEach(review =>{
            console.log("********* :",  review.reviewerEmail);
        })
         
      });

    });
  

