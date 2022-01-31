/// <reference types="cypress" />

import Chance from 'chance';
import { createYield } from 'typescript';
const chance = new Chance();

describe('PocketCoach', () => {

    const email = 'john@test.ie';
    const pass = 'Tallaght1';




    beforeEach(() => {

        cy.visit('http://localhost:8100')
    })

    // Test 1

    // it('app loads up', () => {

    //     cy.contains('PocketCoach');
    // });


    // // Test 2

    
    const testEmail = 'Tony@test.ie'
    const testPassword = "Tallaght1"
    const firstName = 'Tony';
    const surname = 'Smith';
    const displayName = "TSmith";
    const age = 50;
    const country = 'England';
    const city = 'London';


    // it('user can sign up', () => {

    //     cy.get('.button-clear.button-block > .button-inner').click();

    //     cy.get('input[formControlName=firstName]').type(firstName);
    //     cy.get('input[formControlName=surname]').type(surname);
    //     cy.get('input[formControlName=displayName]').type(displayName);
    //     cy.get('input[placeholder=Email]').type(testEmail);
    //     cy.get('input[name=password]').type(testPassword);
    //     cy.get('input[formControlName=age]').type(age);
    //     cy.get('input[formControlName=country]').type(country);
    //     cy.get('input[formControlName=city]').type(city);
    //     cy.get('[padding=""] > .button > .button-inner').click();

    //     cy.wait(10000);

    //     cy.contains('Login');

    // });

    // // Test 3


    // it('user can log in', () => {

    //     cy.get('input[formControlName=email]').type(testEmail);
    //     cy.get('input[formControlName=password]').type(testPassword);
    //     cy.get('.loginBtn > .button-inner').click();

    //     cy.contains('Journal');


    // });



    // // Test 4


    // it('user can log out', () => {

    //     cy.get('input[formControlName=email]').type(testEmail);
    //     cy.get('input[formControlName=password]').type(testPassword);
    //     cy.get('.loginBtn > .button-inner').click();

    //     cy.contains('Journal');

    //     cy.wait(6000);
    //     cy.get('.bar-button-menutoggle').click();
    //     cy.get('.button > .button-inner').click();
    //     cy.contains('PocketCoach');



    // });

    // // Test 5


    // it('user can add food', () => {

    //     cy.get('input[formControlName=email]').type(testEmail);
    //     cy.get('input[formControlName=password]').type(testPassword);
    //     cy.get('.loginBtn > .button-inner').click();

    //     cy.contains('Journal');

    //     cy.wait(5000);
    //     cy.get(':nth-child(5) > .bar-button').click();
    //     cy.get('#Breakfast > .card-title > b').click();
        
    //     // cy.get('.searchbar-input').type('pizza');
    //     cy.get('.searchbar-input').type('pizza').trigger('search');
    //     cy.wait(1000);
    //     cy.get(':nth-child(1) > .row > :nth-child(1) > h2 > b').click();
    //     cy.get('page-food-details.ion-page > .header > .toolbar > .bar-buttons > .bar-button').click();
    //     cy.contains('pizza');


    // });


 

    // // Test 6

    //     var currentWeight = 100;
    //     var goalWeight = 90;
    //     var height = 185;
    //     var weeklyGoal = 1;


    //     it('user can edit goals', () => {

    //     cy.get('input[formControlName=email]').type(testEmail);
    //     cy.get('input[formControlName=password]').type(testPassword);
    //     cy.get('.loginBtn > .button-inner').click();

    //     cy.contains('Journal');

    //     cy.wait(5000);
    //     cy.get('.bar-button-menutoggle').click();
    //     cy.wait(2000);
    //     cy.get(':nth-child(4) > .item-inner > .input-wrapper').click();
    //     cy.get(':nth-child(1) > .card-header > .personal').click();


    //     cy.get('input[name=currentWeight]').clear()  
    //     cy.get('input[name=currentWeight]').type(currentWeight);
    //     cy.get('input[name=goalWeight]').clear()  
    //     cy.get('input[name=goalWeight]').type(goalWeight);
    //     cy.get('input[name=height]').clear()  
    //     cy.get('input[name=height]').type(height);
    //     cy.get('input[name=weeklyGoal]').clear()  
    //     cy.get('input[name=weeklyGoal]').type(weeklyGoal);

    //     cy.get('#select-22-0 > .button-inner').click();
    //     cy.get('#alert-input-0-1 > .button-inner > .alert-radio-icon').click();
    //     cy.get('.alert-button-group > :nth-child(2) > .button-inner').click();

    //     cy.get('#select-23-0 > .button-inner').click();
    //     cy.get('#alert-input-1-0 > .button-inner > .alert-radio-icon').click();
    //     cy.get('.alert-button-group > :nth-child(2) > .button-inner').click();
    //     cy.get('.floating > .button > .button-inner').click();

    //     cy.contains('Personal Goals');

            

    // });

    // // Test 7

    
    // it('user can view trainer details', () => {

    //     cy.get('input[formControlName=email]').type(testEmail);
    //     cy.get('input[formControlName=password]').type(testPassword);
    //     cy.get('.loginBtn > .button-inner').click();

    //     cy.wait(5000);
    //     cy.get('.bar-button-menutoggle').click();
    //     cy.wait(2000);
    //     cy.get(':nth-child(5) > .item-inner > .input-wrapper').click();
    //     cy.wait(2000);
    //     cy.get('.trainer-card > [src="../assets/imgs/person.jpg"]').click();
    //     cy.contains("Personal Info");

    // });

    // // Test 8

    // it('user can assign trainer', () => {

    //     cy.get('input[formControlName=email]').type(testEmail);
    //     cy.get('input[formControlName=password]').type(testPassword);
    //     cy.get('.loginBtn > .button-inner').click();

    //     cy.wait(5000);
    //     cy.get('.bar-button-menutoggle').click();
    //     cy.wait(2000);
    //     cy.get(':nth-child(5) > .item-inner > .input-wrapper').click();
    //     cy.wait(2000);
    //     cy.get('.trainer-card > [src="../assets/imgs/person.jpg"]').click();
    //     cy.get('.user-profile > .button > .button-inner').click();
    //     cy.wait(2000);
    //     cy.get('.list > .button > .button-inner').click();
    //     cy.wait(2000);
    //     cy.contains("Payment Confirmed");
        

    // });

    // // Test 9

    //     var messageContent = "This is an E2E Test"
    
    //     it('user can send message', () => {

    //     cy.get('input[formControlName=email]').type(testEmail);
    //     cy.get('input[formControlName=password]').type(testPassword);
    //     cy.get('.loginBtn > .button-inner').click();

    //     cy.contains('Journal');

    //     cy.wait(5000);
    //     cy.get('.bar-button-menutoggle').click();
    //     cy.wait(2000);
    //     cy.get(':nth-child(6) > .item-inner > .input-wrapper').click();
    //     cy.wait(2000);
    //     cy.get(':nth-child(2) > :nth-child(2) > .card > img').click();
    //     cy.get('input[name=message]').type(messageContent);
    //     cy.get('.custom-form > .bar-buttons > .bar-button').click();
    //     cy.contains("This is an E2E Test");

    // });




    // // Test 10
    //     var title = 'Upper Body';
    //     var notes = 'Back and Biceps'
    
    //     it('user can schedule appointment', () => {

    //     cy.get('input[formControlName=email]').type(testEmail);
    //     cy.get('input[formControlName=password]').type(testPassword);
    //     cy.get('.loginBtn > .button-inner').click();

    //     cy.wait(5000);
    //     cy.get('.bar-button-menutoggle').click();
    //     cy.wait(2000);
    //     cy.get(':nth-child(6) > .item-inner > .input-wrapper').click();
    //     cy.wait(2000);
    //     cy.get(':nth-child(2) > :nth-child(1) > .card > img').click();
    //     cy.get('[col-9=""] > .button > .button-inner').click();

    //     cy.wait(2000);
    //     cy.get(':nth-child(1) > .item-inner > .input-wrapper > .input > .text-input').type(title);
    //     cy.get('.item-textarea > .item-inner > .input-wrapper > .input > .text-input').type(notes);
    //     cy.get('#datetime-24-0 > .button-inner').click();
    //     cy.get(':nth-child(2) > .picker-button > .button-inner').click();
    //     cy.get('#datetime-25-0 > .button-inner').click();
    //     cy.get(':nth-child(2) > .picker-button > .button-inner').click();
    //     cy.get('#select-19-0 > .button-inner').click();
    //     cy.get('#alert-input-0-1 > .button-inner > .alert-radio-icon').click();
    //     cy.get('.alert-button-group > :nth-child(2) > .button-inner').click();
    //     cy.get('.list > .button > .button-inner').click();

    //     cy.contains("Flyfit");


    // });


    // Test 11
    // it('sign up with invalid age', () => {

    //     cy.get('.button-clear.button-block > .button-inner').click();

    //     cy.get('input[formControlName=firstName]').type(firstName);
    //     cy.get('input[formControlName=surname]').type(surname);
    //     cy.get('input[formControlName=displayName]').type(displayName);
    //     cy.get('input[placeholder=Email]').type(testEmail);
    //     cy.get('input[name=password]').type(testPassword);
    //     cy.get('input[formControlName=age]').type(-1);
    //     cy.get('input[formControlName=country]').type(country);
    //     cy.get('input[formControlName=city]').type(city);
    //     cy.get('[padding=""] > .button > .button-inner').click();

    //     cy.wait(10000);

    //     cy.contains('Login');

    // });


    //    // Test 12
    //    it('add food with invalid field', () => {

    //     cy.get('input[formControlName=email]').type(testEmail);
    //     cy.get('input[formControlName=password]').type(testPassword);
    //     cy.get('.loginBtn > .button-inner').click();

    //     cy.contains('Journal');

    //     cy.wait(5000);
    //     cy.get(':nth-child(5) > .bar-button').click();
    //     cy.get('#Breakfast > .card-title > b').click();
        
    //     // cy.get('.searchbar-input').type('pizza');
    //     cy.get('.searchbar-input').type('pizza').trigger('search');
    //     cy.wait(1000);
    //     cy.get(':nth-child(1) > .row > :nth-child(1) > h2 > b').click();
    //     cy.get('page-food-details.ion-page > .header > .toolbar > .bar-buttons > .bar-button').click();
    //     cy.contains('pizza');


    // });


    // 13

    var wrongEmail = "test@test.ie";
    var password = "test";
    it('log in with wrong details', () => {

        cy.get('input[formControlName=email]').type(wrongEmail);
        cy.get('input[formControlName=password]').type(password);
        cy.get('.loginBtn > .button-inner').click();

        cy.contains('Journal');


    });


  

})