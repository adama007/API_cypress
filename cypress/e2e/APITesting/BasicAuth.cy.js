describe("Authentification",()=>{
    it("Basic Authentification",()=>{
        cy.request({

            method:"GET",
            url:"https://postman-echo.com/basic-auth",
            auth:{

                user:'postman',
                pass:'password'
            }

            })
            .then((response)=>{

                expect(response.status).to.eql(200)
                expect(response.body.authenticated).to.eql(true)


        })



    })

    it("Digest Authentification",()=>{
        cy.request({

            method:"GET",
            url:"https://postman-echo.com/basic-auth",
            auth:{

                user:'postman',
                pass:'password',
                method:'degest'
            }

            })
            .then((response)=>{

                expect(response.status).to.eql(200)
                expect(response.body.authenticated).to.eql(true)


        })



    })

    const token ="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"

    it("Token Authentification",()=>{
        cy.request({

            method:"GET",
            url:"https://api.github.com/user/repos",
            headers:{'content-Type':'application/json ', 
            'Authorization':"Bearer "+token 
                }   ,  

            })
            .then((response)=>{

                expect(response.status).to.eql(200)


        })



    })


})