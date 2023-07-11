

const param ={ page: 2 };

it("GET PARM Call", () => {
    cy.request({
        method: 'GET',
        url:'https://reqres.in/api/users',
        qs:param
        
    }).then((response)=>{
        expect(response.status).to.eql(200)
        expect(response.status).equal(200)
        expect(response.body.page).equal(2)
        expect(response.body.data).has.length(6)
        expect(response.body.data[0].id).to.eql(7)
        expect(response.body.data[0]).has.property("first_name","Michael")




    })     
    });