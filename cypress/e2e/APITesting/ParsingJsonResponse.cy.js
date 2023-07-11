describe("Parsing JsonResponse",()=>{

    it("Parsing simple JSON response",()=>{
        let price=0
        cy.request({


            method:'GET',
            url:"https://fakestoreapi.com/products",
            qs:{limit:5}

        }).then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body[0].id).to.eql(1)
            response.body.forEach(element => { //parcourir chaque objet pour faire la somme

                price=price + element.price;
                
            });
            expect(price).to.equal(899.23);
       

        })       
  
    })


})