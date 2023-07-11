



    it("Approach1-Hard coded json object",()=>{

        const requestbody={
                tourist_name:"MIKE",
                tourist_email:"jhonsdzzd@gmail.com",
                tourist_location:"paris"
        }

        cy.request({
            method:'POST',
            url:'http://restapi.adequateshop.com/api/Tourist',
            body: requestbody

        }).then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq("MIKE")
            expect(response.body.tourist_email).to.eq("jhonsdzzd@gmail.com")
            expect(response.body.tourist_location).to.eq("paris")
            id=response.body.id

        })
    })

    it("Approach-2-Dynamically coded json object",()=>{

        const requestbody={
                tourist_name:Math.random().toString(36).substring(2),
                tourist_email:Math.random().toString(36).substring(2)+"@gmail.com",
                tourist_location:"paris"
        }

        cy.request({
            method:'POST',
            url:'http://restapi.adequateshop.com/api/Tourist',
            body: requestbody

        }).then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq(requestbody.tourist_name)
            expect(response.body.tourist_email).to.eq(requestbody.tourist_email)
            expect(response.body.tourist_location).to.eq(requestbody.tourist_location)
            cy.log(response.body.tourist_name)
            cy.log(response.body.tourist_email)
            cy.log(response.body.tourist_location)
            cy.log(response.body.id)

        })
    })



    it.only("Approach-2-using Fixture ",()=>{

       cy.fixture('tourist').then((data)=>{

        const requestbody=data;
         
         
       
       

        cy.request({
            method:'POST',
            url:'http://restapi.adequateshop.com/api/Tourist',
            body: requestbody

        })
        .then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq(requestbody.tourist_name)
            expect(response.body.tourist_email).to.eq(requestbody.tourist_email)
            expect(response.body.tourist_location).to.eq(requestbody.tourist_location)
            cy.log(response.body.tourist_name)
            cy.log(response.body.tourist_email)
            cy.log(response.body.tourist_location)
            cy.log(response.body.id)
            expect(response.body).has.property('tourist_email',requestbody.tourist_email)
            expect(response.body).to.have.property('tourist_email',requestbody.tourist_email)
        })
    })



})