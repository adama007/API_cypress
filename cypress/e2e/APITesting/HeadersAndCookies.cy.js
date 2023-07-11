describe('API testing',()=> {






    let authToken=null;

    before('creating access token',()=>{
        cy.request({
            method:'POST',
            url:'https://simple-books-api.glitch.me/api-clients/',
            headers:{'content-Type':'application/json '},
            body:{
                clientName : "Test",
                clientEmail  : Math.random().toString(10).substring(2)+"@gmail.com"
            }

        }).then((response)=>{
            authToken=response.body.accessToken;
        })
    })

    it('creating new  order',()=>{
        cy.log(authToken)

        cy.request({
            method:'POST',
            url:'https://simple-books-api.glitch.me/orders/',
            headers:{'content-Type':'application/json ', 
                        'Authorization':"Bearer "+authToken 
        },
            body:{
                bookId:1,
                customrName:"xyzzdzdzr"
            }

        }).then((response)=>{
            expect(response.status).to.eq(201) ;
            expect(response.body.created).to.eql(true);
        })
    })

    it('fetchiong order',()=>{
        cy.log(authToken)

        cy.request({
            method:'GET',
            url:'https://simple-books-api.glitch.me/orders/',
            headers:{'content-Type':'application/json ', 
                        'Authorization':"Bearer "+authToken 
        },
        cookies:{
            cookieName:'mycookie'
        },


        }).then((response)=>{
            expect(response.status).to.eq(200) ;
        })
    })
 

})